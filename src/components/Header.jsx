import { useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/15 bg-[#0A1224]/80 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="h-20 flex items-center justify-between">
          <a href="#home" className="leading-tight">
            <div className="text-3xl font-extrabold tracking-tight">SimpliTax</div>
            <div className="text-lg font-semibold text-white/90">Solutions</div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 uppercase text-sm font-semibold tracking-wide">
            {links.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className="relative text-white/85 hover:text-yellow-400 transition"
              >
                {tab.name}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle (keeps X animation) */}
          <button
            type="button"
            aria-label="Toggle menu"
            className="lg:hidden flex flex-col justify-between h-6 w-8 cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span
              className={`block h-0.5 w-full bg-white transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-[11px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[11px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="lg:hidden border-t border-white/10 bg-[#0A1224]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-3 flex flex-col">
            {links.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className="py-3 uppercase text-sm font-semibold tracking-wide text-white/90 hover:text-yellow-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {tab.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
