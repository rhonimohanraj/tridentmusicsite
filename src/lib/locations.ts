export type LocationSlug = "brandon" | "winnipeg" | "regina" | "generic";

export interface LocationAddress {
  street: string;
  cityProvince: string;
  postalCode: string;
  full: string;
}

export interface LocationConfig {
  slug: LocationSlug;
  city: string;
  province: string;
  region: string;
  address: LocationAddress;
  hasLocalOffice: boolean;
  heroImage: string;
  hero: {
    label: string;
    headline: string;
    subtitle: string;
  };
  about: {
    heading: string;
    copy: string[];
  };
  cta: {
    heading: string;
    subtext: string;
  };
  footer: {
    description: string;
  };
  faqs: { question: string; answer: string }[];
  seo: {
    title: string;
    description: string;
  };
  blogCityKeywords: string[];
}

export const LOCATION_COOKIE = "trident-location";
export const LOCATION_HEADER = "x-trident-location";
export const DEFAULT_LOCATION: LocationSlug = "generic";

/** City slugs only — excludes "generic" */
export const CITY_SLUGS: LocationSlug[] = ["brandon", "winnipeg", "regina"];

const brandonAddress: LocationAddress = {
  street: "381 Park Avenue East",
  cityProvince: "Brandon, MB",
  postalCode: "R7A 7A5",
  full: "381 Park Avenue East, Brandon, MB R7A 7A5",
};

const winnipegAddress: LocationAddress = {
  street: "425 Ballantrae Dr",
  cityProvince: "Winnipeg, MB",
  postalCode: "R3T 6H6",
  full: "425 Ballantrae Dr, Winnipeg, MB R3T 6H6",
};

export const LOCATIONS: Record<LocationSlug, LocationConfig> = {
  brandon: {
    slug: "brandon",
    city: "Brandon",
    province: "Manitoba",
    region: "Brandon and the Westman area",
    address: brandonAddress,
    hasLocalOffice: true,
    heroImage:
      "https://framerusercontent.com/images/5xFSwGZatNRutmzk45FXSubv4qc.webp?width=1800&height=1200",
    hero: {
      label: "Brandon \u00B7 Manitoba",
      headline: "for those celebrations\nyou can never forget",
      subtitle:
        "DJ entertainment services for weddings, events, and celebrations throughout Brandon and Manitoba.",
    },
    about: {
      heading:
        "Professional DJs, real energy, and unforgettable nights",
      copy: [
        "As Brandon, Manitoba\u2019s premier DJ service, we create unforgettable experiences at every event. From weddings and corporate galas to social celebrations, we bring the energy and music that keeps your dance floor packed all night.",
        "When the lights fade and guests head home, they\u2019ll be talking about that party for weeks. That\u2019s the Trident Music difference.",
      ],
    },
    cta: {
      heading: "What are you planning?",
      subtext:
        "Weddings, corporate events, parties, graduations \u2014 we bring the energy to Brandon and the Westman area.",
    },
    footer: {
      description:
        "Professional DJ and event entertainment for weddings, celebrations, and corporate events across Brandon and Manitoba.",
    },
    faqs: [
      {
        question: "What makes Trident Music the best DJ service in Brandon?",
        answer:
          "We bring professional-grade equipment, experienced DJs, and genuine passion for music to every Brandon event. Our team knows the local venues and what works for Westman audiences.",
      },
      {
        question: "Do you provide wedding DJ services throughout Brandon?",
        answer:
          "Absolutely. We serve weddings across Brandon and the entire Westman region, including surrounding communities.",
      },
      {
        question: "What\u2019s included in your Brandon DJ packages?",
        answer:
          "Our packages include a professional DJ/MC, premium sound system, lighting, music consultation, and full event coordination. Contact us for a custom quote.",
      },
      {
        question: "What areas do you serve besides Brandon?",
        answer:
          "We serve all of Manitoba and Saskatchewan, with dedicated teams in Winnipeg and coverage across Regina and surrounding areas.",
      },
    ],
    seo: {
      title: "Trident Music | Brandon & Manitoba\u2019s Premier DJ Service",
      description:
        "DJ entertainment services for weddings, events, and celebrations throughout Brandon and Manitoba. Professional DJ, audio visual, and photobooth services.",
    },
    blogCityKeywords: ["brandon", "westman", "manitoba"],
  },

  winnipeg: {
    slug: "winnipeg",
    city: "Winnipeg",
    province: "Manitoba",
    region: "Winnipeg and surrounding areas",
    address: winnipegAddress,
    hasLocalOffice: true,
    heroImage:
      "https://framerusercontent.com/images/57QszomWEqCBDiWJDPLPv55lQ.webp?width=2000&height=1333",
    hero: {
      label: "Winnipeg \u00B7 Manitoba",
      headline: "for those celebrations\nyou can never forget",
      subtitle:
        "DJ entertainment services for weddings, events, and celebrations throughout Winnipeg and surrounding areas.",
    },
    about: {
      heading:
        "Professional DJs, real energy, and unforgettable nights",
      copy: [
        "As Winnipeg\u2019s premier DJ services company, mediocrity has no place here\u2014it\u2019s not in our language, nor in our standard. We curate wedding celebrations and social events designed to leave a lasting impression\u2014elevated, unforgettable, and effortlessly extraordinary.",
        "When the night ends at your Winnipeg event, your guests won\u2019t just leave\u2014they\u2019ll step out still buzzing with full hearts, sore feet, shoes in hand, and stories to tell. That\u2019s the Trident Music difference.",
      ],
    },
    cta: {
      heading: "What are you planning?",
      subtext:
        "Weddings, corporate events, parties, graduations \u2014 we bring the energy across Winnipeg and surrounding areas.",
    },
    footer: {
      description:
        "Professional DJ and event entertainment for weddings, celebrations, and corporate events across Winnipeg and Manitoba.",
    },
    faqs: [
      {
        question: "What makes Trident Music the best DJ service in Winnipeg?",
        answer:
          "We combine professional-grade equipment with DJs who genuinely love music and know how to read a Winnipeg crowd. Our reputation is built on packed dance floors.",
      },
      {
        question:
          "Do you provide wedding DJ services throughout Winnipeg?",
        answer:
          "Yes. We cover all of Winnipeg and the surrounding areas, working with every major venue in the city.",
      },
      {
        question: "What\u2019s included in your Winnipeg DJ packages?",
        answer:
          "Our packages include a professional DJ/MC, premium sound system, lighting, music consultation, and full event coordination. Contact us for a custom quote.",
      },
      {
        question: "What areas do you serve besides Winnipeg?",
        answer:
          "We serve all of Manitoba and Saskatchewan, with our headquarters in Brandon and dedicated coverage across Regina.",
      },
    ],
    seo: {
      title: "Trident Music | Winnipeg\u2019s Premier DJ Service",
      description:
        "DJ entertainment services for weddings, events, and celebrations throughout Winnipeg. Professional DJ, audio visual, and photobooth services.",
    },
    blogCityKeywords: ["winnipeg", "manitoba"],
  },

  regina: {
    slug: "regina",
    city: "Regina",
    province: "Saskatchewan",
    region: "Regina, Saskatchewan, and surrounding areas",
    address: brandonAddress,
    hasLocalOffice: false,
    heroImage:
      "https://framerusercontent.com/images/sSf1izSYGKv6eVcrRnYKu06Nmk.webp?width=1500&height=1000",
    hero: {
      label: "Regina \u00B7 Saskatchewan",
      headline: "for those celebrations\nyou can never forget",
      subtitle:
        "DJ entertainment services for weddings, events, and celebrations throughout Regina and Saskatchewan.",
    },
    about: {
      heading:
        "Professional DJs, real energy, and unforgettable nights",
      copy: [
        "As Regina\u2019s premier DJ services company serving Regina and beyond, mediocrity has no place here\u2014it\u2019s not in our language, nor in our standard. We curate wedding celebrations and social events designed to leave a lasting impression.",
        "When the night ends at your Regina event, your guests won\u2019t just leave\u2014they\u2019ll step out still buzzing with full hearts, sore feet, shoes in hand, and stories to tell. That\u2019s the Trident Music promise.",
      ],
    },
    cta: {
      heading: "What are you planning?",
      subtext:
        "Weddings, corporate events, parties, graduations \u2014 we bring the energy across Regina and Saskatchewan.",
    },
    footer: {
      description:
        "Professional DJ and event entertainment for weddings, celebrations, and corporate events across Regina and Saskatchewan.",
    },
    faqs: [
      {
        question: "What makes Trident Music the best DJ service in Regina?",
        answer:
          "We bring Manitoba\u2019s most trusted DJ team to Saskatchewan. Professional equipment, experienced DJs, and a track record of packed dance floors at every event.",
      },
      {
        question: "Do you provide wedding DJ services throughout Regina?",
        answer:
          "Yes. We serve weddings and events across Regina and the surrounding Saskatchewan communities.",
      },
      {
        question: "What\u2019s included in your Regina DJ packages?",
        answer:
          "Our packages include a professional DJ/MC, premium sound system, lighting, music consultation, and full event coordination. Contact us for a custom quote.",
      },
      {
        question: "What areas do you serve besides Regina?",
        answer:
          "We serve all of Saskatchewan and Manitoba, with headquarters in Brandon and a dedicated team in Winnipeg.",
      },
    ],
    seo: {
      title: "Trident Music | Regina\u2019s Premier DJ Service",
      description:
        "DJ entertainment services for weddings, events, and celebrations throughout Regina and Saskatchewan. Professional DJ, audio visual, and photobooth services.",
    },
    blogCityKeywords: ["regina", "saskatchewan"],
  },

  generic: {
    slug: "generic",
    city: "Manitoba & Saskatchewan",
    province: "Manitoba & Saskatchewan",
    region: "Manitoba and Saskatchewan",
    address: brandonAddress,
    hasLocalOffice: true,
    heroImage:
      "https://framerusercontent.com/images/5xFSwGZatNRutmzk45FXSubv4qc.webp?width=1800&height=1200",
    hero: {
      label: "Brandon \u00B7 Winnipeg \u00B7 Regina",
      headline: "for those celebrations\nyou can never forget",
      subtitle:
        "DJ entertainment services for weddings, events, and celebrations throughout Manitoba and Saskatchewan.",
    },
    about: {
      heading:
        "Professional DJs, real energy, and unforgettable nights",
      copy: [
        "As Manitoba and Saskatchewan\u2019s premier DJ service, we create unforgettable experiences at every event. From weddings and corporate galas to social celebrations, we bring the energy and music that keeps your dance floor packed all night.",
        "With teams in Brandon, Winnipeg, and coverage across Regina, we\u2019re wherever the party is. When the lights fade and guests head home, they\u2019ll be talking about that party for weeks. That\u2019s the Trident Music difference.",
      ],
    },
    cta: {
      heading: "What are you planning?",
      subtext:
        "Weddings, corporate events, parties, graduations \u2014 we bring the energy across Manitoba and Saskatchewan.",
    },
    footer: {
      description:
        "Professional DJ and event entertainment for weddings, celebrations, and corporate events across Manitoba and Saskatchewan.",
    },
    faqs: [
      {
        question: "Where does Trident Music operate?",
        answer:
          "We have teams in Brandon (HQ) and Winnipeg, Manitoba, and serve events across Regina, Saskatchewan, and the surrounding regions.",
      },
      {
        question: "Do you travel for events?",
        answer:
          "Absolutely. We serve weddings and events across all of Manitoba and Saskatchewan, from major cities to rural communities.",
      },
      {
        question: "What\u2019s included in your DJ packages?",
        answer:
          "Our packages include a professional DJ/MC, premium sound system, lighting, music consultation, and full event coordination. Contact us for a custom quote.",
      },
      {
        question: "How do I book Trident Music?",
        answer:
          "Head to our inquiry page and fill out the form. We\u2019ll get back to you with a custom quote within 24 hours.",
      },
    ],
    seo: {
      title: "Trident Music | Manitoba & Saskatchewan\u2019s Premier DJ Service",
      description:
        "DJ entertainment services for weddings, events, and celebrations throughout Manitoba and Saskatchewan. Locations in Brandon, Winnipeg, and Regina.",
    },
    blogCityKeywords: [],
  },
};

export function getLocationBySlug(slug: string): LocationConfig {
  if (slug in LOCATIONS) return LOCATIONS[slug as LocationSlug];
  return LOCATIONS[DEFAULT_LOCATION];
}

export function getLocationByCity(city: string): LocationConfig {
  const normalized = city.toLowerCase().trim();
  for (const loc of Object.values(LOCATIONS)) {
    if (loc.city.toLowerCase() === normalized) return loc;
  }
  return LOCATIONS[DEFAULT_LOCATION];
}
