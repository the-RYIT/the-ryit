import CardItem from "./CardItem";
import style from "./style.module.scss";
import teacherImg from "@/public/assets/icons/slideSection/teacher-icon.svg";
import studentImg from "@/public/assets/icons/slideSection/student-icon.svg";
import educationImg from "@/public/assets/icons/slideSection/building-icon.svg";
import networkImg from "@/public/assets/icons/slideSection/network-icon.svg";
import compImg from "@/public/assets/icons/slideSection/computer-icon.svg";

const SlideItems = [
  {
    title: "Students",
    subText: "Here is the best place for students to learn and grow up",
    img: studentImg,
  },
  {
    title: "Mentors",
    subText: "Have some professional, experience mentors for you",
    img: teacherImg,
  },
  {
    title: "Education",
    subText: "Best Education Provide by some professional,experience Mentors",
    img: educationImg,
  },
  {
    title: "Services",
    subText: "Provide Latest System and Services for you to learn and grow up",
    img: compImg,
  },
  {
    title: "Networks",
    subText: "Can Grow your network with some professional mentors and students",
    img: networkImg,
  },
];

const SlideSection = () => {
  return (
    <section className="flex justify-center pt-14">
      <div className={`${style.viewSection} lg:w-4/5 md:w-[90%] w-[85%]  grow-0`}>
        <div
          className={`${style.itemContainer} flex justify-start relative xl:gap-12 sm:gap-8 gap-4`}
        >
          {SlideItems.map((item, index) => (
            <CardItem key={index} title={item.title} subText={item.subText} img={item.img} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SlideSection;
