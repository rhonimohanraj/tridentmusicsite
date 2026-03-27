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
        "DJ entertainment for weddings, events, and every celebration worth remembering in Brandon and the Westman area.",
    },
    about: {
      heading:
        "Your guests won\u2019t stop talking about it",
      copy: [
        "We started in a basement in Brandon with one speaker and a laptop. Now we show up to your wedding with a crew that knows every venue in the Westman area, reads your crowd like a book, and doesn\u2019t stop until the last person leaves the dance floor.",
        "That aunt who never dances? She\u2019ll be out there. Your coworker who said they\u2019d leave early? They\u2019ll close the place down. That\u2019s not a promise we make lightly \u2014 it\u2019s what happens when you give us a room and a playlist to work with.",
      ],
    },
    cta: {
      heading: "Got a date in mind?",
      subtext:
        "Tell us about your wedding, your grad, your corporate thing \u2014 whatever it is, we want to hear about it.",
    },
    footer: {
      description:
        "DJ and event entertainment for Brandon and Manitoba. Weddings, corporate, socials \u2014 if there\u2019s a dance floor, we\u2019ll fill it.",
    },
    faqs: [
      {
        question: "What makes you different from other DJ services in Brandon?",
        answer:
          "Honestly? We care more. Our DJs don\u2019t just press play \u2014 they read the room, adjust on the fly, and know exactly when to drop the song that gets everyone moving. We\u2019ve played every major venue in the Westman area and we know what works.",
      },
      {
        question: "Do you provide wedding DJ services throughout Brandon?",
        answer:
          "Every weekend, all season. We serve weddings across Brandon and the entire Westman region, including surrounding communities.",
      },
      {
        question: "What\u2019s included when we book you?",
        answer:
          "A dedicated DJ/MC for your event, a sound system that fills the room without blowing out your guests\u2019 ears, lighting that sets the mood, a music consultation beforehand so we nail your taste, and full coordination on the day. We\u2019ll send you a custom quote based on your event.",
      },
      {
        question: "What areas do you serve besides Brandon?",
        answer:
          "We\u2019ve got a team in Winnipeg and take dates across Regina and Saskatchewan. Wherever the party is, we\u2019ll be there.",
      },
    ],
    seo: {
      title: "Trident Music | Brandon\u2019s DJ Crew for Weddings & Events",
      description:
        "DJ entertainment for weddings, events, and celebrations in Brandon and Manitoba. The team behind hundreds of packed dance floors.",
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
        "The DJ crew Winnipeg couples trust with their biggest nights.",
    },
    about: {
      heading:
        "Your guests won\u2019t stop talking about it",
      copy: [
        "We\u2019ve played every major venue in this city. The Met. The Fort Garry. Spaces your Pinterest board dreams about. But the venue doesn\u2019t make the night \u2014 the energy does. And that\u2019s what we bring. A crew that knows exactly when to drop the song that gets every single person on their feet.",
        "When the night ends, your guests won\u2019t just leave. They\u2019ll walk out with sore feet, shoes in hand, and stories they\u2019ll be telling at brunch for the next month. That\u2019s the difference between hiring a DJ and hiring us.",
      ],
    },
    cta: {
      heading: "Got a date in mind?",
      subtext:
        "Weddings, socials, corporate events \u2014 tell us what you\u2019re planning in Winnipeg and we\u2019ll tell you how we\u2019d make it one for the books.",
    },
    footer: {
      description:
        "Winnipeg\u2019s go-to DJ crew for weddings, socials, and corporate events. We bring the energy.",
    },
    faqs: [
      {
        question: "What makes you different from other DJ services in Winnipeg?",
        answer:
          "We\u2019ve played every major venue in the city and built our reputation on one thing: packed dance floors. Our DJs read the room and adjust on the fly \u2014 no pre-set playlists running on autopilot.",
      },
      {
        question:
          "Do you provide wedding DJ services throughout Winnipeg?",
        answer:
          "Every weekend, all season. We cover all of Winnipeg and the surrounding areas, and we\u2019ve worked with every major venue in the city.",
      },
      {
        question: "What\u2019s included when we book you?",
        answer:
          "A dedicated DJ/MC for your event, a sound system that fills the room without blowing out your guests\u2019 ears, lighting that sets the mood, a music consultation beforehand so we nail your taste, and full coordination on the day. We\u2019ll send you a custom quote based on your event.",
      },
      {
        question: "What areas do you serve besides Winnipeg?",
        answer:
          "Our HQ is in Brandon and we take dates across Regina and Saskatchewan. Wherever the party is, we\u2019ll be there.",
      },
    ],
    seo: {
      title: "Trident Music | Winnipeg Wedding & Event DJs",
      description:
        "The DJ crew Winnipeg couples trust with their biggest nights. Weddings, socials, corporate events across Manitoba.",
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
        "Manitoba\u2019s most booked DJ team, now taking dates across Saskatchewan.",
    },
    about: {
      heading:
        "Your guests won\u2019t stop talking about it",
      copy: [
        "We\u2019re Manitoba\u2019s team, but Saskatchewan calls us back every season. Regina couples keep booking us because word travels \u2014 and when your best friend\u2019s wedding had a dance floor that didn\u2019t quit until 1 AM, you want the same thing.",
        "We make the drive because we love what we do out here. Different city, same energy. Your guests won\u2019t know we\u2019re from out of town \u2014 they\u2019ll just know the music was perfect.",
      ],
    },
    cta: {
      heading: "Planning something in Saskatchewan?",
      subtext:
        "We make the drive for the right events. Tell us about yours.",
    },
    footer: {
      description:
        "Serving Regina and Saskatchewan from our Brandon HQ. Same team, same energy, different province.",
    },
    faqs: [
      {
        question: "What makes you different from other DJ services in Regina?",
        answer:
          "We built our reputation on packed dance floors in Manitoba, and we bring that same energy to every Saskatchewan event. Our DJs read the room and adjust on the fly \u2014 no pre-set playlists running on autopilot.",
      },
      {
        question: "Do you provide wedding DJ services throughout Regina?",
        answer:
          "We do. We serve weddings and events across Regina and the surrounding Saskatchewan communities every season.",
      },
      {
        question: "What\u2019s included when we book you?",
        answer:
          "A dedicated DJ/MC for your event, a sound system that fills the room without blowing out your guests\u2019 ears, lighting that sets the mood, a music consultation beforehand so we nail your taste, and full coordination on the day. We\u2019ll send you a custom quote based on your event.",
      },
      {
        question: "Do you travel from Manitoba for Regina events?",
        answer:
          "We do, and we love it. Our HQ is in Brandon with a team in Winnipeg. Travel is included in your quote \u2014 no surprise fees.",
      },
    ],
    seo: {
      title: "Trident Music | Regina Wedding & Event DJs",
      description:
        "Manitoba\u2019s most booked DJ team, now taking dates across Saskatchewan. Wedding and event entertainment for Regina.",
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
        "DJ entertainment for weddings, events, and every celebration worth remembering across Manitoba and Saskatchewan.",
    },
    about: {
      heading:
        "Your guests won\u2019t stop talking about it",
      copy: [
        "We started in a basement in Brandon with one speaker and a laptop. Now we\u2019ve got teams in Winnipeg, coverage across Regina, and a reputation that books us out months in advance. Not because we\u2019re the loudest \u2014 because our dance floors don\u2019t empty.",
        "That aunt who never dances? She\u2019ll be out there. Your friend who said they\u2019d leave by 10? Still going at midnight. We\u2019ve seen it happen hundreds of times now, and it never gets old.",
      ],
    },
    cta: {
      heading: "Got a date in mind?",
      subtext:
        "Wherever you\u2019re celebrating in Manitoba or Saskatchewan \u2014 we want to hear about it.",
    },
    footer: {
      description:
        "DJ and event entertainment across Manitoba and Saskatchewan. Brandon HQ, Winnipeg team, Regina coverage.",
    },
    faqs: [
      {
        question: "Where does Trident Music operate?",
        answer:
          "Our HQ is in Brandon, we\u2019ve got a team in Winnipeg, and we take dates across Regina and Saskatchewan. Wherever the party is, we\u2019ll be there.",
      },
      {
        question: "Do you travel for events?",
        answer:
          "All the time. Major cities, small towns, rural communities \u2014 if you\u2019ve got a venue and a date, we\u2019ll make it work.",
      },
      {
        question: "What\u2019s included when we book you?",
        answer:
          "A dedicated DJ/MC for your event, a sound system that fills the room without blowing out your guests\u2019 ears, lighting that sets the mood, a music consultation beforehand so we nail your taste, and full coordination on the day. We\u2019ll send you a custom quote based on your event.",
      },
      {
        question: "How do I book Trident Music?",
        answer:
          "Fill out the form on our inquiry page. Tell us your date, your venue, and the vibe you\u2019re going for. We\u2019ll get back to you within 24 hours with a custom quote.",
      },
    ],
    seo: {
      title: "Trident Music | Manitoba & Saskatchewan Wedding & Event DJs",
      description:
        "DJ entertainment for weddings, events, and celebrations across Manitoba and Saskatchewan. Teams in Brandon, Winnipeg, and Regina.",
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
