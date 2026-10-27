import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactInfo } from "@/components/sections/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Game Plan Sports Performance team. We're here to answer your questions about our performance products, partnerships, and more.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-800 pt-28 pb-16 sm:pt-32 sm:pb-20">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Get In Touch"
            heading="We'd Love to Hear From You"
            subtitle="Whether you have a question about our products, are interested in a partnership, or just want to say hello — our team is ready to help."
            align="center"
          />
        </Container>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
