import React from "react";

import Image from "next/image";

import s1 from "./images/AWS.svg";
import s2 from "./images/s2.svg";
import s3 from "./images/s3.svg";
import s4 from "./images/Flutter.svg";
import s5 from "./images/Redis.svg";
import s6 from "./images/s6.svg";
import s7 from "./images/s7.svg";
import s8 from "./images/s8.svg";
import s9 from "./images/s9.svg";

import Button from "./Button";
import { motion } from "framer-motion";

const DesignjoySections = () => {
  return (
    <div className=" space-y-8">
      {/* First Section */}

      <motion.div
        transition={{ duration: 1, ease: "easeInOut" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="bg-[#fafafa] rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0">
            <Image src={s2} alt={""} />
          </div>
          <div className="absolute top-0 right-0">
            <Image src={s3} alt={""} />
          </div>

          <div className="text-center max-w-2xl mx-auto pt-16 pb-8">
            <img
              src="/designjoy-logo.svg"
              alt="C&C"
              className="h-6 mx-auto mb-6"
            />
            <h1 className="text-6xl font-bold mb-4">Carbon and Codes Innovation</h1>
            <p className="text-gray-600 text-2xl mb-8">
              A collection of team to spice up your
              design projects.
            </p>
            <Button>Call:  +353 892510895</Button>
            <p className="text-sm text-gray-500 mt-6">
              D01 V4A3, North dock, Dublin landing, Dublin 2, Ireland
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DesignjoySections;
