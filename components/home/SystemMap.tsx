"use client";

import { useEffect, useRef } from "react";
import { m, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { DURATION, EASE } from "@/lib/motion";

export function SystemMap() {
  const reduce = useReducedMotion() ?? false;
  const wrap = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 80, damping: 18 });
  const my = useSpring(rawY, { stiffness: 80, damping: 18 });
  const panelX = useTransform(mx, (value) => value * 3);
  const panelY = useTransform(my, (value) => value * 3);

  useEffect(() => {
    const element = wrap.current;
    if (!element || reduce || !window.matchMedia("(pointer: fine)").matches) return;

    const move = (event: PointerEvent) => {
      const bounds = element.getBoundingClientRect();
      rawX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
      rawY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
    };
    const reset = () => {
      rawX.set(0);
      rawY.set(0);
    };

    element.addEventListener("pointermove", move);
    element.addEventListener("pointerleave", reset);
    return () => {
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", reset);
    };
  }, [rawX, rawY, reduce]);

  return (
    <div ref={wrap} className="mx-auto w-full max-w-[460px] lg:max-w-none">
      <svg
        viewBox="0 0 520 450"
        role="img"
        aria-label="Concept showing website and paid ads leading to enquiries and qualified leads, supporting digital business growth"
        className="h-auto w-full"
      >
        <defs>
          <filter id="growth-shadow" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow dx="0" dy="14" stdDeviation="20" floodColor="#0b1f3a" floodOpacity=".16" />
          </filter>
          <linearGradient id="growth-surface" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f8fbff" />
          </linearGradient>
          <linearGradient id="growth-result" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0b1f3a" />
            <stop offset="100%" stopColor="#173c72" />
          </linearGradient>
        </defs>

        <circle cx="266" cy="225" r="205" fill="#eaf2ff" opacity=".55" />

        <m.g
          data-reveal
          style={{ x: panelX, y: panelY, transformBox: "fill-box", transformOrigin: "center" }}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.card + 0.25, ease: EASE, delay: 0.25 }}
        >
          <rect x="28" y="20" width="464" height="410" rx="22" fill="url(#growth-surface)" stroke="#d2def1" strokeWidth="1.2" filter="url(#growth-shadow)" />
          <path d="M28 76h464" stroke="#e5edf8" strokeWidth="1.2" />

          <image href="/brand/icon.png" x="46" y="38" width="28" height="28" preserveAspectRatio="xMidYMid meet" />
          <text x="82" y="55" fill="#0b1f3a" fontFamily="var(--font-inter), sans-serif" fontSize="11.5" fontWeight="800" letterSpacing="1">
            NUVIN
          </text>

          <rect x="391" y="41" width="84" height="22" rx="11" fill="#f3f7ff" stroke="#e5edfb" />
          <circle cx="404" cy="52" r="3" fill="#1f4fd8" />
          <text x="413" y="55" fill="#3a4a5f" fontFamily="var(--font-inter), sans-serif" fontSize="7.5" fontWeight="600" letterSpacing=".5">
            CONNECTED
          </text>

          <text x="48" y="105" fill="#0b1f3a" fontFamily="var(--font-inter), sans-serif" fontSize="17" fontWeight="700">
            Digital growth for businesses
          </text>
          <text x="48" y="122" fill="#718096" fontFamily="var(--font-inter), sans-serif" fontSize="10" fontWeight="500">
            Website and paid ads, working together
          </text>

          <rect x="48" y="138" width="205" height="112" rx="12" fill="white" stroke="#dce7f6" />
          <text x="62" y="158" fill="#0b1f3a" fontFamily="var(--font-inter), sans-serif" fontSize="11.5" fontWeight="700">
            WEBSITE &amp; SEO
          </text>
          <rect x="60" y="168" width="181" height="68" rx="8" fill="white" stroke="#dfe8f4" />
          <path d="M60 181h181" stroke="#e6edf7" />
          <circle cx="69" cy="174.5" r="1.8" fill="#f26b2e" />
          <circle cx="76" cy="174.5" r="1.8" fill="#b9c9dd" />
          <circle cx="83" cy="174.5" r="1.8" fill="#b9c9dd" />
          <rect x="70" y="190" width="78" height="5" rx="2.5" fill="#0b1f3a" />
          <rect x="70" y="200" width="66" height="3.5" rx="1.75" fill="#b8c7e0" />
          <rect x="70" y="208" width="72" height="3.5" rx="1.75" fill="#d5e1f5" />
          <rect x="70" y="218" width="35" height="10" rx="4" fill="#1f4fd8" />
          <rect x="176" y="189" width="51" height="39" rx="6" fill="#eaf2ff" />
          <path d="M184 218v-9l7-7 7 5 7-9 13 13" fill="none" stroke="#1f4fd8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

          <rect x="267" y="138" width="205" height="112" rx="12" fill="white" stroke="#dce7f6" />
          <text x="281" y="158" fill="#0b1f3a" fontFamily="var(--font-inter), sans-serif" fontSize="11.5" fontWeight="700">
            PAID ADS
          </text>
          <rect x="279" y="168" width="181" height="68" rx="8" fill="white" stroke="#dfe8f4" />
          <rect x="287" y="176" width="48" height="52" rx="6" fill="#eaf2ff" />
          <circle cx="311" cy="195" r="10" fill="#6fa8ff" fillOpacity=".65" />
          <path d="M295 218c3-8 9-12 16-12s13 4 16 12" fill="#1f4fd8" fillOpacity=".75" />
          <rect x="343" y="180" width="92" height="5" rx="2.5" fill="#0b1f3a" />
          <rect x="343" y="191" width="78" height="3.5" rx="1.75" fill="#b8c7e0" />
          <rect x="343" y="199" width="87" height="3.5" rx="1.75" fill="#d5e1f5" />
          <rect x="343" y="211" width="54" height="13" rx="5" fill="#f26b2e" />
          <text x="350" y="220" fill="white" fontFamily="var(--font-inter), sans-serif" fontSize="6.8" fontWeight="700">
            VIEW OFFER
          </text>

          <m.path
            d="M150 251v27"
            fill="none"
            stroke="#1f4fd8"
            strokeWidth="1.8"
            strokeLinecap="round"
            initial={reduce ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: DURATION.card, ease: EASE, delay: 0.65 }}
          />
          <path d="m145 274 5 7 5-7" fill="none" stroke="#1f4fd8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <m.path
            d="M370 251v27"
            fill="none"
            stroke="#f26b2e"
            strokeWidth="1.8"
            strokeLinecap="round"
            initial={reduce ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: DURATION.card, ease: EASE, delay: 0.75 }}
          />
          <path d="m365 274 5 7 5-7" fill="none" stroke="#f26b2e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

          <rect x="48" y="284" width="205" height="70" rx="11" fill="white" stroke="#d8e4f4" />
          <circle cx="68" cy="308" r="10" fill="#1f4fd8" fillOpacity=".1" />
          <path d="M63 308h10m-5-5v10" stroke="#1f4fd8" strokeWidth="1.5" strokeLinecap="round" />
          <text x="86" y="307" fill="#0b1f3a" fontFamily="var(--font-inter), sans-serif" fontSize="12" fontWeight="700">
            Website enquiries
          </text>
          <text x="86" y="324" fill="#718096" fontFamily="var(--font-inter), sans-serif" fontSize="9">
            From search and site visits
          </text>

          <rect x="267" y="284" width="205" height="70" rx="11" fill="white" stroke="#d8e4f4" />
          <circle cx="287" cy="308" r="10" fill="#f26b2e" fillOpacity=".12" />
          <path d="M282 308h10m-5-5v10" stroke="#f26b2e" strokeWidth="1.5" strokeLinecap="round" />
          <text x="305" y="307" fill="#0b1f3a" fontFamily="var(--font-inter), sans-serif" fontSize="12" fontWeight="700">
            Qualified ad leads
          </text>
          <text x="305" y="324" fill="#718096" fontFamily="var(--font-inter), sans-serif" fontSize="9">
            From targeted campaigns
          </text>

          <m.path
            d="M150 355c0 12 49 12 87 22"
            fill="none"
            stroke="#1f4fd8"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={reduce ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: DURATION.card, ease: EASE, delay: 0.85 }}
          />
          <m.path
            d="M370 355c0 12-49 12-87 22"
            fill="none"
            stroke="#f26b2e"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={reduce ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: DURATION.card, ease: EASE, delay: 0.95 }}
          />
          <rect x="146" y="380" width="228" height="30" rx="15" fill="url(#growth-result)" />
          <circle cx="164" cy="395" r="4" fill="#f26b2e" />
          <text x="260" y="399" textAnchor="middle" fill="white" fontFamily="var(--font-inter), sans-serif" fontSize="11.5" fontWeight="700" letterSpacing=".5">
            DIGITAL BUSINESS GROWTH
          </text>
        </m.g>
      </svg>
    </div>
  );
}
