import Hero from "@/components/global/Hero";
import About from "@/components/global/About";
import WhyChooseUs from "@/components/global/WhyChooseUs";
import Services from "@/components/global/Services";
import PrioritySection from "@/components/global/PrioritySection";
import LuxuryShowcase from "@/components/global/LuxuryShowcase";
import Pricing from "@/components/global/Pricing";
import LuxuryAppealSection from "@/components/global/LuxuryAppealSection";

export default async function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <LuxuryShowcase />
        <PrioritySection />
        <Pricing />
        <LuxuryAppealSection />
      </main>
    </div>
  );
}
