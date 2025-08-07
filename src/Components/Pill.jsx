import React from "react";

const Pill = ({ children, icon: Icon }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
    {Icon && <Icon size={14} className="text-white/70" />}
    {children}
  </span>
);

export default Pill;