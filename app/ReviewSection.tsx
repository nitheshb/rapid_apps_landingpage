'use client';

import React from 'react';
import Image from 'next/image';

import p1 from './images/person_1.jpg';
import p2 from './images/person_2.jpg';

const reviews = [
  {
    quote: 'They delivered a stunning app design that feels effortless and intuitive.',
    author: 'Bhavish ',
    subtitle: 'CEO, Ola',
    image: p1,
  },
  {
    quote: 'The speed and quality of development were beyond our expectations.',
    author: "Kunal",
    subtitle: 'CEO, CRED',
    image: p2,
  },
];

const ReviewSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-6 text-center">
      {/* Section Heading */}
      <div className="mb-20">
        <h2 className="text-5xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Hear from founders, investors, and leaders who trusted us to build their mobile app experiences.
        </p>
      </div>

      {/* Review Cards */}
      <div className="flex justify-center gap-20 items-start flex-wrap md:flex-nowrap">
        {reviews.map((review, i) => (
          <div key={i} className="max-w-xl">
            <blockquote className="text-4xl font-serif leading-snug mb-12">
              “{review.quote}”
            </blockquote>

            <div className="flex justify-center items-center gap-4">
              <Image
                src={review.image}
                alt={review.author}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div className="text-left">
                <p className="text-lg font-semibold">{review.author}</p>
                {review.subtitle && (
                  <p className="text-sm text-gray-500">{review.subtitle}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
