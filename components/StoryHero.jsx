"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import GradientBlob from "@/components/ui/GradientBlob";

export default function StoryHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
      <GradientBlob variant="sky" className="-top-10 -right-10 h-80 w-80" />
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="heading-eyebrow mb-4 inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-sunset" /> Our Story
            </span>
            <h1 className="heading-xl text-3xl sm:text-4xl lg:text-5xl text-balance">
              Built by Travellers, for Travellers Who Want It Done Right
            </h1>
            <p className="mt-6 font-body text-base leading-relaxed text-deepblue/60 dark:text-cream/60">
              WanderIndia started in 2014 with a simple frustration: booking a
              good Indian holiday meant either overpaying an agent or
              spending weeks stitching together hotels, guides and transport
              yourself. We set out to fix that — pairing real, on-ground
              knowledge of India&apos;s destinations with a transparent
              online booking experience.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-deepblue/60 dark:text-cream/60">
              Twelve years on, we&apos;ve planned trips for over 50,000
              travellers across 12 states, built a network of 500+ verified
              guides and stays, and kept the same promise: honest pricing,
              dependable service, and a support desk that actually picks up
              the phone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative h-[420px] overflow-hidden rounded-3xl shadow-glass-lg">
              <Image
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop"
                alt="WanderIndia travel team planning an itinerary"
                fill
                className="object-cover"
              />
            </div>
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card absolute -bottom-8 -left-8 hidden rounded-2xl px-6 py-4 sm:block"
            >
              <p className="font-display text-2xl font-semibold text-deepblue dark:text-cream">12+</p>
              <p className="font-utility text-xs text-deepblue/50 dark:text-cream/50">Years of Experience</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}