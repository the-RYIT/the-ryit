import Image from "next/image";
import "./about-style.scss";
import img from "@/public/assets/images/home/about/dump.webp";
import { ntr, manrope } from "@/utils/fonts/fonts";
import LinkBtn from "@/components/LinkBtn/LinkBtn";

const AboutSection = () => {
  return (
    <section className="flex w-full md:h-screen aboutSection">
      <div className="left-about-part md:w-2/5 shrink-0">
        <h1 className={ntr.className}>About Us</h1>
        <div className="imageDiv">
          <Image src={img} alt="about" />
        </div>
      </div>
      <div className={`right-about-part ${manrope.className}`}>
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora in a nostrum voluptate
          nemo expedita ratione eveniet asperiores veritatis eligendi. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Nostrum dolore obcaecati minus repellendus corporis fugit
          rerum eveniet vero veritatis aut.
        </h3>

        <div className="div">
          <h1 className={`${ntr.className} about-details-head`}>
            {/* Unveiling Your Benefits */}
            Here's What You Get
            <span></span>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, corrupti! Lorem ipsum
          </p>
        </div>

        <div className="div about-factor">
          <h1 className={`${ntr.className} about-details-head`}>
            Our Competitive Edge <span></span>
          </h1>
          <p>
            <span>&#45; </span> Live Project Based Training
          </p>
          <p>
            <span>&#45; </span> Authorized Certification
          </p>
          <p>
            <span>&#45; </span> Authorized Certification
          </p>
          <p>
            <span>&#45; </span> Affordable Pricing
          </p>
          <p>
            <span>&#45; </span> Free wi-fi Facilities
          </p>
        </div>

        <div className="div mt-10">
          <LinkBtn link="/contacts" title="Learn More" extraClass="about-link-btn" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
