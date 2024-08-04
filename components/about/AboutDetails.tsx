import Image from "next/image";

import aboutImage from "@/public/assets/images/home/about/dump.avif";
import { manrope, ntr } from "@/utils/fonts/fonts";
const AboutDetails = () => {
  return (
    <section className="about-page-details md:px-28">
      The <strong> RYIT </strong> is one of the best educational brands in india.WE provide advanced
      level professional courses on COMPUTER ,ROBOTICS,ARTIFICIAL INTELLIGENCE ,ASTRONOMY, ENGLISH
      LANGUAGE. The <strong> RYIT </strong>
      revolutionised the way skills are acquired and developed in the age of Artificial
      Intelligence. The <strong> RYIT </strong>,where the future of learning meets the power of
      artificial intelligence. WE empower individuals with the skills they need to thrive in the
      fast-evolving digital landscape.
      <div className="mid-section flex max-sm:flex-col gap-16 mt-4">
        <Image
          src={aboutImage}
          alt="about"
          style={{
            width: "30%",
          }}
        />

        <aside className=" ">
          <h1 className="text-4xl" style={ntr.style}>
            -MISSION AND VISION-
          </h1>
          <h3 className={manrope.className}>
            Our mission is to democratize access to high-quality, AI-driven skill training that
            empowers individuals and organizations to excel in a rapidly evolving digital world. We
            aim to bridge the skills gap by providing innovative, personalized, and accessible
            learning experiences that cater to diverse needs and foster continuous growth and
            development.{" "}
          </h3>

          <h3 className={`${manrope.className} mt-3`}>
            Our vision is to become the leading global platform for AI-based skill training,
            recognized for our commitment to excellence, innovation, and inclusivity. We aspire to
            create a future where everyone has the opportunity to harness the power of AI to achieve
            their personal and professional goals, contributing to a more knowledgeable, skilled,
            and technologically adept society.And we also provide society based skill training for
            serving the society.
          </h3>
        </aside>
      </div>
      <div className="mentor-section"></div>
      <div className="teams-section"></div>
    </section>
  );
};

export default AboutDetails;
