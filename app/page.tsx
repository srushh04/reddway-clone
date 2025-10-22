import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import VideoSection from "./components/VideoSection";
import Work from "./components/Work";
import TestimonialSection from "./components/TestimonialSection";
import FeaturesSection from "./components/FeaturesSection";
import TemplateSection from "./components/TemplateSection";
import GetStarted from "./components/GetStarted";
import Question from "./components/Question";
import Section from "./components/Section";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <Work/>
      <TestimonialSection/>
      <FeaturesSection />
      <TemplateSection />
      <GetStarted />
      <Question />
      <Section />
      <Footer />
    </main>
  );
}
