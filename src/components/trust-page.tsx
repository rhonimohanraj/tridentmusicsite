import Link from "next/link";
import type { TrustItem, TrustPage } from "@/lib/trust-pages";

function ItemLink({ item }: { item: TrustItem }) {
  const text = item.value || item.label;
  if (!item.href) return <>{text}</>;
  const external = /^https?:/.test(item.href);
  const className = "underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors";
  if (item.href.startsWith("/")) {
    return (
      <Link href={item.href} className={className}>
        {text}
      </Link>
    );
  }
  return (
    <a
      href={item.href}
      className={className}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {text}
    </a>
  );
}

// Server-rendered layout for About / Contact / Privacy, styled to match the
// city DJ-service pages (label + Playfair heading + muted body copy).
export function TrustPageView({ page }: { page: TrustPage }) {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            {page.label}
          </p>
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-playfair)] leading-[1.05] tracking-tight">
            {page.title}
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            {page.intro}
          </p>
        </div>
      </section>

      {page.sections.map((section) => (
        <section key={section.heading} className="py-12 md:py-16 px-6 md:px-12 border-t border-theme">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] leading-tight tracking-tight mb-4">
              {section.heading}
            </h2>
            {section.body?.map((p, i) => (
              <p key={i} className="mt-4 text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
            {section.items && (
              <ul className="mt-6 space-y-3">
                {section.items.map((item) => (
                  <li key={item.label} className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.value ? (
                      <>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/70 mr-3">
                          {item.label}
                        </span>
                        <ItemLink item={item} />
                      </>
                    ) : (
                      <ItemLink item={item} />
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      <section className="py-24 md:py-32 px-6 md:px-12 flex flex-col items-center text-center border-t border-theme">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Tell Us
        </p>
        <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-playfair)] tracking-tight">
          Got a date in mind?
        </h2>
        <Link
          href="/inquire"
          className="mt-8 inline-block bg-foreground text-background px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-foreground/90 transition-colors"
        >
          Tell Us About Your Event
        </Link>
      </section>
    </>
  );
}
