// Markdown twin of every page, for AI agents. src/proxy.ts rewrites requests
// whose Accept header prefers text/markdown (and *.md URLs) to this handler.
import { AGENT_MD_PATH_HEADER, markdownForPath, notFoundMarkdown } from "@/lib/agent-markdown";

export const dynamic = "force-dynamic";


const HEADERS = {
  "content-type": "text/markdown; charset=utf-8",
  vary: "Accept",
  "cache-control": "public, max-age=0, must-revalidate",
  "x-robots-tag": "noindex",
};

function respond(request: Request, path: string[] | undefined, head: boolean) {
  const url = new URL(request.url);
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? url.host;
  const proto = request.headers.get("x-forwarded-proto") ?? url.protocol.replace(":", "");
  const original = request.headers.get(AGENT_MD_PATH_HEADER) ?? `/${(path ?? []).join("/")}`;
  const publicUrl = new URL(original, `${proto}://${host}`);

  const md = markdownForPath(original.replace(/\.md$/, "").replace(/\/+$/, "") || "/");
  const body = md ?? notFoundMarkdown(publicUrl);
  return new Response(head ? null : body, { status: md ? 200 : 404, headers: HEADERS });
}

export async function GET(request: Request, ctx: RouteContext<"/agent-md/[[...path]]">) {
  const { path } = await ctx.params;
  return respond(request, path, false);
}

export async function HEAD(request: Request, ctx: RouteContext<"/agent-md/[[...path]]">) {
  const { path } = await ctx.params;
  return respond(request, path, true);
}
