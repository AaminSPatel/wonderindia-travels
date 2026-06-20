"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMapPin } from "react-icons/hi2";

export default function ItineraryAccordion({ itinerary }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="mt-6 space-y-3">
      {itinerary.map((day, i) => (
        <div
          key={day.day}
          className="overflow-hidden rounded-2xl border border-deepblue/10 bg-white dark:border-white/10 dark:bg-ink-800"
        >
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="flex w-full items-center gap-4 px-5 py-4 text-left"
          >
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-deepblue text-xs font-bold text-cream">
              {day.day}
            </span>
            <span className="flex-1 font-display text-sm font-semibold text-deepblue dark:text-cream">
              {day.title}
            </span>
            <motion.span animate={{ rotate: open === i ? 180 : 0 }} className="text-deepblue/40 dark:text-cream/40">
              ▾
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="flex items-start gap-2 px-5 pb-5 pl-[3.25rem] font-body text-sm leading-relaxed text-deepblue/60 dark:text-cream/60">
                  <HiOutlineMapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-sunset" />
                  {day.details}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
