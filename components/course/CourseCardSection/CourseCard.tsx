import "@/components/course/CourseCardSection/Course-card.scss";
import Image from "next/image";
import { ntr } from "@/utils/fonts/fonts";
import Link from "next/link";
import { NCoursePage } from "@/utils/types";
import { clientCredential } from "@/utils/assets";
import imageUrlBuilder from "@sanity/image-url";

export const CourseCard = ({
  course,
}: {
  course: NCoursePage.courseCardProps;
}) => {
  const {
    CourseDuration,
    CourseLevel,
    courseImage,
    courseName,
    shortDescription,
    slug,
  } = course;

  const { projectId, dataset } = clientCredential;
  if (!projectId || !dataset) {
    throw new Error("Sanity credentials are missing");
  }

  const builder = imageUrlBuilder({
    projectId: projectId,
    dataset: dataset,
  });
  return (
    <>
      <div id="Card-container" className="card-image">
        <div id="card-image">
          <Image
            src={builder.image(courseImage).url()}
            alt="Picture of the Course"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 33vw"
            placeholder="blur"
            blurDataURL={builder.image(courseImage).url()}
            width={500}
            height={500}
          />
        </div>
        <div id="card-details">
          <div className="course-heading-name">
            <h1 className={`${ntr.className}`}>{courseName}</h1>
          </div>
          <div className="course-container-about">
            <p>{shortDescription}</p>
          </div>

          <div id="button-div">
            <button id="view-course-btn">
              <Link href={"course/" + slug.current}>View Details</Link>
            </button>
          </div>
          <div id="course-features">
            <h5>Certificate</h5>
            <h5>{CourseDuration}</h5>
            <h5>{CourseLevel}</h5>
          </div>
        </div>
      </div>
    </>
  );
};
