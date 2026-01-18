import FeaturesSection from "@/components/landing/features-section";
import Hero from "@/components/landing/hero";
import LandingFooter from "@/components/landing/landing-footer";
import LandingHeader from "@/components/landing/landing-header";
import ResultInfo from "@/components/landing/result-info";
import Sponsors from "@/components/landing/sponsors";
import StepsInfo from "@/components/landing/steps-info";
import Testimonials from "@/components/landing/testimonials";

export default function Home() {
  return (
    <div className="font-sans w-full h-full flex flex-col items-center justify-start bg-border">
      <LandingHeader />

      <Hero />
      <Sponsors />
      <ResultInfo />
      <StepsInfo />
      <FeaturesSection />
      <Testimonials />

      <LandingFooter />
    </div>
  );
}
