import Image from "next/image";
import React from "react";

import Instagram from "../../../public/instagram.svg";
import Youtube from "../../../public/youtube.svg";
import Linkedin from "../../../public/linkedin.svg";
import Facebook from "../../../public/facebook.svg";
import HUGGEDTm from "../../../public/Hugged_TM.png";
import { Button } from "../ui/button";
import { ArrowRight, ChevronDown, Hamburger, Menu, X } from "lucide-react";
import { Assets } from "@/lib/assets";

export const huggedSocials = [
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/huggedfamily",
  },
  {
    label: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@huggedfamily",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/huggedfamily",
  },
  {
    label: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/huggedfamily",
  },
];

export function Header({ onNavigate }: { onNavigate: (id: string) => void }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const links = [
    ["Village", "village"],
    ["Feed", "feed"],
    ["Family", "families"],
    ["Guide", "resources"],
    ["Homeschooling", "homeschooling"],
    ["Webinars", "webinars"],
    ["Experts", "experts"],
    ["Meet", "meet"],
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-[#333333]/8 bg-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-3 md:px-10">
        <button
          aria-label="HUGGED home"
          onClick={() => onNavigate("hero")}
          className="flex shrink-0 items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5eb5a6]"
        >
          {/* <span className="grid size-[68px] place-items-center rounded-full bg-white"><BrandMark className="size-[60px] rounded-full" /></span>
          <span className="text-left text-[18px] font-extrabold tracking-[.16em] text-[#333333]">HUGGED<span className="block text-[9px] font-semibold tracking-[.13em] text-[#5eb5a6]">GUILT-FREE PARENTING</span></span>
       */}
          <Image
            src={Assets.logo3D}
            width={40}
            height={40}
            alt="Hugged Logo"
            className="hidden w-full md:block rounded-full"
          />
          <Image
            src={Assets.logoTM}
            width={100}
            height={100}
            alt="Hugged"
            className="w-full"
          />
        </button>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-x-5 xl:flex px-4"
          >
            {links.map(([label, id]) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className="whitespace-nowrap text-sm font-semibold text-black transition hover:text-[#ff6f61] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5eb5a6]"
              >
                {label}
              </button>
            ))}
          </nav>
          {/*<nav aria-label="HUGGED social links" className="flex items-center gap-1">
            {huggedSocials.map(({ label, href, icon: Icon }) => 
              <a key={label} href={href} target="_blank" rel="noreferrer" className="rounded-full p-3 transition hover:bg-[#333333]/5 hover:text-[#333333] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5eb5a6]">
                <Image src={Icon} alt={label} className="size-5" />
              </a>
            )}
          </nav> */}
          <Button
            onClick={() => onNavigate("download")}
            className="h-11 rounded-full bg-[#ff6f61] px-6 text-white font-black"
          >
            <h2>Try HUGGED</h2>{" "}
          </Button>
        </div>
        <button
          className="grid size-11 place-items-center rounded-full border border-[#333333]/15 bg-white xl:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="grid grid-cols-2 gap-2 border-t border-[#333333]/10 bg-[#f8f4e3] p-4 xl:hidden"
        >
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => {
                onNavigate(id);
                setMenuOpen(false);
              }}
              className="rounded-xl bg-white px-4 py-3 text-left text-sm font-semibold text-[#333333]"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => {
              onNavigate("download");
              setMenuOpen(false);
            }}
            className="col-span-2 rounded-xl bg-[#333333] px-4 py-3 text-sm font-bold text-white"
          >
            Try HUGGED
          </button>
        </nav>
      )}
    </header>
  );
}
