// Server component: the full Brandon/Winnipeg landing page. Everything here is
// plain server-rendered HTML (no client hooks), so crawlers that skip
// JavaScript (GPTBot, PerplexityBot, ClaudeBot) read the whole page.
import Image from "next/image";
import Link from "next/link";
import type { CityPageContent } from "@/lib/city-pages";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/city-pages";
import { business } from "@/lib/site";

const display = "font-[family-name:var(--font-playfair)] tracking-tight";
// Table cells stack on phones; the column name comes from data-label via CSS only.
const cellMobile =
  "block md:table-cell mt-1.5 md:mt-0 before:content-[attr(data-label)] before:inline-block before:w-20 before:text-xs before:text-foreground/60 md:before:content-none";

export function CityLanding({ page }: { page: CityPageContent }) {
  return (
    <>
      {/* Answer first: H1, direct answer, at-a-glance facts */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span>DJ service in {page.city}</span>
            </nav>
            <h1 className={`${display} text-4xl md:text-6xl leading-[1.05]`}>{page.h1}</h1>
            <p className="mt-8 text-base md:text-lg leading-relaxed max-w-2xl">
              {page.answer} Book by calling{" "}
              <a href={`tel:${PHONE_TEL}`} className="underline underline-offset-4">
                {PHONE_DISPLAY}
              </a>{" "}
              or through the{" "}
              <Link href="/inquire" className="underline underline-offset-4">
                inquiry form
              </Link>
              .
            </p>
            {/* Packages from $X TODO(rhoni): price. No published Trident price yet; the table says "Ask for a quote". */}
            <span hidden dangerouslySetInnerHTML={{ __html: "<!-- Packages from $X TODO(rhoni): price -->" }} />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/inquire"
                className="inline-block bg-foreground text-background px-7 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-foreground/90 transition-colors"
              >
                Get a quote
              </Link>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-block border border-foreground/30 px-7 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:border-foreground transition-colors"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>

            <h2 className={`${display} mt-14 text-2xl`}>At a glance</h2>
            <ul className="mt-4 border-t border-theme text-sm md:text-base">
              {page.glance.map((item) => (
                <li key={item.label} className="py-3 grid grid-cols-[7rem_1fr] md:grid-cols-[8.5rem_1fr] gap-4 border-b border-theme">
                  <strong className="font-medium">{item.label}</strong>
                  <span className="text-muted-foreground leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <figure className="lg:col-span-5 lg:pt-16">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={page.heroPhoto.src}
                alt={page.heroPhoto.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            {page.heroPhoto.caption && (
              <figcaption className="mt-3 text-xs text-muted-foreground">{page.heroPhoto.caption}</figcaption>
            )}
          </figure>
        </div>
      </section>

      {/* Packages table */}
      <section className="py-16 md:py-24 px-6 md:px-12 border-t border-theme">
        <div className="max-w-6xl mx-auto">
          <h2 className={`${display} text-3xl md:text-4xl`}>{page.packagesHeading}</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">{page.packagesIntro}</p>
          <div className="mt-10">
            <table className="w-full text-left text-sm border-collapse">
              <caption className="sr-only">Trident Music packages in {page.city}: coverage, inclusions and starting price</caption>
              <thead className="sr-only md:not-sr-only md:table-header-group">
                <tr className="border-b border-foreground/20">
                  <th scope="col" className="py-3 pr-6 font-medium">Package</th>
                  <th scope="col" className="py-3 pr-6 font-medium">Coverage</th>
                  <th scope="col" className="py-3 pr-6 font-medium">What&apos;s included</th>
                  <th scope="col" className="py-3 font-medium whitespace-nowrap">Starting price</th>
                </tr>
              </thead>
              <tbody>
                {page.packages.map((p) => (
                  <tr key={p.name} className="block md:table-row border-b border-theme align-top py-4 md:py-0">
                    <th scope="row" className={`${display} block md:table-cell md:py-4 pr-6 text-base font-normal`}>{p.name}</th>
                    <td data-label="Coverage" className={`${cellMobile} md:py-4 pr-6 text-muted-foreground`}>{p.coverage}</td>
                    <td data-label="Included" className={`${cellMobile} md:py-4 pr-6 text-muted-foreground leading-relaxed`}>{p.included}</td>
                    <td data-label="Price" className={`${cellMobile} md:py-4 md:whitespace-nowrap`}>
                      <Link href="/inquire" className="underline underline-offset-4">{p.price}</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-muted-foreground max-w-2xl">{page.packagesNote}</p>
        </div>
      </section>

      {/* Venues: sticky heading left, prose right */}
      <section className="py-20 md:py-28 px-6 md:px-12 border-t border-theme">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <h2 className={`${display} text-3xl md:text-4xl leading-tight`}>{page.venuesHeading}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{page.venuesIntro}</p>
            </div>
          </div>
          <div className="md:col-span-8 md:pl-8">
            {page.venues.map((v, i) => (
              <div key={v.name} className={i === 0 ? "" : "mt-9"}>
                <h3 className={`${display} text-xl md:text-2xl`}>{v.name}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed max-w-2xl">{v.body}</p>
              </div>
            ))}
            <p className="mt-10 leading-relaxed max-w-2xl">{page.venuesAlso}</p>
          </div>
        </div>
      </section>

      {/* Full-width photo */}
      <figure className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
            <Image
              src={page.featurePhoto.src}
              alt={page.featurePhoto.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          {page.featurePhoto.caption && (
            <figcaption className="mt-3 text-xs text-muted-foreground md:text-right">{page.featurePhoto.caption}</figcaption>
          )}
        </div>
      </figure>

      {/* Area + travel */}
      <section className="py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <h2 className={`${display} text-3xl md:text-4xl leading-tight`}>{page.areaHeading}</h2>
            {page.areaCopy.map((p, i) => (
              <p key={i} className="mt-5 text-muted-foreground leading-relaxed">{p}</p>
            ))}
          </div>
          <div className="lg:col-span-5 lg:pt-3">
            <h3 className={`${display} text-xl`}>{page.travelHeading}</h3>
            <dl className="mt-4 border-t border-theme text-sm">
              {page.travel.map((t) => (
                <div key={t.place} className="flex justify-between gap-6 py-2.5 border-b border-theme">
                  <dt>{t.place}</dt>
                  <dd className="text-muted-foreground text-right">{t.time}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs text-muted-foreground leading-relaxed">{page.travelNote}</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 px-6 md:px-12 border-t border-theme">
        <div className="max-w-2xl mx-auto">
          <h2 className={`${display} text-3xl`}>{page.processHeading}</h2>
          {page.process.map((p, i) => (
            <p key={i} className="mt-5 leading-relaxed text-muted-foreground">{p}</p>
          ))}
        </div>
      </section>

      {/* FAQ: answers are in the HTML whether or not a question is open */}
      <section className="py-20 md:py-28 px-6 md:px-12 border-t border-theme">
        <div className="max-w-3xl mx-auto">
          <h2 className={`${display} text-3xl md:text-4xl mb-8`}>{page.faqHeading}</h2>
          {page.faqs.map((faq, i) => (
            <details key={faq.question} className="group border-b border-theme py-5" open={i === 0}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-sm md:text-base font-medium pr-4">{faq.question}</h3>
                <span
                  aria-hidden="true"
                  className="text-muted-foreground text-lg flex-shrink-0 transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Other city, further reading, CTA, contact */}
      <section className="py-16 md:py-20 px-6 md:px-12 border-t border-theme">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-3">
            <h2 className={`${display} text-3xl md:text-5xl`}>{page.ctaHeading}</h2>
            <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">{page.ctaText}</p>
            <Link
              href="/inquire"
              className="mt-8 inline-block bg-foreground text-background px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-foreground/90 transition-colors"
            >
              Start your inquiry
            </Link>
            <p className="mt-10 text-sm leading-relaxed">
              {page.otherCity.before}
              <Link href={page.otherCity.href} className="underline underline-offset-4">
                {page.otherCity.anchor}
              </Link>
              {page.otherCity.after}
            </p>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-sm font-medium">More reading</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {page.reading.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="text-muted-foreground hover:text-foreground underline-offset-4 hover:underline">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="max-w-5xl mx-auto mt-14 text-xs text-muted-foreground">
          {page.contactLine.split(business.email)[0]}
          <a href={`mailto:${business.email}`} className="underline underline-offset-4">{business.email}</a>
          {page.contactLine.split(business.email)[1]}
        </p>
      </section>
    </>
  );
}
