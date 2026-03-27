"use client";

import { LocationPage } from "@/components/location-page";

export default function WinnipegDJServicePage() {
  return (
    <LocationPage
      city="Winnipeg"
      heroImage="https://framerusercontent.com/images/57QszomWEqCBDiWJDPLPv55lQ.webp?width=2000&height=1333"
      headline="Winnipeg's Premier Wedding & Event DJ Service"
      subtitle="Professional DJ and audio visual entertainment for weddings, corporate events, and celebrations throughout Winnipeg and surrounding areas"
      aboutCopy="As Winnipeg's premier DJ services company, mediocrity has no place here—it's not in our language, nor in our standard. We curate wedding celebrations and social events designed to leave a lasting impression—elevated, unforgettable, and effortlessly extraordinary."
      address="425 Ballantrae Dr, Winnipeg, MB R3T 6H6"
      faqs={[
        { question: "What makes Trident Music the best DJ service in Winnipeg?" },
        { question: "Do you provide wedding DJ services throughout Winnipeg?" },
        { question: "What's included in your Winnipeg DJ packages?" },
        { question: "What areas do you serve besides Winnipeg?" },
      ]}
    />
  );
}
