import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: { default: "Savera Works", template: "%s – Savera Works" },
  description:
    "Savera Works is your trusted partner in staffing excellence, offering specialized talent acquisition for Finance, Clerical, IT, Construction, Labor, and Engineering Support Services.",
  metadataBase: new URL("https://www.saveraworks.com"),
  // Icons come from src/app/icon.png and src/app/apple-icon.png (file convention).
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1d1d1f",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        {/* Scroll reveals render hidden and are shown by JS; without JS nothing should stay invisible. */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {/* Header is rendered inside Hero so the rounded hero block clips it. */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
