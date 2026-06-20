import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  HiOutlineCalendarDays,
  HiOutlineClock,
  HiOutlineBanknotes,
  HiStar,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa6";
import { destinations, getDestinationBySlug } from "@/data/destinations";
import { packages } from "@/data/packages";
import PackageCard from "@/components/shared/PackageCard";
import DestinationCard from "@/components/shared/DestinationCard";
import SectionHeading from "@/components/shared/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }) {
  const destination = getDestinationBySlug(params.slug);
  if (!destination) return {};
  return {
    title: `${destination.name} Tour Packages | Best Time, Attractions & Budget`,
    description: `Plan your ${destination.name} trip with WanderIndia — ${destination.tagline}. Best time to visit, top attractions, estimated budget and curated tour packages.`,
    alternates: { canonical: `/destinations/${destination.slug}` },
    openGraph: {
      title: `${destination.name} Tour Packages | WanderIndia`,
      description: destination.description,
      images: [{ url: destination.image }],
    },
  };
}

export default function DestinationDetailPage({ params }) {
  const destination = getDestinationBySlug(params.slug);
  if (!destination) notFound();

  const relatedPackages = packages
    .filter((p) =>
      p.destinationsCovered.some((d) =>
        destination.name.toLowerCase().includes(d.toLowerCase().split(" ")[0].toLowerCase())
      )
    )
    .slice(0, 3);

  const fallbackPackages = relatedPackages.length ? relatedPackages : packages.slice(0, 3);

  const otherDestinations = destinations.filter((d) => d.slug !== destination.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden pt-20">
        <Image
          src={destination.image}
          alt={`${destination.name} hero`}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deepblue/90 via-deepblue/30 to-deepblue/10" />
        <div className="container-px relative flex h-full max-w-7xl items-end pb-12 mx-auto">
          <div>
            <span className="heading-eyebrow !text-sunset-300 mb-3 inline-flex">
              <HiOutlineMapPin className="h-4 w-4" /> India
            </span>
            <h1 className="heading-xl text-cream text-4xl sm:text-6xl">{destination.name}</h1>
            <p className="mt-2 font-body text-cream/75">{destination.tagline}</p>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="container-px -mt-10 relative z-10">
        <div className="glass-card mx-auto grid max-w-5xl grid-cols-2 gap-6 rounded-3xl p-6 sm:grid-cols-4 sm:p-8">
          {[
            { icon: HiOutlineCalendarDays, label: "Best Time", value: destination.bestTime },
            { icon: HiOutlineClock, label: "Duration", value: destination.duration },
            { icon: HiOutlineBanknotes, label: "Budget", value: destination.budget },
            { icon: HiStar, label: "Rating", value: `${destination.rating} / 5` },
          ].map((f) => (
            <div key={f.label}>
              <f.icon className="h-5 w-5 text-sunset" />
              <p className="mt-2 font-utility text-[11px] uppercase tracking-wide text-deepblue/40 dark:text-cream/40">
                {f.label}
              </p>
              <p className="font-display text-sm font-semibold text-deepblue dark:text-cream">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Description + Gallery */}
      <section className="section-py container-px">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-deepblue dark:text-cream">
              About {destination.name}
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-deepblue/60 dark:text-cream/60">
              {destination.description}
            </p>

            <h3 className="mt-10 font-display text-lg font-semibold text-deepblue dark:text-cream">
              Top Attractions
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {destination.attractions.map((a) => (
                <li
                  key={a}
                  className="flex items-center gap-2 rounded-xl bg-deepblue/[0.04] px-4 py-3 font-body text-sm text-deepblue/70 dark:bg-white/5 dark:text-cream/70"
                >
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" /> {a}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              {destination.category.map((c) => (
                <span key={c} className="chip border-deepblue/15 text-deepblue/60 dark:border-white/15 dark:text-cream/60">
                  {c}
                </span>
              ))}
            </div>

            <MagneticButton
              as="a"
              {...{ href: "/packages" }}
              className="btn-primary mt-10 inline-flex"
            >
              View {destination.name} Packages <FaArrowRight className="h-3.5 w-3.5" />
            </MagneticButton>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {destination.gallery.map((g, i) => (
              <div
                key={g}
                className={`relative overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 h-64" : "h-44"}`}
              >
                <Image src={g} alt={`${destination.name} photo ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related packages */}
      <section className="section-py container-px bg-deepblue/[0.03] dark:bg-white/[0.02]">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Book Now"
            title={`Tour Packages for ${destination.name}`}
            description="Fully inclusive itineraries handled by our travel desk from arrival to departure."
          />
          <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {fallbackPackages.map((p) => (
              <PackageCard key={p.slug} pkg={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Other destinations */}
      <section className="section-py container-px">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Keep Exploring" title="You Might Also Like" />
          <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {otherDestinations.map((d, i) => (
              <DestinationCard key={d.slug} destination={d} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
