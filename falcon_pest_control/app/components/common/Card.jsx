export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-3xl border border-[#2A2A2A] bg-[#181818]/90 p-6 shadow-[0_0_40px_rgba(0,0,0,0.25)] backdrop-blur ${className}`.trim()}>
      {children}
    </div>
  );
}
