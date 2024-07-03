import React from 'react';

const Button = ({ text, className }) => {
    return (
        <button className={`btn ${className}`}>
            {text}
        </button>
    );
};

export default Button;
