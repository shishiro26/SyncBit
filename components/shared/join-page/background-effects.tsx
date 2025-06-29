export function BackgroundEffects() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/15 via-gray-950 to-teal-950/15" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(52, 168, 83, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(52, 168, 83, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/3 rounded-full blur-3xl" />
    </div>
  );
}
