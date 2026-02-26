import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full
      bg-[#0A1224] text-white border border-white/20 shadow-lg
      hover:bg-yellow-400 hover:text-[#0A1224] hover:shadow-yellow-300/40
      transition-all duration-300
      ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"}`}
    >
      ↑
    </button>
  );
};

export default BackToTopButton;