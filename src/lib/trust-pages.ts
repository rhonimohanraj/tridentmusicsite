// Copy for the About, Contact, and Privacy pages. The HTML pages and their
// Markdown twins (src/lib/agent-markdown.ts) both render from this file.
import { business, SITE_URL } from "./site";
import { services, teamMembers } from "./data";
import { socialLinks } from "./data";

export interface TrustItem {
  label: string;
  value: string;
  href?: string;
}

export interface TrustSection {
  heading: string;
  body?: string[];
  items?: TrustItem[];
}

export interface TrustPage {
  slug: "about" | "contact" | "privacy";
  label: string;
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  sections: TrustSection[];
}

const djs = teamMembers.filter((m) => /DJ|MC/.test(m.role));

export const aboutPage: TrustPage = {
  slug: "about",
  label: "About Us",
  title: "The crew behind the dance floor",
  metaTitle: "About",
  description:
    "Trident Music is a wedding and event DJ company based in Brandon, Manitoba, with a team in Winnipeg and coverage across Regina and Saskatchewan. A division of Trident Event Group.",
  intro:
    "Trident Music is a DJ and event entertainment company for weddings, socials, corporate events, galas, graduations, and private celebrations across Manitoba and Saskatchewan. Our headquarters are in Brandon, we have a team in Winnipeg, and we take dates across Regina and Saskatchewan.",
  sections: [
    {
      heading: "Where we started",
      body: [
        "We started in a basement in Brandon with one speaker and a laptop. Brandon is where we cut our teeth, one basement party, one high school dance, one wedding at a time. Today we play venues across the Westman area, Winnipeg, and Regina, and we bring the same approach to every one of them.",
        "We built Trident around one moment: when a room shifts from polite conversation to a packed dance floor. Our DJs read the room and adjust on the fly instead of running a pre-set playlist, and every person on the crew has been trained and mentored before they take an event on their own.",
      ],
    },
    {
      heading: "What we do",
      body: [
        "Every booking includes a dedicated DJ/MC, a sound system sized for your room, lighting that sets the mood, a music consultation beforehand so we know your taste, must-plays, and do-not-plays, and coordination on the day. We bring backup equipment to every event. Each event gets a custom quote, and travel is included in that quote.",
      ],
      items: services.map((s) => ({ label: s.title, value: "", href: `${SITE_URL}/inquire` })),
    },
    {
      heading: "Who you will work with",
      body: [
        `Our hosts, DJs, and MCs include ${djs.map((m) => m.name).join(", ")}. Meet the full team, including our photobooth, content, and client relationship crew, on the team page.`,
      ],
      items: [{ label: "Meet the team", value: `${SITE_URL}/the-team`, href: `${SITE_URL}/the-team` }],
    },
    {
      heading: "Part of Trident Event Group",
      body: [
        "Trident Music is a division of Trident Event Group Inc., a Manitoba company. Our sister brands cover the rest of the day: Trident Films for videography, Trident Studios for photography, Trident Photobooths, and Roam Content for wedding and event social content.",
      ],
      items: [{ label: "Trident Event Group", value: business.parent.url, href: business.parent.url }],
    },
  ],
};

export const contactPage: TrustPage = {
  slug: "contact",
  label: "Contact",
  title: "Get in touch",
  metaTitle: "Contact",
  description:
    "Contact Trident Music for wedding and event DJ services in Brandon, Winnipeg, Regina, and across Manitoba and Saskatchewan. Email, phone, address, and inquiry form.",
  intro:
    "The fastest way to get a quote is the inquiry form. Tell us your date, your venue, and the vibe you are going for, and we will get back to you within 24 hours with a custom quote. You can also email or call us directly.",
  sections: [
    {
      heading: "Reach us",
      items: [
        { label: "Inquiry form", value: business.inquiryUrl, href: "/inquire" },
        { label: "Email", value: business.email, href: `mailto:${business.email}` },
        { label: "Phone", value: business.phoneDisplay, href: `tel:${business.phoneE164}` },
        { label: "Office hours", value: business.hours },
      ],
    },
    {
      heading: "Where we are",
      items: [
        { label: "Brandon headquarters", value: business.hq.full },
        { label: "Winnipeg", value: business.winnipeg.full },
        { label: "Regina and Saskatchewan", value: "Served from our Brandon headquarters. Travel is included in your quote." },
      ],
    },
    {
      heading: "Where we play",
      body: [
        "We serve weddings and events in Brandon and the Westman area, Winnipeg and the surrounding areas, and Regina and communities across Saskatchewan. Major cities, small towns, rural communities: if you have a venue and a date, tell us about it.",
      ],
      items: [
        { label: "Brandon DJ service", value: `${SITE_URL}/dj-service/brandon`, href: "/dj-service/brandon" },
        { label: "Winnipeg DJ service", value: `${SITE_URL}/dj-service/winnipeg`, href: "/dj-service/winnipeg" },
        { label: "Regina DJ service", value: `${SITE_URL}/dj-service/regina`, href: "/dj-service/regina" },
      ],
    },
    {
      heading: "What to include in your message",
      body: [
        "Your event date, the venue or town, the type of event (wedding, social, corporate event, gala, graduation, or private party), roughly how many guests you expect, and any services you are interested in such as a photobooth or audio, video, and lighting rental.",
      ],
    },
    {
      heading: "Follow along",
      items: [
        { label: "Instagram", value: socialLinks.instagram, href: socialLinks.instagram },
        { label: "Facebook", value: socialLinks.facebook, href: socialLinks.facebook },
        { label: "TikTok", value: socialLinks.tiktok, href: socialLinks.tiktok },
        { label: "LinkedIn", value: socialLinks.linkedin, href: socialLinks.linkedin },
      ],
    },
  ],
};

export const privacyPage: TrustPage = {
  slug: "privacy",
  label: "Privacy",
  title: "Privacy policy",
  metaTitle: "Privacy Policy",
  description:
    "How Trident Event Group Inc. collects, uses, and protects personal information submitted through the Trident Music website.",
  intro:
    "This policy explains how Trident Event Group Inc. (“we”, “us”), which operates Trident Music, handles personal information collected through tridentmusic.ca. We follow the principles of Canada’s Personal Information Protection and Electronic Documents Act (PIPEDA). Effective date: October 13, 2026.",
  sections: [
    {
      heading: "What we collect",
      body: [
        "When you fill out our inquiry form or email or call us, we collect the information you choose to give us: your name, email address, phone number, event date, venue or location, event type, guest count, the services you are interested in, and any details you share about your event, such as music preferences.",
        "When you browse the site, our analytics tools collect general usage information such as pages viewed, approximate location based on your IP address, device and browser type, and how you arrived at the site. We use your approximate city to show you information relevant to Brandon, Winnipeg, or Regina, and we remember your city choice in a cookie.",
      ],
    },
    {
      heading: "How we use it",
      body: [
        "We use the information you send us to respond to your inquiry, prepare a quote, plan and deliver your event, send contracts and invoices, and follow up about your booking. We use analytics information to understand how the site is used and to improve it. We do not sell your personal information.",
      ],
    },
    {
      heading: "Cookies and analytics",
      body: [
        "The site uses cookies and similar technologies for analytics and to remember your location preference. You can block or delete cookies in your browser settings; the site will still work, although city-specific content may default to our general Manitoba and Saskatchewan information.",
      ],
    },
    {
      heading: "Who we share it with",
      body: [
        "We share personal information only with service providers that help us run the business and deliver your event, such as our booking and CRM software, email and payment providers, website hosting and analytics tools, and, where you have booked them, our sister Trident Event Group brands or the team members working your event. These providers may only use your information to perform services for us. We may also disclose information when required by law.",
      ],
    },
    {
      heading: "How long we keep it",
      body: [
        "We keep inquiry and booking information for as long as we need it to deliver your event and meet our legal, accounting, and tax obligations. Inquiries that do not become bookings are deleted or anonymized when we no longer need them.",
      ],
    },
    {
      heading: "Your choices and rights",
      body: [
        "You can ask to see the personal information we hold about you, ask us to correct it, or withdraw your consent to further communication at any time. Send requests to hello@tridenteventgroup.ca and we will respond within 30 days. If you are not satisfied with our response, you can contact the Office of the Privacy Commissioner of Canada.",
      ],
    },
    {
      heading: "Contact",
      items: [
        { label: "Organization", value: business.legalName },
        { label: "Email", value: business.email, href: `mailto:${business.email}` },
        { label: "Phone", value: business.phoneDisplay, href: `tel:${business.phoneE164}` },
        { label: "Mail", value: business.hq.full },
      ],
    },
  ],
};

export const trustPages = { about: aboutPage, contact: contactPage, privacy: privacyPage };
