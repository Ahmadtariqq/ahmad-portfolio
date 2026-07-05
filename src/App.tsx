import { useState, useEffect, lazy, Suspense } from "react";
import type { ReactNode } from "react";
import {
  FaHome, FaUser, FaCode, FaChartLine,
  FaEnvelope, FaCommentDots, FaBars, FaTimes,
  FaCheckCircle,
  FaSun, FaMoon, FaSpinner
} from "react-icons/fa";
import Background3D from "./components/Background3D";
import HomeTab from "./components/HomeTab";

// Lazy load other tabs to reduce initial bundle size
const AboutTab = lazy(() => import("./components/AboutTab"));
const ProjectsTab = lazy(() => import("./components/ProjectsTab"));
const DashboardTab = lazy(() => import("./components/DashboardTab"));
const ContactTab = lazy(() => import("./components/ContactTab"));
const SmartTalkTab = lazy(() => import("./components/SmartTalkTab"));

type Tab = "home" | "about" | "projects" | "dashboard" | "contact" | "smart-talk";
type Theme = "light" | "dark";

type NavItem = {
  id: Tab;
  label: string;
  icon: ReactNode;
  highlight?: boolean;
};

const NAV: NavItem[] = [
  { id: "home", label: "Home", icon: <FaHome /> },
  { id: "about", label: "About", icon: <FaUser /> },
  { id: "projects", label: "Projects", icon: <FaCode /> },
  { id: "dashboard", label: "Dashboard", icon: <FaChartLine /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  { id: "smart-talk", label: "Smart Talk", icon: <FaCommentDots />, highlight: true },
];

// Move Avatar outside to prevent remounting on every App render
function Avatar() {
  const [imgErr, setImgErr] = useState(false);

  return (
    <div className="relative h-28 w-28 flex items-center justify-center">
      <div className="avatar-ring absolute inset-0 rounded-full" />
      <div
        className="relative z-10 h-[100px] w-[100px] rounded-full overflow-hidden flex items-center justify-center bg-[var(--avatar-inner)] border border-[var(--border)]"
      >
        {!imgErr ? (
          <img
            src="/avatar.jpg"
            alt="Ahmad Tariq"
            className="h-full w-full object-cover object-top"
            onError={() => setImgErr(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-amber-500 to-orange-600">
            <span className="text-2xl font-bold text-white font-display">AT</span>
          </div>
        )}
      </div>
      <span className="absolute bottom-1 right-1 z-20">
        <span className="ping absolute inline-flex h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 border-2 border-[var(--bg-base)]" />
      </span>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState<Tab>("home");
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("light"); // Default to light/cream theme

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const go = (t: Tab) => { setActive(t); setOpen(false); };
  const toggleTheme = () => setTheme(t => t === "dark" ? "light" : "dark");

  const panels: Record<Tab, ReactNode> = {
    "home": <HomeTab setActiveTab={(t) => go(t as Tab)} />,
    "about": <AboutTab />,
    "projects": <ProjectsTab />,
    "dashboard": <DashboardTab />,
    "contact": <ContactTab />,
    "smart-talk": <SmartTalkTab />,
  };

  return (
    <div
      className="min-h-screen transition-colors duration-300 font-sans selection:bg-amber-500/20"
      style={{ background: "var(--bg-base)", color: "var(--text-primary)" }}
    >
      <Background3D />

      {/* ── Mobile Sticky Topbar ── */}
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-5 py-3.5 border-b md:hidden"
        style={{ background: "var(--bg-sidebar)", borderColor: "var(--border)", backdropFilter: "blur(20px)" }}
      >
        <span className="flex items-center gap-1.5 font-display font-bold text-sm" style={{ color: "var(--text-primary)" }}>
          Ahmad Tariq <FaCheckCircle className="text-blue-400 text-xs" />
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="rounded-xl border p-2 text-sm transition cursor-pointer"
            style={{ borderColor: "var(--border)", background: "var(--bg-glass)", color: "var(--text-muted)" }}
          >
            {theme === "dark" ? <FaSun className="text-amber-400" /> : <FaMoon className="text-indigo-600" />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl border p-2 text-sm transition cursor-pointer"
            style={{ borderColor: "var(--border)", background: "var(--bg-glass)", color: "var(--text-muted)" }}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* ── Centered Layout Wrapper ── */}
      <div className="flex justify-center min-h-screen">
        <div className="flex w-full max-w-[1280px] relative">

          {/* Mobile backdrop */}
          {open && (
            <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden" onClick={() => setOpen(false)} />
          )}

          {/* ── Sidebar (sticky inside centered container) ── */}
          <aside
            className={`
              hidden md:flex w-[310px] shrink-0 flex-col
              sticky top-0 h-screen overflow-y-auto no-scrollbar
              border-r
            `}
            style={{
              background: "var(--bg-sidebar)",
              borderColor: "var(--border)",
            }}
          >
            {/* Profile header */}
            <div className="flex flex-col items-center px-6 pt-10 pb-6 border-b" style={{ borderColor: "var(--border)" }}>
              <Avatar />

              <h2
                className="mt-4 flex items-center gap-1.5 font-display font-bold text-base leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Ahmad Tariq
                <FaCheckCircle className="text-blue-400 text-xs shrink-0" />
              </h2>
              <p className="text-[11px] font-mono mt-0.5" style={{ color: "var(--text-muted)" }}>@Ahmadtariqq</p>

              <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-[10px] font-semibold text-emerald-600 tracking-wide">
                <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Available for work
              </span>

              {/* Theme toggle */}
              <div className="mt-4 flex gap-2">
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-glass)] px-3 py-1.5 text-[11px] font-bold text-[var(--text-secondary)] hover:bg-[var(--bg-glass-h)] transition cursor-pointer"
                >
                  {theme === "dark" ? <FaSun className="text-amber-400" /> : <FaMoon className="text-indigo-600" />}
                  <span>{theme === "dark" ? "Light" : "Dark"} Mode</span>
                </button>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-5 space-y-0.5 overflow-y-auto no-scrollbar">
              {NAV.map(item => {
                const isActive = active === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => go(item.id as Tab)}
                    className={`nav-item w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-left cursor-pointer ${isActive ? "nav-active" : item.highlight ? "text-amber-600 hover:bg-amber-500/10" : ""}`}
                    style={!isActive && !item.highlight ? { color: "var(--text-muted)" } : {}}
                  >
                    <span
                      className={`text-[15px] ${isActive ? "text-amber-500" : item.highlight ? "text-amber-500" : ""}`}
                      style={!isActive && !item.highlight ? { color: "var(--text-faint)" } : {}}
                    >
                      {item.icon}
                    </span>
                    {item.label}
                    {item.highlight && !isActive && (
                      <span className="ml-auto text-[9px] bg-amber-500/15 text-amber-600 border border-amber-500/20 px-1.5 py-0.5 rounded-full font-bold">
                        AI
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Copyright */}
            <div className="px-6 py-4 border-t text-center font-mono" style={{ borderColor: "var(--border)" }}>
              <p className="text-[9px] text-[var(--text-faint)]">COPYRIGHT © 2026</p>
              <p className="text-[9px] text-[var(--text-faint)] mt-0.5">Ahmad Tariq. All rights reserved.</p>
            </div>
          </aside>

          {/* Mobile Sidebar (fixed overlay for small screens) */}
          <aside
            className={`fixed top-0 bottom-0 left-0 z-50 flex w-[310px] flex-col border-r transition-transform duration-300 md:hidden ${open ? "translate-x-0" : "-translate-x-full"}`}
            style={{ background: "var(--bg-sidebar)", borderColor: "var(--border)" }}
          >
            <div className="flex flex-col items-center px-6 pt-10 pb-6 border-b" style={{ borderColor: "var(--border)" }}>
              <Avatar />
              <h2 className="mt-4 flex items-center gap-1.5 font-display font-bold text-base" style={{ color: "var(--text-primary)" }}>
                Ahmad Tariq <FaCheckCircle className="text-blue-400 text-xs" />
              </h2>
              <p className="text-[11px] font-mono mt-0.5" style={{ color: "var(--text-muted)" }}>@Ahmadtariqq</p>
            </div>
            <nav className="flex-1 px-3 py-5 space-y-0.5 no-scrollbar overflow-y-auto">
              {NAV.map(item => {
                const isActive = active === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => go(item.id as Tab)}
                    className={`nav-item w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-left cursor-pointer ${isActive ? "nav-active" : ""}`}
                    style={!isActive ? { color: "var(--text-muted)" } : {}}
                  >
                    <span style={!isActive ? { color: "var(--text-faint)" } : {}}>{item.icon}</span>
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* ── Main Content ── */}
          <main className="flex-1 min-w-0">
            <div className="px-10 py-10 md:px-12">
              <Suspense fallback={
                <div className="flex items-center justify-center h-64">
                  <FaSpinner className="animate-spin text-3xl text-amber-500" />
                </div>
              }>
                {panels[active]}
              </Suspense>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}
