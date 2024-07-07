import AboutSection from "@/components/home/aboutSection/AboutSection";
import HeroSection from "@/components/home/heroSection/HeroSection";
import SlideSection from "@/components/home/slideSection/SlideSection";
import TrendingCourse from "@/components/home/topCourses/TrendingCourses";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <SlideSection />
      <AboutSection />
      <TrendingCourse />
    </main>
  );
}
