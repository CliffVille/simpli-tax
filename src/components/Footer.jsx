import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0A1224] text-white">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-300 text-center sm:text-left">
            © {year} <span className="font-semibold text-white">SimpliTax™</span>. All Rights Reserved.
          </p>

          <ul className="flex items-center justify-center sm:justify-end gap-5 text-sm font-medium uppercase tracking-wide text-slate-300">
            <li>
              <a href="#home" className="hover:text-yellow-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400 transition">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;