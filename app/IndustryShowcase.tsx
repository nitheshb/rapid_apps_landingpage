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
    title: "Jewellery",
    description: "Engaging apps for content delivery and subscriptions.",
  },
  {
    icon: <ShoppingCart size={60} />,
    title: "Fashion",
    description: "Secure, scalable shopping apps.",
  },
  {
    icon: <GraduationCap size={60} />,
    title: "Apparel",
    description: "Intuitive platforms for learning.",
  },
  {
    icon: <CreditCard size={60} />,
    title: "Beauty & Cosmetics",
    description: "Secure payment and finance apps.",
  },
  {
    icon: <Truck size={60} />,
    title: "Food & Beverage",
    description: "Apps for tracking, routing and fleets.",
  },
    {
    icon: <Heart size={60} />,
    title: "Health & Wellness",
    description: "Apps for remote care and wellness.",
  },
  // {
  //   icon: <Gamepad2 size={60} />,
  //   title: "Gaming",
  //   description: "Fun, real-time interactive mobile games.",
  // },
  // {
  //   icon: <Camera size={60} />,
  //   title: "Social Media",
  //   description: "Media apps for sharing and connecting.",
  // },
];

const IndustryShowcaseBox = () => {
  const [startIndex, setStartIndex] = useState(0);

  const next = () => {
    if (startIndex + 5 < industries.length) setStartIndex(startIndex + 1);
  };

  const prev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  // For desktop, only show sliced. For mobile, show full list.
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const visibleItems = isMobile
    ? industries
    : industries.slice(startIndex, startIndex + 5);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-semibold leading-tight">
          <span className="italic font-serif">Domains</span> We Empower
        </h2>
      </div>

      <div className="relative">
        {/* Scrollable container on mobile */}
        <div className="flex sm:justify-center gap-6 sm:gap-8 overflow-x-auto sm:overflow-visible pb-4">
          {visibleItems.map((item, index) => {
            const bgUrl = backgroundImages[index % backgroundImages.length];

            return (
              <div
                key={index}
                className="min-w-[220px] w-[220px] flex-shrink-0 text-left relative"
              >
                <div
                  className="w-[220px] h-[220px] rounded-[32px] flex items-center justify-center text-white mb-4 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${bgUrl})`,
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-md text-gray-600 leading-snug">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Arrows - only for desktop */}
        <div className="hidden sm:flex absolute -bottom-12 left-0 gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:scale-105 transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:scale-105 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustryShowcaseBox;
