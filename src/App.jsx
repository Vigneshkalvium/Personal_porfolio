import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import Navbar from "./components/Navbar";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Skills from "./components/Skills";
import Education from "./components/Education";
import About from "./components/About";
import projectData from "./data/ProjectData";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Contact from "./components/contact";
import Footer from "./components/footer";

// Expose THREE globally for Vanta
window.THREE = THREE;

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  const passions = [
    "Web Developer",
    "Creative Thinker",
    "Problem Solver",
    "Technology Enthusiast",
    "Mern Stack Developer",
    "BlockChain",
    "Flutter Developer",
    "Python Coder",
    "Java Learner",
  ];
  const [currentPassionIndex, setCurrentPassionIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150;
  const deletingSpeed = 75;
  const delayBetweenWords = 2000;

  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  // Typing effect optimized to avoid flicker
  useEffect(() => {
    const handleType = () => {
      const fullText = passions[currentPassionIndex];
      if (isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
      }
    };

    let timer;
    if (!isDeleting && displayedText === passions[currentPassionIndex]) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentPassionIndex((prev) => (prev + 1) % passions.length);
    } else {
      timer = setTimeout(handleType, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPassionIndex, passions]);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Vanta init
  useEffect(() => {
    let effect;
    import("vanta/dist/vanta.globe.min.js").then((GLOBE) => {
      if (!vantaEffect.current) {
        effect = GLOBE.default({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x3fd5ff,
          backgroundColor: 0x000000,
        });
        vantaEffect.current = effect;
      }
    });

    return () => effect && effect.destroy();
  }, []);

  return (
    <div className="bg-slate-950 text-white min-h-screen relative  flex flex-col">
      <Navbar scrolled={scrolled} />

      <div ref={vantaRef} className="relative w-screen h-screen mb-10 overflow-hidden">
        <div
          className="absolute inset-0 flex flex-col items-start justify-center 
                     px-6 sm:px-12 md:px-24 lg:px-28 xl:px-32 text-left bg-transparent z-10"
        >
          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
            <span className="text-cyan-400 block">Vignesh</span>
            <span className="text-white block">Angamuthu</span>
          </h1>

          {/* Typing */}
          <p className="text-xl sm:text-2xl md:text-3xl mt-6 font-mono text-white drop-shadow-lg">
            I am a{" "}
            <span className="text-cyan-400 font-bold">{displayedText}</span>
            <span className="text-cyan-400 animate-blink" aria-hidden="true">
              |
            </span>
          </p>

          {/* Social links */}
          <div className="mt-6 flex flex-row gap-6">
            <a
              href="https://github.com/Vigneshkalvium"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white hover:text-cyan-400 text-2xl transition-transform transform hover:scale-125"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/vignesh-angamuthu-1342542a6/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-cyan-400 text-2xl transition-transform transform hover:scale-125"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/mr.cool_.dude_?igsh=MWJycTNuMW02eXRuaw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-cyan-400 text-2xl transition-transform transform hover:scale-125"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://wa.link/2i4ngz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white hover:text-cyan-400 text-2xl transition-transform transform hover:scale-125"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <main className="flex flex-col items-around justify-center gap-20 px-6 sm:px-12 md:px-16 lg:px-10 xl:px-24 w-full max-w-7xl mx-auto">
        <About />
        <Skills />
        <Education />
        <Projects projects={projectData} />
        <Reviews/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}
