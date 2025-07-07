'use client'; // Declare this as a Client Component

import React from 'react';

// Button component definition
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    children,
    className = '',
    ...props
}) => {
    return (
        <button
            className={`button ${className}`}
            {...props}
        >
            {children}
            <style jsx>{`
                .button {
                    color: #ffffff; /* Set text color to white */
                    background-image: linear-gradient(#000, #292929);
                    border: 1px solid #000;
                    border-radius: 12px;
                    padding: 22px 54px;
                    font-family: Brockmann Webfont, sans-serif;
                    font-size: 17px;
                    transition: box-shadow 0.6s, background-color 0.6s;
                    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.31), inset 0 2px 1px rgba(255, 255, 255, 0.5);
                }

                .button:hover {
                    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5), inset 0 2px 1px rgba(255, 255, 255, 0.7);
                }
            `}</style>
        </button>
    );
};

export default Button;
