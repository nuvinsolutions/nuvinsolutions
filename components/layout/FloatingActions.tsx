"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, Send, X } from "lucide-react";
import { site } from "@/data/site";
import { realValue } from "@/lib/utils";

const defaultMessage = "Hi Nuvin Solutions, I have a question about your services.";

export function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const [message, setMessage] = useState("");
  const whatsappPhone = realValue(site.phone)?.replace(/\D/g, "");
  const whatsappHref = whatsappPhone
    ? `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message.trim() || defaultMessage)}`
    : undefined;

  useEffect(() => {
    const updateVisibility = () => setShowBackToTop(window.scrollY > 320);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <>
      {showBackToTop && (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
            })
          }
          className="fixed bottom-5 left-5 z-40 inline-flex size-12 items-center justify-center rounded-full border border-[#E2E8F1] bg-white text-navy shadow-[0_8px_24px_rgba(11,31,58,0.16)] transition-colors hover:border-[#1F4FD8]/30 hover:text-[#1F4FD8]"
        >
          <ArrowUp aria-hidden className="size-5" />
        </button>
      )}
      {whatsappPhone && (
        <>
          {whatsappOpen && (
            <section
              id="whatsapp-support"
              role="dialog"
              aria-labelledby="whatsapp-support-title"
              className="fixed right-4 bottom-24 z-40 max-h-[calc(100vh-7rem)] w-[calc(100vw-2rem)] max-w-[28rem] overflow-y-auto rounded-2xl border border-[#1F4FD8]/50 bg-[#0B153B] p-5 text-white shadow-[0_24px_70px_rgba(11,21,59,0.35)] sm:right-6 sm:p-7"
            >
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div className="flex min-w-0 items-center gap-3">
                  <span aria-hidden="true" className="size-3 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_14px_rgba(16,185,129,0.65)]" />
                  <h2 id="whatsapp-support-title" className="truncate text-sm font-bold text-white sm:text-base">
                    Nuvin Solutions WhatsApp Support
                  </h2>
                </div>
                <button
                  type="button"
                  aria-label="Close WhatsApp support"
                  onClick={() => setWhatsappOpen(false)}
                  className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-white/65 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X aria-hidden className="size-5" />
                </button>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-200 sm:text-base">
                Need a quick quote or have a question about growing your business online?
              </p>
              {site.phone && (
                <p className="mt-3 text-xs font-semibold text-[#83A9FF] sm:text-sm">
                  {site.phone}
                </p>
              )}

              <label className="sr-only" htmlFor="whatsapp-message">
                Write a message for WhatsApp
              </label>
              <textarea
                id="whatsapp-message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                maxLength={500}
                rows={2}
                placeholder="e.g. Can you help improve my website or online growth?"
                className="mt-5 w-full resize-none rounded-xl border border-[#2453A1] bg-[#0B1A37] px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-slate-400 focus:border-[#6FA8FF]"
              />

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#079B70] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#078760] sm:text-base"
              >
                <Send aria-hidden className="size-5" />
                Start WhatsApp chat
              </a>
            </section>
          )}
          <button
            type="button"
            aria-label={whatsappOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
            aria-expanded={whatsappOpen}
            aria-controls="whatsapp-support"
            onClick={() => setWhatsappOpen((open) => !open)}
            className="fixed right-5 bottom-5 z-40 inline-flex size-14 items-center justify-center rounded-full border-2 border-white/70 bg-[#315EEA] text-white shadow-[0_8px_24px_rgba(31,79,216,0.4)] transition-colors hover:bg-[#244FD8]"
          >
            {whatsappOpen ? <X aria-hidden className="size-6" /> : <MessageCircle aria-hidden className="size-6" />}
          </button>
        </>
      )}
    </>
  );
}
