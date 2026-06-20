"use client";

import { motion } from "framer-motion";
import GradientBlob from "@/components/ui/GradientBlob";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-sky bg-200% animate-gradient-shift pt-36 pb-28 text-center lg:pt-44 lg:pb-32">
      <div className="absolute inset-0 bg-grain opacity-30" />
      <GradientBlob variant="emerald" className="-top-10 right-10 h-72 w-72" />
      <div className="container-px relative mx-auto max-w-2xl">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading-eyebrow !text-sunset-300 mb-4 inline-flex"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-sunset-300" /> We&apos;d Love to Hear From You
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="heading-xl text-cream text-3xl sm:text-5xl text-balance"
        >
          Let&apos;s Plan Your Next Trip
        </motion.h1>
      </div>
    </section>
  );
}
