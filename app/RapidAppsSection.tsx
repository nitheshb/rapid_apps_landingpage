import React from "react";
import Image from "next/image";
import s2 from "./images/s2.svg";
import s3 from "./images/s3.svg";
import { motion } from "framer-motion";
import whatsappIcon from "./images/whatsapp.svg";
import Button from "./Button";

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
          <div className="absolute top-0 left-0 z-0 opacity-70 hidden sm:block">
            <Image src={s2} alt="decoration-left" className="w-28 md:w-40" />
          </div>
          <div className="absolute top-0 right-0 z-0 opacity-70 hidden sm:block">
            <Image src={s3} alt="decoration-right" className="w-28 md:w-40" />
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center max-w-2xl mx-auto pt-16 pb-12 px-4 sm:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900 leading-snug">
              Build Faster, Launch Smarter – With Rapid Apps
            </h1>

            {/* Contact Options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="tel:+353892510895" className="whitespace-nowrap">
                📞 Call: +353 892510895
              </Button>

              <Button href="https://wa.me/+353892510895" variant="green">
                <Image
                  src={whatsappIcon}
                  alt="WhatsApp"
                  width={20}
                  height={20}
                />
                WhatsApp Us
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Head Office: D01 V4A3, North Dock, Dublin Landing, Dublin 2,
              Ireland
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RapidAppsSection;
