"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";

import dic1 from "./images/dlc1.svg";
import dic2 from "./images/dlc2.svg";

import { Paintbrush, Code, Rocket } from "lucide-react";

export default function DesignLandingSection() {
  const steps = [
    {
      title: "Design",
      description: "Crafted UI/UX for iOS and Android with intuitive navigation.",
      gradient: "from-yellow-300 via-orange-400 to-pink-400",
      icon: Paintbrush,
    },
    {
      title: "Develop",
      description: "Robust Flutter & React Native apps backed by scalable APIs.",
      gradient: "from-indigo-400 via-purple-400 to-blue-400",
      icon: Code,
    },
    {
      title: "Launch",
      description: "App store submissions, analytics, and version upgrades sorted.",
      gradient: "from-red-400 via-rose-500 to-yellow-400",
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
          Build <span className="italic">Powerful</span> Mobile Experiences with Rapid Apps
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                className={`rounded-3xl shadow-xl p-6 md:p-8 text-left flex flex-col justify-between h-full bg-gradient-to-br ${step.gradient} text-white relative overflow-hidden`}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Icon size={36} strokeWidth={1.5} className="text-white mb-6" />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16"
          transition={{ duration: 1, delay: 0.4 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button className="text-base px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800">
            📞 Call: +353 892510895
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
