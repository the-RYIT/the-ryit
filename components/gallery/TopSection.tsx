import Image from "next/image";
import "./gallery-style.scss";
import img1 from "@/public/assets/images/gallery/1717090.jpg";
import img2 from "@/public/assets/images/gallery/20220929_142428.jpg";
import img3 from "@/public/assets/images/gallery/4b808e46b72570aa62c6a4e79991070c.jpg";
import img4 from "@/public/assets/images/gallery/6a02ce488c6069b5ae898c3da637fa30.jpg";
import img5 from "@/public/assets/images/gallery/a868d56eb7207e1805ebe475651f7d36.jpg";
import img6 from "@/public/assets/images/gallery/dd6790167512059.642b260714577.jpg";
import { charm } from "@/utils/fonts/fonts";

const sectionTitle = ["Live Class", "Faculty", "Counselling", "Exhibition", "Seminar"];

const sectionImage = [img6, img3, img2, img4, img5];
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
