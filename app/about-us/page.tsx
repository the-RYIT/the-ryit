import { ntr } from "@/utils/fonts/fonts";
import "./about-style.scss";
import AboutDetails from "@/components/about/AboutDetails";

const page = () => {
  return (
    <main className="mainSection relative main-page-withWave" id="about-main-page">
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
      <div className="header-section">
        <h1 className={`${ntr.className} text-center max-sm:leading-none `}>About Us</h1>
        <p className="font-sans font-thin text-[1.15rem] flex justify-center items-center relative tracking-[0.25rem]">
          Come to Know us
        </p>
      </div>
      <AboutDetails />
    </main>
  );
};

export default page;
