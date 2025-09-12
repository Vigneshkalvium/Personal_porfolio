import { useState, useEffect, useRef } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function randomizeText(text) {
  return text
    .split("")
    .map((char) => {
      if (char.match(/[a-zA-Z0-9]/)) {
        return letters[Math.floor(Math.random() * letters.length)];
      }
      return char;
    })
    .join("");
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverTexts, setHoverTexts] = useState({});

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    {label: "Projects", href: "#projects"},
    { label: "Connect", href: "#connect" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Flicker effect: quickly randomize text at about 40ms intervals for 0.5s then reset
  const handleMouseEnter = (index) => {
    const originalText = navItems[index].label;
    let flickerCount = 0;
    const intervalDuration = 40;
    const flickerMaxCount = 8; // 12 * 40ms = 480ms flicker duration

    const flickerInterval = setInterval(() => {
      setHoverTexts((prev) => ({
        ...prev,
        [index]: randomizeText(originalText),
      }));
      flickerCount++;

      if (flickerCount >= flickerMaxCount) {
        clearInterval(flickerInterval);
        setHoverTexts((prev) => ({
          ...prev,
          [index]: originalText,
        }));
      }
    }, intervalDuration);
  };

  const handleMouseLeave = (index) => {
    const originalText = navItems[index].label;
    setHoverTexts((prev) => ({
      ...prev,
      [index]: originalText,
    }));
  };

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full h-14 flex items-center justify-between px-4 md:px-8 z-50 transition-all duration-300
        ${scrolled ? "bg-slate-900/60 backdrop-blur-sm shadow-lg" : "bg-black"}`}
    >
      {/* Brand/Name with glowing pulse */}
      <div className="text-cyan-400 font-bold text-lg tracking-wide drop-shadow-[0_0_10px_rgba(34,211,238,0.7)] animate-pulse select-none">
        Vignesh Angamuthu
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-12 font-mono text-white select-none">
        {navItems.map((item, i) => (
          <li key={i} className="relative">
            <a
              href={item.href}
              className="relative transition-all duration-300 hover:text-cyan-400 hover:scale-110"
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
            >
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 hover:w-full"></span>

              <span
                key={hoverTexts[i] ?? item.label}
                className="relative drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]"
              >
                {hoverTexts[i] ?? item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden relative z-50">
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex flex-col justify-center items-center w-4 h-4 rounded group focus:outline-none"
        >
          <span
            className={`block bg-cyan-400 h-1 w-7 rounded-md transition-transform duration-300 origin-left ${
              menuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`block bg-cyan-400 h-1 w-7 rounded-md my-1 transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block bg-cyan-400 h-1 w-7 rounded-md transition-transform duration-300 origin-left ${
              menuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </button>

        {/* Mobile menu dropdown */}
        <ul
          className={`absolute right-0 top-14 bg-slate-900/90 backdrop-blur-md rounded-md py-4 w-36 flex flex-col gap-4 shadow-lg transition-transform origin-top-right
            ${
              menuOpen
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0 pointer-events-none"
            }`}
        >
          {navItems.map((item, i) => (
            <li key={i} className="text-center text-white font-mono">
              <a
                href={item.href}
                onClick={handleLinkClick}
                className="block w-full px-4 py-2 hover:bg-cyan-400 hover:text-black rounded transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
