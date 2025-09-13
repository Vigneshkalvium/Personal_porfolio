import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 py-8 px-6 md:px-20 border-t border-cyan-700 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <p className="text-sm sm:text-base select-none">
          © {new Date().getFullYear()} Vignesh Angamuthu. All rights reserved.
        </p>

        <div className="flex space-x-6 text-cyan-400 text-xl">
          <a
            href="https://github.com/Vigneshkalvium"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-cyan-300 transition-colors"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://linkedin.com/in/vignesh-angamuthu-1342542a6/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-cyan-300 transition-colors"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            href="mailto:your_email@example.com"
            aria-label="Email"
            className="hover:text-cyan-300 transition-colors"
          >
            <i className="fas fa-envelope" />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
