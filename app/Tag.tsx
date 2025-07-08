'use client';

import React from 'react';

type TagProps = {
  text: string;
  gradient: string;
  borderColor: string;
  className?: string;
};

const Tag: React.FC<TagProps> = ({ text, gradient, borderColor, className = '' }) => {
  return (
    <span className={`tag ${className}`}>
      {text}
      <style jsx>{`
        .tag {
          color: #ffffff;
          background-image: ${gradient};
          border: 1px solid ${borderColor};
          border-radius: 999px; /* More roundness */
          padding: 12px 18px; /* Smaller size */
          font-family: Brockmann Webfont, sans-serif;
          font-size: 14px;
          transition: box-shadow 0.6s, background-color 0.6s;
          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.31),
            inset 0 2px 1px rgba(255, 255, 255, 0.5);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
        }

        .tag:hover {
          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5),
            inset 0 2px 1px rgba(255, 255, 255, 0.7);
        }
      `}</style>
    </span>
  );
};

export default Tag;
