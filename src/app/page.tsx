import CTA from "@/components/global/CTA";
import Hero from "@/components/global/Hero";
import About from "@/components/global/About";
import Pricing from "@/components/global/Pricing";
import Services from "@/components/global/Services";
import WhyChooseUs from "@/components/global/WhyChooseUs";
import LuxuryShowcase from "@/components/global/LuxuryShowcase";
import ParallaxScroll from "@/components/global/ParallaxScroll";
import PrioritySection from "@/components/global/PrioritySection";
import LuxuryAppealSection from "@/components/global/LuxuryAppealSection";
// import ContractPage from "@/components/global/ContractPage";

export default async function Home() {
  return (
    <div className="min-h-screen bg-transparent">
      <main>
        {/* <ContractPage/> */}
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <LuxuryShowcase />
        <ParallaxScroll />
        <PrioritySection />
        <Pricing />
        <CTA />
        <LuxuryAppealSection />
      </main>
    </div>
  );
}
