"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

import hero1 from "./images/hero1.svg";
import hero2 from "./images/hero2.svg";
import dot from "./images/dot.svg";
import Button from "./Button";

import {
  Tv,
  ShoppingCart,
  GraduationCap,
  CreditCard,
  Heart,
  Truck,
  Gamepad2,
  Camera,
} from "lucide-react";

import "./index.css";

const DesignAgencyHero = () => {
  const industries = [
    { icon: Tv, title: "OTT & Streaming" },
    { icon: ShoppingCart, title: "E-commerce" },
    { icon: GraduationCap, title: "EdTech" },
    { icon: CreditCard, title: "Fintech" },
    { icon: Heart, title: "Healthcare" },
    { icon: Truck, title: "Logistics" },
    { icon: Gamepad2, title: "Gaming" },
    { icon: Camera, title: "Social Media" },
  ];

  return (
    <div className="min-h-[65vh] sm:min-h-screen ">
      {/* <div className="min-h-[65vh] sm:min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 sm:bg-white sm:bg-none"> */}

      <main className="relative overflow-hidden pb-10 sm:pb-16">
        {/* Decorative Shapes */}
        <div className="absolute left-0 top-20 hidden sm:block">
          <Image
            src={hero2}
            alt="Decorative shape"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
        <div className="absolute right-0 top-[30%] hidden sm:block">
          <Image
            src={hero1}
            alt="Decorative shape"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        {/* Main Heading Section */}
        <motion.div
  className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-32 pb-16 text-center relative z-10"
  transition={{ duration: 1, ease: "easeInOut" }}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
>

          <h1 className="text-3xl sm:text-[72px] font-bold leading-tight text-center text-gray-900 drop-shadow-sm">
            All-in-one Solution for <br /> Mobile App <span className="font-serif italic">Development</span>
          </h1>

          <p className="mt-6 text-[24px] text-gray-600 max-w-2xl mx-auto">
            Empowering innovation — Rapid Apps
          </p>

          {/* CTA Button */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Button
              onClick={() => {
                document
                  .getElementById("contacts")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              📞 Book a Call
            </Button>
          </motion.div>

          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="mt-4 flex items-center justify-center space-x-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ea552b] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ea552b]"></span>
              </span>
              <span className="text-sm text-gray-600">AI Centric</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Industries Marquee */}
        <div
          className="w-[95%] sm:w-[90%] mb-6 bg-black bg-gradient-to-b from-black to-[#292929] 
             rounded-[1000px] outline outline-1 outline-black max-w-[1300px] 
             mx-auto py-2 sm:py-4 overflow-hidden"
          style={{
            outline: "1px solid #000",
            boxShadow:
              "1px 9px 12px #0000004f, 0 20px 13px #00000024, inset 0 2px 1px #ffffff80",
          }}
        >
          <Marquee pauseOnHover={true} gradient={false} speed={50}>
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex items-center mx-8 space-x-3 text-white"
              >
                <Image src={dot} alt="dot" className="w-3 h-3 object-contain" />
                <industry.icon className="w-8 h-8 text-white" />
                <span className="text-xl">{industry.title}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </main>
    </div>
  );
};

export default DesignAgencyHero;
