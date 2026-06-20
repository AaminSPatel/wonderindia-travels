"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import SectionHeading from "@/components/shared/SectionHeading";
import { team } from "@/data/testimonials";
import { staggerContainer, fadeUp } from "@/lib/utils";

export default function TeamSection() {
  return (
    <section className="section-py container-px bg-deepblue/[0.03] dark:bg-white/[0.02]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The People"
          title="Meet the Travel Desk"
          description="A small team of planners and on-ground specialists behind every itinerary."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4"
        >
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-glass dark:bg-ink-800"
            >
              <div className="relative h-56 w-full overflow-hidden sm:h-64">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-deepblue/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white">
                    <FaInstagram className="h-4 w-4" />
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white">
                    <FaLinkedinIn className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-sm font-semibold text-deepblue dark:text-cream">
                  {m.name}
                </h3>
                <p className="font-utility text-xs text-sunset">{m.role}</p>
                <p className="mt-2 font-body text-xs leading-relaxed text-deepblue/50 dark:text-cream/50">
                  {m.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}