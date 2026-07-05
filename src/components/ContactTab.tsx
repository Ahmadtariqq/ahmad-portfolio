import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactTab() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1400);
  };

  const inputCls =
    "w-full rounded-xl px-4 py-2.5 text-xs font-sans border transition-all outline-none focus:border-amber-500";

  return (
    <motion.div
      key="contact"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="space-y-1">
        <div className="inline-block border-b-2 border-amber-500 pb-1">
          <h2 className="text-3xl font-extrabold font-display text-[var(--text-primary)]">
            Contact
          </h2>
        </div>
        <p className="text-xs font-mono text-[var(--text-muted)]">
          Feel free to reach out for project collaboration, job openings, or query support.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ── Left: quick links ── */}
        <div className="space-y-4">

          {/* Email */}
          <a
            href="mailto:ahmad.ai.developer@gmail.com"
            className="flex items-center gap-4 p-4 rounded-2xl border transition-all hover:-translate-y-0.5 hover:shadow-sm group"
            style={{ background: "var(--bg-sidebar)", borderColor: "var(--border)" }}
          >
            <div className="h-10 w-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 text-base shrink-0 group-hover:scale-110 transition-transform">
              <FaEnvelope />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] uppercase font-bold tracking-wider text-[var(--text-faint)] font-mono">Stay in touch</p>
              <h3 className="text-xs font-bold text-[var(--text-primary)] mt-0.5 truncate">ahmad.ai.developer@gmail.com</h3>
              <p className="text-[10px] text-red-500 font-semibold mt-0.5">Go to Gmail &rarr;</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ahmad-tariq-36708at"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-2xl border transition-all hover:-translate-y-0.5 hover:shadow-sm group"
            style={{ background: "var(--bg-sidebar)", borderColor: "var(--border)" }}
          >
            <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 text-base shrink-0 group-hover:scale-110 transition-transform">
              <FaLinkedin />
            </div>
            <div>
              <p className="text-[9px] uppercase font-bold tracking-wider text-[var(--text-faint)] font-mono">Let&apos;s connect</p>
              <h3 className="text-xs font-bold text-[var(--text-primary)] mt-0.5">Go to LinkedIn</h3>
              <p className="text-[10px] text-blue-500 font-semibold mt-0.5">View profile &rarr;</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Ahmadtariqq"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-2xl border transition-all hover:-translate-y-0.5 hover:shadow-sm group"
            style={{ background: "var(--bg-sidebar)", borderColor: "var(--border)" }}
          >
            <div className="h-10 w-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-500 text-base shrink-0 group-hover:scale-110 transition-transform">
              <FaGithub />
            </div>
            <div>
              <p className="text-[9px] uppercase font-bold tracking-wider text-[var(--text-faint)] font-mono">Explore code</p>
              <h3 className="text-xs font-bold text-[var(--text-primary)] mt-0.5">Go to GitHub</h3>
              <p className="text-[10px] text-violet-500 font-semibold mt-0.5">@Ahmadtariqq &rarr;</p>
            </div>
          </a>

          {/* Info */}
          <div
            className="p-4 rounded-2xl border space-y-3"
            style={{ background: "var(--bg-sidebar)", borderColor: "var(--border)" }}
          >
            <div className="flex items-center gap-2.5 text-xs text-[var(--text-secondary)]">
              <FaPhone className="text-amber-500 shrink-0" />
              <span>+92 312 1849708</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[var(--text-secondary)]">
              <FaMapMarkerAlt className="text-amber-500 shrink-0" />
              <span>Lahore, Pakistan 🇵🇰</span>
            </div>
          </div>
        </div>

        {/* ── Right: form ── */}
        <div className="lg:col-span-2">
          <div
            className="rounded-2xl border p-6 md:p-8 space-y-5"
            style={{ background: "var(--bg-sidebar)", borderColor: "var(--border)" }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[var(--text-secondary)]">Your Name *</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className={inputCls}
                    style={{
                      background: "var(--bg-base)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[var(--text-secondary)]">Your Email *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className={inputCls}
                    style={{
                      background: "var(--bg-base)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[var(--text-secondary)]">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Collaboration query..."
                  className={inputCls}
                  style={{
                    background: "var(--bg-base)",
                    borderColor: "var(--border)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[var(--text-secondary)]">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Write your message details..."
                  className={`${inputCls} resize-none`}
                  style={{
                    background: "var(--bg-base)",
                    borderColor: "var(--border)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>

              {status === "success" && (
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-semibold rounded-xl text-center">
                  ✓ Message sent! I will reach out to you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50 shadow-md shadow-violet-500/15"
              >
                {status === "loading" ? (
                  "Sending..."
                ) : (
                  <>
                    <FaPaperPlane className="text-xs" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
