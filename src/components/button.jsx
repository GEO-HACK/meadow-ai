import React from 'react';

const Button = ({ link, color, text_color, text }) => {
  return (
    <div>
      <a
        href={link}
        className={`px-8 py-4 text-lg font-bold text-center transition-transform duration-300 ease-in-out rounded-full shadow-md hover:scale-105 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg`}
        style={{ backgroundColor: color, color: text_color }}
      >
        {text}
      </a>
    </div>
  );
};

export default Button;
