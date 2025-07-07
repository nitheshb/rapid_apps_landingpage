"use client";

import m1 from "./images/m1.svg";
import m3 from "./images/m3.svg";

import mbg from "./images/mbg.svg";

import Image from "next/image";

import Button from "./Button";

import { useState } from "react";
import { Zap, ArrowRight } from "lucide-react";

const MembershipSection = () => {
  const [selectedPlan, setSelectedPlan] = useState("standard");

  const plans = {
    standard: {
      price: "4,995",
      description: "One request at a time. Pause or cancel anytime.",
      features: [
        "One request at a time",
        "Average 48 hour delivery",
        "Unlimited brands",
        "Webflow development",
        "Unlimited stock photos",
        "Pause or cancel anytime",
      ],
    },
    pro: {
      price: "7,995",
      description: "Multiple requests at a time. Pause or cancel anytime.",
      features: [
        "Multiple requests at a time",
        "Average 24 hour delivery",
        "Unlimited brands",
        "Priority Webflow development",
        "Unlimited stock photos",
        "Pause or cancel anytime",
        "Priority support",
        "Custom illustrations",
      ],
    },
  };

  return (
    <div className=" p-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="bg-black  rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-300 rounded-full opacity-80">
            <Image src={m3} alt={""} />
          </div>

          <div className="inline-block px-4 py-2 bg-pink-500 rounded-full text-sm font-medium mb-6">
            Slots available
          </div>

          <h1 className="text-5xl  font-bold mb-12">
            Join
            <br />
            C&C
          </h1>

          <div className="space-y-6">
            <button className="w-full bg-gray-800 rounded-xl p-6 text-left group hover:bg-gray-700 transition-colors">
              <div className="text-xl font-semibold mb-2">
                Book a 15-min intro call
              </div>
              <div className="text-gray-400 flex justify-between items-center">
                <span>
                  Learn more about how DesignJoy works and how it can help you.
                </span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            <button className="w-full bg-gray-800 rounded-xl p-6 text-left group hover:bg-gray-700 transition-colors">
              <div className="text-xl font-semibold mb-2">
                Refer a friend & earn
              </div>
              <div className="text-gray-400 flex justify-between items-center">
                <span>
                  Earn 5% monthly recurring commissions for each referral.
                </span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>

        <div className="relative bg-white p-4 rounded-xl">
          {/* Background Image */}
          <div className="absolute top-2 left-2 w-full h-full -z-10">
            <Image
              src={mbg}
              alt={""}
              className="object-cover w-[200px] h-[300px]"
            />
          </div>

          {/* Content */}
          <h2 className="text-5xl font-bold mb-8 z-10 relative">Membership</h2>

          <div className="inline-flex items-center p-1 bg-black rounded-full mb-8 z-10 relative">
            <button
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedPlan === "standard"
                  ? "bg-yellow-400 text-black"
                  : "text-white hover:text-yellow-400"
              }`}
              onClick={() => setSelectedPlan("standard")}
            >
              Standard
            </button>
            <button
              className={`px-6 py-2 rounded-full transition-colors flex items-center gap-2 ${
                selectedPlan === "pro"
                  ? "bg-yellow-400 text-black"
                  : "text-white hover:text-yellow-400"
              }`}
              onClick={() => setSelectedPlan("pro")}
            >
              Pro <Zap className="w-4 h-4" />
            </button>
          </div>

          {/* <div className="mb-8 z-10 relative">
            <div className="flex items-baseline">
              <span className="text-5xl font-bold">
                ${plans[selectedPlan].price}
              </span>
              <span className="text-xl ml-1">/m</span>
            </div>
            <p className="text-gray-600 mt-2">
              {plans[selectedPlan].description}
            </p>
          </div>

          <div className="h-px bg-gray-200 my-8 z-10 relative" />

          <div className="mb-12 z-10 relative">
            <h3 className="text-xl font-semibold mb-6">What's included</h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {plans[selectedPlan].features.map((feature, index) => (
                <div key={index} className="text-gray-800">
                  {feature}
                </div>
              ))}
            </div>
          </div> */}

          <div className="flex items-center gap-4 z-10 relative">
            <Button>Get started</Button>
            <span>or</span>
            <a
              href="#book-call"
              className="text-black underline hover:text-gray-600"
            >
              book a call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipSection;
