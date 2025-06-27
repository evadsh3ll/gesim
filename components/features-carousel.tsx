"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";

export function FeaturesCarousel() {
//   const data = [
//     {
//       title: "✨ Pay-As-You-Use",
//       description: "Usage-based billing using smart contracts and oracle integration",
//       src: "/screen1.png",
//     },
//     {
//       title: "🔐 Secure & Encrypted",
//       description: "Private login via ZK identity with encrypted, user-owned data.",
//       src: "/screen2.png",
//     },
//     {
//       title: "🌐 Global Access",
//       description: "Connect in 180+ countries—no SIM cards, no roaming fees.",
//       src: "/screen3.png",
//     },
//     {
//       title: "🚀 Instant Onboarding",
//       description: "Instant eSIM access via wallet—no apps, no delays.",
//       src: "/screen4.png",
//     },
//     {
//       title: "💵 Crypto & Fiat Top-ups",
//       description: "Top up with USDC or fiat instantly via on-ramps.",
//       src: "/screen5.png",
//     },
//   ];
const data = [
    {
      category: "Pay-As-You-Use",
      title: "Usage-based billing using smart contracts and oracle integration.",
      src: "/screen1.png",
      content: <DummyContent />,
    },
    {
      category: "ProductivSecure & Encryptedity",
      title: "Private login via ZK identity with encrypted, user-owned data.",
 src: "/screen2.png",      content: <DummyContent />,
    },
    {
      category: "Global Access",
      title: "Connect in 180+ countries—no SIM cards, no roaming fees",
      src: "/screen3.png",      content: <DummyContent />,
    },
   
    {
      category: "Instant Onboarding",
      title: "Instant eSIM access via wallet—no apps, no delays",
      src: "/screen4.png",      content: <DummyContent />,
    },
    {
      category: "Crypto & Fiat Top-ups",
      title: "Top up with USDC or fiat instantly via on-ramps.",
      src: "/screen5.png",      content: <DummyContent />,
    },
  ];
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-8">
        Benifits of GeSIM.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

// Custom Card component for this carousel
function FeatureCard({ card, index }: { card: { title: string; description: string; src: string }; index: number }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 md:p-12 bg-[#F5F5F7] dark:bg-neutral-800 rounded-3xl shadow-lg h-full min-h-[420px]">
      <Image
        src={card.src}
        alt={card.title}
        width={320}
        height={320}
        className="mb-6 rounded-2xl object-contain w-[220px] h-[220px] md:w-[320px] md:h-[320px]"
        priority={index === 0}
      />
      <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">{card.title}</h3>
      <p className="text-base md:text-xl text-neutral-600 dark:text-neutral-300 text-center max-w-md">{card.description}</p>
    </div>
  );
}
const DummyContent = () => {
    return (
      <>
        {[...new Array(3).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
              className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                  The first rule of Apple club is that you boast about Apple club.
                </span>{" "}
                Keep a journal, quickly jot down a grocery list, and take amazing
                class notes. Want to convert those notes to text? No problem.
                Langotiya jeetu ka mara hua yaar is ready to capture every
                thought.
              </p>
              <img
                src="https://assets.aceternity.com/macbook.png"
                alt="Macbook mockup from Aceternity UI"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              />
            </div>
          );
        })}
      </>
    );
  };
   
 