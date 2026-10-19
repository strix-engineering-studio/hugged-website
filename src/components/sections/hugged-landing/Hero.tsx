import { Button } from "@/components/ui/button";
import { Assets } from "@/lib/assets";
import { PLAY_STORE_URL, WAITLIST_URL } from "@/lib/constant";
import { ArrowDown, Heart } from "lucide-react";
import Image from "next/image";

export default function Hero({
  onNavigate,
}: {
  onNavigate: (id: string) => void;
}) {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[calc(100svh-78px)] scroll-mt-24 items-center overflow-hidden bg-[#ff6f61] px-5 py-14 md:px-10 md:py-16"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_50%,rgba(94,181,166,.20),transparent_40%),radial-gradient(ellipse_at_15%_80%,rgba(255,111,97,.18),transparent_35%)]"
      />
      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div className="relative z-10 max-w-2xl">
          {/* <p className="mb-5 inline-flex rounded-full border border-[#5eb5a6]/40 bg-white/75 px-4 py-2 text-[11px] font-bold uppercase tracking-[.2em] text-[#333333]">India’s first guilt-free parenting village</p> */}
          <h1 className="font-heading text-5xl font-bold leading-[1.02] tracking-[-.045em] text-white sm:text-9xl lg:text-9xl">
            Join your
            <div />
            village
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-7 text-white md:mt-5 md:text-3xl md:leading-10">
            India’s first guilt-free parenting village for all stages of
            parenthood.
          </p>
          {/* <p className="mt-3 max-w-lg text-sm leading-6 text-[#333333]/65">A community to share, learn and feel supported, on the real days of parenting.</p> */}
          {/* <div className="mt-8 flex flex-wrap items-center gap-4"> */}
          {/* <Button variant="outline" onClick={() => onNavigate("village")} className="h-12 rounded-full border-[#333333]/25 bg-white/70 px-6 text-[#333333] hover:bg-white">Explore the village <ArrowDown className="ml-2 size-4"/></Button> */}
          {/* <a href={WAITLIST_URL} target="_blank" rel="noreferrer" className="rounded-full px-3 py-2 text-sm font-semibold text-[#333333] underline decoration-[#5eb5a6] underline-offset-4">Join the waitlist</a> */}
          {/* </div> */}
          {/* <p className="mt-4 text-xs font-medium text-[#333333]/60">Google Play is available. The App Store link will be added when it is confirmed.</p> */}
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-7 hidden w-fit items-center gap-3 rounded-xl border-2 border-[#333333] bg-white p-3 shadow-sm sm:flex"
          >
            <Image
              src="/images/hugged-play-store-qr.svg"
              alt=""
              width={88}
              height={88}
              unoptimized
              className="size-[88px]"
            />
            <div className="flex flex-col items-center justify-left">
              <span className="max-w-40 text-left text-md font-medium leading-5 text-black">
                <h3 className="font-bold text-left">Scan to Join</h3>
              </span>
              <Image
                src="/images/google-play-badge.png"
                alt="Get it on Google Play"
                width={194}
                height={72}
                priority
                className="h-[58px] w-auto"
              />
            </div>
          </a>
        </div>
        <div className="relative mx-auto aspect-[1.05/1] w-full max-w-[630px] ">
          <div className="absolute inset-[8%] rounded-[48%] bg-[#f8f4e3]/20" />
          <div className="absolute inset-[15%_8%_4%_20%] rounded-[48%_48%_20%_20%] bg-[#f8f4e3]/20" />
          <Image
            src={Assets.illustrations.intro4}
            alt="A HUGGED parent feeling calm and supported"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 48vw"
            className="relative z-10 object-contain object-bottom drop-shadow-[0_18px_20px_rgba(51,51,51,.10)]"
          />
          {/* <Image src="/images/brand-character-design/baby/bb-laugh.png" alt="A happy HUGGED baby character" width={215} height={270} className="absolute bottom-0 right-0 z-20 w-[30%] object-contain" priority /> */}
          <div className="absolute left-1 top-[5%] z-20 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-[#333333] shadow-lg shadow-[#333333]/10 sm:left-2">
            No guilt. Just support.{" "}
            <Heart className="ml-1 inline size-4 fill-[#ff6f61] text-[#ff6f61]" />
          </div>
          <div className="absolute bottom-[10%] left-[2%] z-20 rounded-2xl bg-white px-4 py-3 text-xs font-semibold text-[#333333]/75 shadow-lg shadow-[#333333]/10">
            Made for people who care.
          </div>
        </div>
      </div>
    </section>
  );
}
