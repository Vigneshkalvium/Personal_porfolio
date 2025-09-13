import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects({ projects }) {
  return (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 py-20 text-white relative z-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-4xl md:text-5xl font-extrabold mb-16 text-cyan-400 text-center drop-shadow-[0_0_25px_rgba(34,211,238,0.85)]"
      >
        🚀 Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl w-full">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.2 }}
            whileHover={{ scale: 1.07, rotateY: 6, rotateX: 6, boxShadow: "0 0 40px #22d3ee" }}
            className="bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-cyan-900/80 border border-cyan-400/40 
              rounded-3xl overflow-hidden shadow-lg cursor-pointer transform perspective-800"
          >
            {/* Project Image */}
            <div className="h-52 sm:h-56 md:h-60 w-full overflow-hidden rounded-t-3xl">
              {/* {console.log(project.image)} */}
              <img
              
                src={project.image}
                alt={project.title}
                className="w-full h-full object-fit transition-transform duration-700 ease-in-out hover:scale-110"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-extrabold text-cyan-400 mb-3 truncate" title={project.title}>
                {project.title}
              </h3>
              <p className="text-gray-300 leading-relaxed min-h-[68px]">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mt-5">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-semibold bg-cyan-400/20 border border-cyan-400/50 rounded-xl text-cyan-300 select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6 mt-6 items-center">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <FaGithub size={24} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <FaExternalLinkAlt size={22} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
