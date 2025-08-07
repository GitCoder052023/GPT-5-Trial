import React from "react";

const GradientText = ({ children }) => (
  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
    {children}
  </span>
);

export default GradientText;