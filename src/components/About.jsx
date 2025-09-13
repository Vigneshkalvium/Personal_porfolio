import { motion } from "framer-motion";
import  me  from "../images/me.jpg"; // Make sure this path is correct
import resume from "../images/resume.pdf"

const tags = ["Web Developer", "Blockchain Enthusiast", "UI/UX Explorer"];

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center 
                 px-6 sm:px-10 md:px-16 lg:px-24 text-white relative z-10"
      aria-label="About me section"
    >
      {/* Left side: Avatar/Image with rotating and breathing animation */}
      <motion.div
        initial={{ opacity: 0, rotateY: 0, scale: 1 }}
        animate={{
          opacity: 1,
          rotateY: [0, 15, -15, 0], // 3D rocking rotation
          scale: [1, 1.05, 1, 1.05], // breathing pulsation
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-8 md:mb-0 
                   md:mr-12 rounded-full overflow-hidden border-4 border-cyan-400 
                   shadow-[0_0_25px_#22d3ee] flex-shrink-0"
        style={{ perspective: 800 }}
      >
        <img
          src={me} // replace with your image import
          alt="Vignesh"
          className="w-full h-full object-cover rounded-full"
          loading="lazy"
          decoding="async"
        />
      </motion.div>

      {/* Right side: Content with fade-in and slide animation */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl text-center md:text-left"
      >
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 
                     bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent
                     drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] select-none"
        >
          👋 About Me
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
          Hi, I’m{" "}
          <span className="text-cyan-400 font-semibold">Vignesh Angamuthu</span>, a passionate{" "}
          <span className="text-cyan-300 font-medium">Software Engineer</span> and{" "}
          <span className="text-cyan-300 font-medium">MERN Stack Developer</span>. <br />
          I enjoy solving challenging problems with{" "}
          <span className="text-cyan-300 font-medium">Java, C++, and Python</span>, 
          building <span className="text-cyan-300 font-medium">responsive web applications</span>, 
          and constantly improving my{" "}
          <span className="text-cyan-300 font-medium">Data Structures & Algorithms</span> skills.
        </p>

        {/* Animated tags with stagger */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center md:justify-start mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          aria-label="About me tags"
        >
          {tags.map((tag, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 10, scale: 0.8 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { ease: "easeOut", duration: 0.35 } },
              }}
              className="px-3 py-2 sm:px-4 sm:py-2 bg-slate-800/60 border border-cyan-400/40 
                         rounded-full text-xs sm:text-sm shadow-[0_0_12px_#22d3ee] select-none"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Download CV button with glow animation */}
        <motion.a
          href={resume} // replace with your resume path
          download
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px #22d3ee, 0 0 30px #22d3ee" }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-3 bg-cyan-400 text-black font-bold rounded-lg shadow-lg 
                     hover:bg-cyan-300 transition-all duration-300 select-none text-sm sm:text-base"
          aria-label="Download CV"
        >
          📄 Download CV
        </motion.a>
      </motion.div>
    </section>
  );
}
