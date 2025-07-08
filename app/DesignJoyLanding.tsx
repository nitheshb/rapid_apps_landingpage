"use client";

import React from "react";
import Image from "next/image";
import Tag from "./Tag";
import { motion } from "framer-motion";

// Portfolio Images
import d1 from "./images/d_1.jpeg";
import d2 from "./images/d_2.jpeg";
import d3 from "./images/d_3.jpeg";
import d4 from "./images/d_4.jpeg";
import d5 from "./images/d_5.jpeg";
import d6 from "./images/d_6.jpeg";
import d7 from "./images/d7.svg";
import d8 from "./images/d8.svg";
import line from "./images/line.svg";

const imageUrls = [d1, d2, d3, d4, d5, d6];

const categories = [
  { text: "iOS Development", gradient: "linear-gradient(#2563EB, #1D4ED8)", borderColor: "#1D4ED8" },
  { text: "Android Development", gradient: "linear-gradient(#22C55E, #16A34A)", borderColor: "#16A34A" },
  { text: "Flutter Apps", gradient: "linear-gradient(#A855F7, #9333EA)", borderColor: "#9333EA" },
  { text: "React Native", gradient: "linear-gradient(#FACC15, #EAB308)", borderColor: "#EAB308" },
  { text: "UI/UX Design", gradient: "linear-gradient(#F472B6, #EC4899)", borderColor: "#EC4899" },
  { text: "App Prototyping", gradient: "linear-gradient(#818CF8, #6366F1)", borderColor: "#6366F1" },
  { text: "Backend APIs", gradient: "linear-gradient(#34D399, #10B981)", borderColor: "#10B981" },
  { text: "Firebase Integration", gradient: "linear-gradient(#FB923C, #F97316)", borderColor: "#F97316" },
  { text: "Push Notifications", gradient: "linear-gradient(#06B6D4, #0891B2)", borderColor: "#0891B2" },
  { text: "App Store Deployment", gradient: "linear-gradient(#EF4444, #DC2626)", borderColor: "#DC2626" },
];

const PortfolioSection = () => {
  return (
    <div className="relative max-w-8xl mx-auto px-4 py-6">
      {/* Top Left Decoration */}
      <div className="absolute left-0 top-0">
        <Image src={d7} alt="" width={200} height={200} />
      </div>

      {/* Center Line */}
      <motion.div
        className="flex items-center justify-center"
        transition={{ duration: 1, ease: "easeInOut" }}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image src={line} alt="line" />
      </motion.div>

      {/* Top Right Decoration with orbit dots */}
      <div className="absolute right-0 top-0">
        <div className="relative">
          <Image src={d8} alt="" width={200} height={200} />
          <div className="absolute top-0 right-0 w-16 h-16">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-black rounded-full"
                style={{
                  top: `${Math.sin(i * 30 * Math.PI / 180) * 20 + 20}px`,
                  left: `${Math.cos(i * 30 * Math.PI / 180) * 20 + 20}px`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="text-center pt-20">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-12"
          transition={{ duration: 1, ease: "easeInOut" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Mobile, Enterprise, AI, DevOps<br />— Powered by Rapid Apps
        </motion.h1>

        {/* Tags */}
        <motion.div
          transition={{ duration: 1, ease: "easeInOut" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-16">
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
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <motion.div
            transition={{ duration: 1, ease: "easeInOut" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {imageUrls.map((url, i) => (
                <div
                  key={i}
                  className="relative bg-gray-100 rounded-lg overflow-hidden"
                  style={{ aspectRatio: '625 / 1235' }}
                >
                  <Image
                    src={url}
                    alt={`Portfolio item ${i + 1}`}
                    layout="fill"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Button */}
        <motion.div
          transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* <Button>See More Work</Button> */}
        </motion.div>
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