import Hero from "@/components/global/Hero";
import About from "@/components/global/About";
import WhyChooseUs from "@/components/global/WhyChooseUs";
import Services from "@/components/global/Services";
import PrioritySection from "@/components/global/PrioritySection";
import LuxuryShowcase from "@/components/global/LuxuryShowcase";
import Pricing from "@/components/global/Pricing";
import LuxuryAppealSection from "@/components/global/LuxuryAppealSection";
import ParallaxScroll from "@/components/global/ParallaxScroll";
import CTA from "@/components/global/CTA";

export default async function Home() {
  return (
    <div className="min-h-screen bg-transparent">
      <main>
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
