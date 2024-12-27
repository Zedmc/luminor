import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import PrioritySection from "@/components/PrioritySection";
import LuxuryShowcase from "@/components/LuxuryShowcase";
import Pricing from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import LuxuryAppealSection from "@/components/LuxuryAppealSection";

export default async function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
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
      <Footer />
    </div>
  );
}
