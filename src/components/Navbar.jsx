import { useState, useEffect } from 'react';

// This component creates an animated and interactive navigation bar.
// It uses a combination of Tailwind CSS classes and React state
// to create effects like a scrolling blur and neon-style glows.
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // useEffect to handle the scroll event.
  // It adds a listener to the window to check the scroll position.
  // The navbar's style will change based on whether the user has scrolled down.
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full h-12 flex items-center justify-between px-8 z-50 transition-all duration-300
      ${scrolled ? 'bg-slate-900/60 backdrop-blur-sm shadow-lg' : 'bg-black'}`}>
      
      {/* Brand/Name with a glowing pulse effect */}
      <div className="text-cyan-400 font-bold text-lg tracking-wide drop-shadow-[0_0_10px_rgba(34,211,238,0.7)] animate-pulse">
        Vignesh Angamuthu
      </div>

      {/* Navigation links with a neon glow on hover */}
      <div className="flex gap-8">
        <a href="#home"
          className="relative text-white font-mono transition-all duration-300 
                     hover:text-cyan-400 hover:scale-110 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-cyan-400 
                     hover:before:w-full hover:before:transition-all hover:before:duration-300 hover:before:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">
          Home
        </a>
        <a href="#skills"
          className="relative text-white font-mono transition-all duration-300 
                     hover:text-cyan-400 hover:scale-110 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-cyan-400 
                     hover:before:w-full hover:before:transition-all hover:before:duration-300 hover:before:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">
          Skills
        </a>
        <a href="#about"
          className="relative text-white font-mono transition-all duration-300 
                     hover:text-cyan-400 hover:scale-110 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-cyan-400 
                     hover:before:w-full hover:before:transition-all hover:before:duration-300 hover:before:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">
          About
        </a>
        <a href="#connect"
          className="relative text-white font-mono transition-all duration-300 
                     hover:text-cyan-400 hover:scale-110 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-cyan-400 
                     hover:before:w-full hover:before:transition-all hover:before:duration-300 hover:before:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]">
          Connect
        </a>
      </div>
    </nav>
  );
}
