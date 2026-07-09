import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const ROLES = [
  "Full-Stack Developer",
  "Laravel Architect",
  "React Specialist",
  "Node.js Engineer",
  "AI Automation Expert (n8n)",
];

const SKILLS = [
  /* Frontend */
  { name: "HTML5", cat: "frontend", icon: "devicon-html5-plain colored", glow: "#e34c26" },
  { name: "CSS3", cat: "frontend", icon: "devicon-css3-plain colored", glow: "#264de4" },
  { name: "JavaScript", cat: "frontend", icon: "devicon-javascript-plain colored", glow: "#f7df1e" },
  { name: "TypeScript", cat: "frontend", icon: "devicon-typescript-plain colored", glow: "#3178c6" },
  { name: "React.js", cat: "frontend", icon: "devicon-react-original colored", glow: "#61dafb" },
  { name: "Tailwind", cat: "frontend", icon: "devicon-tailwindcss-plain colored", glow: "#38bdf8" },
  /* Backend */
  { name: "Laravel", cat: "backend", icon: "devicon-laravel-original colored", glow: "#ff2d20" },
  { name: "Node.js", cat: "backend", icon: "devicon-nodejs-plain colored", glow: "#68bc51" },
  { name: "Express", cat: "backend", icon: "devicon-express-original text-current", glow: "#7c3aed" },
  { name: "PHP", cat: "backend", icon: "devicon-php-plain colored", glow: "#8993be" },
  /* Databases */
  { name: "MySQL", cat: "database", icon: "devicon-mysql-plain colored", glow: "#00758f" },
  { name: "MongoDB", cat: "database", icon: "devicon-mongodb-plain colored", glow: "#47a248" },
  /* Automation */
  { name: "n8n (AI)", cat: "automation", icon: "devicon-github-original text-orange-500", glow: "#ff6e52" },
  { name: "Firebase", cat: "automation", icon: "devicon-firebase-plain colored", glow: "#ffca28" },
  /* Cloud & Tools */
  { name: "AWS", cat: "tools", icon: "devicon-amazonwebservices-plain-wordmark colored", glow: "#ff9900" },
  { name: "GitHub", cat: "tools", icon: "devicon-github-original text-current", glow: "#6b7280" },
  { name: "Git", cat: "tools", icon: "devicon-git-plain colored", glow: "#f05032" },
];

const CATS = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "automation", label: "Cloud & Automation" },
  { id: "tools", label: "Tools" },
];

export default function HomeTab({ setActiveTab }: { setActiveTab: (t: string) => void }) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [shown, setShown] = useState("");

  useEffect(() => {
    const word = ROLES[roleIdx];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (charIdx < word.length) {
        timer = setTimeout(() => {
          setShown(word.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 90);
      } else {
        timer = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (charIdx > 0) {
        timer = setTimeout(() => {
          setShown(word.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, 45);
      } else {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [charIdx, deleting, roleIdx]);

  const [cat, setCat] = useState("all");
  const filtered = cat === "all" ? SKILLS : SKILLS.filter((s) => s.cat === cat);

  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="space-y-10 text-left"
    >
      {/* ── Top Area: Badges & Info ── */}
      <div className="space-y-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-[11px] font-semibold text-emerald-600 tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Open to full-time &amp; freelance
          </span>
        </div>

        <div className="space-y-1.5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] font-display tracking-tight">
            Hi, I&apos;m Ahmad Tariq
          </h1>
          <h2 className="text-xl font-bold text-amber-500 font-display">
            {shown}
            <span className="cursor-blink ml-0.5 text-amber-500 font-thin">|</span>
          </h2>
        </div>

        <p className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-medium">
          <FaMapMarkerAlt className="text-amber-500 shrink-0" />
          Lahore, Pakistan 🇵🇰
        </p>

        {/* CTA Buttons and socials */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            onClick={() => setActiveTab("contact")}
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-amber-500/10 cursor-pointer"
          >
            <FaEnvelope /> Get in touch &rarr;
          </button>

          <a
            href="https://canva.link/fm58n6if7buiflk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[var(--bg-glass)] border border-[var(--border)] hover:bg-[var(--bg-glass-h)] text-[var(--text-secondary)] text-xs font-semibold px-5 py-2.5 rounded-xl transition"
          >
            <FaDownload /> Resume
          </a>

          <div className="h-8 w-[1px] bg-[var(--border)] mx-1" />

          <a
            href="https://github.com/Ahmadtariqq"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full hover:bg-[var(--bg-glass-h)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmad-tariq-36708at"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full hover:bg-[var(--bg-glass-h)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition"
          >
            <FaLinkedin className="text-lg" />
          </a>
        </div>
      </div>

      <hr className="border-[var(--border)]" />

      {/* ── Stats Row (Cousin's Layout) ── */}
      <div className="grid grid-cols-3 gap-6 max-w-2xl py-2">
        <div className="space-y-1">
          <p className="text-2xl md:text-3xl font-extrabold text-[var(--text-primary)] font-display">
            1.5<span className="text-amber-500">+</span>
          </p>
          <p className="text-[10px] text-[var(--text-muted)] font-mono uppercase tracking-wider">Years Experience</p>
        </div>
        
        <div className="border-l border-[var(--border)] pl-6 space-y-1">
          <p className="text-2xl md:text-3xl font-extrabold text-[var(--text-primary)] font-display">
            20<span className="text-amber-500">+</span>
          </p>
          <p className="text-[10px] text-[var(--text-muted)] font-mono uppercase tracking-wider">Projects Shipped</p>
        </div>

        <div className="border-l border-[var(--border)] pl-6 space-y-1">
          <p className="text-2xl md:text-3xl font-extrabold text-[var(--text-primary)] font-display">
            3
          </p>
          <p className="text-[10px] text-[var(--text-muted)] font-mono uppercase tracking-wider">Companies</p>
        </div>
      </div>

      <hr className="border-[var(--border)]" />

      {/* ── Skills Category Grid (Cousin's Layout) ── */}
      <div className="space-y-5">
        <div className="space-y-0.5">
          <h3 className="text-base font-bold text-[var(--text-primary)] font-display flex items-center gap-1.5">
            <span>&lt;/&gt;</span> Skills
          </h3>
          <p className="text-xs text-[var(--text-muted)]">My professional skills.</p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-2 pt-1">
          {CATS.map((c) => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition ${
                cat === c.id
                  ? "bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400"
                  : "border-[var(--border)] bg-[var(--bg-glass)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-glass-h)]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Tech brand icons */}
        <motion.div layout className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3 pt-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((sk) => (
              <motion.div
                key={sk.name}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.18 }}
                whileHover={{ scale: 1.12, boxShadow: `0 0 15px ${sk.glow}33` }}
                className="glass flex flex-col items-center justify-center gap-2 rounded-2xl py-4 px-2 border border-[var(--border)] transition-transform skill-bubble cursor-default"
              >
                <i className={`${sk.icon} text-3xl`} />
                <span className="text-[10px] text-[var(--text-muted)] text-center font-medium leading-tight">{sk.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}
