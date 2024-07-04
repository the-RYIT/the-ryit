import HeroSection from "@/components/home/heroSection/HeroSection";
import SlideSection from "@/components/home/slideSection/SlideSection";
import TrendingCourse from "@/components/home/topCourses/TrandingCourses";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <SlideSection />
      <TrendingCourse />
    </main>
  );
}
