import Image from "next/image";
import "./gallery-style.scss";
import img1 from "@/public/assets/images/gallery/1717090.jpg";

import img4 from "@/public/assets/images/gallery/6a02ce488c6069b5ae898c3da637fa30.jpg";

import { charm } from "@/utils/fonts/fonts";

const sectionTitle = ["Live Class", "Faculty", "Counselling", "Exhibition", "Seminar"];

const sectionImage = [img1, img4, img1, img4, img1];
const TopSection = () => {
  return (
    <section className="p-0 flex flex-nowrap w-screen main-content">
      {sectionTitle.map((title, index) => (
        <div key={index} className="item relative w-full">
          <Image src={sectionImage[index]} alt={title} className="item-img absolute" />
          <div className="text-box absolute text-white">
            <h1 className={charm.className}>{title}</h1> <span> -&gt;</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TopSection;
