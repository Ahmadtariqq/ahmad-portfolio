import { useState } from "react";
import { FaBriefcase, FaGraduationCap, FaChevronDown, FaChevronUp } from "react-icons/fa";

interface Job {
  title: string;
  company: string;
  span: string;
  duration: string;
  type: string;
  location: string;
  current: boolean;
  logoText: string;
  logoBg: string;
  responsibilities: string[];
}

interface Education {
  degree: string;
  school: string;
  span: string;
  location: string;
  current: boolean;
  logoText: string;
  logoBg: string;
}

export default function AboutTab() {
  const [openJobIdx, setOpenJobIdx] = useState<number | null>(null);

  const jobs: Job[] = [
    {
      title: "Full Stack Developer",
      company: "Kamalia Enterprises",
      span: "Dec 2025 – Present",
      duration: "8mo",
      type: "Full-time",
      location: "Lahore, Pakistan 🇵🇰",
      current: true,
      logoText: "KE",
      logoBg: "bg-amber-500 text-white",
      responsibilities: [
        "Architecting complex backend workflows and database synchronization routines using Laravel & React.",
        "Building and maintaining Ella Drive (cloud storage system) and Click Off Reporting (analytics engine).",
        "Designing AI automation sequences with n8n to integrate third-party APIs and trigger smart updates."
      ]
    },
    {
      title: "MERN Stack Developer",
      company: "NextShines",
      span: "Jun 2025 – Dec 2025",
      duration: "6mo",
      type: "Internship",
      location: "Lahore, Pakistan 🇵🇰",
      current: false,
      logoText: "NS",
      logoBg: "bg-blue-600 text-white",
      responsibilities: [
        "Integrated secure Express.js REST APIs with JSON Web Token (JWT) credentials.",
        "Coded interactive interfaces and components in React.js matching high-fidelity UI specifications.",
        "Managed image and video file storage pipelines with cloud endpoints."
      ]
    },
    {
      title: "Junior MERN Developer",
      company: "InventStarts",
      span: "Oct 2024 – Jun 2025",
      duration: "9mo",
      type: "Internship",
      location: "Lahore, Pakistan 🇵🇰",
      current: false,
      logoText: "IS",
      logoBg: "bg-cyan-500 text-white",
      responsibilities: [
        "Maintained MongoDB schemas and conducted data queries optimization.",
        "Collaborated on building e-commerce checkouts and catalog filtering models."
      ]
    }
  ];

  const educations: Education[] = [
    {
      degree: "BS Software Engineering",
      school: "Virtual University of Pakistan",
      span: "2024 – Present",
      location: "Pakistan (Online)",
      current: true,
      logoText: "VU",
      logoBg: "bg-purple-700 text-white"
    },
    {
      degree: "Associate Engineering (Computer Information Technology)",
      school: "Government College of Technology",
      span: "2021 – 2024",
      location: "Lahore, Pakistan 🇵🇰",
      current: false,
      logoText: "GCT",
      logoBg: "bg-indigo-600 text-white"
    }
  ];

  const toggleResponsibilities = (idx: number) => {
    setOpenJobIdx(openJobIdx === idx ? null : idx);
  };

  return (
    <div className="space-y-12 text-left">
      
      {/* ── About Bio Header Section (Cousin's Layout) ── */}
      <div className="space-y-5">
        <div className="inline-block border-b-2 border-amber-500 pb-1.5">
          <h2 className="text-3xl font-extrabold text-[var(--text-primary)] font-display tracking-tight">
            About
          </h2>
        </div>
        
        <h3 className="text-xs uppercase font-extrabold text-amber-500 tracking-wider font-mono">
          A Brief Introduction To Who I Am.
        </h3>

        <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-7 font-sans">
          <p>
            Hello there! Thank you for visiting my portfolio. I&apos;m Ahmad Tariq, a Full Stack Developer with over 1.5 years of experience in engineering high-performance and scalable web applications. My core expertise covers frontend interfaces using React, TypeScript, and Tailwind CSS, along with backend development using Laravel and Node.js.
          </p>
          <p>
            I enjoy creating solutions that are both user-friendly and highly optimized. Whether it&apos;s crafting clean schemas in SQL/NoSQL databases or deploying intelligent automation pipelines utilizing n8n, I focus on bringing quality, speed, and clarity to every layer of the codebase.
          </p>
          <p>
            I strongly believe that clear communication and clean code architecture are the foundations of successful product releases. I am a continuous learner, always exploring new technologies, automation models, and scalable architectures to keep leveling up.
          </p>
        </div>
      </div>

      {/* ── Career Timeline (Cousin's Layout) ── */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600">
            <FaBriefcase className="text-sm" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[var(--text-primary)] font-display">Career</h3>
            <p className="text-[10px] text-[var(--text-muted)] font-mono">My professional journey.</p>
          </div>
        </div>

        <div className="relative pl-6 md:pl-8 border-l border-[var(--border)] space-y-6 ml-4">
          {jobs.map((job, idx) => (
            <div key={idx} className="relative">
              {/* Dot indicator */}
              <div className={`absolute -left-[31px] md:-left-[39px] top-4 h-3.5 w-3.5 rounded-full border-2 border-[var(--bg-base)] ${
                job.current ? "bg-amber-500 shadow-md shadow-amber-500/50" : "bg-[var(--text-faint)]"
              }`} />

              {/* Job Card */}
              <div className="glass rounded-2xl p-5 border border-[var(--border)] flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  {/* Company Logo Square */}
                  <div className={`h-11 w-11 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${job.logoBg} shadow-sm`}>
                    {job.logoText}
                  </div>
                  
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-bold text-[var(--text-primary)]">{job.title}</h4>
                    <p className="text-xs text-[var(--text-secondary)] font-medium">{job.company}</p>
                    
                    {/* Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-[var(--bg-base)] border border-[var(--border)] text-[var(--text-muted)]">
                        {job.type}
                      </span>
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-[var(--bg-base)] border border-[var(--border)] text-[var(--text-muted)]">
                        {job.location}
                      </span>
                      {job.current && (
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Collapsible Responsibilities Trigger */}
                    <button
                      onClick={() => toggleResponsibilities(idx)}
                      className="flex items-center gap-1.5 text-[10px] font-bold text-amber-600 mt-2 hover:text-amber-700 transition cursor-pointer"
                    >
                      {openJobIdx === idx ? <FaChevronUp /> : <FaChevronDown />}
                      <span>View responsibilities</span>
                    </button>

                    {/* Collapsible content */}
                    {openJobIdx === idx && (
                      <ul className="list-disc list-inside text-xs text-[var(--text-muted)] mt-2 space-y-1 pl-1 leading-relaxed">
                        {job.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Right side: Date span */}
                <div className="text-left md:text-right shrink-0 md:pt-1">
                  <p className="text-[10px] font-mono text-[var(--text-muted)]">{job.span}</p>
                  <p className="text-[9px] font-mono text-[var(--text-faint)] mt-0.5">{job.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Education Timeline (Cousin's Layout) ── */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600">
            <FaGraduationCap className="text-sm" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[var(--text-primary)] font-display">Education</h3>
            <p className="text-[10px] text-[var(--text-muted)] font-mono">My educational journey.</p>
          </div>
        </div>

        <div className="relative pl-6 md:pl-8 border-l border-[var(--border)] space-y-6 ml-4">
          {educations.map((edu, idx) => (
            <div key={idx} className="relative">
              {/* Dot indicator */}
              <div className={`absolute -left-[31px] md:-left-[39px] top-4 h-3.5 w-3.5 rounded-full border-2 border-[var(--bg-base)] ${
                edu.current ? "bg-amber-500 shadow-md shadow-amber-500/50" : "bg-[var(--text-faint)]"
              }`} />

              {/* Education Card */}
              <div className="glass rounded-2xl p-5 border border-[var(--border)] flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  {/* Edu Logo Square */}
                  <div className={`h-11 w-11 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${edu.logoBg} shadow-sm`}>
                    {edu.logoText}
                  </div>
                  
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-bold text-[var(--text-primary)]">{edu.degree}</h4>
                    <p className="text-xs text-[var(--text-secondary)] font-medium">{edu.school}</p>
                    
                    {/* Location Badge */}
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-[var(--bg-base)] border border-[var(--border)] text-[var(--text-muted)]">
                        {edu.location}
                      </span>
                      {edu.current && (
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 border border-amber-500/20">
                          Enrolled
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right side: Date span */}
                <div className="text-left md:text-right shrink-0 md:pt-1">
                  <p className="text-[10px] font-mono text-[var(--text-muted)]">{edu.span}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
