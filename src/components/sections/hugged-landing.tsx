"use client";

import Image from "next/image";
import React from "react";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronDown,
  CircleHelp,
  Heart,
  MessageCircle,
  Users,
  X,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { scrollIntoSection } from "./hugged-landing/shared";
import { Header, huggedSocials } from "../custom/SiteHeader";
import Hero from "./hugged-landing/Hero";
import { PLAY_STORE_URL, WAITLIST_URL } from "@/lib/constant";
import SiteFooter from "../custom/SiteFooter";

const stories = [
  {
    id: "village",
    number: "02",
    eyebrow: "FEEL UNDERSTOOD",
    title: "You Were Never Meant to Parent Alone.",
    body: "Some days, parenting feels lonely, overwhelming and full of questions. Find a village where you can ask, share and feel understood without the pressure to be perfect.",
    closing: "No perfect parents. No judgement. Just people who get it.",
    cta: "Join Your Village",
    icon: Users,
    art: "/images/brand-character-design/grandma/gma-smile.png",
    artAlt: "A HUGGED grandparent character smiling warmly",
    color: "teal",
    badge: "A village for every stage",
  },
  {
    id: "feed",
    number: "03",
    eyebrow: "SPEAK WITHOUT JUDGEMENT",
    title: "Some Things Are Hard to Say Out Loud.",
    body: "“I lost my patience today.” “Sometimes I miss my old life.” Share everyday questions, hard feelings and small wins. Choose to post anonymously when you would rather not show your name.",
    closing: "You deserve to be heard, not judged.",
    cta: "Vent Freely",
    icon: MessageCircle,
    art: "/images/brand-character-design/mom/mom-tired.png",
    artAlt: "A HUGGED parent character taking a quiet moment",
    color: "coral",
    badge: "Your experience matters",
  },
  {
    id: "families",
    number: "04",
    eyebrow: "FAMILIES & CHAT",
    title: "Somewhere, Another Parent Gets It.",
    body: "The 2 AM wake-ups, the refused meals, the little wins. Join an existing HUGGED Family, learn from other parents and connect one-to-one.",
    closing: "Find your people, one conversation at a time.",
    cta: "Find Your Family",
    icon: Heart,
    art: "/images/brand-character-design/dad/dad-smile-f.png",
    artAlt: "A HUGGED parent character ready to connect",
    color: "cream",
    badge: "Families are created by HUGGED",
  },
  {
    id: "resources",
    number: "05",
    eyebrow: "PRACTICAL RESOURCES",
    title: "Too Much Advice.\nToo Little Clarity.",
    body: "One video says yes. Another says no. Discover parenting resources for feeding, sleep, behaviour, development, play and learning in one organized place. Start with free resources and explore paid resources if helpful.",
    closing: "A calmer place to find your next step.",
    cta: "Explore Parenting Resources",
    icon: BookOpen,
    art: "/images/brand-character-design/nanny/nan-smile-f.png",
    artAlt: "A HUGGED caregiver character offering support",
    color: "coral",
    badge: "Free and paid resources",
  },

  {
    id: "homeschooling",
    number: "06",
    eyebrow: "HOMESCHOOLING",
    title: "Bring Meaningful Learning into Everyday Life.",
    body: "Explore guided activities, worksheets, phonics and bedtime stories designed to bring learning into daily routines in around 30–45 minutes a day. The program is parent-supported and child-led, for homeschooling families and families whose children attend school.",
    closing: "Short, thoughtful moments can make room for curiosity.",
    cta: "Explore Homeschooling Program",
    icon: BookOpen,
    art: "/images/brand-character-design/baby/bb-laugh.png",
    artAlt: "A HUGGED baby character learning through play",
    color: "cream",
    badge: "Learning through everyday play",
  },
  {
    id: "independent-eating",
    number: "07",
    eyebrow: "INDEPENDENT EATING",
    title: "Make Room for a Gentler Mealtime.",
    body: "Independent Eating is a journey, not a race. Patient practice, age-appropriate self-feeding support, weekly practical activities and guidance can support confidence, courage and connection.",
    closing: "Small steps count. Every family finds it's rhythm.",
    cta: "Explore Independent Eating Program",
    icon: Heart,
    art: "/images/brand-character-design/baby/bb-sit.png",
    artAlt: "A HUGGED baby character sitting happily",
    color: "teal",
    badge: "A supported journey, not a promise",
  },
  {
    id: "webinars",
    number: "08",
    eyebrow: "WEBINARS",
    title: "Real Conversations. Practical Parenting Clarity.",
    body: "Explore HUGGED conversations on Japanese Parenting, Independent Eating, Homeschooling and other parenting topics. Join sessions that are currently available.",
    closing: "Thoughtful guidance, with room for your questions.",
    cta: "Explore Webinars",
    icon: CalendarDays,
    art: "/images/mascot/msc-chat-hi.png",
    artAlt: "The HUGGED mascot greeting parents",
    color: "coral",
    badge: "Explore available sessions",
  },
  {
    id: "experts",
    number: "09",
    eyebrow: "EXPERT GUIDANCE",
    title: "It’s Okay to Seek Expert Help.",
    body: "Some concerns need a qualified professional, not more searching. Explore consultation requests for child development, nutrition, mental well-being, learning and related concerns.",
    closing:
      "Professional guidance and peer experiences each have their place.",
    cta: "Explore Expert Guidance",
    icon: Heart,
    art: "/images/brand-character-design/mom/mom-smile-s.png",
    artAlt: "A HUGGED parent character looking reassured",
    color: "teal",
    badge: "Consultation requests are coordinated",
  },
];

const faqs = [
  [
    "What is HUGGED?",
    "HUGGED is your parenting village: a place to connect with other parents, ask questions, learn, find support and feel a little less alone in the parenting journey.",
  ],
  [
    "What is the Village?",
    "Village is the main parenting community inside HUGGED. You can discover Families to connect with other parents and explore Programs for guided learning and support.",
  ],
  [
    "What is the difference between Families and Programs?",
    "Families are for connecting: talking, asking questions and sharing experiences with other parents. Programs are guided experiences with activities, resources and support around a parenting or child-development goal.",
  ],
  [
    "Do I have to pay to use HUGGED?",
    "Many parts of HUGGED are available without buying a Program. Some Programs, webinars, resources or services may be paid. Any payment requirements are shown before purchase.",
  ],
  [
    "What is Meet?",
    "Meet is designed to help parents discover nearby connections and meetups. Availability can vary; check the HUGGED app for current options. You choose if and how you connect.",
  ],
  [
    "What is the Feed?",
    "Feed is a place to read, share and talk about everyday parenting: ask a question, share something that worked, celebrate a small win or hear what other parents are going through.",
  ],
  [
    "Can I share something without showing my name?",
    "Some conversations support anonymous posting. Check the post composer for the anonymous option. HUGGED’s community spaces are intended to be supportive, but anonymity is not a promise of absolute secrecy.",
  ],
  [
    "What will I find inside the Guide?",
    "Guide brings together parenting resources, webinars and expert support. The available resources and sessions may change over time.",
  ],
  [
    "Can I talk to an expert through HUGGED?",
    "You can explore experts and request guidance or a consultation where available. Requests may be coordinated by the HUGGED team; instant booking is not guaranteed.",
  ],
  [
    "What can I manage from my Profile?",
    "Your Profile is where you can review your account and available settings. The exact child details, saved items and preferences may depend on the features currently available in your app.",
  ],
];

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/hugged-3d-logo.png"
      alt="HUGGED"
      width={60}
      height={60}
      className={className}
    />
  );
}

function StorySection({
  story,
  index,
}: {
  story: (typeof stories)[number];
  index: number;
}) {
  const Icon = story.icon;
  return (
    <section
      id={story.id}
      className={`scroll-mt-20 px-5 py-16 md:px-10 md:py-24 ${index % 2 ? "bg-white" : "bg-[#f8f4e3]"}`}
    >
      <div
        className={`mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-2 lg:gap-20 ${index % 2 ? "" : ""}`}
      >
        <div
          className={`relative flex min-h-[330px] items-end justify-center overflow-hidden rounded-[2.5rem] p-8 md:min-h-[460px] ${story.color === "teal" ? "bg-[#5eb5a6]/15" : story.color === "coral" ? "bg-[#ff6f61]/10" : "bg-[#f8f4e3]"} ${index % 2 ? "lg:order-2" : ""}`}
        >
          <div className="absolute inset-x-[12%] bottom-0 h-[72%] rounded-t-[48%] bg-white/65" />
          <Image
            src={story.art}
            alt={story.artAlt}
            width={470}
            height={650}
            sizes="(max-width: 1024px) 90vw, 42vw"
            className="relative z-10 max-h-[420px] w-auto max-w-[88%] object-contain object-bottom"
          />
          <div className="absolute left-5 top-5 z-20 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#333333] shadow-sm">
            <Icon className="size-4 text-[#5eb5a6]" />
            {story.badge}
          </div>
          {/* <span className="absolute bottom-4 right-5 z-20 text-7xl font-bold tracking-tighter text-[#333333]/[.06]">{story.number}</span> */}
        </div>
        <div className={`max-w-xl ${index % 2 ? "lg:order-1" : ""}`}>
          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#333333]">
            {story.eyebrow}
          </p>
          <h2 className="mt-4 font-heading text-4xl font-bold leading-[1.08] tracking-[-.035em] text-[#333333] md:text-5xl">
            {story.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#333333]/75 md:text-lg">
            {story.body}
          </p>
          <p className="mt-4 text-base font-semibold leading-7 text-[#333333]">
            {story.closing}
          </p>
          <a
            href={`#${story.id}`}
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#ff6f61] bg-white px-5 py-3 text-sm font-bold text-[#ff6f61] "
          >
            <h3>{story.cta}</h3>
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section
      id="faqs"
      className="scroll-mt-20 bg-[#f8f4e3] px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-[960px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold  tracking-[.22em] text-[#333333]">
            FAQ's
          </p>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-[-.035em] text-[#333333] md:text-5xl">
            A few things you might be wondering.
          </h2>
        </div>
        <Accordion type="multiple" className="mt-10 space-y-3">
          {faqs.map(([question, answer], i) => (
            <AccordionItem
              key={question}
              value={`faq-${i}`}
              className="rounded-2xl border border-[#333333]/10 bg-white px-5 shadow-sm md:px-7"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-[#333333] hover:text-[#ff6f61]">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-7 text-[#333333]/75">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

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
