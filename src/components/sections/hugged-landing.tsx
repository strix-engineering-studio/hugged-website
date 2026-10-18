"use client";

import Image from "next/image";
import React from "react";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { ArrowDown, ArrowRight, BookOpen, CalendarDays, ChevronDown, CircleHelp, Heart, MessageCircle, Users, X } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { scrollIntoSection } from "./hugged-landing/shared";
import Instagram from "../../../public/instagram.svg"
import Youtube from "../../../public/youtube.svg"
import Linkedin from "../../../public/linkedin.svg"
import Facebook from "../../../public/facebook.svg"

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.hugged.user";
const WAITLIST_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfG0I2FPjErj2A6F0jHf2XCEM1T2eRnQw2ptnd4V68sTFRFrA/viewform";
const huggedSocials = [
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/huggedfamily" },
  { label: "YouTube", icon: Youtube, href: "https://www.youtube.com/@huggedfamily" },
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/huggedfamily" },
  { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/huggedfamily" },
];

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
    title: "Too Much Advice. Too Little Clarity.",
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
    id: "independent-eating",
    number: "06",
    eyebrow: "INDEPENDENT EATING",
    title: "Make Room for a Gentler Mealtime.",
    body: "For children 6 months to 5 years, Independent Eating is a journey, not a race. Patient practice, age-appropriate self-feeding support, two practical activities a week and weekly guidance can support confidence, courage and connection.",
    closing: "Small steps count. Every family finds its rhythm.",
    cta: "Explore Independent Eating",
    icon: Heart,
    art: "/images/brand-character-design/baby/bb-sit.png",
    artAlt: "A HUGGED baby character sitting happily",
    color: "teal",
    badge: "A supported journey, not a promise",
  },
  {
    id: "homeschooling",
    number: "07",
    eyebrow: "HOMESCHOOLING",
    title: "Bring Meaningful Learning Into Everyday Life.",
    body: "Explore guided activities, worksheets, phonics and bedtime stories designed to bring learning into daily routines in around 30–45 minutes a day. The program is parent-supported and child-led, for homeschooling families and families whose children attend school.",
    closing: "Short, thoughtful moments can make room for curiosity.",
    cta: "Explore Homeschooling",
    icon: BookOpen,
    art: "/images/brand-character-design/baby/bb-laugh.png",
    artAlt: "A HUGGED baby character learning through play",
    color: "cream",
    badge: "Learning through everyday play",
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
    closing: "Professional guidance and peer experiences each have their place.",
    cta: "Explore Expert Guidance",
    icon: Heart,
    art: "/images/brand-character-design/mom/mom-smile-s.png",
    artAlt: "A HUGGED parent character looking reassured",
    color: "teal",
    badge: "Consultation requests are coordinated",
  },
];

const faqs = [
  ["What is HUGGED?", "HUGGED is your parenting village: a place to connect with other parents, ask questions, learn, find support and feel a little less alone in the parenting journey."],
  ["What is the Village?", "Village is the main parenting community inside HUGGED. You can discover Families to connect with other parents and explore Programs for guided learning and support."],
  ["What is the difference between Families and Programs?", "Families are for connecting: talking, asking questions and sharing experiences with other parents. Programs are guided experiences with activities, resources and support around a parenting or child-development goal."],
  ["Do I have to pay to use HUGGED?", "Many parts of HUGGED are available without buying a Program. Some Programs, webinars, resources or services may be paid. Any payment requirements are shown before purchase."],
  ["What is Meet?", "Meet is designed to help parents discover nearby connections and meetups. Availability can vary; check the HUGGED app for current options. You choose if and how you connect."],
  ["What is the Feed?", "Feed is a place to read, share and talk about everyday parenting: ask a question, share something that worked, celebrate a small win or hear what other parents are going through."],
  ["Can I share something without showing my name?", "Some conversations support anonymous posting. Check the post composer for the anonymous option. HUGGED’s community spaces are intended to be supportive, but anonymity is not a promise of absolute secrecy."],
  ["What will I find inside the Guide?", "Guide brings together parenting resources, webinars and expert support. The available resources and sessions may change over time."],
  ["Can I talk to an expert through HUGGED?", "You can explore experts and request guidance or a consultation where available. Requests may be coordinated by the HUGGED team; instant booking is not guaranteed."],
  ["What can I manage from my Profile?", "Your Profile is where you can review your account and available settings. The exact child details, saved items and preferences may depend on the features currently available in your app."],
];

function BrandMark({ className = "" }: { className?: string }) {
  return <Image src="/hugged-3d-logo.png" alt="HUGGED" width={60} height={60} className={className}  />;
}

function Header({ onNavigate }: { onNavigate: (id: string) => void }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const links = [
    ["Village", "village"], ["Speak Freely", "feed"], ["Families", "families"],
    ["Resources", "resources"], ["Programs", "independent-eating"],
    ["Webinars", "webinars"], ["Experts", "experts"], ["FAQs", "faqs"],
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-[#333333]/8 bg-[#f8f4e3]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-3 md:px-10">
        <button aria-label="HUGGED home" onClick={() => onNavigate("hero")} className="flex shrink-0 items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5eb5a6]">
          <span className="grid size-[68px] place-items-center rounded-full bg-white"><BrandMark className="size-[60px] rounded-full" /></span>
          <span className="text-left text-[18px] font-extrabold tracking-[.16em] text-[#333333]">HUGGED<span className="block text-[9px] font-semibold tracking-[.13em] text-[#5eb5a6]">GUILT-FREE PARENTING</span></span>
        </button>
        <nav aria-label="Main navigation" className="hidden items-center gap-x-5 xl:flex">
          {links.map(([label, id]) => <button key={id} onClick={() => onNavigate(id)} className="whitespace-nowrap text-[12px] font-semibold text-[#333333]/75 transition hover:text-[#ff6f61] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5eb5a6]">{label}</button>)}
        </nav>
        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <nav aria-label="HUGGED social links" className="flex items-center gap-1">
            {huggedSocials.map(({ label, href, icon: Icon }) => 
              <a key={label} href={href} target="_blank" rel="noreferrer" className="rounded-full p-3 transition hover:bg-[#333333]/5 hover:text-[#333333] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5eb5a6]">
                <Image src={Icon} alt={label} className="size-5" />
              </a>
            )}
          </nav>
          <Button onClick={() => onNavigate("download")} className="h-11 rounded-full bg-[#333333] px-6 text-white hover:bg-[#5eb5a6] hover:text-[#333333]">Try HUGGED <ArrowRight className="ml-2 size-4" /></Button>
        </div>
        <button className="grid size-11 place-items-center rounded-full border border-[#333333]/15 bg-white xl:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X className="size-5"/> : <ChevronDown className="size-5"/>}</button>
      </div>
      {menuOpen && <nav aria-label="Mobile navigation" className="grid grid-cols-2 gap-2 border-t border-[#333333]/10 bg-[#f8f4e3] p-4 xl:hidden">{links.map(([label, id]) => <button key={id} onClick={() => { onNavigate(id); setMenuOpen(false); }} className="rounded-xl bg-white px-4 py-3 text-left text-sm font-semibold text-[#333333]">{label}</button>)}<button onClick={() => { onNavigate("download"); setMenuOpen(false); }} className="col-span-2 rounded-xl bg-[#333333] px-4 py-3 text-sm font-bold text-white">Try HUGGED</button></nav>}
    </header>
  );
}

function Hero({ onNavigate }: { onNavigate: (id: string) => void }) {
  return <section id="hero" className="relative isolate flex min-h-[calc(100svh-78px)] scroll-mt-24 items-center overflow-hidden bg-[#f8f4e3] px-5 py-14 md:px-10 md:py-16">
    <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_50%,rgba(94,181,166,.20),transparent_40%),radial-gradient(ellipse_at_15%_80%,rgba(255,111,97,.18),transparent_35%)]" />
    <div className="mx-auto grid w-full max-w-[1320px] items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
      <div className="relative z-10 max-w-2xl">
        <p className="mb-5 inline-flex rounded-full border border-[#5eb5a6]/40 bg-white/75 px-4 py-2 text-[11px] font-bold uppercase tracking-[.2em] text-[#333333]">India’s first guilt-free parenting village</p>
        <h1 className="font-heading text-5xl font-bold leading-[1.02] tracking-[-.045em] text-[#333333] sm:text-6xl lg:text-7xl">Join your village.</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-[#333333]/80 md:text-xl">India’s first guilt-free parenting village for all stages of parenthood.</p>
        <p className="mt-3 max-w-lg text-sm leading-6 text-[#333333]/65">A community to share, learn and feel supported, on the real days of parenting.</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer" aria-label="Get HUGGED on Google Play" className="inline-flex rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5eb5a6]"><Image src="/images/google-play-badge.png" alt="Get it on Google Play" width={194} height={72} priority className="h-[58px] w-auto" /></a>
          <Button variant="outline" onClick={() => onNavigate("village")} className="h-12 rounded-full border-[#333333]/25 bg-white/70 px-6 text-[#333333] hover:bg-white">Explore the village <ArrowDown className="ml-2 size-4"/></Button>
          <a href={WAITLIST_URL} target="_blank" rel="noreferrer" className="rounded-full px-3 py-2 text-sm font-semibold text-[#333333] underline decoration-[#5eb5a6] underline-offset-4">Join the waitlist</a>
        </div>
        <p className="mt-4 text-xs font-medium text-[#333333]/60">Google Play is available. The App Store link will be added when it is confirmed.</p>
        <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer" className="mt-7 hidden w-fit items-center gap-3 rounded-2xl border border-[#333333]/10 bg-white/90 p-3 shadow-sm sm:flex">
          <Image src="/images/hugged-play-store-qr.svg" alt="" width={88} height={88} unoptimized className="size-[88px]" />
          <span className="max-w-40 text-left text-xs font-semibold leading-5 text-[#333333]">Scan to open HUGGED on Google Play</span>
        </a>
      </div>
      <div className="relative mx-auto aspect-[1.05/1] w-full max-w-[630px]">
        <div className="absolute inset-[8%] rounded-[48%] bg-[#5eb5a6]/20" />
        <div className="absolute inset-[15%_8%_4%_20%] rounded-[48%_48%_20%_20%] bg-[#ff6f61]/20" />
        <Image src="/images/brand-character-design/mom/mom-smile-f.png" alt="A HUGGED parent feeling calm and supported" fill priority sizes="(max-width: 1024px) 90vw, 48vw" className="relative z-10 object-contain object-bottom drop-shadow-[0_18px_20px_rgba(51,51,51,.10)]" />
        <Image src="/images/brand-character-design/baby/bb-laugh.png" alt="A happy HUGGED baby character" width={215} height={270} className="absolute bottom-0 right-0 z-20 w-[30%] object-contain" priority />
        <div className="absolute left-1 top-[22%] z-20 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-[#333333] shadow-lg shadow-[#333333]/10 sm:left-2">No guilt. Just support. <Heart className="ml-1 inline size-4 fill-[#ff6f61] text-[#ff6f61]" /></div>
        <div className="absolute bottom-[10%] left-[2%] z-20 rounded-2xl bg-white px-4 py-3 text-xs font-semibold text-[#333333]/75 shadow-lg shadow-[#333333]/10">Made for all the people who care.</div>
      </div>
    </div>
  </section>;
}

function StorySection({ story, index }: { story: typeof stories[number]; index: number }) {
  const Icon = story.icon;
  return <section id={story.id} className={`scroll-mt-20 px-5 py-16 md:px-10 md:py-24 ${index % 2 ? "bg-white" : "bg-[#f8f4e3]"}`}>
    <div className={`mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-2 lg:gap-20 ${index % 2 ? "" : ""}`}>
      <div className={`relative flex min-h-[330px] items-end justify-center overflow-hidden rounded-[2.5rem] p-8 md:min-h-[460px] ${story.color === "teal" ? "bg-[#5eb5a6]/15" : story.color === "coral" ? "bg-[#ff6f61]/10" : "bg-[#f8f4e3]"} ${index % 2 ? "lg:order-2" : ""}`}>
        <div className="absolute inset-x-[12%] bottom-0 h-[72%] rounded-t-[48%] bg-white/65" />
        <Image src={story.art} alt={story.artAlt} width={470} height={650} sizes="(max-width: 1024px) 90vw, 42vw" className="relative z-10 max-h-[420px] w-auto max-w-[88%] object-contain object-bottom" />
        <div className="absolute left-5 top-5 z-20 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#333333] shadow-sm"><Icon className="size-4 text-[#5eb5a6]"/>{story.badge}</div>
        <span className="absolute bottom-4 right-5 z-20 text-7xl font-bold tracking-tighter text-[#333333]/[.06]">{story.number}</span>
      </div>
      <div className={`max-w-xl ${index % 2 ? "lg:order-1" : ""}`}>
        <p className="text-xs font-bold uppercase tracking-[.22em] text-[#333333]">{story.number} / {story.eyebrow}</p>
        <h2 className="mt-4 font-heading text-4xl font-bold leading-[1.08] tracking-[-.035em] text-[#333333] md:text-5xl">{story.title}</h2>
        <p className="mt-6 text-base leading-8 text-[#333333]/75 md:text-lg">{story.body}</p>
        <p className="mt-4 text-base font-semibold leading-7 text-[#333333]">{story.closing}</p>
        <a href="#download" className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#333333]/20 bg-white px-5 py-3 text-sm font-bold text-[#333333] transition hover:border-[#5eb5a6] hover:bg-[#5eb5a6] hover:text-[#333333] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5eb5a6]">{story.cta}<ArrowRight className="size-4" /></a>
      </div>
    </div>
  </section>;
}

function FAQSection() {
  return <section id="faqs" className="scroll-mt-20 bg-[#f8f4e3] px-5 py-16 md:px-10 md:py-24">
    <div className="mx-auto max-w-[960px]">
      <div className="mx-auto max-w-2xl text-center"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#333333]">10 / FAQs</p><h2 className="mt-4 font-heading text-4xl font-bold tracking-[-.035em] text-[#333333] md:text-5xl">A few things you might be wondering.</h2><p className="mt-5 text-base leading-7 text-[#333333]/70">Clear answers to help you find your place in HUGGED.</p></div>
      <Accordion type="multiple" className="mt-10 space-y-3">
        {faqs.map(([question, answer], i) => <AccordionItem key={question} value={`faq-${i}`} className="rounded-2xl border border-[#333333]/10 bg-white px-5 shadow-sm md:px-7"><AccordionTrigger className="text-left text-base font-semibold text-[#333333] hover:text-[#ff6f61]">{question}</AccordionTrigger><AccordionContent className="text-sm leading-7 text-[#333333]/75">{answer}</AccordionContent></AccordionItem>)}
      </Accordion>
      <div className="mt-8 flex items-center justify-center gap-3 text-sm text-[#333333]/65"><CircleHelp className="size-5 text-[#5eb5a6]"/>More ways to reach the HUGGED team will be shared here soon.</div>
    </div>
  </section>;
}

function DownloadSection() {
  return <section id="download" className="scroll-mt-20 bg-[#333333] px-5 py-16 text-white md:px-10 md:py-20">
    <div className="mx-auto grid max-w-[1200px] items-center gap-8 md:grid-cols-[1fr_auto]">
      <div><p className="text-xs font-bold uppercase tracking-[.22em] text-white">YOUR VILLAGE IS HERE</p><h2 className="mt-3 font-heading text-4xl font-bold tracking-[-.035em] md:text-5xl">Parenting feels lighter together.</h2><p className="mt-4 max-w-2xl text-base leading-7 text-white/75">HUGGED brings parents, practical resources and supportive guidance into one community.</p><p className="mt-3 text-sm text-white/60">Google Play is available. The App Store link will be added when it is confirmed.</p></div>
      <div className="flex flex-col items-start gap-3"><a href={PLAY_STORE_URL} target="_blank" rel="noreferrer" aria-label="Get HUGGED on Google Play" className="inline-flex rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5eb5a6]"><Image src="/images/google-play-badge.png" alt="Get it on Google Play" width={194} height={72} className="h-[58px] w-auto" /></a><Button asChild className="h-12 rounded-full bg-[#f8f4e3] px-6 text-[#333333] hover:bg-[#5eb5a6] hover:text-[#333333]"><a href={WAITLIST_URL} target="_blank" rel="noreferrer">Join the waitlist <ArrowRight className="ml-2 size-4"/></a></Button></div>
    </div>
  </section>;
}

function Footer({ onNavigate }: { onNavigate: (id: string) => void }) {
  return <footer id="footer" className="bg-[#333333] px-5 pb-8 pt-6 text-white md:px-10">
    <div className="mx-auto flex max-w-[1240px] flex-col gap-8 border-t border-white/15 pt-8 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3"><span className="grid size-[68px] place-items-center rounded-full bg-white"><BrandMark className="size-[60px] rounded-full"/></span><div><p className="text-sm font-bold tracking-[.18em]">HUGGED</p><p className="mt-1 text-xs text-white/65">A village for guilt-free parenting.</p></div></div>
      <nav aria-label="Footer links" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/75"><button onClick={() => onNavigate("faqs")} className="hover:text-white">FAQs</button><a href="/privacy-and-policy" className="hover:text-white">Privacy Policy</a><a href="/terms-and-conditions" className="hover:text-white">Terms &amp; Conditions</a><a href="/delete-account" className="hover:text-white">Delete Account</a><a href="https://hugged.in" className="hover:text-white">Website</a></nav>
    </div>
    <div className="mx-auto mt-8 flex max-w-[1240px] flex-col gap-6 border-t border-white/15 pt-6 sm:flex-row sm:flex-wrap sm:justify-between">
      <div><h2 className="text-xs font-bold uppercase tracking-[.16em] text-white/55">Follow HUGGED</h2><div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">{huggedSocials.map(({ label, href }) => <a key={label} href={href} target="_blank" rel="noreferrer" className="text-sm text-white/80 hover:text-white">{label}</a>)}</div></div>
      <div><h2 className="text-xs font-bold uppercase tracking-[.16em] text-white/55">People &amp; newsletter</h2><div className="mt-3 flex flex-wrap gap-x-5 gap-y-2"><a href="https://www.instagram.com/guilt_free_parenting" target="_blank" rel="noreferrer" className="text-sm text-white/80 hover:text-white">Archna on Instagram</a><a href="https://www.linkedin.com/in/archna-kuhu-sharma" target="_blank" rel="noreferrer" className="text-sm text-white/80 hover:text-white">Archna on LinkedIn</a><a href="https://www.facebook.com/guiltfreeparenting" target="_blank" rel="noreferrer" className="text-sm text-white/80 hover:text-white">Archna on Facebook</a><a href="https://www.instagram.com/bass_kar_kuhu" target="_blank" rel="noreferrer" className="text-sm text-white/80 hover:text-white">Kuhu on Instagram</a><a href="https://www.linkedin.com/newsletters/parenting-role-play%3F-guilty-7468675204219600896" target="_blank" rel="noreferrer" className="text-sm text-white/80 hover:text-white">Parenting Role Play newsletter</a></div></div>
    </div>
    <p className="mx-auto mt-8 max-w-[1240px] text-xs text-white/50">© {new Date().getFullYear()} HUGGED</p>
  </footer>;
}

export function HuggedLanding() {
  const lenisRef = useRef<Lenis | null>(null);
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, duration: 1.1, lerp: 0.08 });
    lenisRef.current = lenis;
    let frame = 0;
    const raf = (time: number) => { lenis.raf(time); frame = requestAnimationFrame(raf); };
    frame = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(frame); lenis.destroy(); lenisRef.current = null; };
  }, []);
  const onNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (lenisRef.current && element) lenisRef.current.scrollTo(element, { offset: -80 });
    else scrollIntoSection(id);
  };
  return <div className="min-h-screen bg-[#f8f4e3] text-[#333333]"><Header onNavigate={onNavigate}/><main><Hero onNavigate={onNavigate}/>{stories.map((story, i) => <StorySection key={story.id} story={story} index={i}/>)}<FAQSection/><DownloadSection/></main><Footer onNavigate={onNavigate}/></div>;
}
