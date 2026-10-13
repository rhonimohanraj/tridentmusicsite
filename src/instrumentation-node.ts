// HTML and Markdown share URLs on this site (src/proxy.ts serves Markdown to
// agents that send `Accept: text/markdown`), so every HTML response must carry
// `Vary: Accept` for caches to keep the two apart.
//
// App Router pages overwrite the Vary header at render time with
// AppPageRouteModule.getVaryHeader(), which replaces any Vary set in
// next.config headers() or by the proxy. We extend that method once at server
// start so the framework's own value is kept and "Accept" is appended.
// Verify after Next.js upgrades: `curl -sI -H 'Accept: text/html' <url>` must
// show Accept in Vary.
const PATCHED = Symbol.for("trident.varyAccept");

type VaryFn = (...args: unknown[]) => string;

// Synchronous on purpose: the hosting runtime may not await register() before
// the first request on a cold start, so the patch must be in place on return.
export function addAcceptToVary() {
  try {
    const nodeModule = process.getBuiltinModule?.("node:module") as typeof import("node:module") | undefined;
    if (!nodeModule) throw new Error("process.getBuiltinModule is unavailable (Node 22.3+ required)");
    const req = nodeModule.createRequire(`${process.cwd()}/package.json`);
    const mod = req("next/dist/server/route-modules/app-page/module.compiled") as {
      AppPageRouteModule?: { prototype: Record<string | symbol, unknown> };
    };
    const proto = mod.AppPageRouteModule?.prototype;
    if (!proto || proto[PATCHED] || typeof proto.getVaryHeader !== "function") return;
    const original = proto.getVaryHeader as VaryFn;
    proto.getVaryHeader = function (this: unknown, ...args: unknown[]) {
      const value = original.apply(this, args);
      return /(^|,)\s*accept\s*(,|$)/i.test(value) ? value : `${value}, Accept`;
    };
    proto[PATCHED] = true;
  } catch (error) {
    console.error("[instrumentation] could not add Accept to Vary:", error);
  }
}
