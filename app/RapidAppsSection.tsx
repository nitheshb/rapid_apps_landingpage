import React from "react";
import Image from "next/image";
import s2 from "./images/s2.svg";
import s3 from "./images/s3.svg";
import { motion } from "framer-motion";
import whatsappIcon from './images/whatsapp.svg';

const RapidAppsSection = () => {
  return (
    <div className="space-y-8">
      <motion.div
        transition={{ duration: 1, ease: "easeInOut" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="bg-[#fafafa] rounded-2xl relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-0">
            <Image src={s2} alt="decoration-left" />
          </div>
          <div className="absolute top-0 right-0">
            <Image src={s3} alt="decoration-right" />
          </div>

          {/* Main Content */}
          <div className="text-center max-w-2xl mx-auto pt-16 pb-8">

            <h1 className="text-5xl font-bold mb-4 text-gray-900">
              Build Faster, Launch Smarter – With Rapid Apps
            </h1>
            <p className="text-gray-600 text-xl mb-8">
              We specialize in building high-performance mobile applications for both Android and iOS. Whether you're launching your startup idea or scaling your enterprise tech, we bring speed, quality, and reliability.
            </p>

            {/* Contact Options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+353892510895"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl text-white bg-black hover:bg-gray-800 transition-all text-sm sm:text-base"
              >
                Call: +353 892510895
              </a>

              <a
                href="https://wa.me/+353892510895"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl text-white bg-green-600 hover:bg-green-700 transition-all text-sm sm:text-base"
              >
                <Image src={whatsappIcon} alt="WhatsApp" width={20} height={20} />
                WhatsApp Us
              </a>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Head Office: D01 V4A3, North Dock, Dublin Landing, Dublin 2, Ireland
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RapidAppsSection;
