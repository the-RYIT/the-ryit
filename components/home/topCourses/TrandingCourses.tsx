import Image from "next/image";
import React from "react";
import img1 from "@/public/assets/images/home/course/outer-ring.svg";
import img2 from "@/public/assets/images/home/course/middle-ring.svg";
import "./trending-styles.scss";
const TrendingCourse = () => {
  return (
    <section className="relative w-full mt-16 h-screen flex justify-center items-center trendingCourse-section">
      <Image src={img1} alt="outer-ring" className="absolute h-full" />
      <Image src={img2} alt="outer-ring" className="absolute" />
      <div className="center-text">Curses</div>
    </section>
  );
};

export default TrendingCourse;
