// Markdown versions of every public page, served to AI agents that send
// `Accept: text/markdown` (see src/proxy.ts and src/app/agent-md/).
// Built from the same data the HTML pages render, so the two never drift.
import { blogPosts, getBlogPost } from "./blog";
import { homeShowcase, services, teamMembers, testimonials, navigation } from "./data";
import { LOCATIONS, CITY_SLUGS, type LocationConfig, type LocationSlug } from "./locations";
import { business, SITE_URL } from "./site";
import { trustPages, type TrustPage } from "./trust-pages";
import { CITY_PAGES, isCityPageSlug, PHONE_DISPLAY, type CityPageContent } from "./city-pages";

const plain = (s: string) => s.replace(/\n/g, " ");

function contactBlock(): string {
  return [
    "## Contact",
    "",
    `- Inquiry form (fastest way to get a quote): ${business.inquiryUrl}`,
    `- Email: ${business.email}`,
    `- Phone: ${business.phoneDisplay}`,
    `- Brandon HQ: ${business.hq.full}`,
    `- Winnipeg: ${business.winnipeg.full}`,
    `- Hours: ${business.hours}`,
    `- Service area: ${business.serviceArea}`,
  ].join("\n");
}

function pagesBlock(): string {
  const pages = [
    ...navigation.map((n) => ({ label: n.label, path: n.href })),
    ...CITY_SLUGS.map((s) => ({ label: `DJ service in ${LOCATIONS[s].city}`, path: `/dj-service/${s}` })),
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Privacy policy", path: "/privacy" },
  ];
  return [
    "## Pages",
    "",
    ...pages.map((p) => `- [${p.label}](${SITE_URL}${p.path === "/" ? "" : p.path})`),
    `- [Site guide for AI agents](${SITE_URL}/llms.txt)`,
  ].join("\n");
}

function faqBlock(loc: LocationConfig): string {
  return [
    "## Frequently asked questions",
    "",
    ...loc.faqs.flatMap((f) => [`### ${f.question}`, "", f.answer, ""]),
  ].join("\n").trimEnd();
}

function homeMarkdown(): string {
  const loc = LOCATIONS.generic;
  return [
    "# Trident Music: wedding and event DJs in Manitoba and Saskatchewan",
    "",
    `> ${loc.seo.description} A division of [Trident Event Group](${business.parent.url}).`,
    "",
    `${loc.hero.label}`,
    "",
    "**For those celebrations you can never forget.** " + loc.hero.subtitle,
    "",
    `[Let's get your party started](${business.inquiryUrl})`,
    "",
    "> “A little party never killed nobody” — F. Scott Fitzgerald",
    "",
    ...homeShowcase.flatMap((s) => [
      `## ${plain(s.heading)}`,
      "",
      `*${s.label}*`,
      "",
      s.body ?? loc.about.copy[s.aboutCopyIndex ?? 0],
      "",
    ]),
    "## Our services: everything your event needs",
    "",
    ...services.map((s) => `- ${s.title}`),
    "",
    `Every booking includes a dedicated DJ/MC, a sound system sized for the room, lighting, a music consultation before the event, and coordination on the day. Pricing is a custom quote per event; travel is included in the quote. Request a quote at ${business.inquiryUrl}.`,
    "",
    "## The people: a team that actually loves doing this",
    "",
    ...teamMembers.map((m) => `- ${m.name} — ${m.role}`),
    "",
    `Full team: ${SITE_URL}/the-team`,
    "",
    "## Straight from our clients",
    "",
    ...testimonials.flatMap((t) => [`> ${t.text}`, ">", `> — ${t.name}, ${t.role}`, ""]),
    `## ${loc.cta.heading}`,
    "",
    loc.cta.subtext,
    "",
    `[Tell us about your event](${business.inquiryUrl})`,
    "",
    "## Where we work",
    "",
    ...CITY_SLUGS.map((s) => `- [${LOCATIONS[s].city}, ${LOCATIONS[s].province}](${SITE_URL}/dj-service/${s}) — ${LOCATIONS[s].region}`),
    "",
    faqBlock(loc),
    "",
    contactBlock(),
    "",
    pagesBlock(),
  ].join("\n");
}

/** Markdown twin of the Brandon/Winnipeg landing pages (same content as the HTML). */
function cityLandingMarkdown(page: CityPageContent): string {
  return [
    `# ${page.h1}`,
    "",
    `${page.answer} Book by calling ${PHONE_DISPLAY} or through the inquiry form: ${business.inquiryUrl}`,
    "",
    "## At a glance",
    "",
    ...page.glance.map((g) => `- **${g.label}:** ${g.text}`),
    "",
    `## ${page.packagesHeading}`,
    "",
    page.packagesIntro,
    "",
    "| Package | Coverage | What's included | Starting price |",
    "|---|---|---|---|",
    ...page.packages.map((p) => `| ${p.name} | ${p.coverage} | ${p.included} | ${p.price} |`),
    "",
    page.packagesNote,
    "",
    `## ${page.venuesHeading}`,
    "",
    page.venuesIntro,
    "",
    ...page.venues.flatMap((v) => [`### ${v.name}`, "", v.body, ""]),
    page.venuesAlso,
    "",
    `## ${page.areaHeading}`,
    "",
    ...page.areaCopy.flatMap((p) => [p, ""]),
    `### ${page.travelHeading}`,
    "",
    ...page.travel.map((t) => `- ${t.place}: ${t.time}`),
    "",
    page.travelNote,
    "",
    `## ${page.processHeading}`,
    "",
    ...page.process.flatMap((p) => [p, ""]),
    `## ${page.faqHeading}`,
    "",
    ...page.faqs.flatMap((f) => [`### ${f.question}`, "", f.answer, ""]),
    `${page.otherCity.before}[${page.otherCity.anchor}](${SITE_URL}${page.otherCity.href})${page.otherCity.after}`,
    "",
    "## More reading",
    "",
    ...page.reading.map((r) => `- [${r.label}](${SITE_URL}${r.href})`),
    "",
    `## ${page.ctaHeading}`,
    "",
    page.ctaText,
    "",
    `[Start your inquiry](${business.inquiryUrl})`,
    "",
    page.contactLine,
    "",
    pagesBlock(),
  ].join("\n");
}

function cityMarkdown(slug: LocationSlug): string {
  if (isCityPageSlug(slug)) return cityLandingMarkdown(CITY_PAGES[slug]);
  const loc = LOCATIONS[slug];
  return [
    `# ${loc.city}'s premier wedding & event DJ service`,
    "",
    `> ${loc.seo.description}`,
    "",
    loc.hero.subtitle,
    "",
    `## ${loc.about.heading}`,
    "",
    ...loc.about.copy.flatMap((p) => [p, ""]),
    `## Our services in ${loc.city}`,
    "",
    ...services.map((s) => `- ${s.title}`),
    "",
    faqBlock(loc),
    "",
    `## ${loc.cta.heading}`,
    "",
    loc.cta.subtext,
    "",
    `[Inquire now](${business.inquiryUrl})`,
    "",
    `Address: ${loc.address.full}${loc.hasLocalOffice ? "" : ` (serving ${loc.city} from our Brandon headquarters)`}. Hours: Mon–Fri, 9 AM–4 PM.`,
    "",
    contactBlock(),
    "",
    pagesBlock(),
  ].join("\n");
}

function teamMarkdown(): string {
  return [
    "# For the time of your life",
    "",
    "We don’t just play music. We read the room, build the energy, and give your guests a night worth remembering.",
    "",
    "## Our story",
    "",
    "Most DJ companies hand you a playlist form and show up day-of. We started doing this because we genuinely love it — the moment a room shifts from polite conversation to a packed dance floor, the look on a couple’s face when their first song hits, the uncle who hasn’t danced in twenty years suddenly out there doing his thing. We built Trident around chasing that feeling, and we hired people who are just as obsessed with it as we are.",
    "",
    "## The people",
    "",
    ...teamMembers.map((m) => `- **${m.name}** — ${m.role}`),
    "",
    contactBlock(),
    "",
    pagesBlock(),
  ].join("\n");
}

function inquireMarkdown(): string {
  return [
    "# Tell us everything",
    "",
    "Your date, your venue, the vibe you’re going for, whether your grandma has a song request — all of it. We’ll take it from there.",
    "",
    "## How to request a quote",
    "",
    `The inquiry form on ${business.inquiryUrl} is an embedded web form (https://forms.tridenteventgroup.ca/forms/trident-music-everything-form-jktyhf). It asks for your contact details, event date, venue, event type, and the services you want. We reply within 24 hours with a custom quote.`,
    "",
    `If you cannot use the form, email ${business.email} with the same details, or call ${business.phoneDisplay} (${business.hours}).`,
    "",
    contactBlock(),
    "",
    pagesBlock(),
  ].join("\n");
}

function blogIndexMarkdown(): string {
  return [
    "# Notes from the dance floor",
    "",
    "Real advice from hundreds of weddings, socials, and late nights across Manitoba and Saskatchewan.",
    "",
    ...blogPosts.map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}) (${p.category}) — ${p.excerpt}`),
    "",
    pagesBlock(),
  ].join("\n");
}

function blogPostMarkdown(slug: string): string | null {
  const post = getBlogPost(slug);
  if (!post) return null;
  return [
    `# ${post.title}`,
    "",
    `> ${post.excerpt}`,
    "",
    `Category: ${post.category}`,
    "",
    ...post.content.flatMap((p) => [p, ""]),
    `Get a quote: ${business.inquiryUrl}`,
    "",
    `More articles: ${SITE_URL}/blog`,
  ].join("\n");
}

function podcastMarkdown(): string {
  return [
    "# For The Record",
    "",
    "Conversations worth remembering.",
    "",
    "Hosted by Rhoni Mohanraj and Joey Simms, For the Record takes you behind the scenes of the event world and pop culture. We dive into the artistry, culture, and unforgettable stories that make events extraordinary — with humor, insight, and bold hot takes in every episode.",
    "",
    "- Listen on Spotify: https://open.spotify.com/show/5VzFvh1JlEhBMS6ZHZ8SNV",
    "- Watch on YouTube: https://www.youtube.com/@tridenteventgroup",
    "",
    "## Be part of the conversation",
    "",
    `- **Be a guest** — Have a story, insight, or experience worth sharing? We’re always looking for guests with something to say — about events, culture, business, or life. Apply: ${business.inquiryUrl}`,
    `- **Got a question or story?** — Wedding advice, event planning tips, or something you’ve always been curious about. Submit yours: ${business.inquiryUrl}`,
    "- **Merch** — Podcast merch is coming soon.",
    "",
    "## Want to produce your own show?",
    "",
    `We offer full podcast production and distribution services. Get in touch: ${business.inquiryUrl}`,
    "",
    pagesBlock(),
  ].join("\n");
}

function trustMarkdown(page: TrustPage): string {
  return [
    `# ${page.title}`,
    "",
    page.intro,
    "",
    ...page.sections.flatMap((s) => [
      `## ${s.heading}`,
      "",
      ...(s.body ?? []).flatMap((p) => [p, ""]),
      ...(s.items ?? []).map((i) => {
        const href = i.href?.startsWith("/") ? `${SITE_URL}${i.href}` : i.href;
        if (!i.value) return href ? `- [${i.label}](${href})` : `- ${i.label}`;
        return `- ${i.label}: ${i.value}`;
      }),
      ...(s.items?.length ? [""] : []),
    ]),
    pagesBlock(),
  ].join("\n");
}

/** Markdown for a site path (no trailing slash, "/" for home), or null if unknown. */
export function markdownForPath(path: string): string | null {
  const parts = path.split("/").filter(Boolean);
  if (parts.length === 0 || (parts.length === 1 && parts[0] === "index")) return homeMarkdown();
  const [first, second, ...rest] = parts;
  if (rest.length) return null;
  if (!second) {
    switch (first) {
      case "the-team":
        return teamMarkdown();
      case "inquire":
        return inquireMarkdown();
      case "blog":
        return blogIndexMarkdown();
      case "podcast":
        return podcastMarkdown();
      case "about":
      case "contact":
      case "privacy":
        return trustMarkdown(trustPages[first]);
      default:
        return null;
    }
  }
  if (first === "blog") return blogPostMarkdown(second);
  if (first === "dj-service" && CITY_SLUGS.includes(second as LocationSlug)) {
    return cityMarkdown(second as LocationSlug);
  }
  return null;
}

/** Agent-facing 404 body (same wording as the shared static-site middleware). */
export function notFoundMarkdown(url: URL): string {
  return `# 404 — Page not found

There is no page at \`${url.pathname}\` on ${url.host}.

- Homepage (Markdown): ${url.origin}/index.md
- Site guide for AI agents: ${url.origin}/llms.txt
- All pages: ${url.origin}/sitemap.xml
`;
}

/** Request header the proxy uses to pass the original path to the Markdown route. */
export const AGENT_MD_PATH_HEADER = "x-agent-md-path";
