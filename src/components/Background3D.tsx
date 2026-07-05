// GPU-composited CSS blob background — no JS frame loop needed
export default function Background3D() {
  return (
    <div
      className="fixed inset-0 -z-50 overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />
    </div>
  );
}
