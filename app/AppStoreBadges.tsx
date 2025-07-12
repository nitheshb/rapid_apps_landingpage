'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import googleBadge from './images/google_store.svg';
import appStoreBadge from './images/apple_store.svg';

const AppStoreBadges = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800 leading-snug">
          Take Rapid Apps with You
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-xl mx-auto px-2">
          Available on the <strong>Google Play Store</strong> and <strong>Apple App Store</strong>.
          Download now to stay connected to your teams and tools — wherever you go.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          <a
            href="https://play.google.com/store/apps/details?id=your.app.id"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-105"
          >
            <Image
              src={googleBadge}
              alt="Get it on Google Play"
              width={180}
              height={54}
              priority
            />
          </a>

          <a
            href="https://apps.apple.com/app/idYourAppId"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-105"
          >
            <Image
              src={appStoreBadge}
              alt="Download on the App Store"
              width={180}
              height={54}
              priority
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default AppStoreBadges;
