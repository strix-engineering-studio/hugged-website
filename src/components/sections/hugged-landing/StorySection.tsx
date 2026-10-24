import Image from "next/image";
import {
  BookOpen,
  CalendarDays,
  Heart,
  MessageCircle,
  Users,
} from "lucide-react";
import { PLAY_STORE_URL } from "@/lib/constant";

export const stories = [
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
    hyperlink: PLAY_STORE_URL,
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
    hyperlink: PLAY_STORE_URL,
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
    hyperlink: PLAY_STORE_URL,
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
    hyperlink: PLAY_STORE_URL,
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
    hyperlink: PLAY_STORE_URL,
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
    hyperlink: PLAY_STORE_URL,
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
    hyperlink: PLAY_STORE_URL,
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
    hyperlink: PLAY_STORE_URL,
  },
];

export default function StorySection({
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
            href={story.hyperlink}
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#ff6f61] bg-white px-5 py-3 text-sm font-bold text-[#ff6f61] "
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>{story.cta}</h3>
          </a>
        </div>
      </div>
    </section>
  );
}
