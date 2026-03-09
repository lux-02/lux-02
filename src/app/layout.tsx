import type { Metadata } from "next";
import { Noto_Sans_KR, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://darkwinterlab.com"),
  title: "Darkwinterlab | AI Product Engineer Portfolio",
  description:
    "From Prompt to Product: AI and security portfolio by OH Yoonseok (Darkwinterlab).",
  openGraph: {
    title: "Darkwinterlab | AI Product Engineer Portfolio",
    description:
      "Living security products that turn advanced AI and security into practical protection.",
    type: "website",
    url: "https://darkwinterlab.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${sora.variable} ${notoSansKr.variable} antialiased`}>{children}</body>
    </html>
  );
}
