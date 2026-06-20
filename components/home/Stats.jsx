import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 50000, suffix: "+", label: "Happy Travellers" },
  { value: 12, suffix: "", label: "Destinations" },
  { value: 8500, suffix: "+", label: "Tours Completed" },
  { value: 12, suffix: "+", label: "Years of Experience" },
];

export default function Stats() {
  return (
    <section className="relative bg-gradient-sky py-16 lg:py-20">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-semibold text-cream sm:text-4xl lg:text-5xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 font-utility text-xs uppercase tracking-wider text-cream/60 sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
