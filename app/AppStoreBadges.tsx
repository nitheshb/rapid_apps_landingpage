'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import googleBadge from './images/google-play-badge.png'; // e.g., 512x152
import appStoreBadge from './images/app-store-badge.png'; // e.g., 512x152

const AppStoreBadges = () => {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
          Take Rapid Apps with You
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          Our mobile apps are available on both the <strong>Google Play Store</strong> and the <strong>Apple App Store</strong>. 
          Download now and stay connected to your projects, teams, and tools — wherever you go.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=your.app.id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={googleBadge}
              alt="Get it on Google Play"
              width={160}
              height={48}
              priority
            />
          </a>
          <a
            href="https://apps.apple.com/app/idYourAppId"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={appStoreBadge}
              alt="Download on the App Store"
              width={160}
              height={48}
              priority
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default AppStoreBadges;
