import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arfat Dental Center | Bhiwandi",
  description: "Arfat Dental Center in Bhiwandi. Dental implants, root canal, extraction, whitening, braces, aligners, child treatment and cosmetic dentistry.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
