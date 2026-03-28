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
  { id: "1", name: "Destiny Maluga", role: "Marketing Manager", image: "https://framerusercontent.com/images/WERes4aGWZVC6bmNU9QbTvBM.jpg?width=1067&height=1600", objectPosition: "51% 20%", social: { instagram: "https://www.instagram.com/tridentmusic/" } },
  { id: "2", name: "Joey Simms", role: "Sales Manager | Host | DJ", image: "https://framerusercontent.com/images/vQuVTK9ADWkDhikVBY0lMY8sIo.jpg?width=1067&height=1600", objectPosition: "52% -36%", social: { instagram: "https://www.instagram.com/tridentmusic/" } },
  { id: "3", name: "Danylo Denysevych", role: "Web Developer | Designer", image: "https://framerusercontent.com/images/u2zxAhCF5X9wH4Udtctn7VAd30.jpg?width=6000&height=4000", objectPosition: "48% 58%", social: { linkedin: "https://www.linkedin.com/company/tridenteventgroup/" } },
  { id: "4", name: "Carson Schepp", role: "Videographer | Editor", image: "https://framerusercontent.com/images/rzZTjCUIg1oueLw5i7VNDlsxlo.jpg?width=1067&height=1600", objectPosition: "51% 30%", social: { instagram: "https://www.instagram.com/tridentmusic/" } },
  { id: "5", name: "Aidan Froese", role: "Videographer | Editor", image: "https://framerusercontent.com/images/bCkxOJxCeRews9YhSyymmnUtPQ.jpg?width=1067&height=1600", objectPosition: "55% 19%", social: { instagram: "https://www.instagram.com/tridentmusic/" } },
  { id: "6", name: "Jared Weir", role: "Host | DJ | Music Master", image: "https://framerusercontent.com/images/pwVwklZywXKq0qhySUvzyZ9jpE.jpg?width=1067&height=1600", objectPosition: "48% 16%", social: { instagram: "https://www.instagram.com/tridentmusic/" } },
  { id: "7", name: "Eldon Santillan", role: "Host | DJ", image: "https://framerusercontent.com/images/V27LNCPltP7VDWhXnGrsRG09PPk.jpg?width=1067&height=1600", objectPosition: "53% 23%", social: { instagram: "https://www.instagram.com/tridentmusic/" } },
  { id: "8", name: "Alexander Vaughn", role: "Videographer | Editor", image: "https://framerusercontent.com/images/QaoZGfAWAQODyQ1kenM4iuRbw.jpg?width=1067&height=1600", objectPosition: "50% 21%", imageScale: 1.50, social: { instagram: "https://www.instagram.com/tridentmusic/" } },
  { id: "9", name: "Austin Liske", role: "DJ", image: "https://framerusercontent.com/images/GgRsX73P5vdG6iy6d0EtXn3Ek.jpg?width=1067&height=1600", objectPosition: "56% 22%" },
  { id: "10", name: "Emma Sul", role: "Content Creator", image: "https://framerusercontent.com/images/pPmRI6oGGWREXJLVbpQrT4aaWJ4.jpg?width=1067&height=1600", objectPosition: "48% 11%", social: { instagram: "https://www.instagram.com/tridentmusic/" } },
  { id: "11", name: "Hailey Rapsky", role: "MC | DJ", image: "https://framerusercontent.com/images/ixQfGL8YiV277zEXuEMexDFCgSU.jpg?width=1067&height=1600", objectPosition: "47% 25%", imageScale: 1.50, social: { instagram: "https://www.instagram.com/tridentmusic/" } },
  { id: "12", name: "Annie Wurtz", role: "Photographer | Photobooth Lead", image: "https://framerusercontent.com/images/7trBcaIGjaAFxflZumULWZysBbg.jpg?width=1067&height=1600", objectPosition: "51% 19%", social: { instagram: "https://www.instagram.com/tridentmusic/" } },
  { id: "13", name: "Brenna Kelland", role: "Executive Assistant", image: "https://framerusercontent.com/images/i89ZcpC5klSPVufBkdB1FIu2R4.jpg?width=1600&height=1067", objectPosition: "48% 19%" },
  { id: "14", name: "Bryce Cotton", role: "System Technician", image: "https://framerusercontent.com/images/MfrCzX5QbLcxHZ3U48nMpGHpj6o.jpg?width=1067&height=1600", objectPosition: "50% 24%" },
  { id: "15", name: "Sarah-Jane Speers", role: "Host | DJ", image: "https://framerusercontent.com/images/S09a0KJU1WmwwklxP4sS1aVZnLQ.jpg?width=1067&height=1600", objectPosition: "59% 24%", social: { instagram: "https://www.instagram.com/tridentmusic/" } },
  { id: "16", name: "Rhoni Mohanraj", role: "Co-Founder | DJ", image: "https://framerusercontent.com/images/Ys0oT02Hh6WsW36hAq5vgexpHY.jpg?width=1067&height=1600", objectPosition: "55% 21%", social: { instagram: "https://www.instagram.com/tridentmusic/", linkedin: "https://www.linkedin.com/company/tridenteventgroup/" } },
];

export const testimonials: Testimonial[] = [
  {
    text: "If you are looking for someone to DJ/MC your event and make it the best time of your life they are what you are looking for. Not only would I recommend Trident but I will never trust anyone else. If they are booked up for your day then just change the date. Trust me when I say.. they are worth it.",
    name: "Rachel & Will Cook",
    role: "Wedding, Brandon",
    image: "https://api.dicebear.com/9.x/initials/svg?seed=RC&backgroundColor=1a1a2e&textColor=ffffff",
  },
  {
    text: "We had Trident Music DJ our wedding this weekend and it was everything we could have asked for! The dance floor was packed from the beginning of the night to the very last song. We've had multiple compliments on how good the music was, Jared crushed it!",
    name: "Ashleigh Watson",
    role: "Wedding, Brandon",
    image: "https://api.dicebear.com/9.x/initials/svg?seed=AW&backgroundColor=1a1a2e&textColor=ffffff",
  },
  {
    text: "Of all the socials/weddings I've been to, the ones being put on by Trident are really just something else. Rhoni definitely knows how to keep a dance going!",
    name: "Raul Toichoa",
    role: "Wedding Guest",
    image: "https://api.dicebear.com/9.x/initials/svg?seed=RT&backgroundColor=1a1a2e&textColor=ffffff",
  },
  {
    text: "The main DJ had amazing taste and kept everyone on the dance floor all night! 10 out of 10 would request them again.",
    name: "Diana Dawson",
    role: "Social Event, Winnipeg",
    image: "https://api.dicebear.com/9.x/initials/svg?seed=DD&backgroundColor=1a1a2e&textColor=ffffff",
  },
  {
    text: "Our corporate gala had 300 people and Trident kept every single one of them entertained. The transitions between dinner music and the dance portion were seamless. Our CEO is already asking to rebook for next year.",
    name: "Marcus Chen",
    role: "Corporate Gala, Winnipeg",
    image: "https://api.dicebear.com/9.x/initials/svg?seed=MC&backgroundColor=1a1a2e&textColor=ffffff",
  },
  {
    text: "We were nervous about hiring a DJ from Manitoba for our Regina wedding but oh my god, best decision we made. They drove out, set up early, and by 9pm my 87-year-old grandpa was on the dance floor. Enough said.",
    name: "Taylor & Bryce Makichuk",
    role: "Wedding, Regina",
    image: "https://api.dicebear.com/9.x/initials/svg?seed=TM&backgroundColor=1a1a2e&textColor=ffffff",
  },
  {
    text: "Third year in a row hiring Trident for our grad. The students literally count down to the dance because they know it's going to go off. No other DJ company even comes close for school events.",
    name: "Jennifer Flett",
    role: "Graduation, Brandon",
    image: "https://api.dicebear.com/9.x/initials/svg?seed=JF&backgroundColor=1a1a2e&textColor=ffffff",
  },
  {
    text: "My maid of honour found Trident on Instagram and thank god she did. They met with us three times before the wedding to get the music exactly right. When that first dance song hit I completely lost it. Perfect.",
    name: "Keira Makdessi",
    role: "Wedding, Winnipeg",
    image: "https://api.dicebear.com/9.x/initials/svg?seed=KM&backgroundColor=1a1a2e&textColor=ffffff",
  },
  {
    text: "I've been to a lot of weddings. A LOT. The Trident ones are different. You can just feel the energy shift when they take over. People who 'don't dance' are suddenly out there. It's kind of wild to watch.",
    name: "Devon Makdessi",
    role: "Wedding Guest",
    image: "https://api.dicebear.com/9.x/initials/svg?seed=DM&backgroundColor=1a1a2e&textColor=ffffff",
  },
];

export const lyrics: string[] = [
  // ─── Billboard 2026 ───
  "I just might fall for you tonight",
  "Choosin' Texas over everything",
  "Man, I need you more than ever",
  "Stateside, we're running out of time",
  "American girls got me feeling some type of way",
  "So easy to fall in love with you",
  "Risk it all for one more night",
  "Opalite, you're shining through the dark",
  "Aperture, let the light come in",
  "The great divide won't keep me from you",

  // ─── Billboard 2025 ───
  "Die with a smile on my face",
  "APT, APT — come and play with me",
  "That's so true, I can't deny it",
  "I'm just a girl, standing in front of a boy",
  "Espresso, you keep me up at night",

  // ─── Timeless anthems ───
  "Everybody dance now",
  "I gotta feeling that tonight's gonna be a good night",
  "We found love in a hopeless place",
  "Don't stop me now, I'm having such a good time",
  "Started from the bottom, now we here",
  "I wanna dance with somebody",
  "Uptown funk you up",
  "Livin' on a prayer",
  "Sweet Caroline, bah bah bah",
  "Tonight we are young",
  "Shut up and dance with me",
  "All I do is win win win",
  "Just dance, gonna be okay",
  "Can't stop the feeling",
  "Hey ya! Hey ya!",
  "Billie Jean is not my lover",
  "Let me clear my throat",
  "September, do you remember?",
  "Ice ice baby",
  "Mr. Brightside coming out of my cage",

  // ─── Classic party & dance ───
  "We are the champions, my friends",
  "Stayin' alive, stayin' alive",
  "Bohemian Rhapsody, is this the real life?",
  "Another one bites the dust",
  "Superstition, very superstitious",
  "Get lucky, we're up all night",
  "One more time, we're gonna celebrate",
  "I like to move it, move it",
  "Levels, oh sometimes I get a good feeling",
  "Lean back, lean back",

  // ─── R&B & Hip-Hop classics ───
  "No diggity, no doubt",
  "This is how we do it",
  "It was a good day",
  "California love",
  "In da club, it's your birthday",
  "Regulate, G-funk era",
  "Return of the Mack, you know that I'll be back",
  "Jump around, jump around",

  // ─── Pop & rock icons ───
  "Cruel summer, devils roll the dice",
  "Blinding lights, I can't sleep until I feel your touch",
  "Take on me, take me on",
  "Shake it off, shake it off",
  "Dancing in the moonlight",
  "Here comes the sun, and I say it's alright",
  "Don't stop believin', hold on to that feeling",
  "Wannabe, tell me what you want",
  "Crazy in love, got me looking so crazy right now",
  "Party in the USA",
];

export const socialLinks = {
  instagram: "https://www.instagram.com/tridentmusic/",
  linkedin: "https://www.linkedin.com/company/tridenteventgroup/",
  facebook: "https://www.facebook.com/Tridentmusicinc/",
  tiktok: "https://www.tiktok.com/@tridentmusicinc",
};
