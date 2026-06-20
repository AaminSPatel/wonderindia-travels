import DestinationsHero from "@/components/destinations/DestinationsHero";
import DestinationsGrid from "@/components/destinations/DestinationsGrid";
import FAQ from "@/components/home/FAQ";

export const metadata = {
  title: "Top Indian Destinations | Mountains, Beaches & Heritage Tours",
  description:
    "Explore top Indian tourist destinations including Goa, Kashmir, Manali, Kerala, Andaman and more. Filter by mountains, beaches, adventure, honeymoon, family or spiritual travel.",
  alternates: { canonical: "/destinations" },
};

const destinationFaqs = [
  {
    q: "Which Indian destination is best for a first-time honeymoon trip?",
    a: "Kashmir and Udaipur are our most-booked honeymoon destinations, offering houseboats, lake-view stays and scenic, low-effort itineraries.",
  },
  {
    q: "What is the best time to visit Himalayan destinations like Manali or Ladakh?",
    a: "Manali is pleasant March–June and October–December; Ladakh's high passes are typically only open May–September.",
  },
  {
    q: "Can I combine two destinations in one trip?",
    a: "Yes — many travellers combine Jaipur with Udaipur, or Munnar with Alleppey. Contact us for a custom multi-destination itinerary.",
  },
];

export default function DestinationsPage() {
  return (
    <>
      <DestinationsHero />
      <DestinationsGrid />
      <FAQ
        faqs={destinationFaqs}
        eyebrow="Destination FAQs"
        title="Planning Your Trip"
      />

      <section className="container-px pb-24">
        <div className="mx-auto max-w-4xl font-body text-sm leading-relaxed text-deepblue/60 dark:text-cream/50">
          <h2 className="font-display text-xl font-semibold text-deepblue dark:text-cream">
            Explore Top Tour Packages India Has to Offer
          </h2>
          <p className="mt-4">
            India&apos;s geography rarely repeats itself within a single
            country — snow-bound Himalayan passes in Kashmir and Leh Ladakh,
            sun-warmed beaches in Goa and the Andaman Islands, tea-scented
            hill stations in Darjeeling and Munnar, and the desert palaces of
            Rajasthan&apos;s Jaipur and Udaipur all sit within a short flight
            of each other. Our destinations page is organised so you can
            filter by the kind of holiday you want — mountain retreats,
            beach holidays, adventure travel, honeymoon escapes, family
            vacations or spiritual journeys — rather than scrolling an
            undifferentiated list.
          </p>
          <p className="mt-4">
            Each destination listing includes the best time to visit, key
            attractions, estimated budget and trip duration, so you can
            shortlist confidently before opening a full package. Looking for
            specific holiday packages India travellers love most? Kashmir
            and Kerala remain our top-rated honeymoon packages, while
            Ladakh and Rishikesh top the adventure travel India search list.
          </p>
        </div>
      </section>
    </>
  );
}
