import AboutSection from "@/components/home/aboutSection/AboutSection";
import ContactSection from "@/components/home/contacts/ContactSection";
import FAQSection from "@/components/home/faq/FAQSection";
import HeroSection from "@/components/home/heroSection/HeroSection";
import SlideSection from "@/components/home/slideSection/SlideSection";
import SuccessIncreasing from "@/components/home/success/SuccessIncreasing";
import TrendingCourse from "@/components/home/topCourses/TrendingCourses";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <SlideSection />
      <AboutSection />
      <TrendingCourse />
      <SuccessIncreasing />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
