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
          <h1 className={`${ntr.className} text-3xl`}>Transform YourSelf</h1>
          <h1 className="ml-4">Through Technology</h1>
        </div>

        <div className="h-full flex flex-col items-start lg:justify-center justify-start lg:p-0 sm:pt-40 pt-24 gap-6">
          <div className=" sm:w-[70%] w-full pr-3">
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
      <aside className="max-2xl:w-3/5 w-1/2 image-side shrink-0">
        <Image src={heroImage} alt="hero image" />
      </aside>
    </section>
  );
};

export default HeroSection;
