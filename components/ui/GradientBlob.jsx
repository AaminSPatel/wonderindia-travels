export default function GradientBlob({ className = "", variant = "sky" }) {
  const gradients = {
    sky: "from-sky-400/40 via-sky-300/10 to-transparent",
    sunset: "from-sunset-400/40 via-sunset-300/10 to-transparent",
    emerald: "from-emerald-400/40 via-emerald-300/10 to-transparent",
  };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl bg-gradient-to-br ${gradients[variant]} ${className}`}
    />
  );
}
