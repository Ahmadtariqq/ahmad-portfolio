import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaClock, FaKeyboard } from "react-icons/fa";
import { SiWakatime } from "react-icons/si";

/* Deterministic commit grid — seeded so it doesn't re-randomize */
function makeGrid() {
  const rng = (seed: number) => {
    let s = seed;
    return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  };
  const rand = rng(42);
  return Array.from({ length: 52 }, () =>
    Array.from({ length: 7 }, () => {
      const r = rand();
      return r < 0.35 ? 0 : r < 0.55 ? 1 : r < 0.72 ? 2 : r < 0.87 ? 3 : 4;
    })
  );
}

const GRID = makeGrid();

const INTENSITY = ["bg-white/5", "bg-emerald-900/50", "bg-emerald-700/60", "bg-emerald-500/75", "bg-emerald-400"];

const MONTHS = ["Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May"];
const LANGS  = [
  { name:"React / TypeScript", pct:44, color:"bg-cyan-400" },
  { name:"Laravel / PHP",      pct:31, color:"bg-rose-500" },
  { name:"Node.js / Express",  pct:14, color:"bg-emerald-500" },
  { name:"n8n Automation",     pct:7,  color:"bg-amber-400" },
  { name:"SQL / NoSQL",        pct:4,  color:"bg-indigo-400" },
];

const WEEK_DATA = [
  { day:"Mon", h:2.1 }, { day:"Tue", h:3.8 },
  { day:"Wed", h:4.6 }, { day:"Thu", h:1.4 },
  { day:"Fri", h:3.0 }, { day:"Sat", h:2.5 },
  { day:"Sun", h:4.1 },
];

export default function DashboardTab() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(new Intl.DateTimeFormat("en-US", {
        timeZone:"Asia/Karachi",
        hour:"2-digit", minute:"2-digit", second:"2-digit", hour12:true,
      }).format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const max = Math.max(...WEEK_DATA.map(d => d.h));

  return (
    <motion.div
      key="dashboard"
      initial={{ opacity:0, y:10 }}
      animate={{ opacity:1, y:0 }}
      transition={{ duration:0.25 }}
      className="space-y-6"
    >
      {/* ── Top widgets row ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {/* Clock */}
        <div className="glass rounded-2xl p-5 flex items-center gap-4">
          <div className="h-11 w-11 rounded-xl bg-violet-500/10 border border-violet-500/15 flex items-center justify-center shrink-0">
            <FaClock className="text-violet-400" />
          </div>
          <div>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider font-mono">Lahore Time</p>
            <p className="text-lg font-bold text-white font-display leading-tight">{time || "—"}</p>
            <p className="text-[10px] text-gray-500 mt-0.5">GMT+5 (PKT)</p>
          </div>
        </div>

        {/* Daily avg */}
        <div className="glass rounded-2xl p-5 flex items-center gap-4">
          <div className="h-11 w-11 rounded-xl bg-cyan-500/10 border border-cyan-500/15 flex items-center justify-center shrink-0">
            <SiWakatime className="text-cyan-400 text-lg" />
          </div>
          <div>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider font-mono">Daily Avg Code</p>
            <p className="text-lg font-bold text-white font-display leading-tight">3 hrs 15 mins</p>
            <p className="text-[10px] text-gray-500 mt-0.5">Tracked via WakaTime</p>
          </div>
        </div>

        {/* Total commits */}
        <div className="glass rounded-2xl p-5 flex items-center gap-4">
          <div className="h-11 w-11 rounded-xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center shrink-0">
            <FaGithub className="text-emerald-400" />
          </div>
          <div>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider font-mono">Total Commits</p>
            <p className="text-lg font-bold text-white font-display leading-tight">1,824</p>
            <p className="text-[10px] text-gray-500 mt-0.5">@Ahmadtariqq</p>
          </div>
        </div>
      </div>

      {/* ── GitHub contribution grid ── */}
      <div className="glass rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <FaGithub className="text-emerald-400" />
            <h3 className="text-sm font-bold text-white font-display">GitHub Contributions</h3>
          </div>
          <a href="https://github.com/Ahmadtariqq" target="_blank" rel="noopener noreferrer"
             className="text-[11px] font-mono text-violet-400 hover:underline">@Ahmadtariqq ↗</a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { l:"Total",    v:"1,824", c:"text-white" },
            { l:"This Week",v:"42",    c:"text-emerald-400" },
            { l:"Best Day", v:"29",    c:"text-violet-400" },
            { l:"Avg/Day",  v:"4",     c:"text-cyan-400" },
          ].map(s => (
            <div key={s.l} className="bg-white/3 rounded-xl px-3 py-2.5">
              <p className="text-[10px] text-gray-500 uppercase font-mono tracking-wider">{s.l}</p>
              <p className={`text-xl font-bold font-display ${s.c}`}>{s.v}</p>
            </div>
          ))}
        </div>

        {/* Month labels */}
        <div className="overflow-x-auto no-scrollbar pt-1">
          <div className="min-w-[620px] space-y-1">
            <div className="grid" style={{ gridTemplateColumns:`repeat(52,1fr)`, gap:"2px" }}>
              {MONTHS.map((m,i) => (
                <span key={i} className="text-[8px] text-gray-600 font-mono"
                  style={{ gridColumn: `${Math.round(i*52/12)+1} / span 4` }}>{m}</span>
              ))}
            </div>
            {/* Grid */}
            <div className="flex gap-[3px]">
              {GRID.map((col, ci) => (
                <div key={ci} className="flex flex-col gap-[3px]">
                  {col.map((lvl, ri) => (
                    <div
                      key={ri}
                      title={`${lvl * 3} contributions`}
                      className={`h-[9px] w-[9px] rounded-[2px] cursor-pointer transition-transform hover:scale-125 ${INTENSITY[lvl]}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-end gap-1.5 text-[9px] text-gray-500 font-mono">
          Less
          {INTENSITY.map((cls, i) => <div key={i} className={`h-2.5 w-2.5 rounded-[2px] ${cls}`} />)}
          More
        </div>
      </div>

      {/* ── Bottom row: language bars + weekly chart ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Language distribution */}
        <div className="glass rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-2">
            <FaKeyboard className="text-violet-400" />
            <h3 className="text-sm font-bold text-white font-display">Language Distribution</h3>
          </div>
          <p className="text-[11px] text-gray-500">Past 7 days coding activity</p>
          <div className="space-y-3.5">
            {LANGS.map(l => (
              <div key={l.name} className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-300 font-medium">{l.name}</span>
                  <span className="text-gray-500 font-mono">{l.pct}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${l.color}`} style={{ width:`${l.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly bar chart */}
        <div className="glass rounded-2xl p-6 space-y-4">
          <h3 className="text-sm font-bold text-white font-display">Weekly Coding Hours</h3>
          <p className="text-[11px] text-gray-500">Hover bars to see exact hours</p>
          <div className="flex items-end justify-between gap-2 h-36 pt-2">
            {WEEK_DATA.map((d,i) => (
              <div key={i} className="flex flex-col items-center gap-2 h-full justify-end group flex-1">
                <div className="relative w-full flex flex-col items-center">
                  <span className="absolute bottom-full mb-1.5 opacity-0 group-hover:opacity-100 transition-all text-[9px] text-white font-bold font-mono bg-violet-600 px-1.5 py-0.5 rounded shadow whitespace-nowrap">
                    {d.h}h
                  </span>
                  <div
                    className="w-full rounded-t-lg bg-gradient-to-t from-violet-700 to-purple-500 group-hover:from-violet-600 group-hover:to-purple-400 transition-colors"
                    style={{ height:`${(d.h/max)*110}px` }}
                  />
                </div>
                <span className="text-[9px] text-gray-500 font-mono uppercase">{d.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
