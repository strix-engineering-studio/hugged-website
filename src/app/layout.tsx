import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hugged.in"),
  alternates: { canonical: "/" },
  title: {
    default: "HUGGED | India’s Guilt-Free Parenting Village",
    template: "%s | HUGGED",
  },
  description:
    "India’s first guilt-free parenting village for all stages of parenthood. Connect, learn and find support with HUGGED.",
  openGraph: {
    title: "HUGGED | Join Your Village",
    description: "A guilt-free parenting village for all stages of parenthood.",
    url: "https://hugged.in",
    siteName: "Hugged",
    type: "website",
    images: [{ url: "/images/brand-character-design/mom/mom-smile-f.png", alt: "A HUGGED parent character" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HUGGED | Join Your Village",
    description: "A guilt-free parenting village for all stages of parenthood.",
    images: ["/images/brand-character-design/mom/mom-smile-f.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${quicksand.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
