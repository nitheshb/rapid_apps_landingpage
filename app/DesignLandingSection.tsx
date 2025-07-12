"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Paintbrush, Code, Rocket } from "lucide-react";

import dic1 from "./images/dlc1.svg";
import dic2 from "./images/dlc2.svg";

export default function DesignLandingSection() {
  const steps = [
    {
      title: "Design",
      description: "Crafted UI/UX for iOS and Android with intuitive navigation.",
      image: "https://cdn.prod.website-files.com/5837424ae11409586f837994/678566be2e0d80a12b14b201_Group%201171274549.jpg",
      icon: Paintbrush,
    },
    {
      title: "Develop",
      description: "Robust Flutter & React Native apps backed by scalable APIs.",
      image: "https://cdn.prod.website-files.com/5837424ae11409586f837994/678566be2ee6c9d4759c837e_Group%201171274550.jpg",
      icon: Code,
    },
    {
      title: "Launch",
      description: "App store submissions, analytics, and version upgrades sorted.",
      image: "https://cdn.prod.website-files.com/5837424ae11409586f837994/678566bffa49c6b76cccbe18_Group%201171274548.jpg",
      icon: Rocket,
    },
  ];

  return (
    <div className="relative w-full mx-auto py-20 overflow-hidden">
      {/* Decorative SVGs */}
      <div className="absolute left-0 top-0 hidden sm:block">
        <Image src={dic2} alt="decor-left" className="w-24 h-auto" />
      </div>
      <div className="absolute right-0 top-0 hidden sm:block">
        <Image src={dic1} alt="decor-right" className="w-24 h-auto" />
      </div>

      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          className="text-[28px] sm:text-[40px] md:text-[56px] font-bold text-gray-900 leading-tight mb-14"
          transition={{ duration: 1 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Build <span className="italic font-serif">Powerful</span> Mobile Experiences with Rapid Apps
        </motion.h2>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                className="relative w-[250px] h-[250px] rounded-[32px] overflow-hidden shadow-lg flex flex-col justify-end text-left group"
                transition={{ duration: 0.8, delay: i * 0.2 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${step.image})` }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-300" />
                {/* Content */}
                <div className="relative z-10 p-4 text-white">
                  <Icon size={40} strokeWidth={1.5} className="mb-3" />
                  <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
