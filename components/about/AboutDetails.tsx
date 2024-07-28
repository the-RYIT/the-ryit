import Image from "next/image";

import aboutImage from "@/public/assets/images/home/about/dump.webp";
const AboutDetails = () => {
  return (
    <section className="about-page-details">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur sit impedit eaque
      expedita, fugiat reiciendis facilis id rerum animi, minus, dolor dolores optio perspiciatis
      pariatur modi error laboriosam exercitationem eligendi.
      <div className="mid-section flex max-sm:flex-col">
        <Image src={aboutImage} alt="about" />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eius eveniet suscipit
        necessitatibus velit? Quisquam minus sint asperiores maiores, eius consequuntur aliquam
        consequatur placeat fugit sed! At accusantium corporis consequuntur?
      </div>
      <div className="mentor-section"></div>
      <div className="teams-section"></div>
    </section>
  );
};

export default AboutDetails;
