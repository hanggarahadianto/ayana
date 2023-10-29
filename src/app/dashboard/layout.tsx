import Community from "@/components/community/Community";
import Footer from "@/components/footer/Footer";
import LandingPage from "@/components/landingpage/LandingPage";
import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

const quicksland = Quicksand({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Ayana Home",
  description: "Ayana Home",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quicksland.className}>
        <Navbar />
        <LandingPage />

        {children}

        <Community />
        <Footer />
      </body>
    </html>
  );
}
