'use client';

import React from 'react';
import Image from 'next/image';

import p1 from './images/person_1.jpg';
import p2 from './images/person_2.jpg';

const reviews = [
  {
    quote: 'They delivered a stunning app design that feels effortless and intuitive.',
    author: 'Bhavish',
    subtitle: 'CEO, Ola',
    image: p1,
  },
  {
    quote: 'The speed and quality of development were beyond our expectations.',
    author: 'Kunal',
    subtitle: 'CEO, CRED',
    image: p2,
  },
];

const ReviewSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
          What Our Clients Say
        </h2>
        <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto mt-4">
          Hear from founders, investors, and leaders who trusted us to build their mobile app experiences.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {reviews.map((review, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md text-center">
            <blockquote className="text-xl sm:text-2xl font-serif italic leading-relaxed text-gray-800 mb-6">
              “{review.quote}”
            </blockquote>
            <div className="flex justify-center items-center gap-4">
              <Image
                src={review.image}
                alt={review.author}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="text-left">
                <p className="text-base font-semibold">{review.author}</p>
                <p className="text-sm text-gray-500">{review.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
