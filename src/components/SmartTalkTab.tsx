import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaPaperPlane } from "react-icons/fa";

interface Message {
  sender: "user" | "bot";
  text: string;
  ts: string;
}

const SUGGESTIONS = [
  "Who is Ahmad Tariq?",
  "What are his main skills?",
  "Tell me about his projects.",
  "What is his work experience?",
  "How can I contact him?",
];

function getBotResponse(q: string): string {
  const t = q.toLowerCase();
  if (t.includes("who") || t.includes("about") || t.includes("ahmad"))
    return "Ahmad Tariq is a Full-Stack Developer from Lahore, Pakistan with 1.5+ years of experience. He works at Kamalia Enterprises building Laravel & React production systems and AI automations using n8n.";
  if (t.includes("skill") || t.includes("stack") || t.includes("tech"))
    return "Ahmad's core stack: React.js, TypeScript, Laravel (PHP), Node.js, Express, MySQL, MongoDB, and AI automation with n8n. He also has experience with AWS and Firebase.";
  if (t.includes("project") || t.includes("build") || t.includes("vistora") || t.includes("medikam") || t.includes("ella") || t.includes("click"))
    return "He has built Click Off Reporting and Ella Drive as commercial projects, plus personal apps: Medikam (role-based medical e-commerce), Linguasync AI (real-time voice translator), Vistora (marketplace), and Trackly (habit planner).";
  if (t.includes("experience") || t.includes("work") || t.includes("job") || t.includes("company"))
    return "Ahmad is currently a Full-Stack Developer at Kamalia Enterprises (Dec 2025–present). Previously interned at NextShines (Jun–Dec 2025) and InventStarts (Oct 2024–Jun 2025).";
  if (t.includes("contact") || t.includes("email") || t.includes("phone"))
    return "Email: ahmad.ai.developer@gmail.com | Phone: +92 312 1849708 | LinkedIn: linkedin.com/in/ahmad-tariq-36708at";
  if (t.includes("education") || t.includes("university") || t.includes("degree") || t.includes("vu"))
    return "Ahmad is studying BS Software Engineering at Virtual University of Pakistan. He also completed an Associate Engineering (CIT) degree from Government College of Technology, Lahore.";
  if (t.includes("resume") || t.includes("cv"))
    return "You can download Ahmad's CV directly from the Home tab using the Download CV button.";
  return "I can answer questions about Ahmad's skills, projects, experience, or education. Try one of the quick questions above!";
}

export default function SmartTalkTab() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hi! I'm Ahmad's virtual AI assistant. Ask me anything about his skills, projects, experience, or education! 👋",
      ts: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [input, setInput]     = useState("");
  const [typing, setTyping]   = useState(false);
  const bottomRef             = useRef<HTMLDivElement>(null);

  const send = (text: string) => {
    if (!text.trim()) return;
    const ts = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setMessages((p) => [...p, { sender: "user", text, ts }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((p) => [...p, { sender: "bot", text: getBotResponse(text), ts: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }]);
      setTyping(false);
    }, 900);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  return (
    <motion.div
      key="smart-talk"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col h-[calc(100vh-80px)] max-h-[700px]"
    >
      {/* Header */}
      <div
        className="rounded-t-2xl border border-b-0 px-5 py-3.5 flex items-center gap-3"
        style={{ background: "var(--bg-sidebar)", borderColor: "var(--border)" }}
      >
        <div className="h-8 w-8 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
          <FaRobot className="text-violet-500 text-sm animate-pulse" />
        </div>
        <div>
          <h2 className="text-sm font-bold text-[var(--text-primary)] font-display">
            Online · Powered by Ahmad AI
          </h2>
          <p className="text-[10px] font-mono text-emerald-500 font-semibold">Active</p>
        </div>
      </div>

      {/* Chat messages */}
      <div
        className="flex-1 overflow-y-auto px-5 py-4 space-y-4 no-scrollbar border border-b-0 border-t-0"
        style={{ background: "var(--bg-base)", borderColor: "var(--border)" }}
      >
        {messages.map((msg, i) => {
          const isBot = msg.sender === "bot";
          return (
            <div key={i} className={`flex w-full ${isBot ? "justify-start" : "justify-end"}`}>
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                  isBot ? "rounded-tl-sm" : "rounded-tr-sm"
                }`}
                style={
                  isBot
                    ? { background: "var(--bg-sidebar)", border: "1px solid var(--border)", color: "var(--text-secondary)" }
                    : { background: "#7c3aed", color: "#fff" }
                }
              >
                <p>{msg.text}</p>
                <span className="block text-right text-[9px] mt-1 opacity-50 font-mono">{msg.ts}</span>
              </div>
            </div>
          );
        })}

        {typing && (
          <div className="flex justify-start">
            <div
              className="rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1"
              style={{ background: "var(--bg-sidebar)", border: "1px solid var(--border)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 dot-1 animate-bounce"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 dot-2 animate-bounce"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 dot-3 animate-bounce"></span>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Suggested questions */}
      <div
        className="border border-b-0 border-t px-4 py-3 space-y-2"
        style={{ background: "var(--bg-sidebar)", borderColor: "var(--border)" }}
      >
        <p className="text-[9px] uppercase font-bold tracking-wider text-[var(--text-faint)] font-mono">
          Suggested Questions
        </p>
        <div className="flex flex-wrap gap-1.5">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              className="text-[10px] font-semibold px-2.5 py-1 rounded-lg border transition cursor-pointer hover:-translate-y-0.5"
              style={{
                background: "var(--bg-base)",
                borderColor: "var(--border)",
                color: "var(--text-muted)",
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Input row */}
      <form
        onSubmit={(e) => { e.preventDefault(); send(input); }}
        className="flex gap-3 p-3 border rounded-b-2xl"
        style={{ background: "var(--bg-sidebar)", borderColor: "var(--border)" }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything about Ahmad Tariq..."
          className="flex-1 rounded-xl px-4 py-2.5 text-xs outline-none border transition"
          style={{
            background: "var(--bg-base)",
            borderColor: "var(--border)",
            color: "var(--text-primary)",
          }}
        />
        <button
          type="submit"
          className="h-10 w-10 rounded-xl bg-violet-600 hover:bg-violet-700 text-white flex items-center justify-center transition cursor-pointer shrink-0"
        >
          <FaPaperPlane className="text-xs" />
        </button>
      </form>
    </motion.div>
  );
}
