import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./App.css";

export default function App() {
  return (
    <div className="bg-[#0a0a0a] text-gray-200 font-poppins overflow-x-hidden">
      {/* ===== NAVBAR ===== */}
      <nav className="fixed w-full z-50 backdrop-blur bg-[#0a0a0acc] border-b border-gray-800 flex justify-center items-center px-10 py-4">
        <ul className="flex gap-8 text-sm text-gray-400">
          <li><a href="#home" className="hover:text-purple-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-purple-400 transition">About</a></li>
          <li><a href="#techstack" className="hover:text-purple-400 transition">Tech Stack</a></li>
          <li><a href="#projects" className="hover:text-purple-400 transition">Projects</a></li>
          <li><a href="#education" className="hover:text-purple-400 transition">Education</a></li>
          <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
        </ul>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center relative">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full bg-purple-700/20 blur-3xl"
            animate={{ x: [0, 200, -200, 0], y: [0, 100, -100, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full bg-blue-700/20 blur-3xl top-40 right-20"
            animate={{ x: [0, -200, 200, 0], y: [0, -100, 100, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
        </div>

        <motion.h1
          className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Ahmad Tariq
        </motion.h1>
        <p className="mt-3 text-green-400 text-sm relative z-10">🟢 Available for hire</p>
        <motion.h2
          className="mt-3 text-xl font-medium relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          MERN Stack Developer
        </motion.h2>
        <p className="mt-4 max-w-xl text-gray-400 relative z-10">
          Building scalable, high-performance web applications that turn ideas into digital reality.
        </p>
        <div className="mt-8 flex gap-4 relative z-10">
          <a
            href="#projects"
            className="bg-purple-600 hover:bg-purple-700 transition px-5 py-2 rounded-xl shadow-lg shadow-purple-500/30"
          >
            View Projects →
          </a>
          <a
            href="#contact"
            className="bg-gray-800 border border-gray-700 px-5 py-2 rounded-xl hover:border-purple-500 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="py-24 bg-[#0e0e0e]">
        <h2 className="text-4xl text-center font-bold text-purple-400 mb-10">About Me</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10 max-w-6xl mx-auto px-6">
          <div className="bg-[#121212] p-6 rounded-2xl shadow-lg flex-1">
            <h3 className="font-semibold text-xl mb-4 text-white">My Journey</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              I'm a passionate MERN Stack Developer skilled in building dynamic, responsive, and
              scalable web applications using MongoDB, Express.js, React.js, and Node.js.
              I also have foundational Android development experience using XML and Kotlin.
            </p>
            <div className="flex justify-between mt-6 text-purple-400">
              <div><span className="text-white text-lg font-bold">15+</span><br />Projects</div>
              <div><span className="text-white text-lg font-bold">1+</span><br />Year</div>
              <div><span className="text-white text-lg font-bold">10K+</span><br />Users</div>
            </div>
          </div>

          <div className="bg-[#121212] p-6 rounded-2xl flex-1">
            <h3 className="font-semibold text-xl mb-6 text-white">Career Timeline</h3>
            <ul className="relative border-l border-gray-700 pl-6">
              <li className="mb-6">
                <div className="absolute -left-3 w-6 h-6 rounded-full bg-purple-500"></div>
                <h4 className="font-semibold text-white">NextShines — Internship</h4>
                <p className="text-gray-400 text-sm">MERN Stack Developer (Jun 2025 – Present)</p>
              </li>
              <li className="mb-6">
                <div className="absolute -left-3 w-6 h-6 rounded-full bg-blue-500"></div>
                <h4 className="font-semibold text-white">InventStarts — Internship</h4>
                <p className="text-gray-400 text-sm">MERN Stack Developer (Oct 2024 – Jun 2025)</p>
              </li>
              <li>
                <div className="absolute -left-3 w-6 h-6 rounded-full bg-green-500"></div>
                <h4 className="font-semibold text-white">InventStarts — Certification</h4>
                <p className="text-gray-400 text-sm">Basic Programming & Web Dev (Jun – Aug 2024)</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
     {/* ===== TECHNOLOGY STACK ===== */}
<section id="techstack" className="py-24">
  <h2 className="text-4xl text-center font-bold text-purple-400 mb-10">Technology Stack</h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-center max-w-5xl mx-auto px-4">
    {[
      { name: "HTML", icon: <i className="devicon-html5-plain colored text-4xl"></i> },
      { name: "CSS", icon: <i className="devicon-css3-plain colored text-4xl"></i> },
      { name: "JavaScript", icon: <i className="devicon-javascript-plain colored text-4xl"></i> },
      { name: "React.js", icon: <i className="devicon-react-original colored text-4xl"></i> },
      { name: "Node.js", icon: <i className="devicon-nodejs-plain colored text-4xl"></i> },
      { name: "Express.js", icon: <i className="devicon-express-original text-white text-4xl"></i> },
      { name: "MongoDB", icon: <i className="devicon-mongodb-plain colored text-4xl"></i> },
      { name: "Firebase", icon: <i className="devicon-firebase-plain colored text-4xl"></i> },
      { name: "AWS", icon: <i className="devicon-amazonwebservices-original colored text-4xl"></i> },
      { name: "GitHub", icon: <i className="devicon-github-original text-white text-4xl"></i> },
    ].map((tech, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.1 }}
        className="bg-[#181818] py-5 px-4 rounded-2xl text-center shadow hover:shadow-purple-500/20 transition flex flex-col items-center gap-2"
      >
        <div>{tech.icon}</div>
        <p className="text-gray-300 text-sm font-medium">{tech.name}</p>
      </motion.div>
    ))}
  </div>
</section>


      {/* ===== PROJECTS ===== */}
      <section id="projects" className="py-24 bg-[#0e0e0e]">
        <h2 className="text-4xl text-center font-bold text-purple-400 mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {[
            {
              title: "Medikam — Medicine Delivery System",
              desc: "A full-stack MERN app with admin, seller & user dashboards, JWT auth, and Cloudinary uploads.",
            },
            {
              title: "Vistora — E-Commerce Platform",
              desc: "Frontend in React + Tailwind, backend in Golang with JWT and RESTful APIs.",
            },
            {
              title: "Waves of Food — Android App",
              desc: "Simple Kotlin + XML food ordering app focusing on UI/UX and smooth navigation.",
            },
          ].map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-[#181818] p-6 rounded-2xl shadow hover:shadow-purple-500/20 transition"
            >
              <h3 className="text-lg font-semibold mb-2 text-white">{proj.title}</h3>
              <p className="text-gray-400 text-sm">{proj.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== EDUCATION ===== */}
      <section id="education" className="py-24">
        <h2 className="text-4xl text-center font-bold text-purple-400 mb-10">Education</h2>
        <div className="max-w-3xl mx-auto bg-[#121212] p-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-white mb-3">Associate Engineering (Computer Information Technology)</h3>
          <p className="text-gray-400">
            Government College of Technology, Printing and Art, Lahore.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Focused on web development, database design, and programming fundamentals.
          </p>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-24 text-center">
        <h2 className="text-4xl font-bold text-purple-400 mb-8">Contact Me</h2>
        <p className="text-gray-400 mb-6">
          Feel free to reach out — I’m open to freelance or full-time opportunities.
        </p>
        <div className="flex justify-center gap-6 text-3xl">
          <a href="https://github.com/Ahmadtariqq" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-purple-400 cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/ahmad-tariq-36708at" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-purple-400 cursor-pointer" />
          </a>
          <a href="mailto:ahmad36708@gmail.com">
            <FaEnvelope className="hover:text-purple-400 cursor-pointer" />
          </a>
        </div>
      </section>

      {/* ===== VIP FOOTER ===== */}
      <footer className="bg-gradient-to-r from-[#0e0e0e] to-[#181818] py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {/* LEFT SECTION */}
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-3">Ahmad Tariq</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              MERN Stack Developer | Building high-performance web apps with clean, scalable architecture.
            </p>
            <div className="flex gap-4 mt-4 text-xl">
              <a href="https://github.com/Ahmadtariqq" target="_blank" rel="noopener noreferrer"><FaGithub className="hover:text-purple-400" /></a>
              <a href="https://www.linkedin.com/in/ahmad-tariq-36708at" target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-purple-400" /></a>
              <a href="mailto:ahmad36708@gmail.com"><FaEnvelope className="hover:text-purple-400" /></a>
            </div>
          </div>

          {/* CENTER LINKS */}
          <div className="text-center">
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-purple-400">Home</a></li>
              <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
              <li><a href="#education" className="hover:text-purple-400">Education</a></li>
              <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
            </ul>
          </div>

          {/* RIGHT CONTACT INFO */}
          <div className="text-right text-gray-400 text-sm">
            <p className="flex items-center justify-end gap-2">
              <FaPhone className="text-purple-400" /> +92 312 1849708
            </p>
            <p className="flex items-center justify-end gap-2 mt-2">
              <FaEnvelope className="text-purple-400" /> ahmad36708@gmail.com
            </p>
            <p className="flex items-center justify-end gap-2 mt-2">
              <FaMapMarkerAlt className="text-purple-400" /> Lahore, Pakistan
            </p>
          </div>
        </div>

        <div className="text-center text-gray-500 text-xs mt-10 border-t border-gray-800 pt-4">
          © 2025 Ahmad Tariq — All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
