import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
// Next.js loads this stylesheet at runtime; TypeScript does not need to type-check it.
// @ts-expect-error CSS side-effect imports are handled by Next.js.
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "IGF-SARL",
  description:
    "IGF accompagne les entreprises sénégalaises dans leur transformation digitale : comptabilité, ERP, RH et cloud. Partenaire agréé Sage100 et Odoo.",
  metadataBase: new URL("https://www.igf-sn.com"),
  openGraph: {
    title: "IGF-SARL",
    description:
      "Comptabilité, ERP, formation et cloud pour les entreprises sénégalaises.",
    locale: "fr_SN",
    type: "website",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${inter.variable} ${jbMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
