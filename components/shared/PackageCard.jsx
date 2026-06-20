"use client";

import Link from "next/link";
import Image from "next/image";
import { HiStar, HiOutlineClock, HiOutlineMapPin } from "react-icons/hi2";
import { formatINR } from "@/lib/utils";

export default function PackageCard({ pkg }) {
  const discount = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);

  return (
    <Link
      href={`/packages/${pkg.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-glass transition-all duration-300 hover:-translate-y-2 hover:shadow-glass-lg dark:bg-ink-800"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-sunset px-3 py-1 font-utility text-xs font-bold text-white">
          {discount}% OFF
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 font-utility text-xs font-semibold text-deepblue backdrop-blur-md">
          {pkg.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-deepblue dark:text-cream">
          {pkg.name}
        </h3>
        <div className="mt-2 flex items-center gap-1 font-utility text-xs text-deepblue/50 dark:text-cream/50">
          <HiOutlineMapPin className="h-4 w-4" />
          {pkg.destinationsCovered.join(" · ")}
        </div>
        <div className="mt-3 flex items-center gap-4 font-utility text-xs text-deepblue/50 dark:text-cream/50">
          <span className="flex items-center gap-1">
            <HiOutlineClock className="h-4 w-4" /> {pkg.duration}
          </span>
          <span className="flex items-center gap-1">
            <HiStar className="h-4 w-4 text-sunset" /> {pkg.rating} ({pkg.reviews})
          </span>
        </div>
        <div className="mt-auto flex items-end justify-between border-t border-deepblue/10 pt-4 dark:border-white/10 pt-5 mt-5">
          <div>
            <span className="font-utility text-xs text-deepblue/40 line-through dark:text-cream/40">
              {formatINR(pkg.originalPrice)}
            </span>
            <span className="block font-display text-xl font-semibold text-deepblue dark:text-cream">
              {formatINR(pkg.price)}
              <span className="text-xs font-normal text-deepblue/40 dark:text-cream/40"> /person</span>
            </span>
          </div>
          <span className="btn-primary !px-5 !py-2.5 text-sm">Book Now</span>
        </div>
      </div>
    </Link>
  );
}
