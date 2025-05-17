import React from "react";

const Button = ({ children, className, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ${className}`}
  >
    {children}
  </button>
);

export default Button;
