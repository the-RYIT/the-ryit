import Image from "next/image";
import "./about-style.scss";
import img from "@/public/assets/images/home/about/dump.webp";
import { ntr, manrope } from "@/utils/fonts/fonts";
import LinkBtn from "@/components/LinkBtn/LinkBtn";

const AboutSection = () => {
  return (
    <section className="flex w-full xl:h-screen h-[50vh] aboutSection" id="about">
      <div className="left-about-part md:w-2/5 shrink-0">
        <h1 className={ntr.className}>About Us</h1>
        <div className="imageDiv">
          <Image src={img} alt="about" />
        </div>
      </div>
      <div className={`right-about-part ${manrope.className}`}>
        <h3>
          <strong> RYIT </strong> is a top educational brand in India, offering advanced courses in
          Computer Science, Robotics, Artificial Intelligence, Astronomy, and English Language. By
          integrating AI into its teaching methods, <strong> RYIT </strong> revolutionizes skill
          development, equipping individuals to thrive in the dynamic digital landscape.
        </h3>

        <div className="div">
          <h1 className={`${ntr.className} about-details-head`}>
            {/* Unveiling Your Benefits */}
            Here&apos;s What You Get
            <span></span>
          </h1>
          <h4>
            Best in class training with Certification.A Class focus on practical learning and
            real-world applications
          </h4>
        </div>

        <div className="div about-factor">
          <h1 className={`${ntr.className} about-details-head`}>
            Our Competitive Edge <span></span>
          </h1>
          <h4>
            <span>&#45; </span> Live Project Based Training
          </h4>
          <h4>
            <span>&#45; </span> Authorized Certification
          </h4>
          <h4>
            <span>&#45; </span> Authorized Certification
          </h4>
          <h4>
            <span>&#45; </span> Affordable Pricing
          </h4>
          <h4>
            <span>&#45; </span> Free wi-fi Facilities
          </h4>
        </div>

        <div className="div sm:mt-10 mt-4">
          <LinkBtn link="/about-us" title="Learn More" extraClass="about-link-btn" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
