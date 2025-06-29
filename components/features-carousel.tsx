"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";

export function FeaturesCarousel() {
  const data = [
    {
      category: "Global Pay-Per-Use Connectivity",
      title: "Smart billing, no changing eSIM, 180+ countries",
      src: "/screen1.png",
      content: <DummyContent />,
    },
    {
      category: "Operator switch logic",
      title: "Seamless Effortless Travel Connectivity.",
      src: "/screen2.png",
      content: <DummyContent />,
    },
    {
      category: "eSIM SBT Mint",
      title: "On-Chain Identity for Travel Perks",
      src: "/screen3.png",
      content: <DummyContent />,
    },
    {
      category: "Buy regional data",
      title: "Top up with USDC or fiat instantly via on-ramps.",
      src: "/screen4.png",
      content: <DummyContent />,
    },
    {
      category: "Crypto & Fiat Top-ups",
      title: "Top up with USDC or fiat instantly via on-ramps.",
      src: "/screen5.png",
      content: <DummyContent />,
    },
   
  ];

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full">
      {/* Title section - positioned before the scroll effect */}
      <div className="py-20">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-8">
          Benefits of GeSIM.
        </h2>
      </div>
      
      {/* Horizontal scroll carousel */}
      <Carousel items={cards} />
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
                Experience the future of mobile connectivity.
              </span>{" "}
              Keep connected globally with our innovative eSIM technology.
              No more physical SIM cards, no more roaming fees, just seamless
              connectivity wherever you go.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Technology mockup"
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