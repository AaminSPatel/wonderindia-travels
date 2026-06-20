"use client";

import { motion } from "framer-motion";
import GradientBlob from "@/components/ui/GradientBlob";

export default function DestinationsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-sky bg-200% animate-gradient-shift pt-36 pb-20 text-center lg:pt-44 lg:pb-24">
      <div className="absolute inset-0 bg-grain opacity-30" />
      <GradientBlob variant="emerald" className="-bottom-10 right-0 h-72 w-72" />
      <div className="container-px relative mx-auto max-w-3xl">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading-eyebrow !text-sunset-300 mb-4 inline-flex"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-sunset-300" /> 12 Destinations, Endless Itineraries
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="heading-xl text-cream text-3xl sm:text-5xl text-balance"
        >
          Top Indian Tourist Destinations
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 font-body text-cream/70"
        >
          From Himalayan passes to backwaters and bazaars — filter by the kind
          of trip you're after and find your next destination.
        </motion.p>
      </div>
    </section>
  );
}
