"use client";

import { motion } from "framer-motion";
import { HiOutlineShieldCheck, HiOutlineStar, HiOutlineUsers, HiOutlineGlobeAsiaAustralia } from "react-icons/hi2";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { staggerContainer, fadeUp } from "@/lib/utils";

const badges = [
  { icon: HiOutlineUsers, value: 50000, suffix: "+", label: "Travellers Served" },
  { icon: HiOutlineStar, value: 4.8, suffix: "★", label: "Average Rating", isFloat: true },
  { icon: HiOutlineShieldCheck, value: 500, suffix: "+", label: "Verified Guides & Stays" },
  { icon: HiOutlineGlobeAsiaAustralia, value: 28, suffix: "", label: "States Covered" },
];

export default function TrustBadges() {
  return (
    <section className="container-px pb-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-6 rounded-3xl border border-deepblue/10 bg-white p-8 dark:border-white/10 dark:bg-ink-800 sm:p-12 lg:grid-cols-4"
      >
        {badges.map((b, i) => (
          <motion.div key={b.label} variants={fadeUp} custom={i} className="text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-deepblue/5 text-deepblue dark:bg-white/10 dark:text-cream">
              <b.icon className="h-6 w-6" />
            </span>
            <p className="mt-4 font-display text-2xl font-semibold text-deepblue dark:text-cream sm:text-3xl">
              {b.isFloat ? `${b.value}${b.suffix}` : <AnimatedCounter value={b.value} suffix={b.suffix} />}
            </p>
            <p className="mt-1 font-utility text-xs text-deepblue/50 dark:text-cream/50">{b.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
