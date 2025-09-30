import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ProblemSection from "@/components/ProblemSection";
import SolutionOverview from "@/components/SolutionOverview";
import HowItWorks from "@/components/HowItWorks";
import ServicesPackages from "@/components/ServicesPackages";
import CaseStudies from "@/components/CaseStudies";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SocialProof />
      <ProblemSection />
      <SolutionOverview />
      <HowItWorks />
      <ServicesPackages />
      <CaseStudies />
      <WhyChooseUs />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
