"use client";

import { motion } from "framer-motion";
import { HiOutlineRocketLaunch, HiOutlineSparkles } from "react-icons/hi2";
import { staggerContainer, fadeUp } from "@/lib/utils";

const cards = [
  {
    icon: HiOutlineRocketLaunch,
    title: "Our Mission",
    text: "To make planning a great Indian holiday as simple as booking a flight — transparent pricing, verified partners, and support that doesn't disappear after checkout.",
    bg: "bg-gradient-sky",
  },
  {
    icon: HiOutlineSparkles,
    title: "Our Vision",
    text: "To become the most trusted name in Indian travel, known for itineraries that feel hand-built rather than templated, for every kind of traveller.",
    bg: "bg-gradient-emerald",
  },
];

export default function MissionVision() {
  return (
    <section className="section-py container-px">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2"
      >
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            variants={fadeUp}
            custom={i}
            className={`relative overflow-hidden rounded-3xl ${c.bg} p-8 sm:p-10`}
          >
            <div className="absolute inset-0 bg-grain opacity-20" />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-cream">
              <c.icon className="h-7 w-7" />
            </span>
            <h3 className="relative mt-6 font-display text-2xl font-semibold text-cream">
              {c.title}
            </h3>
            <p className="relative mt-3 font-body text-sm leading-relaxed text-cream/75">
              {c.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
