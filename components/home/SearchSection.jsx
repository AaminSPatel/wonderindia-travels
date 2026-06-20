"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineMapPin,
  HiOutlineCalendarDays,
  HiOutlineBanknotes,
  HiOutlineUserGroup,
  HiMagnifyingGlass,
} from "react-icons/hi2";
import { destinations } from "@/data/destinations";

const fields = [
  {
    key: "destination",
    label: "Destination",
    icon: HiOutlineMapPin,
    type: "select",
    options: ["Anywhere in India", ...destinations.map((d) => d.name)],
  },
  { key: "date", label: "Travel Date", icon: HiOutlineCalendarDays, type: "date" },
  {
    key: "budget",
    label: "Budget",
    icon: HiOutlineBanknotes,
    type: "select",
    options: ["Under ₹15,000", "₹15,000 – ₹30,000", "₹30,000 – ₹50,000", "₹50,000+"],
  },
  {
    key: "travelers",
    label: "Travelers",
    icon: HiOutlineUserGroup,
    type: "select",
    options: ["1 Traveler", "2 Travelers", "3-5 Travelers", "6+ Travelers"],
  },
];

export default function SearchSection() {
  const [values, setValues] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/packages";
  };

  return (
    <section className="relative z-10 -mt-18 px-5 sm:-mt-20 sm:px-8 lg:-mt-14 lg:px-12 xl:px-20">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="glass-card mx-auto grid max-w-6xl grid-cols-1 gap-4 rounded-3xl p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:items-end lg:gap-3 lg:p-4"
      >
        {fields.map((f) => (
          <label key={f.key} className="block">
            <span className="mb-1.5 flex items-center gap-1.5 font-utility text-xs font-semibold uppercase tracking-wide text-deepblue/50 dark:text-cream/50">
              <f.icon className="h-3.5 w-3.5" /> {f.label}
            </span>
            {f.type === "select" ? (
              <select
                onChange={(e) => setValues((v) => ({ ...v, [f.key]: e.target.value }))}
                className="w-full rounded-xl border border-deepblue/10 bg-white/70 px-3 py-3 font-body text-sm text-deepblue outline-none transition-colors focus:border-sky-400 dark:border-white/10 dark:bg-white/5 dark:text-cream"
              >
                {f.options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ) : (
              <input
                type="date"
                onChange={(e) => setValues((v) => ({ ...v, [f.key]: e.target.value }))}
                className="w-full rounded-xl border border-deepblue/10 bg-white/70 px-3 py-3 font-body text-sm text-deepblue outline-none transition-colors focus:border-sky-400 dark:border-white/10 dark:bg-white/5 dark:text-cream"
              />
            )}
          </label>
        ))}

        <button
          type="submit"
          className="btn-primary !bg-sunset hover:!bg-sunset-600 w-full !px-6 !py-3.5 lg:w-auto"
        >
          <HiMagnifyingGlass className="h-4 w-4" /> Search
        </button>
      </motion.form>
    </section>
  );
}
