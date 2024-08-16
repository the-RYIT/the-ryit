import { manrope, ntr } from "@/utils/fonts/fonts";
import "./gallery-style.scss";
const ExtraDetails = () => {
  return (
    <section className="gallery-extra-section" style={manrope.style}>
      {/* Write about a gallery section for computer center
       */}
      <h1 className={ntr.className}>Visual Tour of RYIT&#39;s Areas</h1>

      <p>
        Welcome to the <strong>The RYIT - Rastriya Youth Institution of Technology</strong> Computer
        Training Center gallery! Our facility is dedicated to providing top-tier training in various
        cutting-edge areas of technology. We offer comprehensive programs in{" "}
        <strong>computer basics</strong>, <strong>artificial intelligence (AI) and robotics</strong>
        , and <strong>digital marketing</strong>, ensuring a robust foundation and advanced skills
        for all our learners.
      </p>
      <p>
        In our <strong>Computer Training</strong> sessions, students and professionals alike can
        acquire fundamental computing skills, from mastering essential software to understanding
        hardware components. Our hands-on approach prepares individuals for practical applications
        in today&apos;s tech-driven world.
      </p>
      <p>
        For those interested in the future of technology, our <strong>AI and Robotics</strong>{" "}
        training covers the latest advancements and practical applications. Learners explore the
        principles of artificial intelligence and robotics, gaining valuable insights into machine
        learning, automation, and intelligent systems.
      </p>
      <p>
        {" "}
        Our <strong>Digital Marketing</strong>
        courses are designed to equip participants with the skills needed to excel in the digital
        landscape. From social media strategies to search engine optimization (SEO) and online
        advertising, our training ensures that students are well-versed in the tools and techniques
        required to drive success in digital marketing.{" "}
      </p>
      <p>
        {" "}
        The <b>RYIT </b> combines modern technology with expert instruction, offering a dynamic
        learning environment that supports growth and innovation in these exciting fields.{" "}
      </p>
    </section>
  );
};

export default ExtraDetails;
