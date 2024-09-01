import Image from "next/image";
import { ntr } from "@/utils/fonts/fonts";
import "@/components/course/CourseCardSection/courseDetails.scss";
import { NCoursePage } from "@/utils/types";
import { clientCredential } from "@/utils/assets";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
const CourseDetails = async ({ params }: { params: { courseId: string } }) => {
  const { apiVersion, projectId, dataset } = clientCredential;
  if (!projectId || !dataset) {
    throw new Error("Sanity credentials are missing");
  }

  const builder = imageUrlBuilder({
    projectId: projectId,
    dataset: dataset,
  });
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
  });

  const query = `*[_type == "course" && slug.current == '${params.courseId}'][0]{courseName,fullDescription,CourseLevel,CourseDuration,courseEligibility,courseOpportunities,extraFacilities,courseLessons,courseImage{asset->{url}}}`;
  const courseDetails: NCoursePage.courseFullDetails = await client.fetch(query);

  return (
    <>
      <div className="h-screen w-full flex items-start justify-start absolute course-details-container flex-col">
        <div id="CourseImageHeader">
          <div className="course-Image flex items-center justify-end p-4">
            <div className="img-div">
              <Image
                src={builder.image(courseDetails.courseImage).url()}
                alt="course-Image"
                width={200}
                height={0}
                placeholder="blur"
                blurDataURL={builder.image(courseDetails.courseImage).url()}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <div className={`${ntr.className} course-header`}>
            <h1>{courseDetails.courseName}</h1>
            <h2>{courseDetails.CourseLevel}</h2>
          </div>
        </div>
        <div className="effects1"></div>
        <div className="effects2"></div>
        <div className="course-description-enroll">
          <div className="course-description flex flex-col">
            <h1 className={`${ntr.className}`}>About this Course</h1>
            <div className="about-course">
              <p>{courseDetails.fullDescription}</p>
            </div>
            <h2>Opportunities</h2>
            <div className="course-opportunities">
              <ul className="ul">
                {courseDetails.courseOpportunities == null
                  ? "No Opportunities Given"
                  : courseDetails.courseOpportunities.map((opportunity: string, index: number) => (
                      <li key={index}>{opportunity}</li>
                    ))}
              </ul>
            </div>

            <h2>Who is this course for?</h2>
            <div className="course-eligibily">
              <p>{courseDetails.courseEligibility}</p>
            </div>
            <h2>Extra Facilities</h2>
            <div className="course-extra-facilities">
              <ul className="ul">
                {courseDetails.extraFacilities == null
                  ? "No Extra Facility Given"
                  : courseDetails.extraFacilities.map((facility: string, index: number) => (
                      <li key={index}>{facility}</li>
                    ))}
              </ul>
            </div>
          </div>
          <div className="course-enroll flex flex-col justify-center">
            <h2>Course lessons</h2>
            <div className="course-lessons">
              <ul className="ul">
                {courseDetails.courseLessons == null
                  ? "No Teaching Lessons"
                  : courseDetails.courseLessons.map((lesson: string, index: number) => (
                      <li key={index}>{lesson}</li>
                    ))}
              </ul>
            </div>

            <div className="apply-course">
              <button>Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
