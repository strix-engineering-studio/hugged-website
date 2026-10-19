import { PLAY_STORE_URL } from "@/lib/constant";
import Image from "next/image";
import { BrandMark } from "../sections/hugged-landing";
import {
  InstagramLogo,
  LinkedinLogo,
  FacebookLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import { Assets } from "@/lib/assets";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/guilt_free_parenting",
    Icon: Assets.socialAssets.instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/photophilic-shivam/",
    Icon: Assets.socialAssets.linkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/guiltfreeparenting",
    Icon: Assets.socialAssets.facebook,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@huggedfamily",
    Icon: Assets.socialAssets.youtube,
  },
  {
    label: "X",
    href: "https://x.com/huggedfamily",
    Icon: Assets.socialAssets.x,
  },
];

export default function SiteFooter({
  onNavigate,
}: {
  onNavigate: (id: string) => void;
}) {
  return (
    <footer id="footer" className="bg-black px-5 pb-7 pt-8 text-white md:px-10">
      <div className="mx-auto max-w-[1240px]">
        {/* Row 1: Brand + Download on left, social icons on right */}
        <div className="flex flex-col gap-8 border-b border-white/15 pb-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand and social links */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            {/* Brand */}

            {/* Brand and social links */}
            <div className="flex flex-col items-start">
              {/* Brand */}
              <div className="flex items-center gap-3">
                <div className="grid size-14 shrink-0 place-items-center">
                  <BrandMark className="size-12 rounded-full" />
                </div>

                <div>
                  <h3 className="text-base font-bold tracking-wide">HUGGED</h3>
                  <p className="mt-1 text-sm leading-5 text-white">
                    India's First Guilt-Free Parenting Village
                  </p>
                </div>
              </div>

              {/* Social icons below description */}
              <div
                className="mt-2 flex flex-wrap items-center"
                aria-label="HUGGED social media"
              >
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="grid size-10 shrink-0 place-items-center rounded-full text-white transition-all duration-200 hover:border-[#F07883] hover:bg-white/5 hover:text-[#F07883] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F07883]"
                  >
                    <Image
                      src={Icon}
                      width={28}
                      height={28}
                      alt={label}
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex flex-col gap-4 items-end">
            <div className="">
              <h3 className=" ml-2 text-sm font-bold text-white">
                Download the HUGGED App
              </h3>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get HUGGED on Google Play"
                className="inline-flex rounded-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F07883]"
              >
                <Image
                  src="/images/google-play-badge.png"
                  alt="Get it on Google Play"
                  width={194}
                  height={72}
                  className="h-[54px] w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Row 2: Navigation + People & Newsletter */}
        <div className=" border-b border-white/15 py-8 flex justify-between">
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white">
              People &amp; Newsletter
            </h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-4 text-sm text-white ">
              <a
                href="https://www.instagram.com/bass_kar_kuhu"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 transition-colors hover:text-[#F07883]"
              >
                <Image
                  src="/images/kuhu.png"
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 shrink-0 rounded-full object-cover"
                />
                <span>
                  Kuhu
                  <br />
                  on Instagram
                </span>
              </a>
              <a
                href="https://www.instagram.com/guilt_free_parenting"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 transition-colors hover:text-[#F07883]"
              >
                <Image
                  src="/images/archna.png"
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 shrink-0 rounded-full object-cover"
                />
                <span>
                  Archna
                  <br /> on Instagram{" "}
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/photophilic-shivam/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 transition-colors hover:text-[#F07883]"
              >
                <Image
                  src="/images/shivam.png"
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 shrink-0 rounded-full object-cover"
                />
                <span>
                  Shivam <br />
                  on LinkedIn{" "}
                </span>
              </a>

              <a
                href="https://www.linkedin.com/newsletters/parenting-role-play%3F-guilty-7468675204219600896"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 transition-colors hover:text-[#F07883]"
              >
                <Image
                  src="/images/Parenting%20Role%20Play_%20Guilty!.png"
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 shrink-0 rounded-lg object-cover"
                />
                <span>
                  Parenting Role Play
                  <br /> Newsletter{" "}
                </span>
              </a>
            </div>
          </div>

          {/* Website links */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white">
              Explore
            </h2>

            <nav
              aria-label="Footer navigation"
              className="flex flex-col items-start gap-3 text-sm text-white"
            >
              <a
                href="mailto:collabs@hugged.in"
                className="transition-colors hover:text-[#F07883]"
              >
                Collaboration enquiries (collabs@hugged.in)
              </a>
              <a
                href="mailto:careers@hugged.in"
                className="transition-colors hover:text-[#F07883]"
              >
                Career enquiries (careers@hugged.in)
              </a>
              <a
                href="mailto:founders@hugged.in"
                className="transition-colors hover:text-[#F07883]"
              >
                Something else? (founders@hugged.in)
              </a>
              <a
                href="/privacy-and-policy"
                className="transition-colors hover:text-[#F07883]"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-and-conditions"
                className="transition-colors hover:text-[#F07883]"
              >
                Terms &amp; Conditions
              </a>
              <a
                href="/delete-account"
                className="transition-colors hover:text-[#F07883]"
              >
                Delete Account
              </a>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col gap-2 pt-5 text-xs text-white sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HUGGED. All rights reserved.</p>

          <p className="text-white">Guilt-Free Parenting, Together ♡</p>
        </div>
      </div>
    </footer>
  );
}
