"use client";

import Link from "next/link";
import Image from "next/image";
import { HiStar } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa6";
import TiltCard from "@/components/ui/TiltCard";
import { formatINR } from "@/lib/utils";

export default function DestinationCard({ destination, index = 0 }) {
  return (
    <TiltCard intensity={6} className="h-full">
      <Link
        href={`/destinations/${destination.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-glass transition-shadow duration-300 hover:shadow-glass-lg dark:bg-ink-800"
        style={{ transform: "translateZ(0)" }}
      >
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={destination.image}
            alt={`${destination.name} travel package`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 bg-black group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deepblue/80 via-deepblue/0 to-transparent" />
          <span className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 font-utility text-xs font-semibold text-deepblue backdrop-blur-md">
            <HiStar className="h-3.5 w-3.5 text-sunset" /> {destination.rating}
          </span>
          <span className="absolute bottom-4 left-4 font-display text-2xl font-semibold text-white shadow-sm ">
            {destination.name}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="font-body text-sm text-deepblue/60 dark:text-cream/60">
            {destination.tagline}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {destination.category.slice(0, 2).map((c) => (
              <span
                key={c}
                className="rounded-full bg-emerald-50 px-3 py-1 font-utility text-[11px] font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
              >
                {c}
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-deepblue/10 pt-4 dark:border-white/10">
            <div>
              <span className="block font-utility text-[11px] uppercase tracking-wide text-deepblue/40 dark:text-cream/40">
                Starting from
              </span>
              <span className="font-display text-lg font-semibold text-deepblue dark:text-cream">
                {formatINR(destination.price)}
              </span>
            </div>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-deepblue/5 text-deepblue transition-colors group-hover:bg-deepblue group-hover:text-cream dark:bg-white/10 dark:text-cream">
              <FaArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </TiltCard>
  );
}
