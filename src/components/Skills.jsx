import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  SiMongodb,
  SiTailwindcss,
  SiFlutter,
  SiSolidity,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaJs,
  FaDatabase,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

const skills = [
  { name: "React", icon: <FaReact size={44} />, rating: 5 },
  { name: "Node.js", icon: <FaNodeJs size={44} />, rating: 4 },
  { name: "Python", icon: <FaPython size={44} />, rating: 4 },
  { name: "Java", icon: <FaJava size={44} />, rating: 3 },
  { name: "MongoDB", icon: <SiMongodb size={44} />, rating: 4 },
  { name: "Tailwind", icon: <SiTailwindcss size={44} />, rating: 5 },
  { name: "Flutter", icon: <SiFlutter size={44} />, rating: 3 },
  { name: "Blockchain", icon: <SiSolidity size={44} />, rating: 3 },
  { name: "JavaScript", icon: <FaJs size={44} />, rating: 5 },
  { name: "TypeScript", icon: <SiTypescript size={44} />, rating: 4 },
  { name: "Next.js", icon: <SiNextdotjs size={44} />, rating: 4 },
  { name: "Database", icon: <FaDatabase size={44} />, rating: 4 },
  { name: "GitHub", icon: <FaGithub size={44} />, rating: 5 },
  { name: "Git", icon: <FaGitAlt size={44} />, rating: 4 },
  { name: "HTML5", icon: <FaHtml5 size={44} />, rating: 5 },
  { name: "CSS3", icon: <FaCss3Alt size={44} />, rating: 5 },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 60, damping: 14 },
  },
};

export default function Skills() {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 text-white relative z-10 mb-15"
      aria-label="Skills section"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
      >
        ⚡ Skills
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 w-full max-w-7xl"
      >
        {skills.map((skill, i) => (
          <Tilt
            key={i}
            glareEnable={true}
            glareColor="#22d3ee"
            glareMaxOpacity={0.35}
            scale={1.07}
            transitionSpeed={250}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            className="w-full"
          >
            <motion.div
              variants={cardVariants}
              className="bg-slate-900/60 border border-cyan-400/40 rounded-2xl shadow-lg flex flex-col justify-between items-center p-5 sm:p-6 cursor-pointer
                hover:shadow-[0_0_30px_#22d3ee] hover:border-cyan-400 transition-all duration-300 ease-in-out
                backdrop-blur-md"
              aria-label={`${skill.name} skill card`}
            >
              {/* Icon + Name */}
              <div className="flex flex-col items-center justify-center flex-grow text-center">
                <div className="text-cyan-400 text-5xl sm:text-6xl">{skill.icon}</div>
                <h3
                  className="mt-3 text-base sm:text-xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 bg-clip-text text-transparent select-none"
                  aria-label={`Skill name: ${skill.name}`}
                >
                  {skill.name}
                </h3>
              </div>

              {/* Rating */}
              <div className="mt-4 flex justify-center space-x-1" aria-label={`Skill rating: ${skill.rating} out of 5`}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span
                    key={idx}
                    className={`text-lg sm:text-xl select-none transition-colors duration-300 ease-in-out ${
                      idx < skill.rating ? "text-cyan-400" : "text-gray-600"
                    }`}
                    aria-hidden="true"
                  >
                    ★
                  </span>
                ))}
              </div>
            </motion.div>
          </Tilt>
        ))}
      </motion.div>
    </section>
  );
}
