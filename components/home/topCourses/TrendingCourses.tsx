import Image from "next/image";
import React from "react";
import img1 from "@/public/assets/images/home/course/outer-ring.svg";
import img2 from "@/public/assets/images/home/course/middle-ring.svg";
import "./trending-styles.scss";
import { manrope } from "@/utils/fonts/fonts";

const TrendingCourse = () => {
  return (
    <section className="relative w-full mt-16 h-screen flex justify-center items-center trendingCourse-section">
      <Image src={img1} alt="outer-ring" className="absolute h-full" />
      <Image src={img2} alt="outer-ring" className="absolute" />
      <div className="center-text flex flex-col justify-center items-center">
        <h1 className={manrope.className}>
          <span>Take </span> Chances
          <br />
          OF
        </h1>
        <h1 className={manrope.className}>
          Your <span>Opportunity</span>
        </h1>
      </div>
    </section>
  );
};

export default TrendingCourse;
