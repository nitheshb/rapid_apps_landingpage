'use client';

import React from "react";

const MobileAppMissionBox = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div
        className="border border-dashed rounded-2xl p-6 sm:p-10 text-center text-gray-800 shadow-sm"
        style={{ borderColor: "#999999" }}
      >
        <p className="text-base sm:text-xl md:text-2xl leading-relaxed mb-4 font-light">
          We design <span className="italic font-serif">intuitive</span> mobile apps that users love.
        </p>
        <p className="text-base sm:text-xl md:text-2xl leading-relaxed mb-4 font-light">
          We develop <span className="italic font-serif">fast, scalable</span> cross-platform solutions.
        </p>
        <p className="text-base sm:text-xl md:text-2xl leading-relaxed font-light">
          We help you <span className="italic font-serif">launch and grow</span> your mobile presence, faster.
        </p>
      </div>
    </div>
  );
};

export default MobileAppMissionBox;
