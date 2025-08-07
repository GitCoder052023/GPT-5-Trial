import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <Container className="flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-cyan-400 to-violet-500" />
          <span className="text-sm font-medium">Verifa</span>
        </div>
        <div className="text-center text-xs text-white/50 md:text-left">
          © {new Date().getFullYear()} Verifa. All rights reserved.
        </div>
        <div className="flex items-center gap-3 text-xs text-white/60">
          <a className="hover:text-white" href="#">Privacy</a>
          <a className="hover:text-white" href="#">Terms</a>
          <a className="hover:text-white" href="#">Contact</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;