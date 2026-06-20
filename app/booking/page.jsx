import BookingWizard from "@/components/booking/BookingWizard";
import GradientBlob from "@/components/ui/GradientBlob";

export const metadata = {
  title: "Book Your Trip | Secure Online Travel Booking",
  description:
    "Book your India holiday package in 4 simple steps — select your package, add traveler details, choose travel dates and pay securely online.",
  alternates: { canonical: "/booking" },
};

export default function BookingPage() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40">
      <GradientBlob variant="sky" className="-top-10 -left-10 h-80 w-80" />
      <GradientBlob variant="sunset" className="bottom-0 right-0 h-80 w-80" />
      <div className="container-px relative">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="heading-eyebrow mb-4 inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-sunset" /> Secure Booking
          </span>
          <h1 className="heading-xl text-3xl sm:text-4xl">Book Your Trip in 4 Easy Steps</h1>
        </div>
        <BookingWizard />
      </div>
    </section>
  );
}
