"use client";

export function AudioVisualizer() {
  const bars = Array.from({ length: 5 }, (_, i) => i);

  return (
    <div className="flex items-center justify-center gap-1 mb-6">
      {bars.map((bar) => (
        <div
          key={bar}
          className="w-1 bg-emerald-400 rounded-full animate-pulse"
          style={{
            height: `${12 + (bar % 2) * 8}px`,
            animationDelay: `${bar * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
}
