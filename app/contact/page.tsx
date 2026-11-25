import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/data/site";
import { realValue } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact | Nuvin Solutions",
  description: "Tell Nuvin Solutions about your website, SaaS product or digital marketing project.",
};

export default function ContactPage() {
  const email = realValue(site.email);
  const phone = realValue(site.phone);
  const location = realValue(site.location);

  return (
    <>
      <section aria-labelledby="contact-title" className="hero-tint relative overflow-hidden">
        <Container className="py-16 md:py-20 lg:py-24">
          <Reveal immediate className="max-w-5xl">
            <p className="text-label mb-6 flex w-fit max-w-full items-center gap-3 rounded-full border border-sky/35 bg-ice px-4 py-2 text-navy shadow-sm md:text-[0.7rem]">
              <span aria-hidden className="size-2 shrink-0 rounded-full bg-royal ring-4 ring-royal/10" />
              START A CONVERSATION
            </p>
            <h1 id="contact-title" className="hero-title max-w-[18ch]">
              Tell Us What You&apos;re Ready to <span className="text-royal">Build</span>
            </h1>
            <p className="text-lg mt-6 max-w-[62ch] text-slate">
              Share a few details about your project. We&apos;ll help you define the next step and recommend a practical way forward.
            </p>
          </Reveal>
        </Container>
      </section>

      <section aria-label="Contact and project enquiry" className="bg-white py-16 md:py-20 lg:py-24">
        <Container className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
          <Reveal className="lg:col-span-4">
            <p className="mb-5 font-ui text-xs font-semibold tracking-[0.16em] text-royal md:text-sm">GET IN TOUCH</p>
            <h2 className="text-h2 max-w-[12ch]">Let&apos;s discuss your next move.</h2>
            <p className="mt-5 max-w-[38ch] text-base leading-7 text-slate">
              No complicated process. Send the essentials, and we&apos;ll respond with useful next steps.
            </p>

            <div className="mt-8 grid gap-3">
              {email && (
                <a href={`mailto:${email}`} className="group flex items-center gap-3 rounded-2xl border border-[#E0E6EF] bg-[#F8FAFD] p-4 transition-colors hover:border-[#B5C9F3] hover:bg-ice">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ice text-royal">
                    <Mail aria-hidden className="size-5" strokeWidth={1.8} />
                  </span>
                  <span>
                    <span className="block text-[0.625rem] font-bold uppercase tracking-[0.13em] text-slate/65">Email</span>
                    <span className="mt-1 block text-sm font-semibold text-navy group-hover:text-royal">{email}</span>
                  </span>
                </a>
              )}
              {phone && (
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="group flex items-center gap-3 rounded-2xl border border-[#E0E6EF] bg-[#F8FAFD] p-4 transition-colors hover:border-[#B5C9F3] hover:bg-ice">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ice text-royal">
                    <Phone aria-hidden className="size-5" strokeWidth={1.8} />
                  </span>
                  <span>
                    <span className="block text-[0.625rem] font-bold uppercase tracking-[0.13em] text-slate/65">Phone</span>
                    <span className="mt-1 block text-sm font-semibold text-navy group-hover:text-royal">{phone}</span>
                  </span>
                </a>
              )}
              {location && (
                <div className="flex items-center gap-3 rounded-2xl border border-[#E0E6EF] bg-[#F8FAFD] p-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ice text-royal">
                    <MapPin aria-hidden className="size-5" strokeWidth={1.8} />
                  </span>
                  <span>
                    <span className="block text-[0.625rem] font-bold uppercase tracking-[0.13em] text-slate/65">Based in</span>
                    <span className="mt-1 block text-sm font-semibold text-navy">{location}</span>
                  </span>
                </div>
              )}
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#D6E3F8] bg-[#F2F7FF] p-4">
              <Clock3 aria-hidden className="mt-0.5 size-5 shrink-0 text-royal" />
              <p className="text-sm leading-6 text-slate">
                <strong className="block text-navy">Typical response time</strong>
                Usually within one business day.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7 lg:col-start-6">
            <div className="rounded-[1.4rem] border border-[#D3DAE5] bg-[#F8FAFD] p-5 sm:p-8">
              <p className="mb-6 font-ui text-[0.6875rem] font-semibold tracking-[0.14em] text-royal">PROJECT ENQUIRY</p>
              <ContactForm />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
