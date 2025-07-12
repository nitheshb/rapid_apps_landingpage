"use client";

import React from "react";
import Image from "next/image";
import Tag from "./Tag";
import { motion } from "framer-motion";

// Portfolio Images
import d1 from "../public/d_1.jpeg";
import d2 from "../public/d_2.jpeg";
import d3 from "../public/d_3.jpeg";
import d4 from "../public/d_4.jpeg";
import d5 from "../public/d_5.jpeg";
import d6 from "../public/d_6.jpeg";
import d7 from "./images/d7.svg";
import d8 from "./images/d8.svg";
import line from "./images/line.svg";

const imageUrls = [d1, d2, d3, d4, d5, d6];

const categories = [
  {
    text: "iOS Development",
    gradient: "linear-gradient(#2563EB, #1D4ED8)",
    borderColor: "#1D4ED8",
  },
  {
    text: "Android Development",
    gradient: "linear-gradient(#22C55E, #16A34A)",
    borderColor: "#16A34A",
  },
  {
    text: "Flutter Apps",
    gradient: "linear-gradient(#A855F7, #9333EA)",
    borderColor: "#9333EA",
  },
  {
    text: "React Native",
    gradient: "linear-gradient(#FACC15, #EAB308)",
    borderColor: "#EAB308",
  },
  {
    text: "UI/UX Design",
    gradient: "linear-gradient(#F472B6, #EC4899)",
    borderColor: "#EC4899",
  },
  {
    text: "App Prototyping",
    gradient: "linear-gradient(#818CF8, #6366F1)",
    borderColor: "#6366F1",
  },
  {
    text: "Backend APIs",
    gradient: "linear-gradient(#34D399, #10B981)",
    borderColor: "#10B981",
  },
  {
    text: "Firebase Integration",
    gradient: "linear-gradient(#FB923C, #F97316)",
    borderColor: "#F97316",
  },
  {
    text: "Push Notifications",
    gradient: "linear-gradient(#06B6D4, #0891B2)",
    borderColor: "#0891B2",
  },
  {
    text: "App Store Deployment",
    gradient: "linear-gradient(#EF4444, #DC2626)",
    borderColor: "#DC2626",
  },
];

const PortfolioSection = () => {
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
          Mobile, Enterprise, AI, DevOps
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
              />
            ))}
          </div>
        </motion.div>

        {/* Portfolio Images */}
        <div className="relative max-w-6xl mx-auto px-2 sm:px-4 py-10">
          <motion.div
            transition={{ duration: 1, ease: "easeInOut" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* ✅ Scrollable on Mobile */}
            <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 sm:hidden">
              {imageUrls.map((url, i) => (
                <div
                  key={i}
                  className="relative min-w-[220px] h-[420px] rounded-xl overflow-hidden flex-shrink-0 snap-center"
                >
                  <Image
                    src={url}
                    alt={`Portfolio item ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* ✅ Grid Layout on Desktop */}
            <div className="hidden sm:grid grid-cols-1 md:grid-cols-3 gap-6">
              {imageUrls.map((url, i) => (
                <div
                  key={i}
                  className="relative bg-gray-100 rounded-lg overflow-hidden"
                  style={{ aspectRatio: "625 / 1235" }}
                >
                  <Image
                    src={url}
                    alt={`Portfolio item ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
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
