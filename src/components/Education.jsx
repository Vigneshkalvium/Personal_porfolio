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
    school: "Classic Matriculation School",
    degree: "Secondary School",
    years: "2008 - 2018",
    details: "Built strong foundation in core subjects and programming basics.",
  },
];

const cardVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? -100 : 100,
    scale: 0.9,
  }),
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 60, damping: 20 },
  },
};

export default function Education() {
  return (
    <section
      id="education"
      className="w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-16 text-white relative overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold mb-16 text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.75)]"
      >
        🎓 Education
      </motion.h2>

      <div className="relative w-full max-w-5xl">
        {/* Vertical glowing gradient line - BACKGROUND */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0.7 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400/60 via-cyan-300/40 to-transparent rounded-full -translate-x-1/2 shadow-lg z-0"
        />

        <div className="space-y-20 py-2 z-10 relative">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              transition={{ duration: 0.9, delay: i * 0.23 }}
              className={`relative flex w-full items-center
                ${i % 2 === 0 ? "md:justify-start md:pr-12" : "md:justify-end md:pl-12"}
                justify-center text-center md:text-left group z-10`}
            >
              {/* Dot - FOREGROUND */}
              <motion.div
                layout
                animate={{
                  boxShadow: [
                    "0 0 0px #22d3ee, 0 0 25px #22d3ee",
                    "0 0 8px #22d3ee, 0 0 35px #22d3ee",
                    "0 0 0px #22d3ee, 0 0 25px #22d3ee",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 2,
                }}
                className="absolute left-1/2 top-6 w-7 h-7 rounded-full bg-cyan-400 shadow-[0_0_40px_#22d3ee] border-4 border-cyan-400/50 animate-pulse -translate-x-1/2 z-20"
              />

              {/* Connector */}
              {i !== education.length - 1 && (
                <motion.div
                  initial={{ width: 3, height: 0, opacity: 0.6 }}
                  whileInView={{ height: 60, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.18, type: "spring" }}
                  className="absolute left-1/2 top-12 w-1 h-16 bg-cyan-400/30 -translate-x-1/2 z-10"
                />
              )}

              {/* Card with glassmorphism and hover effect - FOREGROUND */}
              <motion.div
                whileHover={{ scale: 1.04, boxShadow: "0 0 40px #22d3ee" }}
                className="bg-gradient-to-br from-slate-900/70 via-slate-900/60 to-cyan-900/70 border border-cyan-400/40 rounded-2xl p-8 w-full max-w-md backdrop-blur-md shadow-lg
                  hover:shadow-[0_0_40px_#22d3ee]
                  transition-all duration-300 z-10"
              >
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">{edu.degree}</h3>
                <p className="text-base text-gray-300 mb-2">
                  <span className="font-semibold">{edu.school}</span> • {edu.years}
                </p>
                <p className="mt-2 text-gray-400">{edu.details}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
