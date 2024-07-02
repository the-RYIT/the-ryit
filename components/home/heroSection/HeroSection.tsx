import Image from "next/image";
import "./hero-style.scss";
import heroImage from "@/public/assets/images/home/herosection/heroImage.jpg";
import { ntr, manrope } from "@/utils/fonts/fonts";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="heroSection flex justify-between relative">
      <aside className="pt-8 text-side grow">
        <div className="header absolute">
          <h1 className={ntr.className}>Transform YourSelf</h1>
          <h1 className="ml-4">Through Technology</h1>
        </div>

        <div className="h-full flex flex-col items-start justify-center gap-6">
          <div className=" w-[70%]">
            <p>
              ProfessionalTeaching on many Computer Application and programming language with good
              communication. This is your Chance for
              <span> grab the opportunity</span>.
            </p>
          </div>

          <button className={`${manrope.className} contactBtn`}>
            <Link href="/contacts"> Join Us</Link>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m18 8l4 4m0 0l-4 4m4-4H2"
              />
            </svg>
          </button>
        </div>
      </aside>
      <aside className="w-1/2 image-side shrink-0">
        <Image src={heroImage} alt="hero image" />
      </aside>
    </section>
  );
};

export default HeroSection;
