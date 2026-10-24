"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

import { scrollIntoSection } from "./hugged-landing/shared";
import { Header } from "../custom/SiteHeader";
import Hero from "./hugged-landing/Hero";
import SiteFooter from "../custom/SiteFooter";
import StorySection, { stories } from "./hugged-landing/StorySection";
import FAQSection from "./hugged-landing/FAQSection";

export function HuggedLanding() {
  const lenisRef = useRef<Lenis | null>(null);
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, duration: 1.1, lerp: 0.08 });
    lenisRef.current = lenis;
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);
  const onNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (lenisRef.current && element)
      lenisRef.current.scrollTo(element, { offset: -80 });
    else scrollIntoSection(id);
  };
  return (
    <div className="min-h-screen bg-[#f8f4e3] text-[#333333]">
      <Header onNavigate={onNavigate} />
      <main>
        <Hero onNavigate={onNavigate} />
        {stories.map((story, i) => (
          <StorySection key={story.id} story={story} index={i} />
        ))}
        <FAQSection />
      </main>
      <SiteFooter onNavigate={onNavigate} />
    </div>
  );
}
