import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { 
  SiMongodb, SiTailwindcss, SiFlutter, SiSolidity, SiTypescript, SiNextdotjs 
} from "react-icons/si";
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaJs, 
  FaDatabase, FaGithub, FaGitAlt, FaHtml5, FaCss3Alt 
} from "react-icons/fa";

const skills = [
  { name: "React", icon: <FaReact size={40} />, rating: 5 },
  { name: "Node.js", icon: <FaNodeJs size={40} />, rating: 4 },
  { name: "Python", icon: <FaPython size={40} />, rating: 4 },
  { name: "Java", icon: <FaJava size={40} />, rating: 3 },
  { name: "MongoDB", icon: <SiMongodb size={40} />, rating: 4 },
  { name: "Tailwind", icon: <SiTailwindcss size={40} />, rating: 5 },
  { name: "Flutter", icon: <SiFlutter size={40} />, rating: 3 },
  { name: "Blockchain", icon: <SiSolidity size={40} />, rating: 3 },
  { name: "JavaScript", icon: <FaJs size={40} />, rating: 5 },
  { name: "TypeScript", icon: <SiTypescript size={40} />, rating: 4 },
  { name: "Next.js", icon: <SiNextdotjs size={40} />, rating: 4 },
  { name: "Database", icon: <FaDatabase size={40} />, rating: 4 },
  { name: "GitHub", icon: <FaGithub size={40} />, rating: 5 },
  { name: "Git", icon: <FaGitAlt size={40} />, rating: 4 },
  { name: "HTML5", icon: <FaHtml5 size={40} />, rating: 5 },
  { name: "CSS3", icon: <FaCss3Alt size={40} />, rating: 5 },
];

export default function Skills() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 text-white relative z-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-cyan-400 text-center drop-shadow-[0_0_15px_rgba(34,211,238,0.7)]">
        ⚡ Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 w-full max-w-7xl">
        {skills.map((skill, i) => (
          <Tilt
            key={i}
            glareEnable={true}
            glareColor="#22d3ee"
            glareMaxOpacity={0.4}
            scale={1.05}
            className="w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="bg-slate-900/50 border border-cyan-400/40 rounded-xl shadow-lg 
                         flex flex-col justify-between items-center p-4 sm:p-6 
                         hover:shadow-cyan-400/50 transition-all duration-300"
            >
              {/* Icon + Name */}
              <div className="flex flex-col items-center justify-center flex-grow text-center">
                <div className="text-cyan-400 text-4xl sm:text-5xl">{skill.icon}</div>
                <h3 className="mt-3 text-sm sm:text-lg font-semibold">{skill.name}</h3>
              </div>

              {/* Rating */}
              <div className="mt-3 flex justify-center">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span
                    key={idx}
                    className={`text-sm sm:text-lg ${idx < skill.rating ? "text-cyan-400" : "text-gray-600"}`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
