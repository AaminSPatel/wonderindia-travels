"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { destinations } from "@/data/destinations";

const featured = destinations.slice(0, 6);

export default function MegaMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="absolute left-1/2 top-full z-40 mt-3 w-[min(90vw,820px)] -translate-x-1/2 rounded-3xl border border-white/40 bg-white/90 p-6 shadow-glass-lg backdrop-blur-2xl dark:border-white/10 dark:bg-ink-800/95"
    >
      <div className="grid grid-cols-3 gap-4">
        {featured.map((d) => (
          <Link
            key={d.slug}
            href={`/destinations/${d.slug}`}
            className="group flex items-center gap-3 rounded-2xl p-2 transition-colors hover:bg-deepblue/5 dark:hover:bg-white/5"
          >
            <span
              className="h-14 w-14 flex-shrink-0 rounded-xl bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${d.image})` }}
            />
            <span>
              <span className="block font-display text-sm font-semibold text-deepblue dark:text-cream">
                {d.name}
              </span>
              <span className="block font-utility text-xs text-deepblue/50 dark:text-cream/50">
                {d.duration}
              </span>
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between rounded-2xl bg-gradient-sky px-5 py-3">
        <span className="font-display text-sm text-cream/90">
          12 handpicked Indian destinations waiting for you
        </span>
        <Link
          href="/destinations"
          className="font-utility text-sm font-semibold text-sunset-300 hover:text-sunset-400"
        >
          View all →
        </Link>
      </div>
    </motion.div>
  );
}
