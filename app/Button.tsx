'use client';

import React from 'react';

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'black' | 'green';
};

type ButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type AnchorProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type Props = ButtonProps | AnchorProps;

const Button: React.FC<Props> = ({
  children,
  className = '',
  href,
  variant = 'black',
  ...props
}) => {
  const sharedClassName = `button ${className}`;

  // Variant-based styles
  const background = variant === 'green'
    ? 'linear-gradient(#28a745, #218838)'
    : 'linear-gradient(#000, #292929)';

  const borderColor = variant === 'green' ? '#1e7e34' : '#000';

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClassName}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
        <style jsx>{`
          .button {
            color: #ffffff;
            background-image: ${background};
            border: 1px solid ${borderColor};
            border-radius: 12px;
            padding: 22px 54px;
            font-family: Brockmann Webfont, sans-serif;
            font-size: 17px;
            transition: box-shadow 0.6s, background-color 0.6s;
            box-shadow: 0 2px 2px rgba(0, 0, 0, 0.31),
              inset 0 2px 1px rgba(255, 255, 255, 0.5);
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
          }

          .button:hover {
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5),
              inset 0 2px 1px rgba(255, 255, 255, 0.7);
          }
        `}</style>
      </a>
    );
  }

  return (
    <button className={sharedClassName} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
      <style jsx>{`
        .button {
          color: #ffffff;
          background-image: ${background};
          border: 1px solid ${borderColor};
          border-radius: 12px;
          padding: 22px 54px;
          font-family: Brockmann Webfont, sans-serif;
          font-size: 17px;
          transition: box-shadow 0.6s, background-color 0.6s;
          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.31),
            inset 0 2px 1px rgba(255, 255, 255, 0.5);
        }

        .button:hover {
          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5),
            inset 0 2px 1px rgba(255, 255, 255, 0.7);
        }
      `}</style>
    </button>
  );
};

export default Button;
