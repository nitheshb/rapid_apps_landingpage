"use client";

import React from "react";
import Image from "next/image";
import Tag from "./Tag";
import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";

// Portfolio Images
import d1 from "../public/d_1.jpeg";
import d2 from "../public/d_2.jpeg";
import d3 from "../public/d_3.jpeg";
import d4 from "../public/d_4.jpeg";
import d5 from "../public/d_5.jpeg";
import d6 from "../public/d_6.jpeg";
import north from "../public/north.png";
import p5 from "../public/p5.png";
import d7 from "./images/d7.svg";
import d8 from "./images/d8.svg";
import line from "./images/line.svg";
import nonasties_web from "../public/nonasties_web.png";
import jewelary from "../public/jewelary.jpg";
import jewellery2 from "../public/jewellery2.jpg";
import cluck_egg from "../public/cluck_egg.jpg";
import jewellery_web from "../public/jewellery_web.png";
import Food1 from "../public/Food1.jpg";
import cluckEgg from "../public/cluck&Egg.png";
import Food2 from "../public/Food2.jpg";
import kalki from "../public/kalki.png";
import women from "../public/women.jpeg";
import women2 from "../public/women2.jpeg";
import Tanishq from "../public/Tanishq.jpg";
import Tanishq2 from "../public/Tanishq2.jpg";
import Tanishq3 from "../public/Tanishq3.jpg";

const MobileMockup = ({ image, index }: { image: any; index: number }) => {
  const caseClass = `case-${(index % 4) + 1}`;

  // Side-ways tilt: First item tilts left, second tilts right (mirroring)
  const isFirst = index === 0;

  return (
    <div
      className={`iphone-case ${caseClass} scale-[0.85] sm:scale-100 transition-transform duration-500 ease-out hover:rotate-0`}
      style={{
        transform: `rotate(${isFirst ? '-8deg' : '8deg'})`
      }}
    >
      <div className="gradient-container">
        <div className="gradient-1" />
        <div className="gradient-1" style={{ transform: 'rotate(180deg)' }} />
      </div>
      <div className="iphone-screen">
        <Image src={image} alt="" fill className="object-cover" />
      </div>
    </div>
  );
};

const WebMockup = ({ image }: { image: any }) => {
  return (
    <div className="object-laptop w-full max-w-[800px] mx-auto transition-transform duration-500 hover:scale-[1.02]">
      <div className="screen">
        <div className="lcd">
          <Image src={image} alt="" fill className="object-cover" />
        </div>
        <div className="gloss" />
        <div className="reflexion" />
        <div className="highlight one" />
        <div className="highlight two" />
      </div>
      <div className="keyboard one" />
      <div className="keyboard two" />
    </div>
  );
};

const portfolioItems = [
  { url: Tanishq2, categories: ["Jewellery"], type: "mobile" },
  { url: jewellery_web, categories: ["Jewellery"], type: "web" },
  { url: Tanishq3, categories: ["Jewellery"], type: "mobile" },
  { url: jewelary, categories: ["Clothing"], type: "mobile" },
  { url: nonasties_web, categories: ["Clothing"], type: "web" },
  { url: d4, categories: ["Clothing"], type: "mobile" },
  { url: cluck_egg, categories: ["Poultry", "Agriculture"], type: "mobile" },
  { url: cluck_egg, categories: ["Poultry", "Agriculture"], type: "web" },
  { url: d5, categories: ["Poultry", "Agriculture"], type: "mobile" },
  { url: cluck_egg, categories: ["Task"], type: "mobile" },
  { url: cluck_egg, categories: ["Task"], type: "web" },
  { url: d6, categories: ["Task", "Management"], type: "mobile" },
  { url: nonasties_web, categories: ["Logistics"], type: "web" },
  { url: d4, categories: ["Logistics"], type: "mobile" },
  { url: cluck_egg, categories: ["E-commerce", "Management"], type: "mobile" },
  { url: cluck_egg, categories: ["E-commerce", "Management"], type: "web" },
  { url: d5, categories: ["Agriculture"], type: "mobile" },
  { url: Food1, categories: ["Food & Beverage"], type: "mobile" },
  { url: cluckEgg, categories: ["Food & Beverage"], type: "web" },
  { url: Food2, categories: ["Food & Beverage"], type: "mobile" },
  { url: women, categories: ["Fashion"], type: "mobile" },
  { url: kalki, categories: ["Fashion"], type: "web" },
  { url: women2, categories: ["Fashion"], type: "mobile" },
  { url: women, categories: ["Apparel"], type: "mobile" },
  { url: kalki, categories: ["Apparel"], type: "web" },
  { url: women2, categories: ["Apparel"], type: "mobile" },
];

const categories = [
  {
    text: "Jewellery",
    gradient: "linear-gradient(#2563EB, #1D4ED8)",
    borderColor: "#1D4ED8",
  },
  {
    text: "Fashion",
    gradient: "linear-gradient(#FB923C, #F97316)",
    borderColor: "#F97316",
  },
  {
    text: "Beauty & Cosmetics",
    gradient: "linear-gradient(#A855F7, #9333EA)",
    borderColor: "#9333EA",
  },
  {
    text: "Food & Beverage",
    gradient: "linear-gradient(#FACC15, #EAB308)",
    borderColor: "#EAB308",
  },
  {
    text: "Health & Wellness",
    gradient: "linear-gradient(#F472B6, #EC4899)",
    borderColor: "#EC4899",
  },
  {
    text: "Apparel",
    gradient: "linear-gradient(#22C55E, #16A34A)",
    borderColor: "#16A34A",
  },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].text);

  const filteredItems = portfolioItems.filter((item) =>
    item.categories.includes(activeCategory)
  );

  // Ensure order: Mobile, Web, Mobile
  const orderedItems = [
    ...filteredItems.filter(item => item.type === 'mobile').slice(0, 1),
    ...filteredItems.filter(item => item.type === 'web').slice(0, 1),
    ...filteredItems.filter(item => item.type === 'mobile').slice(1, 2)
  ];

  return (
    <div className="relative max-w-8xl mx-auto px-4 py-6 overflow-hidden">
      {/* Top Left Decoration */}
      <div className="absolute left-0 top-0 hidden sm:block">
        <Image src={d7} alt="" width={200} height={200} />
      </div>

      {/* Center Line */}
      <motion.div
        className="hidden sm:flex items-center justify-center"
        transition={{ duration: 1, ease: "easeInOut" }}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image src={line} alt="line" />
      </motion.div>

      {/* Top Right Decoration + Orbit Dots (hide on mobile) */}
      <div className="absolute right-0 top-0 hidden sm:block">
        <div className="relative w-[200px] h-[200px]">
          <Image src={d8} alt="" fill className="object-contain" />
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-black rounded-full"
                style={{
                  top: `${Math.sin((i * 30 * Math.PI) / 180) * 40 + 80}px`,
                  left: `${Math.cos((i * 30 * Math.PI) / 180) * 40 + 80}px`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="text-center pt-16 sm:pt-20">
        <motion.h1
          className="text-[28px] sm:text-5xl md:text-6xl font-bold mb-10 leading-tight"
          transition={{ duration: 1, ease: "easeInOut" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Converting Web Apps into Native Mobile Apps
          <br />— Powered by Rapid Apps
        </motion.h1>

        {/* Tags */}
        <motion.div
          transition={{ duration: 1, ease: "easeInOut" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-12 sm:mb-16">
            {categories.map((category, index) => (
              <Tag
                key={index}
                text={category.text}
                gradient={category.gradient}
                borderColor={category.borderColor}
                onClick={() => setActiveCategory(category.text)}
                isActive={activeCategory === category.text}
              />
            ))}
          </div>
        </motion.div>

        {/* Portfolio Images - Refined Overlapping Layout (No Gaps) */}
        <div className="relative w-full py-10">
          <motion.div layout transition={{ duration: 0.5, ease: "easeInOut" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 max-w-[1400px] mx-auto px-4 items-center"
              >
                {orderedItems.map((item, i) => {
                  const mobileIdx = i === 2 ? 1 : 0;

                  return (
                    <div
                      key={i}
                      className={`relative flex items-center justify-center ${item.type === "web"
                        ? "col-span-1 sm:col-span-2 lg:col-span-3 h-[240px] sm:h-[350px] lg:h-[480px] z-10"
                        : `col-span-1 h-[280px] sm:h-[320px] lg:h-[400px] z-20 ${i === 0 ? "lg:-mr-28" : "lg:-ml-28"
                        }`
                        }`}
                    >
                      {item.type === "web" ? (
                        <div className="w-full scale-100 lg:scale-[1.2]">
                          <WebMockup image={item.url} />
                        </div>
                      ) : (
                        <div className="scale-[0.70] sm:scale-[0.80] lg:scale-[0.85]">
                          <MobileMockup image={item.url} index={mobileIdx} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {orderedItems.length === 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-500 mt-10 text-center"
              >
                No projects found in this category.
              </motion.p>
            )}
          </motion.div>
        </div>

        <style jsx global>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default function RapidAppsLanding() {
  return (
    <main className="min-h-screen">
      <PortfolioSection />
    </main>
  );
}
