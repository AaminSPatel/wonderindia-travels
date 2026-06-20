"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import DestinationCard from "@/components/shared/DestinationCard";
import { destinations, categories } from "@/data/destinations";
import { cn } from "@/lib/utils";

export default function DestinationsGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? destinations : destinations.filter((d) => d.category.includes(active));

  return (
    <section className="section-py container-px">
      <div className="mx-auto max-w-7xl">
        <LayoutGroup>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "chip relative",
                  active === c
                    ? "border-transparent text-cream"
                    : "border-deepblue/15 text-deepblue/60 hover:border-deepblue/30 dark:border-white/15 dark:text-cream/60"
                )}
              >
                {active === c && (
                  <motion.span
                    layoutId="active-category"
                    className="absolute inset-0 -z-10 rounded-full bg-deepblue"
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  />
                )}
                {c}
              </button>
            ))}
          </div>
        </LayoutGroup>

        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((d, i) => (
              <motion.div
                key={d.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <DestinationCard destination={d} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center font-body text-deepblue/50 dark:text-cream/50">
            No destinations found in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
