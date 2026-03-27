"use client";

import { LocationPage } from "@/components/location-page";

export default function ReginaDJServicePage() {
  return (
    <LocationPage
      city="Regina"
      heroImage="https://framerusercontent.com/images/sSf1izSYGKv6eVcrRnYKu06Nmk.webp?width=1500&height=1000"
      headline="Regina's Premier Wedding & Event DJ Service"
      subtitle="Professional DJ and audio visual entertainment for weddings, corporate events, and celebrations throughout Regina, Saskatchewan, and surrounding areas"
      aboutCopy="As Regina's premier DJ services company serving Regina and beyond, mediocrity has no place here—it's not in our language, nor in our standard. We curate wedding celebrations and social events designed to leave a lasting impression."
      address="381 Park Avenue East, Brandon, MB R7A 7A5"
      faqs={[
        { question: "What makes Trident Music the best DJ service in Regina?" },
        { question: "Do you provide wedding DJ services throughout Regina?" },
        { question: "What's included in your Regina DJ packages?" },
        { question: "What areas do you serve besides Regina?" },
      ]}
    />
  );
}
