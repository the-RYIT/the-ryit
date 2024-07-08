import Image from "next/image";
import "./hero-style.scss";
import heroImage from "@/public/assets/images/home/herosection/heroImage.jpg";
import { ntr, manrope } from "@/utils/fonts/fonts";
import LinkBtn from "@/components/LinkBtn/LinkBtn";

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
          <LinkBtn title="Join Us" link="/contacts" extraClass="contactBtn" />
        </div>
      </aside>
      <aside className="max-2xl:w-3/5 w-1/2 image-side shrink-0">
        <Image placeholder="blur" src={heroImage} alt="hero image" priority />
      </aside>
    </section>
  );
};

export default HeroSection;
