import LandingPage from "@/components/landingpage/LandingPage";
import DashboardPage from "./dashboard/page";
import DashboardSection from "@/components/section/DashboardSection";

export default function Home() {
  return (
    <main className="bg-slate-100 w-full h-full">
      <LandingPage />
      <DashboardSection />
      <DashboardPage />
    </main>
  );
}
