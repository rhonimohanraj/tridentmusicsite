// Long-form, server-rendered content for the Brandon and Winnipeg city landing
// pages (/dj-service/brandon, /dj-service/winnipeg). Spec:
// ~/TEG-Labs/SEO/CITY-PAGE-BRIEF.md and the Trident Music (BDN|YWG) playbooks.
//
// Truth rules: every venue named as "played" comes from this repo's blog or
// ObsRAG event records; ratings are the live Google figures the playbooks list.
// No published price exists yet, so every price cell reads "Ask for a quote"
// (TODO(rhoni): price).
import { SITE_URL } from "./site";

export type CityPageSlug = "brandon" | "winnipeg";

export interface CityPhoto {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
}

export interface CityPackage {
  name: string;
  coverage: string;
  included: string;
  price: string;
}

export interface CityPageContent {
  slug: CityPageSlug;
  city: string;
  /** Full <title>, already branded (≤60 chars). */
  title: string;
  /** Meta description (≤155 chars). */
  description: string;
  h1: string;
  /** Direct answer, shown first. The booking sentence (phone + form) is appended by the page. */
  answer: string;
  glance: { label: string; text: string }[];
  packagesHeading: string;
  packagesIntro: string;
  packages: CityPackage[];
  packagesNote: string;
  venuesHeading: string;
  venuesIntro: string;
  venues: { name: string; body: string }[];
  venuesAlso: string;
  heroPhoto: CityPhoto;
  featurePhoto: CityPhoto;
  areaHeading: string;
  areaCopy: string[];
  travelHeading: string;
  travel: { place: string; time: string }[];
  travelNote: string;
  processHeading: string;
  process: string[];
  faqHeading: string;
  faqs: { question: string; answer: string }[];
  otherCity: { before: string; anchor: string; href: string; after: string };
  reading: { href: string; label: string }[];
  /** Visible contact line. Brandon never shows a street address (service-area business). */
  contactLine: string;
  ctaHeading: string;
  ctaText: string;
  schema: {
    alternateName: string;
    address: {
      streetAddress?: string;
      postalCode?: string;
      addressLocality: string;
      addressRegion: "MB";
      addressCountry: "CA";
    };
    geo: { latitude: number; longitude: number };
    areaServed: string[];
  };
}

export const PHONE_DISPLAY = "+1-431-441-2676";
export const PHONE_TEL = "+14314412676";
export const PRICE_TBD = "Ask for a quote";

const photos = {
  gala: {
    src: "/images/city/brandon-chamber-of-commerce-awards-gala-stage-lighting.jpg",
    width: 1800,
    height: 1200,
    alt: "Stage lighting and screens at the 141st Brandon Chamber of Commerce Awards Gala, Brandon",
    caption: "Stage and room lighting at the 141st Brandon Chamber of Commerce Awards Gala.",
  },
  schoolDance: {
    src: "/images/city/school-dance-dj-crowd-trident-music.jpg",
    width: 1800,
    height: 1013,
    alt: "Students crowding the dance floor for a group photo at a school dance with a Trident Music DJ",
    caption: "Grad and school dances fill the spring calendar.",
  },
  stringLights: {
    src: "/images/city/wedding-reception-dance-floor-string-lights.jpg",
    width: 1800,
    height: 1200,
    alt: "Wedding guests dancing under string lights at a reception with a Trident Music DJ",
  },
  tent: {
    src: "/images/city/tented-wedding-reception-dancing.jpg",
    width: 1800,
    height: 1200,
    alt: "Bride and bridesmaids dancing between the tables at a tented wedding reception",
    caption: "Summer receptions run late. We plan the sound so speeches are clear and the dance set hits hard.",
  },
} satisfies Record<string, CityPhoto>;

export const CITY_PAGES: Record<CityPageSlug, CityPageContent> = {
  brandon: {
    slug: "brandon",
    city: "Brandon",
    title: "Wedding & Event DJ in Brandon, MB | Trident Music",
    description:
      "Wedding and event DJ service in Brandon and Westman: DJ/MC, sound, lighting and music planning. Rated 5.0 on Google from 32 reviews. Get a quote.",
    h1: "Wedding & Event DJ Service in Brandon, Manitoba",
    answer:
      "Trident Music is a wedding and event DJ company that started in Brandon, Manitoba, and still calls the city home. We cover Brandon and the Westman towns around it, including Virden, Souris, Neepawa, Minnedosa and Carberry. Every booking includes a DJ who also MCs, sound sized to your room, dance-floor lighting, a music consultation and coordination with your venue, quoted per event. Brandon clients rate us 5.0 on Google from 32 reviews.",
    glance: [
      { label: "Price", text: "Quoted per event from your date, venue and hours, with a written quote within 24 hours of your inquiry." },
      { label: "Included", text: "DJ and MC, sound, lighting, a music consultation before the day, and coordination with your venue." },
      { label: "Service area", text: "Brandon, Shilo, Carberry, Souris, Virden, Minnedosa, Neepawa and the rest of Westman." },
      { label: "Lead time", text: "Saturdays from May to September fill first. Reach out once your venue is confirmed." },
      { label: "Rating", text: "5.0 on Google from 32 reviews." },
    ],
    packagesHeading: "Brandon DJ packages",
    packagesIntro:
      "Most Brandon bookings fall into one of these. Hours, season and travel change the price, so each line is quoted to your event.",
    packages: [
      {
        name: "Wedding reception",
        coverage: "Dinner to last dance, typically 5 PM to 1 AM",
        included: "DJ and MC, sound for speeches and dancing, lighting, music consultation, timeline planned with your venue",
        price: PRICE_TBD,
      },
      {
        name: "Ceremony and cocktail hour (add-on)",
        coverage: "Ceremony, then cocktails",
        included: "Separate ceremony sound, a microphone for your officiant, aisle songs on cue, cocktail-hour music",
        price: PRICE_TBD,
      },
      {
        name: "Grads and school dances",
        coverage: "Dance hours set with your school",
        included: "DJ, sound, lighting, music planned with your grad committee",
        price: PRICE_TBD,
      },
      {
        name: "Socials and private parties",
        coverage: "Your evening, start to finish",
        included: "DJ, sound, lighting, requests taken on the night",
        price: PRICE_TBD,
      },
      {
        name: "Corporate events and galas",
        coverage: "Built around your program",
        included: "MC and DJ, microphones for speeches and awards, sound, stage and room lighting",
        price: PRICE_TBD,
      },
      {
        name: "Photobooth and A/V rental",
        coverage: "Add to any event",
        included: "Photobooth, extra speakers, microphones, lighting, generator for sites without power",
        price: PRICE_TBD,
      },
    ],
    packagesNote:
      "Add-ons combine with any package. Your quote lists every line, including travel to halls in Virden, Souris or Neepawa and a generator if your site has no power.",
    venuesHeading: "Brandon venues we know",
    venuesIntro:
      "Trident Music started in Brandon, so most of the city's event rooms are familiar ground. A few we've played:",
    venues: [
      {
        name: "Keystone Centre",
        body: "The city's biggest event complex, and a second home in hockey season: our crew runs game-night music and lighting for Brandon Wheat Kings home games in the arena, Assiniboine Credit Union Place. For weddings and galas in the halls, we place speakers for the size of the room so the back tables hear the speeches as clearly as the head table.",
      },
      {
        name: "Victoria Inn Hotel & Convention Centre",
        body: "We've played the Victoria Inn for weddings and company events. It has several rooms, from the Imperial Ballroom to the Grand Salon, so we confirm which one you've booked and where the dance floor sits before we load in.",
      },
      {
        name: "Royal Oak Inn & Suites",
        body: "Another Victoria Avenue room we've worked, used for receptions, staff parties and holiday events.",
      },
      {
        name: "Assiniboine College",
        body: "We've played events for the college, and grad and school dances are a big part of our Brandon spring.",
      },
    ],
    venuesAlso:
      "We also take bookings at venues such as the Riverbank Discovery Centre and Brandon University, plus community halls, curling clubs and family farms across Westman.",
    heroPhoto: photos.gala,
    featurePhoto: photos.schoolDance,
    areaHeading: "Around Brandon and out across Westman",
    areaCopy: [
      "In the city we set up anywhere with power and a dance floor: hotel ballrooms Downtown, backyard weddings on the North Hill, milestone birthdays in the South End, Valleyview and Westridge, and tent receptions on the acreages out toward the Brandon Hills.",
      "Out of town, a lot of Westman weddings happen in community halls and on family farms. Those rooms often have only a couple of outlets near the stage, so we ask for the hall contact ahead of time and check power and load-in before the day. If the ceremony is in a field or a park with no power at all, we can bring a generator.",
      "Brandon is still home base for Trident Music. Our Winnipeg team covers the Capital Region, and both crews work from the same planning process and the same standard of gear.",
    ],
    travelHeading: "Drive times from Brandon",
    travel: [
      { place: "Shilo", time: "about 25 min" },
      { place: "Carberry", time: "about 35 min" },
      { place: "Minnedosa", time: "about 35 min" },
      { place: "Souris", time: "about 45 min" },
      { place: "Virden", time: "about 50 min" },
      { place: "Neepawa", time: "about 1 h" },
      { place: "Wasagaming (Clear Lake)", time: "about 1 h 10 min" },
      { place: "Dauphin", time: "about 2 h" },
      { place: "Winnipeg", time: "about 2 h 15 min east on the Trans-Canada" },
    ],
    travelNote:
      "Times are typical summer driving. For venues an hour or more away we build the drive and an earlier setup into your timeline, so the system is tested before guests arrive.",
    processHeading: "Booking a Brandon DJ with us",
    process: [
      "Send your date, venue and rough guest count through the inquiry form, or call. We check the calendar and send a written quote within 24 hours.",
      "Once you book, your DJ sets up a music consultation, in person or on a call. You'll go through must-plays and do-not-plays, the songs for your entrance, first dance and parent dances, and the order of speeches. If your venue has a coordinator, we work out the timeline with them directly.",
      "On the day we arrive early enough to set up and sound-check before the first guest walks in, MC the formalities, and read the room once the dance floor opens. Backup equipment comes to every event.",
    ],
    faqHeading: "Brandon DJ questions",
    faqs: [
      {
        question: "How much does a wedding DJ cost in Brandon?",
        answer:
          "Trident Music quotes every Brandon wedding individually, because the price depends on how many hours you need, whether you add ceremony sound or a photobooth, the season, and travel for venues outside the city. Send your date and venue through the inquiry form or call +1-431-441-2676, and you'll have a written quote within 24 hours that lists every line.",
      },
      {
        question: "How far in advance should I book a DJ in Brandon?",
        answer:
          "Book as soon as your venue and date are confirmed. Saturdays between May and September are the first dates to fill in Brandon and across Westman, and many couples choose their DJ right after the venue. Weeknight events, winter weddings and company parties often have more room, so it is worth asking even on shorter notice.",
      },
      {
        question: "Do you bring sound and lighting for Brandon venues?",
        answer:
          "Yes. Every booking includes a sound system sized to your room, wireless microphones for speeches, and dance-floor lighting. We've worked rooms across Brandon, from the Keystone Centre to the Victoria Inn, and for community halls and farm venues we check power and load-in with the venue first. Backup equipment comes to every event.",
      },
      {
        question: "Can the DJ also MC our Brandon reception?",
        answer:
          "Yes. Your DJ is also your MC. They introduce the wedding party, keep dinner and speeches on schedule, hand off the microphone, announce the first dance and cake cutting, and keep guests informed so the night flows. We plan the script with you at the music consultation, including how to pronounce every name.",
      },
      {
        question: "Do you DJ ceremonies and cocktail hour too?",
        answer:
          "Yes. Ceremony and cocktail-hour sound is an add-on to the reception package. We bring a separate setup to your ceremony site with a microphone for your officiant and your aisle songs cued, then switch to cocktail music. For outdoor ceremonies on farms or in parks away from power, we can bring a generator.",
      },
      {
        question: "Do you cover weddings outside Brandon?",
        answer:
          "Yes. Westman is home territory: Virden, Souris, Neepawa, Minnedosa, Carberry, Shilo and the halls and farms in between. For venues an hour or more away we plan an earlier arrival so everything is tested before guests come in, and your quote shows any travel. For Winnipeg dates, our Winnipeg team takes the booking.",
      },
    ],
    otherCity: {
      before: "Planning in the city instead? Our page for a ",
      anchor: "wedding DJ in Winnipeg",
      href: "/dj-service/winnipeg",
      after: " covers Winnipeg venues, neighbourhoods and drive times.",
    },
    reading: [
      { href: "/blog/brandon-best", label: "Best DJ service in Brandon? What to look for" },
      { href: "/blog/top-25-songs", label: "25 wedding songs that never miss" },
      { href: "/blog/price-vs-quality", label: "Why you shouldn't hire a DJ on price alone" },
    ],
    contactLine:
      "Trident Music, Brandon, Manitoba · +1-431-441-2676 · hello@tridenteventgroup.ca · Office hours Monday to Friday, 9 AM to 4 PM",
    ctaHeading: "Got a Brandon date?",
    ctaText: "Tell us the venue and the kind of night you want. We'll come back with a quote within a day.",
    schema: {
      alternateName: "Trident Music Brandon",
      address: { addressLocality: "Brandon", addressRegion: "MB", addressCountry: "CA" },
      geo: { latitude: 49.8485, longitude: -99.9501 },
      areaServed: ["Brandon", "Virden", "Souris", "Neepawa", "Minnedosa", "Carberry"],
    },
  },

  winnipeg: {
    slug: "winnipeg",
    city: "Winnipeg",
    title: "Wedding & Event DJ in Winnipeg, MB | Trident Music",
    description:
      "Wedding and event DJs in Winnipeg and the Capital Region: DJ/MC, sound, lighting and a music consultation for weddings, socials and galas. 4.8 on Google.",
    h1: "Wedding & Event DJ Service in Winnipeg, Manitoba",
    answer:
      "Trident Music provides wedding and event DJ service across Winnipeg, Manitoba, from our base at 425 Ballantrae Dr, and travels throughout the Capital Region, including Selkirk, Steinbach, Stonewall, Oak Bluff and Headingley. Each booking includes a DJ who also MCs, sound, lighting, a music consultation and coordination on the day, priced as a custom quote for your event. Winnipeg clients rate us 4.8 on Google.",
    glance: [
      { label: "Price", text: "Custom quote per event, based on your date, hours and add-ons, sent within 24 hours." },
      { label: "What you get", text: "DJ/MC, sound, lighting, a pre-event music consultation and day-of coordination." },
      { label: "Where", text: "All of Winnipeg, plus Selkirk, Steinbach, Stonewall, Oak Bluff, Headingley and Gimli." },
      { label: "When to book", text: "Summer Saturdays and December party dates go first. Inquire once your venue is set." },
      { label: "Reviews", text: "4.8 on Google." },
    ],
    packagesHeading: "What a Winnipeg booking includes",
    packagesIntro:
      "Pick the closest match and we'll shape it to your night, whether that's a Fort Garry ballroom or a community hall in Selkirk. Every price is a custom quote for your date and hours.",
    packages: [
      {
        name: "Wedding reception",
        coverage: "Dinner through the last song, usually 5 PM to 1 AM",
        included: "DJ and MC, speech and dance sound, lighting, music consultation, timeline built with your venue coordinator",
        price: PRICE_TBD,
      },
      {
        name: "Ceremony and cocktail sound",
        coverage: "Ceremony plus cocktail hour",
        included: "Ceremony system, officiant microphone, processional and recessional cues, cocktail music during photos",
        price: PRICE_TBD,
      },
      {
        name: "Socials",
        coverage: "Doors to last call",
        included: "DJ, sound, lighting, the social classics your crowd expects, requests on the night",
        price: PRICE_TBD,
      },
      {
        name: "Corporate events, holiday parties and galas",
        coverage: "Built around your program",
        included: "MC and DJ, wireless microphones, sound, stage and room lighting, a dance set after dinner",
        price: PRICE_TBD,
      },
      {
        name: "Photobooth and A/V rental",
        coverage: "Add to any event",
        included: "Photobooth, extra speakers, microphones and lighting",
        price: PRICE_TBD,
      },
    ],
    packagesNote:
      "Add-ons combine with any package. Downtown hotels and theatres often set load-in windows and dock times; we build those into the quote and your timeline.",
    venuesHeading: "Winnipeg rooms we've played",
    venuesIntro:
      "The venue decides the logistics: load-in, power, where the dance floor goes and how late the music can run. Some of the Winnipeg rooms we've played:",
    venues: [
      {
        name: "The Fort Garry Hotel",
        body: "One of the city's classic wedding ballrooms. Load-in runs through the hotel, so we confirm elevator and dock times with the events team before the day.",
      },
      {
        name: "The Metropolitan Entertainment Centre",
        body: "A restored theatre on Donald Street that suits big receptions of roughly 150 to 300 guests. The ceilings are high, so we tune the sound for clear speeches before the dance floor opens.",
      },
      {
        name: "Club Fenom at Canad Inns Destination Centre",
        body: "Built for large weddings, with its own lighting rig that we work alongside ours.",
      },
      {
        name: "Assiniboine Park Pavilion",
        body: "Summer weddings here often start with photos and cocktails in the park. We plan the switch from cocktail music to the reception so there's no dead air while guests move inside.",
      },
      {
        name: "The Gates on Roblin",
        body: "Ceremony outside and reception in the hall, on one property on the west edge of the city, so the move from ceremony sound to the dance floor is quick.",
      },
    ],
    venuesAlso:
      "We also take weddings and events at venues such as the RBC Convention Centre and Inn at the Forks, and at community centres and halls across the city.",
    heroPhoto: photos.stringLights,
    featurePhoto: photos.tent,
    areaHeading: "From the Exchange District out to Selkirk and Steinbach",
    areaCopy: [
      "Inside the Perimeter we cover the whole city: loft and warehouse venues in the Exchange District, family celebrations in St. Boniface, house parties and small weddings around Osborne Village and Corydon/Crescentwood, and backyard and golf-club events in River Heights and Tuxedo.",
      "Socials are a Manitoba tradition, and Winnipeg has plenty of them: a hall, a bar, a late lunch of rye bread and cold cuts, and a dance floor that needs to stay full all night. We plan socials with the hosts the same way we plan weddings, with the classics your crowd expects and room for requests.",
      "For company holiday parties, awards nights and galas, the same DJ can MC the program, run microphones for speeches and switch to a dance set once dinner is done.",
    ],
    travelHeading: "Drive times from Winnipeg",
    travel: [
      { place: "Headingley", time: "about 20 min" },
      { place: "Oak Bluff", time: "about 20 min" },
      { place: "Stonewall", time: "about 30 min" },
      { place: "Selkirk", time: "about 35 min" },
      { place: "Steinbach", time: "about 50 min" },
      { place: "Gimli", time: "about 1 h" },
      { place: "Portage la Prairie", time: "about 1 h" },
      { place: "Brandon", time: "about 2 h 15 min west on the Trans-Canada" },
    ],
    travelNote:
      "Times are from the city centre in normal traffic. For lake-country weddings past Gimli, ask and we'll include the travel in your quote.",
    processHeading: "From inquiry to last dance",
    process: [
      "Tell us your date, venue and guest count through the inquiry form or by phone. You'll get a written quote within 24 hours, and a deposit holds your date.",
      "Your DJ then meets with you, in person or over a call, for the music consultation: must-plays and do-not-plays, entrance songs, first dance, parent dances, and the run of speeches. If your venue has a coordinator, we confirm the timeline and load-in with them directly.",
      "On the day we arrive early for setup and a sound check, MC the formal parts of the evening, and watch the floor once dancing starts, adjusting the music to the crowd in front of us.",
    ],
    faqHeading: "Winnipeg DJ questions",
    faqs: [
      {
        question: "How much does a wedding DJ cost in Winnipeg?",
        answer:
          "Every Winnipeg wedding gets a custom quote. The total depends on your hours, whether you add ceremony sound, extra lighting or a photobooth, and the time of year. The quote you receive lists every line, so you know the full cost up front. Send your date and venue through the inquiry form or call +1-431-441-2676, and we'll reply within 24 hours.",
      },
      {
        question: "How far in advance should I book a DJ in Winnipeg?",
        answer:
          "As soon as your venue is booked. Saturdays from May through September go first, and December fills quickly with company holiday parties. Fridays, Sundays and winter weddings usually have more flexibility, so shorter notice can still work. If your date is close, call +1-431-441-2676 and we'll tell you right away whether a DJ is free.",
      },
      {
        question: "Do you bring sound and lighting for Winnipeg venues?",
        answer:
          "Yes. Every package includes a sound system matched to your room, wireless microphones for speeches, and dance-floor lighting. Some Winnipeg venues have their own lighting, like Club Fenom at Canad Inns Destination Centre, and we work alongside it. For downtown hotels and theatres we confirm power, dock times and elevator access with the venue in advance.",
      },
      {
        question: "Can the DJ also MC our Winnipeg reception?",
        answer:
          "Yes, your DJ MCs the evening: the grand entrance, dinner announcements, speeches and toasts, the first dance, and keeping things on time with the venue and caterer. If your reception includes cultural traditions, a family member speaking in another language, or a surprise, we plan the order and the cues with you at the consultation.",
      },
      {
        question: "Do you DJ ceremonies and cocktail hour too?",
        answer:
          "We do. Add ceremony and cocktail-hour sound to your reception package and we'll run a separate setup for the ceremony, with a microphone for your officiant and your processional and recessional songs on cue. Cocktail music follows while you're away for photos. It works well at venues like The Gates on Roblin, where ceremony and reception share a property.",
      },
      {
        question: "Do you cover weddings outside Winnipeg?",
        answer:
          "Yes. We travel across the Capital Region and beyond: Selkirk, Steinbach, Stonewall, Oak Bluff, Headingley, Gimli and Portage la Prairie are all within about an hour. Your quote shows any travel for venues outside the city. For Westman weddings, our Brandon crew is closer, and the same planning process applies.",
      },
    ],
    otherCity: {
      before: "Getting married out west? See our page for a ",
      anchor: "wedding DJ in Brandon",
      href: "/dj-service/brandon",
      after: ", with Westman venues and drive times.",
    },
    reading: [
      { href: "/blog/winnipeg-venues", label: "Top 10 Winnipeg wedding venues we love working with" },
      { href: "/blog/winnipeg-timeline", label: "Planning your Winnipeg wedding: a DJ timeline" },
      { href: "/blog/playlist-vs-dj", label: "Why a playlist can't replace a pro DJ" },
    ],
    contactLine:
      "Trident Music, 425 Ballantrae Dr Suite 110, Winnipeg, MB R3T 6H6 · +1-431-441-2676 · hello@tridenteventgroup.ca · Office hours Monday to Friday, 9 AM to 4 PM",
    ctaHeading: "Planning something in Winnipeg?",
    ctaText: "Send the date, the venue and a rough guest count. A written quote follows within 24 hours.",
    schema: {
      alternateName: "Trident Music Winnipeg",
      address: {
        streetAddress: "425 Ballantrae Dr Suite 110",
        postalCode: "R3T 6H6",
        addressLocality: "Winnipeg",
        addressRegion: "MB",
        addressCountry: "CA",
      },
      geo: { latitude: 49.8951, longitude: -97.1384 },
      areaServed: ["Winnipeg", "Selkirk", "Steinbach", "Stonewall", "Oak Bluff", "Headingley"],
    },
  },
};

export function isCityPageSlug(slug: string): slug is CityPageSlug {
  return slug === "brandon" || slug === "winnipeg";
}

export function cityPageUrl(slug: CityPageSlug): string {
  return `${SITE_URL}/dj-service/${slug}`;
}
