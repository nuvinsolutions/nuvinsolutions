"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your enquiry.");
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Your name
          <input required name="name" autoComplete="name" placeholder="Enter your name" className="h-12 rounded-[10px] border border-[#C9D4E5] bg-white px-4 text-sm font-normal text-navy outline-none placeholder:text-[#8997AA] focus:border-royal focus:ring-2 focus:ring-royal/10" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Email address
          <input required type="email" name="email" autoComplete="email" placeholder="you@company.com" className="h-12 rounded-[10px] border border-[#C9D4E5] bg-white px-4 text-sm font-normal text-navy outline-none placeholder:text-[#8997AA] focus:border-royal focus:ring-2 focus:ring-royal/10" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Phone number
          <input name="phone" type="tel" autoComplete="tel" placeholder="+92 300 0000000" className="h-12 rounded-[10px] border border-[#C9D4E5] bg-white px-4 text-sm font-normal text-navy outline-none placeholder:text-[#8997AA] focus:border-royal focus:ring-2 focus:ring-royal/10" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Service
          <select required name="service" defaultValue="" className="h-12 rounded-[10px] border border-[#C9D4E5] bg-white px-4 text-sm font-normal text-navy outline-none focus:border-royal focus:ring-2 focus:ring-royal/10">
            <option value="" disabled>Select a service</option>
            <option>Web Development</option>
            <option>SaaS Development</option>
            <option>Digital Marketing</option>
            <option>Social Media Management</option>
            <option>Not sure yet</option>
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-navy">
        Approximate budget
        <select name="budget" defaultValue="" className="h-12 rounded-[10px] border border-[#C9D4E5] bg-white px-4 text-sm font-normal text-navy outline-none focus:border-royal focus:ring-2 focus:ring-royal/10">
          <option value="">Choose a range</option>
          <option>PKR 50,000 – 100,000</option>
          <option>PKR 100,000 – 250,000</option>
          <option>PKR 250,000 – 500,000</option>
          <option>PKR 500,000+</option>
          <option>Let&apos;s discuss</option>
        </select>
      </label>

      <label className="grid gap-2 text-sm font-semibold text-navy">
        Tell us about your project
        <textarea required name="message" rows={6} placeholder="What are you building, and what would you like to achieve?" className="resize-y rounded-[10px] border border-[#C9D4E5] bg-white px-4 py-3 text-sm font-normal leading-6 text-navy outline-none placeholder:text-[#8997AA] focus:border-royal focus:ring-2 focus:ring-royal/10" />
      </label>

      <button type="submit" disabled={status === "sending"} className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-[10px] bg-royal px-6 text-[0.9375rem] font-semibold text-white transition-colors duration-200 hover:bg-[#1a43bb] disabled:cursor-not-allowed disabled:opacity-70 sm:w-fit">
        {status === "sending" ? (
          <>
            <LoaderCircle aria-hidden className="size-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Project Details
            <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </>
        )}
      </button>

      {status === "sent" && (
        <p role="status" className="flex items-center gap-2 text-sm font-medium text-success">
          <CheckCircle2 aria-hidden className="size-4" />
          Your project details have been sent. We&apos;ll be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-error">
          We couldn&apos;t send your enquiry. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
