"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { milestones } from "@/data/testimonials";

export default function Timeline() {
  return (
    <section className="section-py container-px">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Our Journey"
          title="Company Achievements"
          description="Key milestones from a 3-person desk to a pan-India travel network."
        />

        <div className="relative mt-16">
          <div className="absolute left-[15px] top-0 h-full w-px bg-deepblue/10 dark:bg-white/10 sm:left-1/2" />
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col gap-4 sm:flex-row sm:items-center ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className={`pl-10 sm:w-1/2 sm:pl-0 ${i % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:pl-10"}`}>
                  <span className="font-display text-2xl font-semibold text-sunset">{m.year}</span>
                  <h3 className="mt-1 font-display text-base font-semibold text-deepblue dark:text-cream">
                    {m.title}
                  </h3>
                  <p className="mt-1 font-body text-sm text-deepblue/55 dark:text-cream/55">{m.detail}</p>
                </div>
                <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-deepblue text-cream shadow-glow sm:left-1/2 sm:-translate-x-1/2">
                  <span className="h-2.5 w-2.5 rounded-full bg-sunset" />
                </span>
                <div className="hidden sm:block sm:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
