import LandingPage from "@/components/landingpage/LandingPage";
import DashboardPage from "./dashboard/page";
import DashboardSection from "@/components/section/DashboardSection";
import Navbar from "@/components/navbar/Navbar";
import Community from "@/components/community/Community";
import Footer from "@/components/footer/Footer";
import { NextUIProvider } from "@nextui-org/system";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="bg-slate-100">
        <Navbar />
        <LandingPage />
        <DashboardSection />
        <DashboardPage />
        <Community />
        <Footer />
      </main>
    </NextUIProvider>
  );
}
