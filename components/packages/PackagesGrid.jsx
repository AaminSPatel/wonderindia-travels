"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import PackageCard from "@/components/shared/PackageCard";
import { packages, packageCategories } from "@/data/packages";
import { cn } from "@/lib/utils";

const sortOptions = [
  { value: "popular", label: "Most Popular" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
];

export default function PackagesGrid() {
  const [active, setActive] = useState("All");
  const [sort, setSort] = useState("popular");

  const result = useMemo(() => {
    let list =
      active === "All" ? packages : packages.filter((p) => p.category === active);

    list = [...list];
    if (sort === "price-low") list.sort((a, b) => a.price - b.price);
    if (sort === "price-high") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    if (sort === "popular") list.sort((a, b) => b.reviews - a.reviews);

    return list;
  }, [active, sort]);

  return (
    <section className="section-py container-px">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <LayoutGroup>
            <div className="flex flex-wrap gap-3">
              {packageCategories.map((c) => (
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
                      layoutId="active-package-category"
                      className="absolute inset-0 -z-10 rounded-full bg-deepblue"
                      transition={{ type: "spring", stiffness: 300, damping: 28 }}
                    />
                  )}
                  {c}
                </button>
              ))}
            </div>
          </LayoutGroup>

          <label className="flex items-center gap-2 rounded-full border border-deepblue/15 px-4 py-2.5 font-utility text-sm text-deepblue/70 dark:border-white/15 dark:text-cream/70">
            <HiOutlineAdjustmentsHorizontal className="h-4 w-4" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-transparent outline-none"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <motion.div layout className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {result.map((p, i) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
              >
                <PackageCard pkg={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {result.length === 0 && (
          <p className="mt-16 text-center font-body text-deepblue/50 dark:text-cream/50">
            No packages found in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
