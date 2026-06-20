import PackagesHero from "@/components/packages/PackagesHero";
import PackagesGrid from "@/components/packages/PackagesGrid";
import FAQ from "@/components/home/FAQ";

export const metadata = {
  title: "Tour Packages India | Honeymoon, Family, Adventure & Luxury Tours",
  description:
    "Browse holiday packages across India — honeymoon tours, family vacations, adventure trips, luxury travel, solo escapes and group tours. Filter by category and sort by price or rating.",
  alternates: { canonical: "/packages" },
};

const packageFaqs = [
  {
    q: "How far in advance should I book a tour package?",
    a: "We recommend booking at least 4-6 weeks ahead for peak season (Dec-Jan, May-June) to secure preferred hotels and houseboats.",
  },
  {
    q: "Are flights included in package prices?",
    a: "No, package prices cover accommodation, transfers, meals as specified and sightseeing. Airfare is booked separately so you can use your preferred airline or points.",
  },
  {
    q: "Can group tour packages be booked for private groups?",
    a: "Yes, any Group Tour package can be converted to a private departure for your group — pricing is adjusted based on group size.",
  },
];

export default function PackagesPage() {
  return (
    <>
      <PackagesHero />
      <PackagesGrid />
      <FAQ faqs={packageFaqs} eyebrow="Package FAQs" title="Booking Questions, Answered" />

      <section className="container-px pb-24">
        <div className="mx-auto max-w-4xl font-body text-sm leading-relaxed text-deepblue/60 dark:text-cream/50">
          <h2 className="font-display text-xl font-semibold text-deepblue dark:text-cream">
            Compare Holiday Packages India Travellers Trust Most
          </h2>
          <p className="mt-4">
            Our tour packages are grouped by travel style rather than just
            destination, because the right Kashmir trip for a honeymooning
            couple looks nothing like the right Kashmir trip for a family of
            five. Choose from honeymoon packages with private houseboats and
            candle-lit dinners, family tour packages paced for children and
            grandparents alike, adventure travel India itineraries built
            around rafting and high-altitude trekking, luxury travel India
            experiences with premium stays and private transport, solo
            travel packages with built-in group activities, or fixed-date
            group tours with a dedicated tour manager.
          </p>
          <p className="mt-4">
            Every package page includes a full day-wise itinerary,
            transparent inclusions and exclusions, an upfront pricing table
            and an inquiry form for customisation — so you know exactly what
            you&apos;re booking before you pay a rupee.
          </p>
        </div>
      </section>
    </>
  );
}
