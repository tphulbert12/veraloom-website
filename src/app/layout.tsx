import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Veraloom — Weave your truth into every moment",
    template: "%s | Veraloom",
  },
  description:
    "Veraloom is the modern platform for building meaningful, connected experiences. Discover features, pricing, and more.",
  metadataBase: new URL("https://veraloom.com"),
  openGraph: {
    title: "Veraloom",
    description:
      "Veraloom is the modern platform for building meaningful, connected experiences.",
    url: "https://veraloom.com",
    siteName: "Veraloom",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veraloom",
    description:
      "Veraloom is the modern platform for building meaningful, connected experiences.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
