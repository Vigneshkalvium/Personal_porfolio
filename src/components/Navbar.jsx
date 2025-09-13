import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={scrolled ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-cyan-400/30 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold text-cyan-400 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onClick={() => handleScroll("home")}
        >
          Vignesh Developer
        </motion.h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-white font-semibold">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer hover:text-cyan-400 transition-colors"
              onClick={() => handleScroll(link.id)}
            >
              {link.label}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col items-center gap-6 bg-slate-900 py-6 border-t border-cyan-400/30 text-white font-semibold"
        >
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer hover:text-cyan-400 transition-colors"
              onClick={() => handleScroll(link.id)}
            >
              {link.label}
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
}
