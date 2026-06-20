import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import MapSection from "@/components/contact/MapSection";
import InquiryForm from "@/components/shared/InquiryForm";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata = {
  title: "Contact Us | Talk to a Travel Expert",
  description:
    "Get in touch with WanderIndia's travel desk by phone, WhatsApp or email. Fill our contact form for a custom holiday plan within 24 hours.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />

      <section className="section-py container-px">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Send a Message"
            title="Tell Us About Your Trip"
            description="Share a few details and our travel desk will reply within 24 hours with a tailored plan."
          />
          <div className="mt-10">
            <InquiryForm title="Contact Form" />
          </div>
        </div>
      </section>

      <MapSection />
    </>
  );
}
