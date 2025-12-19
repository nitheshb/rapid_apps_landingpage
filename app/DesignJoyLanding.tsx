"use client";

import React from "react";
import Image from "next/image";
import Tag from "./Tag";
import { motion } from "framer-motion";

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

const portfolioItems = [
  { url: d1, categories: ["Jewellery", "Clothing"], type: "mobile" },
  { url: north, categories: ["Jewellery", "E-commerce"], type: "web" },
  { url: d2, categories: ["Poultry", "Task"], type: "mobile" },
  { url: p5, categories: ["Clothing", "Logistics"], type: "web" },
  { url: d3, categories: ["Jewellery", "E-commerce"], type: "mobile" },
  { url: d4, categories: ["Clothing", "Logistics"], type: "mobile" },
  { url: d5, categories: ["Poultry", "Agriculture"], type: "mobile" },
  { url: d6, categories: ["Task", "Management"], type: "mobile" },
];

const categories = [
  {
    text: "Jewellery",
    gradient: "linear-gradient(#2563EB, #1D4ED8)",
    borderColor: "#1D4ED8",
  },
  {
    text: "Clothing",
    gradient: "linear-gradient(#22C55E, #16A34A)",
    borderColor: "#16A34A",
  },
  {
    text: "Poultry",
    gradient: "linear-gradient(#A855F7, #9333EA)",
    borderColor: "#9333EA",
  },
  {
    text: "Task",
    gradient: "linear-gradient(#FACC15, #EAB308)",
    borderColor: "#EAB308",
  },
  {
    text: "E-commerce",
    gradient: "linear-gradient(#F472B6, #EC4899)",
    borderColor: "#EC4899",
  },
  {
    text: "Logistics",
    gradient: "linear-gradient(#818CF8, #6366F1)",
    borderColor: "#6366F1",
  },
  {
    text: "Agriculture",
    gradient: "linear-gradient(#34D399, #10B981)",
    borderColor: "#10B981",
  },
  {
    text: "Management",
    gradient: "linear-gradient(#FB923C, #F97316)",
    borderColor: "#F97316",
  },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].text);

  const filteredItems = portfolioItems.filter((item) =>
    item.categories.includes(activeCategory)
  );

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
          Mobile, Enterprise, AI, E-commerce
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

        {/* Portfolio Images - Unified Horizontal Slider */}
        <div className="relative w-full py-10">
          <motion.div layout transition={{ duration: 0.5, ease: "easeInOut" }}>
            <div 
              className="flex items-center gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-12 hide-scrollbar"
            >
              {/* Left Spacer for Centering */}
              <div className="flex-shrink-0 w-[calc(max(1.5rem,(100vw-1200px)/2))]" />
              
              {filteredItems.map((item, i) => (
                <motion.div
  key={i}
  layout
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.95 }}
  transition={{ duration: 0.4 }}
  className={`relative rounded-[2rem] overflow-hidden bg-gray-50 flex-shrink-0 snap-center shadow-2xl border border-gray-100/50 ${
    item.type === "web"
      ? "w-[85vw] sm:w-[850px] h-[400px] sm:h-[580px]"
      : "w-[260px] sm:w-[320px] h-[450px] sm:h-[580px]"
  }`}
>
  <Image
    src={item.url}
    alt={`Portfolio item ${i + 1}`}
    fill
    className="object-contain p-4"
    priority={i < 2}
  />
  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2rem]" />
</motion.div>
              ))}

              {/* Right Spacer for Centering */}
              <div className="flex-shrink-0 w-[calc(max(1.5rem,(100vw-1200px)/2))]" />
            </div>

            {filteredItems.length === 0 && (
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
