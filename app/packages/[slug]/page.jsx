import Image from "next/image";
import { notFound } from "next/navigation";
import {
  HiOutlineClock,
  HiOutlineMapPin,
  HiStar,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
} from "react-icons/hi2";
import { packages, getPackageBySlug } from "@/data/packages";
import PackageCard from "@/components/shared/PackageCard";
import SectionHeading from "@/components/shared/SectionHeading";
import ItineraryAccordion from "@/components/packages/ItineraryAccordion";
import InquiryForm from "@/components/shared/InquiryForm";
import FAQ from "@/components/home/FAQ";
import MagneticButton from "@/components/ui/MagneticButton";
import { formatINR } from "@/lib/utils";

export async function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const pkg = getPackageBySlug(params.slug);
  if (!pkg) return {};
  return {
    title: `${pkg.name} | ${pkg.duration} ${pkg.category} Package`,
    description: `${pkg.overview.slice(0, 150)}...`,
    alternates: { canonical: `/packages/${pkg.slug}` },
    openGraph: {
      title: pkg.name,
      description: pkg.overview,
      images: [{ url: pkg.image }],
    },
  };
}

export default function PackageDetailPage({ params }) {
  const pkg = getPackageBySlug(params.slug);
  if (!pkg) notFound();

  const related = packages.filter((p) => p.slug !== pkg.slug).slice(0, 3);
  const discount = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);

  return (
    <>
      {/* Gallery hero */}
      <section className="pt-28 pb-10 lg:pt-32">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:grid-rows-2">
            <div className="relative col-span-2 row-span-2 h-72 overflow-hidden rounded-3xl sm:h-full">
              <Image src={pkg.gallery[0]} alt={pkg.name} fill priority className="object-cover" />
            </div>
            {pkg.gallery.slice(1, 4).map((g, i) => (
              <div key={g} className="relative hidden h-44 overflow-hidden rounded-3xl sm:block">
                <Image src={g} alt={`${pkg.name} photo ${i + 2}`} fill className="object-cover" />
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="chip border-transparent bg-deepblue text-cream">{pkg.category}</span>
                <span className="flex items-center gap-1 font-utility text-sm text-deepblue/60 dark:text-cream/60">
                  <HiStar className="h-4 w-4 text-sunset" /> {pkg.rating} ({pkg.reviews} reviews)
                </span>
                <span className="flex items-center gap-1 font-utility text-sm text-deepblue/60 dark:text-cream/60">
                  <HiOutlineClock className="h-4 w-4" /> {pkg.duration}
                </span>
              </div>
              <h1 className="heading-xl mt-3 text-3xl sm:text-4xl">{pkg.name}</h1>
              <p className="mt-2 flex items-center gap-1.5 font-body text-sm text-deepblue/55 dark:text-cream/55">
                <HiOutlineMapPin className="h-4 w-4" /> {pkg.destinationsCovered.join(" · ")}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div>
                <span className="block font-utility text-xs text-deepblue/40 line-through dark:text-cream/40">
                  {formatINR(pkg.originalPrice)}
                </span>
                <span className="font-display text-3xl font-semibold text-deepblue dark:text-cream">
                  {formatINR(pkg.price)}
                </span>
                <span className="ml-1 font-utility text-xs text-emerald-600 dark:text-emerald-400">
                  {discount}% off
                </span>
              </div>
              <MagneticButton as="a" {...{ href: "#inquiry" }} className="btn-primary !bg-sunset hover:!bg-sunset-600">
                Book Now
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* Overview + itinerary + sidebar */}
      <section className="container-px pb-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-xl font-semibold text-deepblue dark:text-cream">
              Package Overview
            </h2>
            <p className="mt-3 font-body text-base leading-relaxed text-deepblue/60 dark:text-cream/60">
              {pkg.overview}
            </p>

            <h2 className="mt-12 font-display text-xl font-semibold text-deepblue dark:text-cream">
              Day-wise Itinerary
            </h2>
            <ItineraryAccordion itinerary={pkg.itinerary} />

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <h3 className="flex items-center gap-2 font-display text-base font-semibold text-deepblue dark:text-cream">
                  <HiOutlineCheckCircle className="h-5 w-5 text-emerald-500" /> Inclusions
                </h3>
                <ul className="mt-4 space-y-2">
                  {pkg.inclusions.map((inc) => (
                    <li key={inc} className="font-body text-sm text-deepblue/60 dark:text-cream/60">
                      • {inc}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="flex items-center gap-2 font-display text-base font-semibold text-deepblue dark:text-cream">
                  <HiOutlineXCircle className="h-5 w-5 text-sunset-500" /> Exclusions
                </h3>
                <ul className="mt-4 space-y-2">
                  {pkg.exclusions.map((exc) => (
                    <li key={exc} className="font-body text-sm text-deepblue/60 dark:text-cream/60">
                      • {exc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pricing table */}
            <h2 className="mt-12 font-display text-xl font-semibold text-deepblue dark:text-cream">
              Pricing
            </h2>
            <div className="mt-4 overflow-hidden rounded-2xl border border-deepblue/10 dark:border-white/10">
              <table className="w-full text-left">
                <thead className="bg-deepblue/[0.04] dark:bg-white/5">
                  <tr>
                    <th className="px-5 py-3 font-display text-xs font-semibold uppercase tracking-wide text-deepblue/60 dark:text-cream/60">
                      Occupancy
                    </th>
                    <th className="px-5 py-3 font-display text-xs font-semibold uppercase tracking-wide text-deepblue/60 dark:text-cream/60">
                      Price / Person
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-deepblue/10 dark:divide-white/10">
                  {[
                    ["Double Occupancy", pkg.price],
                    ["Triple Occupancy", Math.round(pkg.price * 0.88)],
                    ["Single Occupancy", Math.round(pkg.price * 1.45)],
                  ].map(([label, price]) => (
                    <tr key={label}>
                      <td className="px-5 py-3 font-body text-sm text-deepblue/70 dark:text-cream/70">{label}</td>
                      <td className="px-5 py-3 font-display text-sm font-semibold text-deepblue dark:text-cream">
                        {formatINR(price)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* FAQs */}
            <h2 className="mt-12 font-display text-xl font-semibold text-deepblue dark:text-cream">
              Package FAQs
            </h2>
            <div className="mt-4">
              <FaqList faqs={pkg.faqs} />
            </div>
          </div>

          {/* Sidebar inquiry form */}
          <div id="inquiry" className="lg:sticky lg:top-28 lg:self-start">
            <InquiryForm packageName={pkg.name} />
          </div>
        </div>
      </section>

      {/* Related packages */}
      <section className="section-py container-px bg-deepblue/[0.03] dark:bg-white/[0.02]">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Related Packages" title="You Might Also Like" />
          <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PackageCard key={p.slug} pkg={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FaqList({ faqs }) {
  return (
    <div className="space-y-3">
      {faqs.map((f) => (
        <details
          key={f.q}
          className="group rounded-2xl border border-deepblue/10 bg-white p-5 dark:border-white/10 dark:bg-ink-800"
        >
          <summary className="cursor-pointer font-display text-sm font-semibold text-deepblue marker:content-none dark:text-cream">
            {f.q}
          </summary>
          <p className="mt-2 font-body text-sm leading-relaxed text-deepblue/60 dark:text-cream/60">
            {f.a}
          </p>
        </details>
      ))}
    </div>
  );
}
