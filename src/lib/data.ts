import type { TeamMember, Service, Testimonial, NavItem } from "@/types";

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "The Team", href: "/the-team" },
  { label: "Blog", href: "/blog" },
  { label: "Inquire", href: "/inquire" },
  { label: "Podcast", href: "/podcast" },
  { label: "mrng", href: "https://www.mrng.ca/", external: true },
];

export const services: Service[] = [
  {
    id: 1,
    title: "Wedding Entertainment",
    image: "https://framerusercontent.com/images/m1TjCz3iD0cd9ldiyZ2TnuuiVfc.jpg?width=5760&height=3840",
    href: "/inquire",
  },
  {
    id: 2,
    title: "Social Entertainment",
    image: "https://framerusercontent.com/images/3ut7qx7Ls1q6N5TUsQ4KoDA2EI.jpg?width=2500&height=1667",
    href: "/inquire",
  },
  {
    id: 3,
    title: "PhotoBooth",
    image: "https://framerusercontent.com/images/BJj6ymIhmv4mF1DoLoKuOPsu6c.jpg?width=3600&height=2400",
    href: "/inquire",
  },
  {
    id: 4,
    title: "Corporate & Galas",
    image: "https://framerusercontent.com/images/VXgOIbBh3TE2oPhGJSdJvCsbSI.jpg?width=2500&height=1667",
    href: "/inquire",
  },
  {
    id: 5,
    title: "A/V Rental",
    image: "https://framerusercontent.com/images/o2w2YWAUpH91rG6985dxW2hXnZs.jpg?width=2500&height=3333",
    href: "/inquire",
  },
  {
    id: 6,
    title: "Schools & Grads",
    image: "https://framerusercontent.com/images/CzjLhmXuSiMiSnX1LqmJA2Cewlk.jpg?width=2500&height=1406",
    href: "/inquire",
  },
];

export const teamMembers: TeamMember[] = [
  { name: "Destiny Maluga", role: "Marketing Manager", image: "https://framerusercontent.com/images/WERes4aGWZVC6bmNU9QbTvBM.jpg?width=1067&height=1600" },
  { name: "Joey Simms", role: "Sales Manager | Host | DJ", image: "https://framerusercontent.com/images/vQuVTK9ADWkDhikVBY0lMY8sIo.jpg?width=1067&height=1600" },
  { name: "Danylo Denysevych", role: "Web Developer | Designer", image: "https://framerusercontent.com/images/u2zxAhCF5X9wH4Udtctn7VAd30.jpg?width=6000&height=4000" },
  { name: "Carson Schepp", role: "Videographer | Editor", image: "https://framerusercontent.com/images/rzZTjCUIg1oueLw5i7VNDlsxlo.jpg?width=1067&height=1600" },
  { name: "Aidan Froese", role: "Videographer | Editor", image: "https://framerusercontent.com/images/bCkxOJxCeRews9YhSyymmnUtPQ.jpg?width=1067&height=1600" },
  { name: "Jared Weir", role: "Host | DJ | Music Master", image: "https://framerusercontent.com/images/pwVwklZywXKq0qhySUvzyZ9jpE.jpg?width=1067&height=1600" },
  { name: "Eldon Santillan", role: "Host | DJ", image: "https://framerusercontent.com/images/V27LNCPltP7VDWhXnGrsRG09PPk.jpg?width=1067&height=1600" },
  { name: "Alexander Vaughn", role: "Videographer | Editor", image: "https://framerusercontent.com/images/QaoZGfAWAQODyQ1kenM4iuRbw.jpg?width=1067&height=1600" },
  { name: "Austin Liske", role: "DJ", image: "https://framerusercontent.com/images/GgRsX73P5vdG6iy6d0EtXn3Ek.jpg?width=1067&height=1600" },
  { name: "Emma Sul", role: "Content Creator", image: "https://framerusercontent.com/images/pPmRI6oGGWREXJLVbpQrT4aaWJ4.jpg?width=1067&height=1600" },
  { name: "Hailey Rapsky", role: "MC | DJ", image: "https://framerusercontent.com/images/ixQfGL8YiV277zEXuEMexDFCgSU.jpg?width=1067&height=1600" },
  { name: "Annie Wurtz", role: "Photographer | Photobooth Lead", image: "https://framerusercontent.com/images/7trBcaIGjaAFxflZumULWZysBbg.jpg?width=1067&height=1600" },
  { name: "Brenna Kelland", role: "Executive Assistant", image: "https://framerusercontent.com/images/i89ZcpC5klSPVufBkdB1FIu2R4.jpg?width=1600&height=1067" },
  { name: "Bryce Cotton", role: "System Technician", image: "https://framerusercontent.com/images/MfrCzX5QbLcxHZ3U48nMpGHpj6o.jpg?width=1067&height=1600" },
  { name: "Sarah-Jane Speers", role: "Host | DJ", image: "https://framerusercontent.com/images/S09a0KJU1WmwwklxP4sS1aVZnLQ.jpg?width=1067&height=1600" },
  { name: "Rhoni Mohanraj", role: "Co-Founder | DJ", image: "https://framerusercontent.com/images/Ys0oT02Hh6WsW36hAq5vgexpHY.jpg?width=1067&height=1600" },
];

export const testimonials: Testimonial[] = [
  {
    quote: "If you are looking for someone to DJ/MC your event and make it the best time of your life they are what you are looking for. Not only would I recommend Trident but I will never trust anyone else. If they are booked up for your day then just change the date. Trust me when I say.. they are worth it.",
    author: "Rachel & Will Cook",
  },
  {
    quote: "We had trident music dj our wedding this weekend and it was everything we could have asked for! The dance floor was packed from the beginning of the night to the very last song. We've had multiple compliments on how good the music was, Jared crushed it!",
    author: "Ashleigh Watson",
  },
  {
    quote: "Of all the socials/weddings I've been to, the ones being put on by Trident are really just something else. Rhoni definitely knows how to keep a dance going!",
    author: "Raul Toichoa",
  },
  {
    quote: "The main DJ had amazing taste and kept everyone on the dance floor all night! 10 out of 10 would request them again.",
    author: "Diana Dawson",
  },
];

export const lyrics: string[] = [
  '"Everybody dance now" — C+C Music Factory',
  '"I gotta feeling that tonight\'s gonna be a good night" — Black Eyed Peas',
  '"We found love in a hopeless place" — Rihanna',
  '"Don\'t stop me now, I\'m having such a good time" — Queen',
  '"Yeah, you got that yummy yummy" — Justin Bieber',
  '"Started from the bottom, now we here" — Drake',
  '"Put your hands up in the air" — Ludacris',
  '"I wanna dance with somebody" — Whitney Houston',
  '"Uptown funk you up" — Bruno Mars',
  '"Livin\' on a prayer" — Bon Jovi',
  '"Sweet Caroline, bah bah bah" — Neil Diamond',
  '"Tonight we are young" — fun.',
  '"Shut up and dance with me" — WALK THE MOON',
  '"Mr. Brightside" — The Killers',
  '"Yeah! Yeah! Yeah!" — Usher',
  '"All I do is win win win" — DJ Khaled',
  '"Just dance, gonna be okay" — Lady Gaga',
  '"Somebody once told me the world is gonna roll me" — Smash Mouth',
  '"Ice ice baby" — Vanilla Ice',
  '"It\'s getting hot in here" — Nelly',
  '"Can\'t stop the feeling" — Justin Timberlake',
  '"Hey ya! Hey ya!" — Outkast',
  '"Billie Jean is not my lover" — Michael Jackson',
  '"Let me clear my throat" — DJ Kool',
  '"September, do you remember?" — Earth, Wind & Fire',
];

export const socialLinks = {
  instagram: "https://www.instagram.com/tridentmusic/",
  linkedin: "https://www.linkedin.com/company/tridenteventgroup/",
  facebook: "https://www.facebook.com/Tridentmusicinc/",
  tiktok: "https://www.tiktok.com/@tridentmusicinc",
};
