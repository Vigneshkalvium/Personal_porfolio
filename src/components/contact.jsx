import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-20 bg-gradient-to-b text-white relative z-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-5xl font-extrabold mb-16 text-cyan-400 text-center drop-shadow-[0_0_25px_rgba(34,211,238,0.85)]"
      >
        ✉️ Contact Me
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-3xl bg-slate-800/80 border border-cyan-400/40 rounded-3xl p-8 shadow-lg backdrop-blur-md"
        onSubmit={(e) => {
          e.preventDefault();
          alert("This is just a UI shell. Integrate your backend or email service!");
        }}
        aria-label="Contact form"
      >
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="flex-1 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Name"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="flex-1 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Email"
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="mt-6 w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
          aria-label="Message"
        ></textarea>
        <button
          type="submit"
          className="mt-8 w-full py-3 font-semibold rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-lg hover:from-cyan-300 hover:to-blue-400 transition-all duration-300"
        >
          Send Message
        </button>
      </motion.form>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex gap-8 justify-center mt-16 text-cyan-400 text-3xl"
        aria-label="Social media links"
      >
        <a
          href="https://github.com/Vigneshkalvium"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-cyan-300 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/vignesh-angamuthu-1342542a6/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-cyan-300 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/your_twitter_handle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-cyan-300 transition-colors"
        >
          <FaTwitter />
        </a>
        <a
          href="vignesh.dev.2024@gmail.com"
          aria-label="Email"
          className="hover:text-cyan-300 transition-colors"
        >
          <FaEnvelope />
        </a>
      </motion.div>

      {/* Optional Map */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-20 w-full max-w-4xl h-64 sm:h-96 rounded-xl overflow-hidden shadow-lg border border-cyan-400/40"
        aria-label="Location map"
      >
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163833.09606194767!2d76.80241211540928!3d11.013924441853849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1757733448260!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="rounded-xl"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </section>
  );
}
