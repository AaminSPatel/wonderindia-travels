"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import SectionHeading from "@/components/shared/SectionHeading";
import DestinationCard from "@/components/shared/DestinationCard";
import { destinations } from "@/data/destinations";
import { staggerContainer, fadeUp } from "@/lib/utils";

const featured = destinations.slice(0, 6);

export default function PopularDestinations() {
  return (
    <section className="section-py container-px">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Top Picks"
            title="Popular Indian Destinations"
            description="Hand-picked locations across mountains, beaches and heritage cities — each itinerary tested and refined by our travel desk."
            align="left"
          />
          <Link
            href="/destinations"
            className="hidden flex-shrink-0 items-center gap-2 font-display text-sm font-semibold text-deepblue hover:text-sunset dark:text-cream sm:flex"
          >
            View all destinations <FaArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((d, i) => (
            <motion.div key={d.slug} variants={fadeUp} custom={i}>
              <DestinationCard destination={d} index={i} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center sm:hidden">
          <Link href="/destinations" className="btn-secondary">
            View all destinations <FaArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
