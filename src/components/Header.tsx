import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-4">
        <nav
          className="max-w-6xl mx-auto flex items-center justify-between 
          bg-white/10 backdrop-blur-md border border-white/20 
          rounded-full px-6 py-3 shadow-lg"
        >
          {/* Logo */}
          <div className="text-sm md:text-lg font-bold text-purple-400">
            👩🏻‍💻 Mitali Tayal
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-white/80 text-sm">
            <a href="#home" className="hover:text-purple-300 transition">
              Home
            </a>
            <a href="#about" className="hover:text-purple-300 transition">
              About
            </a>
            <a href="#experience" className="hover:text-purple-300 transition">
              Experience
            </a>
            <a href="#skills" className="hover:text-purple-300 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-purple-300 transition">
              Projects
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-lg"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </header>

      {/* Mobile Dropdown (Separate from nav so header doesn't resize) */}
      {open && (
        <div
          className="fixed top-20 left-4 right-4 z-40 bg-[#1a1a2e] 
          rounded-2xl p-6 flex flex-col gap-4 text-white shadow-lg md:hidden"
        >
          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#experience" onClick={() => setOpen(false)}>
            Experience
          </a>
          <a href="#skills" onClick={() => setOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setOpen(false)}>
            Projects
          </a>
        </div>
      )}
    </>
  );
};

export default Header;
