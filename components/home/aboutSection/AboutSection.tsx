import Image from "next/image";
import "./about-style.scss";
import img from "@/public/assets/images/home/about/dump.webp";

const AboutSection = () => {
  return (
    <section className="flex w-full md:h-screen aboutSection">
      <div className="left-about-part md:w-2/5 shrink-0">
        <h1>About Us</h1>
        <div className="imageDiv">
          <Image src={img} alt="about" />
        </div>
      </div>
      <div className="right-about-part">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora in a nostrum voluptate
        nemo expedita ratione eveniet asperiores veritatis eligendi.
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa itaque, quam natus corporis
        odit ab ipsa. Vel est inventore, aliquam quia provident repellendus ipsa quasi aliquid,
        omnis, itaque tenetur beatae.
      </div>
    </section>
  );
};

export default AboutSection;
