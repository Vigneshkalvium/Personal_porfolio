import { motion } from "framer-motion";

const education = [
  {
    school: "Kalvium",
    degree: "Computer Software Product Engineer",
    years: "2024 - 2028",
    details: "Focused on Web Development, Blockchain, and MERN stack.",
  },
  {
    school: "Jayam Matric Hr. Sec. School",
    degree: "High School (Science Stream)",
    years: "2018 - 2021",
    details: "Specialized in Mathematics and Computer Science.",
  },
  {
    school: "Classic Matriculation school",
    degree: "Secondary School",
    years: "2008 - 2018",
    details: "Built strong foundation in core subjects and programming basics.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-16 text-white relative z-10"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.7)]">
        🎓 Education
      </h2>

      <div className="relative w-full max-w-5xl">
        {/* Vertical glowing line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-cyan-400/40 rounded-full -translate-x-1/2"></div>

        <div className="space-y-16">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`relative flex items-center w-full ${
                i % 2 === 0 ? "justify-start pr-8" : "justify-end pl-8"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-1/2 top-6 w-6 h-6 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee] animate-pulse -translate-x-1/2"></div>

              {/* Card */}
              <div
                className="bg-slate-900/70 border border-cyan-400/40 rounded-xl p-6 w-full max-w-md hover:shadow-[0_0_25px_#22d3ee] 
                           transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-cyan-400">{edu.degree}</h3>
                <p className="text-sm text-gray-400">
                  {edu.school} • {edu.years}
                </p>
                <p className="mt-2 text-gray-300">{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
