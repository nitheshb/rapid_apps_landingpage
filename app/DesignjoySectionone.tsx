import React from "react";
import Image from "next/image";

import s10 from "./images/s10.svg";
import s11 from "./images/s11.svg";

import Button from "./Button";

import f1 from "./images/f1.svg";
import { motion } from "framer-motion";

const DesignjoySectionone = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center  relative overflow-hidden">
      {/* <div className="absolute top-[20%] left-0 w-48 h-48 md:w-64 md:h-64">
        <Image src={s10} alt="decorative image" />
      </div>

      <div className="absolute top-[5%] right-0 w-48 h-48 md:w-64 md:h-64">
        <Image src={s11} alt="decorative image" />
      </div> */}

      <motion.div
        transition={{ duration: 1, ease: "easeInOut" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="text-center max-w-3xl mx-auto pt-16 pb-8 px-4">
          <h2 className="text-[28px] leading-tight md:text-[54px] md:leading-tight font-semibold mb-4">
            See if C&C is right
            <br />
            for you. (It totally is.)
          </h2>

          <p className="text-gray-600 max-w-[550px]  mb-8 text-base sm:text-lg md:text-xl lg:text-2xl">
            Get a guided tour through C&C, and find out how you and your team
            can change the way you source design, forever.
          </p>

          <Button>Book a call</Button>
        </div>
      </motion.div>

      <motion.h1
        transition={{ duration: 1, ease: "easeInOut" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="flex justify-center mt-16">
          <Image
            src={f1}
            alt="C&C Logo"
            width={700}
            height={700}
            className=""
          />
        </div>
      </motion.h1>

      <motion.div
        transition={{ duration: 1, ease: "easeInOut" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="flex justify-center space-x-4 sm:space-x-8 mt-16 text-sm text-gray-500">
          <a href="#" className="hover:text-black mx-4">
            Latest projects
          </a>
          <a href="#" className="hover:text-black mx-4">
            Pricing
          </a>
          <a href="#" className="hover:text-black mx-4">
            Contact
          </a>
          <a href="#" className="hover:text-black mx-4">
            Client login
          </a>
        </div>

        <div className="flex justify-center space-x-4 sm:space-x-8 mt-4 text-sm text-gray-500">
          <a href="#" className="hover:text-black mx-4">
            Get started
          </a>
          <a href="#" className="hover:text-black mx-4">
            Terms & conditions
          </a>
          <a href="#" className="hover:text-black mx-4">
            Privacy policy
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default DesignjoySectionone;
