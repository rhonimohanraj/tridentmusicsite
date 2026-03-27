import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { LOCATIONS, CITY_SLUGS } from "@/lib/locations";
import type { LocationSlug } from "@/lib/locations";
import type { Metadata } from "next";
import { services } from "@/lib/data";

interface Props {
  params: Promise<{ location: string }>;
}

export async function generateStaticParams() {
  return CITY_SLUGS.map((slug) => ({ location: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location: slug } = await params;
  if (!(slug in LOCATIONS)) return {};
  const loc = LOCATIONS[slug as LocationSlug];
  return {
    title: `DJ Service in ${loc.city} | Trident Music`,
    description: loc.seo.description,
    openGraph: {
      title: `DJ Service in ${loc.city} | Trident Music`,
      description: loc.seo.description,
    },
  };
}

export default async function DJServicePage({ params }: Props) {
  const { location: slug } = await params;
  if (!CITY_SLUGS.includes(slug as LocationSlug)) notFound();
  const loc = LOCATIONS[slug as LocationSlug];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end pb-16 md:pb-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={loc.heroImage}
            alt={`DJ service in ${loc.city}`}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="max-w-4xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            {loc.hero.label}
          </p>
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-playfair)] leading-[1.05] tracking-tight">
            {loc.city}&apos;s Premier Wedding
            <br />
            &amp; Event DJ Service
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            {loc.hero.subtitle}
          </p>
          <Link
            href="/inquire"
            className="mt-8 inline-block bg-foreground text-background px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-foreground/90 transition-colors"
          >
            Let&apos;s plan your event
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] leading-tight tracking-tight mb-6">
            {loc.about.heading}
          </h2>
          {loc.about.copy.map((p, i) => (
            <p
              key={i}
              className="mt-4 text-muted-foreground leading-relaxed"
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 px-6 md:px-12 border-t border-theme">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Our Services in {loc.city}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href="/inquire"
                className="group"
              >
                <div className="img-hover-scale relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <h3 className="text-base font-[family-name:var(--font-playfair)]">
                    {service.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors">
                    Inquire &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-28 px-6 md:px-12 border-t border-theme">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] tracking-tight mb-10">
            DJ Services in {loc.city}
          </h2>
          <div className="space-y-0">
            {loc.faqs.map((faq, i) => (
              <details
                key={i}
                className="group border-b border-theme py-5"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-sm md:text-base font-medium pr-4">
                    {faq.question}
                  </span>
                  <span className="text-muted-foreground text-lg flex-shrink-0 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 flex flex-col items-center text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Tell Us
        </p>
        <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] tracking-tight">
          {loc.cta.heading}
        </h2>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">
          {loc.cta.subtext}
        </p>
        <Link
          href="/inquire"
          className="mt-8 inline-block bg-foreground text-background px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-foreground/90 transition-colors"
        >
          Inquire Now
        </Link>
      </section>

      {/* Location info */}
      <section className="py-12 px-6 md:px-12 border-t border-theme">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            {loc.address.full}
          </p>
          {!loc.hasLocalOffice && (
            <p className="text-xs text-muted-foreground/60 mt-1">
              Serving {loc.city} from our Brandon headquarters
            </p>
          )}
          <p className="text-xs text-muted-foreground/50 mt-2">
            Mon &ndash; Fri, 9 AM &ndash; 4 PM
          </p>
        </div>
      </section>
    </>
  );
}
