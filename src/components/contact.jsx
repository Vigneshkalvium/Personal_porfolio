import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://portfolio-backend-pzr9.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again later.");
      }
    } catch (error) {
      setStatus("❌ Error sending message.");
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-20 bg-gradient-to-b text-white relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold mb-16 text-cyan-400 text-center"
      >
        ✉️ Contact Me
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-slate-800/80 border border-cyan-400/40 rounded-3xl p-8 shadow-lg"
      >
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="flex-1 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="flex-1 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="mt-6 w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
        ></textarea>
        <button type="submit" className="mt-8 w-full py-3 font-semibold rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-lg">
          Send Message
        </button>
        {status && <p className="mt-4 text-center">{status}</p>}
      </motion.form>

      {/* Social Links */}
      <motion.div className="flex gap-8 justify-center mt-16 text-cyan-400 text-3xl">
        <a href="https://github.com/Vigneshkalvium" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/vignesh-angamuthu-1342542a6/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://twitter.com/your_twitter_handle" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="mailto:vignesh.dev.2024@gmail.com"><FaEnvelope /></a>
      </motion.div>
    </section>
  );
}
