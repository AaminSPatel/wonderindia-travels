"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import SectionHeading from "@/components/shared/SectionHeading";
import PackageCard from "@/components/shared/PackageCard";
import { packages } from "@/data/packages";
import { staggerContainer, fadeUp } from "@/lib/utils";

const featured = packages.slice(0, 3);

export default function FeaturedPackages() {
  return (
    <section className="section-py container-px">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Curated For You"
          title="Featured Luxury Packages"
          description="Our highest-rated itineraries, fully inclusive of stays, transfers and a dedicated travel manager."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((p, i) => (
            <motion.div key={p.slug} variants={fadeUp} custom={i}>
              <PackageCard pkg={p} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Link href="/packages" className="btn-secondary">
            View all packages <FaArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
