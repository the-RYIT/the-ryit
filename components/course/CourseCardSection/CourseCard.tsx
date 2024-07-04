import "@/components/course/CourseCardSection/Course-card.scss";
import Image from "next/image";
import { ntr } from "@/utils/fonts/fonts";
import { StaticImageData } from 'next/image';

// making interface for courseCard elements(props)
interface Prop {
  Header: string;
  Description: string;
  Duration: string;
  imageSrc: string | StaticImageData;
}

export const CourseCard = (props: Prop) => {
  const { Header, Description, imageSrc, Duration } = props;
  return (
    <>
      <div id="Card-container" className="card-image">
        <div id="card-image" >
          <Image
            src={imageSrc}
            alt="Picture of the Course"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 33vw"
            width={500}
            height={500}
          />
        </div>
        <div id="card-details">
          <h1 className={`${ntr.className}`}>{Header}</h1>
          <p>{Description}</p>
          <div id="button-div">
            <button id="view-course-btn">View Details</button>
          </div>
          <div id="course-features">
            <h5>Certificate</h5>
            <h5>{Duration}</h5>
            <h5>Intermidiate</h5>
          </div>
        </div>
      </div>
    </>
  );
};
