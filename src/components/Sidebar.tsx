import { 
  FaHome, 
  FaUser, 
  FaCode, 
  FaChartLine, 
  FaEnvelope, 
  FaCommentDots, 
  FaCheckCircle,
  FaMoon,
  FaSun
} from "react-icons/fa";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ activeTab, setActiveTab, isOpen, setIsOpen }: SidebarProps) {
  const menuItems = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About & Experience", icon: <FaUser /> },
    { id: "projects", label: "Projects", icon: <FaCode /> },
    { id: "dashboard", label: "Dashboard", icon: <FaChartLine /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
    { id: "smart-talk", label: "Smart Talk AI", icon: <FaCommentDots />, highlight: true },
  ];

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex w-72 flex-col justify-between border-r border-white/5 bg-[#0b0b0f]/80 p-6 backdrop-blur-xl transition-transform duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center">
          {/* Avatar Container with glowing animation */}
          <div className="animated-border relative h-28 w-28 rounded-full flex items-center justify-center">
            <div className="animated-border-inner flex items-center justify-center rounded-full overflow-hidden">
              <svg className="w-16 h-16 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c-0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            {/* Live Indicator pulse */}
            <span className="absolute bottom-1 right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border border-[#060608]"></span>
            </span>
          </div>

          <h2 className="mt-4 flex items-center gap-1.5 text-lg font-bold text-white">
            Ahmad Tariq
            <FaCheckCircle className="text-blue-400 text-sm" title="Verified Developer" />
          </h2>
          <p className="text-xs text-gray-400 font-mono mt-0.5">@Ahmadtariqq</p>

          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
            Available for hire
          </span>
          
          {/* Weather / Mood Simulators */}
          <div className="mt-4 flex gap-2">
            <button className="flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1.5 text-xs text-gray-300 hover:bg-white/10 transition">
              <FaSun className="text-amber-400" />
              <span>Dev Mode</span>
            </button>
            <button className="flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1.5 text-xs text-gray-300 hover:bg-white/10 transition">
              <FaMoon className="text-indigo-400" />
              <span>Theme</span>
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-6 flex-1 space-y-1.5">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center gap-3.5 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? item.highlight 
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 border border-purple-500/20"
                      : "bg-white/10 text-white border-l-4 border-purple-500 pl-3"
                    : item.highlight
                    ? "bg-purple-950/20 text-purple-300 hover:bg-purple-900/20 border border-purple-900/10"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className={`text-base ${isActive ? "text-white" : item.highlight ? "text-purple-400" : "text-gray-400"}`}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-white/5 pt-4 text-center">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">
            Copyright © 2026
          </p>
          <p className="text-[10px] text-gray-500 mt-1 font-mono">
            Ahmad Tariq. All Rights Reserved.
          </p>
        </div>
      </aside>
    </>
  );
}
