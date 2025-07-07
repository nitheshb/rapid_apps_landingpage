import React from "react";
import Image from "next/image";

import ts1 from "./images/ts1.svg";
import ts2 from "./images/ts2.svg";
import line from "./images/line.svg";
import profile from "./images/profile.png";

import Button from "./Button";
import { motion } from "framer-motion";

export default function TestimonialSection() {
  return (
    <div className="relative w-full max-w-8xl mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto text-center pt-8">
        <p className="text-sm mb-4">They said it best</p>

        <motion.h2
          className="text-[54px] leading-[60px] max-w-3xl mx-auto font-semibold mb-4"
          transition={{ duration: 1, ease: "easeInOut" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          "C&C shows that they know the art of subtlety."
        </motion.h2>

        {/* <h2 className="text-[54px] leading-[60px] max-w-3xl mx-auto font-semibold mb-4">
          "C&C shows that they know the art of subtlety."
        </h2> */}

        <motion.div
          className="flex items-center justify-center mb-8 md:mb-16"
          transition={{ duration: 1, ease: "easeInOut" }}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src="/webflow-logo.png"
            alt="Webflow"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </motion.div>

        {/* <div className="flex items-center justify-center mb-8 md:mb-16">
          <Image src="/webflow-logo.png" alt="Webflow" width={120} height={40} className="h-8 w-auto" />
        </div> */}

        <div className="absolute left-0 top-[20%]">
          <div className="relative w-24 h-24 md:w-40 md:h-40 lg:w-64 lg:h-64">
            <Image src={ts1} alt="Left Testimonial Image" />
          </div>
        </div>

        <div className="absolute right-0 top-[25%] ">
          <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-[20rem] lg:h-[20rem]">
            {" "}
            {/* Further decreased sizes */}
            <Image src={ts2} alt="Right Testimonial Image" objectFit="cover" />
          </div>
        </div>

        <motion.div
          className="flex items-center justify-center mb-8 md:mb-16"
          transition={{ duration: 1, ease: "easeInOut" }}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image src={line} alt={""} width={20} height={10} />
        </motion.div>

        {/* <div className="flex items-center justify-center mb-8 md:mb-16">
          <Image src={line} alt={''} width={20} height={10} />
        </div> */}

        <motion.h2
          className="text-[54px] leading-[60px] max-w-[550px] mx-auto font-semibold mb-4"
          transition={{ duration: 1, ease: "easeInOut" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          It's "you'll never go back" better
        </motion.h2>

        {/* <h2 className="text-[54px] leading-[60px] max-w-[550px] mx-auto font-semibold mb-4">
          It's "you'll never go back" better
        </h2> */}

        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          transition={{ duration: 1, ease: "easeInOut" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          C&C replaces unreliable freelancers and expensive agencies for one
          flat monthly fee, with designs delivered so fast that it will blow
          your mind.
        </motion.p>

        {/* <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          C&C replaces unreliable freelancers and expensive agencies for one flat monthly fee, with designs delivered so fast that it will blow your mind.
        </p> */}

        <motion.div
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Button className="mb-16">See plans</Button>
        </motion.div>

        {/* <Button className="mb-16">See plans</Button> */}

        <motion.div
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }} // Add delay here
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="grid md:grid-cols-2 max-w-7xl mx-auto gap-8 items-center text-left">
            <div className="bg-white rounded-lg px-4 py-5 shadow-md">
              <div className="space-y-8">
                <h2 className="text-lg md:text-[30px] leading-tight tracking-tight font-semibold mb-4">
                  "Design is everything, and these guys have nailed it."
                </h2>
                <div className="grid grid-cols-2 items-center ">
                  <div className="space-y-1">
                    <p className="text-[13px]">Kevin O'Leary</p>
                    <p className="text-[12px] text-gray-600">Shark Tank</p>
                  </div>
                  <div className="relative  aspect-[16/10] rounded-xl ">
                    <div className="absolute right-0 bottom-0 ">
                      <Image
                        src={profile}
                        alt={""}
                        className="  object-cover rounded-lg"
                        width={200}
                        height={380}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Totally async</h3>
                <p>
                  Don't like meetings? We don't either; so much so that we've
                  outlawed them completely.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Manage with Trello
                </h3>
                <p>
                  Manage your design board using Trello. View active, queued,
                  and completed tasks with ease.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Invite your team</h3>
                <p>
                  Invite your entire team, so anyone can submit requests and
                  track their progress.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
