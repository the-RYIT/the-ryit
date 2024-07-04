import "@/components/course/CourseCardSection/Course-card.scss";
import Image from "next/image";
import dummypic from "@/public/assets/images/course/dummy2jpg.jpg"
import { ntr } from "@/utils/fonts/fonts";


export const CourseCard = () => {
  return (
    <>
      <div id="Card-container">
        <div id="card-image">
          <Image
            src={dummypic}
            alt="Picture of the Course"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div id="card-details">
          <h1 className={`${ntr.className}`}>Python Course</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab vel
            ipsam ullam, recusandae dolor earum.
          </p>
          <div id="button-div">
            <button id="view-course-btn">View Details</button>
          </div>
          <div id="course-features">
            <h5>Certificate</h5>
            <h5>3 Months</h5>
            <h5>Intermidiate</h5>
          </div>
        </div>
      </div>
    </>
  );
};
