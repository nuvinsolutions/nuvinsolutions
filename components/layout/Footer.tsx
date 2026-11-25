import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { mainNav } from "@/data/navigation";
import { site } from "@/data/site";
import { realValue } from "@/lib/utils";

const linkClass =
  "inline-flex items-center text-sm text-white/65 transition-colors duration-200 hover:text-white focus-visible:text-white";

export function Footer() {
  const email = realValue(site.email);
  const phone = realValue(site.phone);
  const location = realValue(site.location);

  return (
    <footer className="on-navy relative isolate overflow-hidden bg-[#0B1F3A] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-48 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#1F4FD8]/20 blur-[110px]" />
      <Container className="grid gap-x-10 gap-y-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-y-14 lg:py-16">
        <div className="sm:col-span-2 lg:col-span-4">
          <Link href="/" aria-label="Nuvin Solutions – Home" className="inline-flex">
            <Logo src="/brand/footer.png" className="h-12 mix-blend-screen" />
          </Link>
          <p className="mt-6 max-w-sm text-[0.9375rem] leading-7 text-white/65">
            A digital agency bringing strategy, technology, design and marketing together to help businesses move forward with confidence.
          </p>
          <div role="group" aria-label="Social media" className="mt-5 flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/nuvinsolutions/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/65 transition-colors hover:border-[#6FA8FF]/40 hover:bg-[#1F4FD8]/15 hover:text-[#9BC1FF]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="size-5" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 1 1 4 0v4M12 10v7" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/nuvinsolutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/65 transition-colors hover:border-[#6FA8FF]/40 hover:bg-[#1F4FD8]/15 hover:text-[#9BC1FF]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
                <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/nuvinsolutions/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/65 transition-colors hover:border-[#6FA8FF]/40 hover:bg-[#1F4FD8]/15 hover:text-[#9BC1FF]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="size-5" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <path d="M17.5 6.5h.01" />
              </svg>
            </a>
          </div>
        </div>

        <nav aria-label="Footer navigation" className="lg:col-span-2 lg:col-start-5">
          <h2 className="flex items-center gap-2.5 font-ui text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-[#6FA8FF]"><span aria-hidden="true" className="h-px w-4 bg-[#1F4FD8]" />Navigate</h2>
          <ul className="mt-5 space-y-3.5">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer legal links" className="lg:col-span-2">
          <h2 className="flex items-center gap-2.5 font-ui text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-[#6FA8FF]"><span aria-hidden="true" className="h-px w-4 bg-[#1F4FD8]" />Legal</h2>
          <ul className="mt-5 space-y-3.5">
            <li><Link href="/privacy-policy" className={linkClass}>Privacy Policy</Link></li>
            <li><Link href="/terms" className={linkClass}>Terms of Use</Link></li>
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <h2 className="flex items-center gap-2.5 font-ui text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-[#6FA8FF]"><span aria-hidden="true" className="h-px w-4 bg-[#1F4FD8]" />Visit or contact</h2>
          <div className="mt-5 grid gap-2.5">
            {phone && (
              <a href={`tel:${phone.replace(/\s/g, "")}`} className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3.5 transition-colors hover:border-[#6FA8FF]/40 hover:bg-white/[0.06]">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#6FA8FF]/20 bg-[#1F4FD8]/10 text-[#6FA8FF]" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]" stroke="currentColor" strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M5 4h3l2 5-2 1.5a15 15 0 0 0 5.5 5.5L15 14l5 2v3a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" /></svg>
                </span>
                <span className="min-w-0"><span className="block text-[0.625rem] font-bold uppercase tracking-[0.13em] text-white/45">Phone</span><span className="mt-1 block text-sm text-white/80 group-hover:text-white">{phone}</span></span>
              </a>
            )}
            {location && (
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#6FA8FF]/20 bg-[#1F4FD8]/10 text-[#6FA8FF]" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]" stroke="currentColor" strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.3" /></svg>
                </span>
                <span className="min-w-0"><span className="block text-[0.625rem] font-bold uppercase tracking-[0.13em] text-white/45">Based in</span><span className="mt-1 block text-sm leading-5 text-white/80">{location}</span></span>
              </div>
            )}
          </div>
          <Link href="/contact" className="mt-4 inline-flex min-h-11 items-center gap-3 rounded-xl bg-[#1F4FD8] px-5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(31,79,216,0.24)] transition hover:bg-[#3567EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6FA8FF]">
            Start a project <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/50 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between lg:col-span-12">
          <p>© {new Date().getFullYear()} Nuvin Solutions. All rights reserved.</p>
          <p>Built for businesses ready to move forward.</p>
        </div>
      </Container>
    </footer>
  );
}
