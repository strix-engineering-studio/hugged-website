import type { Metadata } from "next";
import { HuggedLanding } from "@/components/sections/hugged-landing";
import { LocaleProvider } from "@/lib/locale-context";
import { defaultLocale, getDictionary } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Join Your Village | HUGGED",
    description:
      "India's first guilt-free parenting village for all stages of parenthood. Connect, learn and find support with HUGGED.",
  };
}

export default async function HomePage() {
  const messages = await getDictionary(defaultLocale);

  return (
    <LocaleProvider locale={defaultLocale} messages={messages}>
      <HuggedLanding />
    </LocaleProvider>
  );
}
