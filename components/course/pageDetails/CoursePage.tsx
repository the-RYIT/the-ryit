import "@/components/course/pageDetails/Coursepage.scss";
import { CourseCard } from "../CourseCardSection/CourseCard";
import dummyImage from "@/public/assets/images/course/dummy2jpg.jpg"


export const CoursePage = () => {
  return (
    <>
      <h1 className="font-sans font-normal text-7xl">Courses</h1>
      <p>the card is not completed</p>
      <div id="card-section">
        <CourseCard
          Header="Python Course"
          Description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab vel
            ipsam ullam, recusandae dolor earum."
          Duration="3 Months"
          imageSrc={dummyImage}
        />
        <CourseCard
          Header="Python Course"
          Description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab vel
            ipsam ullam, recusandae dolor earum."
          Duration="3 Months"
          imageSrc={dummyImage}
        />
        <CourseCard
          Header="Python Course"
          Description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab vel
            ipsam ullam, recusandae dolor earum."
          Duration="3 Months"
          imageSrc={dummyImage}
        />
        <CourseCard
          Header="Python Course"
          Description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab vel
            ipsam ullam, recusandae dolor earum."
          Duration="3 Months"
          imageSrc={dummyImage}
        />
        <CourseCard
          Header="Python Course"
          Description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab vel
            ipsam ullam, recusandae dolor earum."
          Duration="3 Months"
          imageSrc={dummyImage}
        />
      </div>
      
    </>
  );
};
