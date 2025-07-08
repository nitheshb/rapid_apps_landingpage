"use client";

import React from 'react';
import Image from 'next/image';
import Button from './Button';

import dic1 from './images/dlc1.svg';
import dic2 from './images/dlc2.svg';

import { motion } from 'framer-motion';

export default function DesignLandingSection() {
  return (
    <div className="relative w-full mx-auto py-16 pt-0">
      {/* Decorative Images */}
      <div className="absolute left-0 top-0">
        <div className="w-32 h-32 relative">
          <div className="absolute inset-0">
            <Image src={dic2} alt="decor-left" />
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-0">
        <div className="w-32 h-32 relative">
          <div className="absolute inset-0">
            <Image src={dic1} alt="decor-right" />
            <div className="absolute top-1/2 right-0 w-12 h-16 border-r-2 border-black transform -rotate-45" />
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
        className="text-[40px] md:text-[64px] leading-tight max-w-4xl mx-auto text-center text-gray-900 mb-8"
        transition={{ duration: 1, ease: "easeInOut" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Build <span className="text-italics">Powerful</span> Mobile Experiences with Rapid Apps
      </motion.h2>

        <motion.div
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <div className="w-12 h-8 bg-white triangle triangle-t" />
              </div>
              <h3 className="text-center text-black text-[26px] font-semibold">Design</h3>
              <p className="text-center text-black">
                Crafted UI/UX for iOS and Android with intuitive navigation.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <div className="w-12 h-8 bg-white rounded" />
              </div>
              <h3 className="text-center text-black text-[26px] font-semibold">Develop</h3>
              <p className="text-center text-black">
                Robust Flutter & React Native apps backed by scalable APIs.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mb-4">
                <div className="w-12 h-12 border-4 border-white rounded-full" />
              </div>
              <h3 className="text-center text-black text-[26px] font-semibold">Launch</h3>
              <p className="text-center text-black">
                App store submissions, analytics, and version upgrades — sorted.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Button>📞 Call:  +353 892510895</Button>
        </motion.div>
      </div>
    </div>
  );
}
