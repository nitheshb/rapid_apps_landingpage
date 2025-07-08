"use client";

import React, { useState } from "react";
import {
  Tv,
  ShoppingCart,
  GraduationCap,
  CreditCard,
  Heart,
  Truck,
  Gamepad2,
  Camera,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const backgroundImages = [
  "https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec198f_Group%201171274494.png",
  "https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec1991_Group%201171274496.png",
  "https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec198b_Group%201171274498.png",
  "https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec1993_Group%201171274497.png",
  "https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec1995_Group%201171274495.png",
  "https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec198d_Group%201171274499.png",
];

const industries = [
  {
    icon: <Tv size={60} />,
    title: "OTT & Streaming",
    description: "Engaging apps for content delivery and subscriptions.",
  },
  {
    icon: <ShoppingCart size={60} />,
    title: "E-commerce",
    description: "Secure, scalable shopping apps.",
  },
  {
    icon: <GraduationCap size={60} />,
    title: "EdTech",
    description: "Intuitive platforms for learning.",
  },
  {
    icon: <CreditCard size={60} />,
    title: "Fintech",
    description: "Secure payment and finance apps.",
  },
  {
    icon: <Heart size={60} />,
    title: "Healthcare",
    description: "Apps for remote care and wellness.",
  },
  {
    icon: <Truck size={60} />,
    title: "Logistics",
    description: "Apps for tracking, routing and fleets.",
  },
  {
    icon: <Gamepad2 size={60} />,
    title: "Gaming",
    description: "Fun, real-time interactive mobile games.",
  },
  {
    icon: <Camera size={60} />,
    title: "Social Media",
    description: "Media apps for sharing and connecting.",
  },
];

const IndustryShowcaseBox = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = industries.slice(startIndex, startIndex + 5);

  const next = () => {
    if (startIndex + 5 < industries.length) setStartIndex(startIndex + 1);
  };

  const prev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  return (
    <div className="max-w-8xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-semibold leading-tight">
          Domains We Empower
        </h2>
      </div>

      <div className="flex justify-center gap-8 mb-24 relative">
        {visibleItems.map((item, index) => {
          const bgUrl = backgroundImages[(startIndex + index) % backgroundImages.length];

          return (
            <div key={index} className="w-[220px] text-left flex-shrink-0 relative">
              <div
                className="w-[220px] h-[220px] rounded-[32px] flex items-center justify-center text-white mb-4 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${bgUrl})`,
                }}
              >
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-xl text-gray-600 leading-snug">{item.description}</p>

              {index === 0 && (
                <div className="absolute -bottom-20 left-0 flex gap-4">
                  <button
                    onClick={prev}
                    className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center hover:scale-105 transition"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={next}
                    className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center hover:scale-105 transition"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IndustryShowcaseBox;
