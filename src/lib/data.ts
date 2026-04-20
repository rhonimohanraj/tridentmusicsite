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
    image: "/images/slide_1.jpg",
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
    image: "/images/slide_3.jpg",
    href: "/inquire",
  },
  {
    id: 6,
    title: "Schools & Grads",
    image: "/images/slide_2.jpg",
    href: "/inquire",
  },
];

export const teamMembers: TeamMember[] = [
  { id: "1", name: "Zuha Jamil", role: "Client Communications", image: "/images/zuha-jamil.jpg", objectPosition: "50% 5%", social: { instagram: "https://www.instagram.com/tridentmusic/" } },
  { id: "2", name: "Joey Simms", role: "Sales Manager | Host | DJ", image: "https://framerusercontent.com/images/vQuVTK9ADWkDhikVBY0lMY8sIo.jpg?width=1067&height=1600", objectPosition: "52% 5%", imageScale: 1.0, social: { instagram: "https://www.instagram.com/tridentmusic/" } },
  { id: "3", name: "Danylo Denysevych", role: "Web Developer | Designer", image: "https://framerusercontent.com/images/u2zxAhCF5X9wH4Udtctn7VAd30.jpg?width=6000&height=4000", objectPosition: "48% 10%", imageScale: 1.0, social: { linkedin: "https://www.linkedin.com/company/tridenteventgroup/" } },
  { id: "4", name: "Carson Schepp", role: "Videographer | Editor", image: "https://framerusercontent.com/images/rzZTjCUIg1oueLw5i7VNDlsxlo.jpg?width=1067&height=1600", objectPosition: "51% 8%", social: { instagram: "https://www.instagram.com/tridentmusic/" } },
  { id: "5", name: "Aidan Froese", role: "Videographer | Editor", image: "https://framerusercontent.com/images/bCkxOJxCeRews9YhSyymmnUtPQ.jpg?width=1067&height=1600", objectPosition: "55% 5%", social: { instagram: "https://www.instagram.com/tridentmusic/" } },
  { id: "6", name: "Jared Weir", role: "Host | DJ | Music Master", image: "https://framerusercontent.com/images/pwVwklZywXKq0qhySUvzyZ9jpE.jpg?width=1067&height=1600", objectPosition: "48% 5%", social: { instagram: "https://www.instagram.com/tridentmusic/" } },
  { id: "7", name: "Eldon Santillan", role: "Host | DJ", image: "https://framerusercontent.com/images/V27LNCPltP7VDWhXnGrsRG09PPk.jpg?width=1067&height=1600", objectPosition: "53% 5%", social: { instagram: "https://www.instagram.com/tridentmusic/" } },
  { id: "8", name: "Alexander Vaughn", role: "Videographer | Editor", image: "https://framerusercontent.com/images/QaoZGfAWAQODyQ1kenM4iuRbw.jpg?width=1067&height=1600", objectPosition: "50% 5%", imageScale: 1.50, social: { instagram: "https://www.instagram.com/tridentmusic/" } },
  { id: "9", name: "Austin Liske", role: "DJ", image: "https://framerusercontent.com/images/GgRsX73P5vdG6iy6d0EtXn3Ek.jpg?width=1067&height=1600", objectPosition: "56% 5%" },
  { id: "10", name: "Emma Sul", role: "Content Creator", image: "https://framerusercontent.com/images/pPmRI6oGGWREXJLVbpQrT4aaWJ4.jpg?width=1067&height=1600", objectPosition: "48% 5%", social: { instagram: "https://www.instagram.com/tridentmusic/" } },
  { id: "11", name: "Hailey Rapsky", role: "MC | DJ", image: "https://framerusercontent.com/images/ixQfGL8YiV277zEXuEMexDFCgSU.jpg?width=1067&height=1600", objectPosition: "47% 5%", imageScale: 1.50, social: { instagram: "https://www.instagram.com/tridentmusic/" } },
  { id: "12", name: "Annie Wurtz", role: "Photographer | Photobooth Lead", image: "https://framerusercontent.com/images/7trBcaIGjaAFxflZumULWZysBbg.jpg?width=1067&height=1600", objectPosition: "51% 5%", social: { instagram: "https://www.instagram.com/tridentmusic/" } },
  { id: "13", name: "Brenna Kelland", role: "Executive Assistant", image: "https://framerusercontent.com/images/i89ZcpC5klSPVufBkdB1FIu2R4.jpg?width=1600&height=1067", objectPosition: "48% 10%" },
  { id: "14", name: "Bryce Cotton", role: "System Technician", image: "https://framerusercontent.com/images/MfrCzX5QbLcxHZ3U48nMpGHpj6o.jpg?width=1067&height=1600", objectPosition: "50% 5%" },
  { id: "15", name: "Sarah-Jane Speers", role: "Host | DJ", image: "https://framerusercontent.com/images/S09a0KJU1WmwwklxP4sS1aVZnLQ.jpg?width=1067&height=1600", objectPosition: "59% 5%", social: { instagram: "https://www.instagram.com/tridentmusic/" } },
  { id: "16", name: "Rhoni Mohanraj", role: "Co-Founder | DJ", image: "https://framerusercontent.com/images/Ys0oT02Hh6WsW36hAq5vgexpHY.jpg?width=1067&height=1600", objectPosition: "55% 5%", social: { instagram: "https://www.instagram.com/tridentmusic/", linkedin: "https://www.linkedin.com/company/tridenteventgroup/" } },
];

export const testimonials: Testimonial[] = [
  {
    text: "If you are looking for someone to DJ/MC your event and make it the best time of your life they are what you are looking for. Rhoni had the whole room going. Not only would I recommend Trident but I will never trust anyone else. If they are booked up for your day then just change the date. Trust me when I say.. they are worth it.",
    name: "Rachel & Will Cook",
    role: "Wedding, Brandon",
  },
  {
    text: "We had Trident Music DJ our wedding this weekend and it was everything we could have asked for! The dance floor was packed from the beginning of the night to the very last song. We've had multiple compliments on how good the music was, Jared crushed it!",
    name: "Ashleigh & Ryan Watson",
    role: "Wedding, Brandon",
  },
  {
    text: "Of all the socials/weddings I've been to, the ones being put on by Trident are really just something else. Eldon definitely knows how to keep a dance going!",
    name: "Natalia & Raul Toichoa",
    role: "Wedding Guest",
  },
  {
    text: "Joey had amazing taste and kept everyone on the dance floor all night! 10 out of 10 would request them again.",
    name: "Diana & Cole Dawson",
    role: "Social Event, Winnipeg",
  },
  {
    text: "Our corporate gala had 300 people and Trident kept every single one of them entertained. Austin on the decks was unreal. The transitions between dinner music and the dance portion were seamless. Our CEO is already asking to rebook for next year.",
    name: "Sarah Chen",
    role: "Corporate Gala, Winnipeg",
  },
  {
    text: "We were nervous about hiring a DJ from Manitoba for our Regina wedding but oh my god, best decision we made. They drove out, set up early, and by 9pm my 87-year-old grandpa was on the dance floor. Hailey read the room perfectly. Enough said.",
    name: "Taylor & Bryce Makichuk",
    role: "Wedding, Regina",
  },
  {
    text: "Third year in a row hiring Trident for our grad. Sarah-Jane had the students going crazy. They literally count down to the dance because they know it's going to go off. No other DJ company even comes close for school events.",
    name: "Jennifer Flett",
    role: "Graduation, Brandon",
  },
  {
    text: "My maid of honour found Trident on Instagram and thank god she did. Jared met with us three times before the wedding to get the music exactly right. When that first dance song hit I completely lost it. Perfect.",
    name: "Megan & Luke Baxter",
    role: "Wedding, Winnipeg",
  },
  {
    text: "I've been to a lot of weddings. A LOT. The Trident ones are different. Rhoni and Joey just bring a different energy. People who 'don't dance' are suddenly out there. It's kind of wild to watch.",
    name: "Emily & Jordan Fehr",
    role: "Wedding Guest",
  },
];

export const lyrics: string[] = [
  // ─── Billboard Hot 100 — March 2026 ───
  "Choosin' Texas over everything",
  "Man, I need you more than ever",
  "I just might fall for you tonight",
  "Just an ordinary day, and I'm next to you",
  "Golden, everything you touch turns golden",
  "Stateside, we're running out of time",
  "Opalite, you're shining through the dark",
  "The fate of Ophelia, written in the stars",
  "So easy to fall in love with you",
  "American girls got me feeling some type of way",

  // ─── 60s & 70s ───
  "Here comes the sun, and I say it's alright",
  "Bohemian Rhapsody, is this the real life?",
  "We are the champions, my friends",
  "Stayin' alive, stayin' alive",
  "Superstition, very superstitious",
  "September, do you remember?",
  "Ain't no mountain high enough",
  "I will survive, hey hey",

  // ─── 80s ───
  "Billie Jean is not my lover",
  "Don't stop believin', hold on to that feeling",
  "Take on me, take me on",
  "Livin' on a prayer",
  "Don't stop me now, I'm having such a good time",
  "I wanna dance with somebody",
  "Purple Rain, let it wash away",
  "Every breath you take, every move you make",

  // ─── 90s ───
  "No diggity, no doubt",
  "This is how we do it",
  "California love",
  "Return of the Mack, you know that I'll be back",
  "Jump around, jump around",
  "Wannabe, tell me what you want",
  "Ice ice baby",
  "It was a good day",

  // ─── 2000s ───
  "In da club, it's your birthday",
  "Hey ya! Hey ya!",
  "Crazy in love, got me looking so crazy right now",
  "Mr. Brightside coming out of my cage",
  "Yeah! Okay, let's go",
  "Dancing in the moonlight",
  "Let me clear my throat",

  // ─── 2010s ───
  "We found love in a hopeless place",
  "Uptown funk you up",
  "Shut up and dance with me",
  "Started from the bottom, now we here",
  "Can't stop the feeling",
  "All I do is win win win",
  "Get lucky, we're up all night",
  "Blinding lights, I can't sleep until I feel your touch",
  "Cruel summer, devils roll the dice",
  "Shake it off, shake it off",

  // ─── Party anthems ───
  "Everybody dance now",
  "I gotta feeling that tonight's gonna be a good night",
  "Tonight we are young",
  "Just dance, gonna be okay",
  "Party in the USA",
  "Sweet Caroline, bah bah bah",
  "One more time, we're gonna celebrate",
  "Regulate, G-funk era",
];

export const socialLinks = {
  instagram: "https://www.instagram.com/tridentmusic/",
  linkedin: "https://www.linkedin.com/company/tridenteventgroup/",
  facebook: "https://www.facebook.com/Tridentmusicinc/",
  tiktok: "https://www.tiktok.com/@tridenteventgroup.ca",
};
