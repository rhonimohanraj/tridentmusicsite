// Node-only startup hook; see instrumentation-node.ts for why HTML responses
// need Vary: Accept. Loaded with a synchronous require behind the runtime check
// so the patch is applied before the first request (the host may not await
// register() on a cold start) and Node APIs stay out of the Edge bundle.
export function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { addAcceptToVary } = require("./instrumentation-node") as typeof import("./instrumentation-node");
    addAcceptToVary();
  }
}
