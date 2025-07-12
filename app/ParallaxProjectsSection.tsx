/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { products } from '@/lib/constant';

export default function ParallaxProjectsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      viewport={{ once: true, amount: 0.8 }}
      className="relative w-full py-12 sm:py-16 bg-[#f6f2ea] overflow-hidden"
    >
      {/* Scrolling container */}
      <div className="relative overflow-hidden">
        <div className="marquee-track flex gap-12">
          {[...products, ...products].map((product, index) => (
            <div
              key={index}
              className="w-[260px] h-[360px] rounded-xl overflow-hidden shadow-2xl flex-shrink-0 transform rotate-[8deg]"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                loading="lazy"
                className="w-full h-full object-cover rounded-xl"
                style={{
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Section Heading */}
      <div className="mt-12 text-center px-4">
        <h2 className="text-3xl font-semibold mb-3">Recent Work</h2>
        <p className="text-lg text-gray-600">
          We&apos;re talking <span className="italic">&quot;Product of the Year&quot;</span> good.
        </p>
      </div>

      {/* CSS for marquee scroll */}
      <style jsx>{`
        @keyframes scrollMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          width: fit-content;
          animation: scrollMarquee 80s linear infinite;
        }
      `}</style>
    </motion.section>
  );
}
