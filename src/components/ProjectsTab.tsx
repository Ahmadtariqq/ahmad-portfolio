import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  type: "live" | "personal";
  stack: string[];
  techGroup: "laravel-react" | "mern";
  desc: string;
  githubUrl?: string;
}

export default function ProjectsTab() {
  const [filter, setFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      title: "Click Off Reporting",
      type: "live",
      stack: ["Laravel", "React", "MySQL", "Tailwind CSS", "REST API"],
      techGroup: "laravel-react",
      desc: "Commercial analytics dashboard for monitoring click-through rates and campaign conversion. Employs dynamic data tables, user activity logs, and secure report sharing.",
      githubUrl: undefined
    },
    {
      title: "Ella Drive",
      type: "live",
      stack: ["Laravel", "React", "MySQL", "File Storage", "JWT Auth"],
      techGroup: "laravel-react",
      desc: "Secure enterprise file-sharing workspace. Features custom folder structures, granular access permissions, upload progress bars, and real-time sync.",
      githubUrl: undefined
    },
    {
      title: "Linguasync AI",
      type: "personal",
      stack: ["Node.js", "React", "MongoDB", "AI APIs", "Web Speech API"],
      techGroup: "mern",
      desc: "Real-time AI voice translator. Translates spoken input in real-time with dual transcript display and TTS output powered by AI language APIs.",
      githubUrl: "https://github.com/Ahmadtariqq"
    },
    {
      title: "Medikam E-Commerce",
      type: "personal",
      stack: ["Node.js", "React", "MongoDB", "Express", "Role Auth"],
      techGroup: "mern",
      desc: "Role-based medical store with distinct dashboards — Admin (inventory), Seller (invoices, pricing), and User (cart, order tracking).",
      githubUrl: "https://github.com/Ahmadtariqq"
    },
    {
      title: "Vistora E-Commerce",
      type: "personal",
      stack: ["Laravel", "React", "MySQL", "Stripe", "Catalog Engine"],
      techGroup: "laravel-react",
      desc: "Multi-vendor marketplace inspired by Daraz. Supports live checkout, vendor dashboards, order timeline tracking, and buyer reviews.",
      githubUrl: "https://github.com/Ahmadtariqq"
    },
    {
      title: "Trackly Planner",
      type: "personal",
      stack: ["Laravel", "React", "MySQL", "Analytics", "Habits Calendar"],
      techGroup: "laravel-react",
      desc: "Daily routine logging and habit tracker. Visualizes progress over weeks with productivity charts and structured task scheduling.",
      githubUrl: "https://github.com/Ahmadtariqq"
    },
  ];

  const filterTabs = [
    { id: "all",          label: "All Projects" },
    { id: "live",         label: "Commercial" },
    { id: "personal",     label: "Personal" },
    { id: "laravel-react",label: "Laravel + React" },
    { id: "mern",         label: "MERN Stack" },
  ];

  const filtered = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "live") return p.type === "live";
    if (filter === "personal") return p.type === "personal";
    return p.techGroup === filter;
  });

  return (
    <motion.div
      key="projects"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="space-y-8"
    >
      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-5">
        <div className="space-y-2">
          <div className="inline-block border-b-2 border-amber-500 pb-1">
            <h2 className="text-3xl font-extrabold font-display text-[var(--text-primary)]">
              Projects
            </h2>
          </div>
          <p className="text-xs font-mono text-[var(--text-muted)]">
            A selection of live commercial products and personal projects.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition cursor-pointer ${
                filter === tab.id
                  ? "bg-amber-500/10 border-amber-500/40 text-amber-600"
                  : "bg-[var(--bg-glass)] border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid ── */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((proj, idx) => (
            <motion.article
              key={proj.title}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.22, delay: idx * 0.04 }}
              className="flex flex-col justify-between rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md group"
              style={{
                background: "var(--bg-sidebar)",
                borderColor: "var(--border)",
              }}
            >
              <div className="space-y-3">
                {/* Badges row */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span
                    className={`text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border font-mono ${
                      proj.type === "live"
                        ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/25"
                        : "bg-violet-500/10 text-violet-600 border-violet-500/25"
                    }`}
                  >
                    {proj.type === "live" ? "Live Project" : "Personal Project"}
                  </span>
                  <span className="text-[10px] text-[var(--text-faint)] font-mono">
                    {proj.techGroup === "laravel-react" ? "Laravel & React" : "MERN Stack"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-[var(--text-primary)] group-hover:text-amber-500 transition-colors font-display">
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {proj.desc}
                </p>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.stack.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono px-2 py-0.5 rounded border"
                      style={{
                        background: "var(--bg-base)",
                        borderColor: "var(--border)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer links */}
              <div
                className="flex items-center gap-4 mt-5 pt-4 border-t text-xs font-semibold"
                style={{ borderColor: "var(--border)" }}
              >
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition"
                  >
                    <FaGithub /> Code
                  </a>
                )}
                <span className="flex items-center gap-1.5 text-[var(--text-muted)]">
                  <FaExternalLinkAlt className="text-[10px]" /> Live Demo
                </span>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
