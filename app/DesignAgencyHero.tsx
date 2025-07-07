"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';


import hero1 from './images/hero1.svg';
import hero2 from './images/hero2.svg';
import dot from './images/dot.svg';
import whatsappIcon from './images/whatsapp.svg';

import {
  Tv,
  ShoppingCart,
  GraduationCap,
  CreditCard,
  Heart,
  Truck,
  Gamepad2,
  Camera
} from 'lucide-react';

import './index.css';

const DesignAgencyHero = () => {
  const industries = [
    { icon: Tv, title: 'OTT & Streaming' },
    { icon: ShoppingCart, title: 'E-commerce' },
    { icon: GraduationCap, title: 'EdTech' },
    { icon: CreditCard, title: 'Fintech' },
    { icon: Heart, title: 'Healthcare' },
    { icon: Truck, title: 'Logistics' },
    { icon: Gamepad2, title: 'Gaming' },
    { icon: Camera, title: 'Social Media' },
  ];

  // 👇 Paste this just **below** `const DesignAgencyHero = () => {`
const Header = () => (
  <header className="w-full fixed top-0 z-50 bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-black">Rapid Apps</div>
      <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <a href="#services" className="hover:text-black">Services</a>
        <a href="#about" className="hover:text-black">About</a>
        <a href="#contact" className="hover:text-black">Contact</a>
      </nav>
    </div>
  </header>
);


  return (
    <div className="min-h-screen">
       <Header /> {/* Add this line here */}
      <main className="relative overflow-hidden">
        {/* Decorative Shapes */}
        <div className="absolute left-0 top-20">
          <Image src={hero2} alt="Decorative shape" width={200} height={200} className="object-contain" />
        </div>
        <div className="absolute right-0 top-[30%]">
          <Image src={hero1} alt="Decorative shape" width={200} height={200} className="object-contain" />
        </div>

        {/* Main Heading Section */}
        <motion.div
          className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 text-center relative z-10"
          transition={{ duration: 1, ease: "easeInOut" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="text-[72px] leading-[80px] max-w-3xl mx-auto font-semibold mb-4">
            All-in-one solution for <br /> mobile app development
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
          <a
            href="https://wa.me/+353892510895"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl text-white bg-green-600 hover:bg-green-700 transition-all text-sm sm:text-base"
          >
            <Image
              src={whatsappIcon}
              alt="WhatsApp"
              width={20}
              height={20}
            />
            WhatsApp Us
          </a>


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
          className="w-[90%] mb-10 bg-black bg-gradient-to-b from-black to-[#292929] rounded-[1000px] outline outline-1 outline-black max-w-[1300px] mx-auto py-4 overflow-hidden"
          style={{
            outline: '1px solid #000',
            boxShadow: '1px 9px 12px #0000004f, 0 20px 13px #00000024, inset 0 2px 1px #ffffff80',
          }}
        >
          <Marquee pauseOnHover={true} gradient={false} speed={50}>
            {industries.map((industry, index) => (
              <div key={index} className="flex items-center mx-8 space-x-3 text-white">
                <Image src={dot} alt="dot" className="w-3 h-3 object-contain" />
                <industry.icon className="w-8 h-8 text-white" />
                <span className="text-xl font-bold">{industry.title}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </main>
    </div>
  );
};

export default DesignAgencyHero;