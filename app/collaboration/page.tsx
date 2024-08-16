import { charm, ntr } from "@/utils/fonts/fonts";
import img from "@/public/assets/images/collaboration/music.jpg";
import img1 from "@/public/assets/images/collaboration/class.jpg";
import "./colab-style.scss";
import Image from "next/image";
const page = () => (
  <main className="mainSection">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="svgImage">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#0099ff", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#ffffff", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        fill="url(#gradient)"
        d="M0,288L60,261.3C120,235,240,181,360,176C480,171,600,213,720,240C840,267,960,277,1080,266.7C1200,256,1320,224,1380,208L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      />
    </svg>
    <div className="blog-header-section">
      <h1
        className={`${ntr.className} text-center max-sm:leading-none uppercase md:text-[5.4rem] sm:text-[4.4rem] text-[3.3rem]`}
      >
        Bridging Minds and Markets{" "}
      </h1>
      <p className="font-sans font-thin text-[1.15rem] text-center tracking-[0.25rem]">
        At <b>The RYIT</b>, we believe that the fusion of academic excellence and industry expertise
        is key to delivering world-class AI skill training. Our collaborative approach ensures that
        our learners receive the most relevant, cutting-edge education, preparing them to meet the
        demands of today&apos;s dynamic job market.
      </p>
    </div>

    {/* Main Content  */}
    <section className="mt-12 p-0 flex flex-nowrap gap-8 container-section relative">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="blue-svg">
        <path
          fill="#378CFC"
          d="M34.7,-44C44.8,-32.9,52.8,-21.8,57,-8.4C61.3,4.9,61.9,20.5,56.5,35.2C51.1,49.9,39.6,63.6,25.9,66.7C12.2,69.8,-3.8,62.1,-22.7,57.4C-41.7,52.8,-63.5,51,-75.3,39.2C-87.1,27.5,-88.9,5.7,-83.4,-12.8C-77.9,-31.4,-65.1,-46.9,-50,-57.2C-34.9,-67.5,-17.4,-72.7,-2.6,-69.6C12.3,-66.5,24.6,-55.2,34.7,-44Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className="container ">
        <div className="inner-container relative">
          <div className="container-header ">
            <h1>
              Academic <br />
              <span className="md:ml-6 ml-2">Partnerships</span>
            </h1>
            <h3>
              We collaborate with leading universities and research institutions to integrate the
              latest academic advancements into our curriculum. Our academic partnerships provide
              the following benefits:
            </h3>
          </div>

          <div className="container-img">
            <Image src={img1} alt="Academic Partnerships" />
          </div>

          <ul className="points-container md:mt-12">
            <li className="points-text">
              <strong> Curriculum Development :</strong>
              <span className={charm.className}>
                Our courses are co-designed with academic experts to ensure they meet rigorous
                educational standards and incorporate the latest research findings.{" "}
              </span>
            </li>
            <li className="points-text">
              <strong> Research Opportunities :</strong>
              <span className={charm.className}>
                Learners gain access to exclusive research projects and academic resources,
                fostering a deeper understanding of AI technologies and their applications.
              </span>
            </li>
            <li className="points-text">
              <strong> Guest Lectures and Workshops</strong>
              <span className={charm.className}>
                {" "}
                Renowned professors and researchers deliver guest lectures and conduct specialized
                workshops, offering learners unique insights into the academic world of AI.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container ">
        <div className="inner-container relative">
          <div className="container-header ">
            <h1>
              Industry <br />
              <span className="md:ml-6 ml-2">Collaborations</span>
            </h1>
            <h3>
              We work closely with industry leaders and tech giants to align our training programs
              with real-world demands. Our industry collaborations offer several advantages:
            </h3>
          </div>

          <div className="container-img">
            <Image src={img} alt="Academic Partnerships" />
          </div>

          <ul className="points-container md:mt-12">
            <li className="points-text">
              <strong> Real-World Projects :</strong>
              <span className={charm.className}>
                Learners engage in hands-on projects and case studies based on actual industry
                challenges, gaining practical experience that is directly applicable to their
                careers.{" "}
              </span>
            </li>
            <li className="points-text">
              <strong> Internships and Job Placements:</strong>
              <span className={charm.className}>
                Through our strong industry connections, we provide internship and job placement
                opportunities, helping learners transition seamlessly into the workforce.
              </span>
            </li>
            <li className="points-text">
              <strong> Technology Integration</strong>
              <span className={charm.className}>
                {" "}
                Our industry partners provide access to the latest AI tools and technologies,
                ensuring our learners are proficient in the most current and advanced platforms used
                in the field.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="aqua-svg">
        <path
          fill="#37EFFC"
          d="M34.7,-44C44.8,-32.9,52.8,-21.8,57,-8.4C61.3,4.9,61.9,20.5,56.5,35.2C51.1,49.9,39.6,63.6,25.9,66.7C12.2,69.8,-3.8,62.1,-22.7,57.4C-41.7,52.8,-63.5,51,-75.3,39.2C-87.1,27.5,-88.9,5.7,-83.4,-12.8C-77.9,-31.4,-65.1,-46.9,-50,-57.2C-34.9,-67.5,-17.4,-72.7,-2.6,-69.6C12.3,-66.5,24.6,-55.2,34.7,-44Z"
          transform="translate(100 100)"
        />
      </svg>
    </section>

    <section className="p-0 mt-9">
      <h1 className="text-7xl uppercase" style={ntr.style}>
        Bridging the Gap
      </h1>

      <p style={{ fontSize: "1.1rem" }}>
        Our collaboration with both academic and industry partners creates a comprehensive learning
        ecosystem that bridges the gap between theoretical knowledge and practical application. This
        integrated approach ensures that our learners are not only knowledgeable but also job-ready,
        equipped with the skills and experience needed to thrive in the AI-driven economy
      </p>
    </section>
  </main>
);

export default page;
