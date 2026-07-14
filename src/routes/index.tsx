import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { AboutPreview } from "@/components/AboutPreview";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { WhyChoose } from "@/components/WhyChoose";
import { Timeline } from "@/components/Timeline";
import { Stats } from "@/components/Stats";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { FaqSection } from "@/components/FaqSection";
import { CtaBand } from "@/components/CtaBand";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutPreview />
      <Services />
      <Industries />
      <WhyChoose />
      <Timeline />
      <Stats />
      <Projects />
      <Testimonials />
      <FaqSection />
      <CtaBand />
    </>
  );
}
