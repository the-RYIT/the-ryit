import { useRouter } from "next/router";
import Image from "next/image";
import { ntr } from "@/utils/fonts/fonts";
import "@/components/course/CourseCardSection/courseDetails.scss";
import dummyImage from "@/public/assets/images/course/dummy2jpg.jpg";

const CourseDetails = ({ params }: { params: { courseId: string } }) => {
  return (
    <>
      <div className="h-screen w-full flex items-start justify-start absolute course-details-container flex-col">
        <div id="CourseImageHeader">
          <div className="course-Image flex items-center justify-end p-4">
            <div className="img-div">
              <Image src={dummyImage} alt="course-Image" />
            </div>
          </div>
          <div className={`${ntr.className} course-header`}>
            <h1>Python Course {params.courseId}</h1>
            <h2>Intermidiate</h2>
          </div>
        </div>
        <div className="effects1"></div>
        <div className="course-description-enroll">
          <div className="course-description flex flex-col">
            <h1 className={`${ntr.className}`}>About this Course</h1>
            <div className="about-course">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut distinctio, tenetur
                odit eveniet earum delectus facilis suscipit illum autem laborum veniam ad, hic
                consequatur nihil vel quam aperiam esse maxime assumenda odio? Ipsam fugit saepe ad.
                Explicabo eos ad ab quod quo, non magnam, a aut, error maiores reprehenderit aperiam
                consequatur quis. Cupiditate, fuga ipsam nemo, incidunt a ad natus officiis, unde
                voluptas debitis facilis porro dolorem nesciunt atque aperiam corrupti rerum est
                maxime minus optio. Veritatis similique culpa, quod id beatae maxime fuga neque a
                perferendis iusto, recusandae possimus nostrum sunt repellendus sed illo, labore
                nemo quae? Eius, sit.
              </p>
            </div>
            <h2>Opportunities</h2>
            <div className="course-opportunities">
              <ul className="ul">
                <li> Lorem ipsum dolor sit amet.</li>
                <li> Ab quod vitae labore eaque!</li>
                <li> Lorem ipsum dolor sit amet.</li>
                <li> Ab quod vitae labore eaque!</li>
              </ul>
            </div>
           
           
            <h2>Who is this course for?</h2>
            <div className="course-eligibily">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quam aspernatur
                at tempore asperiores commodi esse! Animi inventore veritatis nulla impedit
                necessitatibus, tempora iure ad! Nihil expedita obcaecati iure et?
              </p>
            </div>
            <h2>Extra Facilities</h2>
            <div className="course-extra-facilities">
              <ul className="ul">
                <li> Ab quod vitae labore eaque! Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eveniet?</li>
              </ul>
            </div>
          </div>
          <div className="course-enroll flex flex-col justify-center">
          <h2>Course lessons</h2>
          <div className="course-lessons">
              <ul className="ul">
                <li> Lorem ipsum dolor sit amet.</li>
                <li> Ab quod vitae labore eaque!</li>
                <li> At excepturi illo dolorum nemo?</li>
                <li> Adipisci aut veritatis dicta autem?</li>
                <li> Ab illum dolores autem reiciendis.</li>
                <li> Quam officia ex ipsa saepe!</li>
                <li> Quas dolore mollitia commodi laborum.</li>
                <li> Nihil porro suscipit voluptate atque.</li>
                <li> Nostrum ratione assumenda quis minima.</li>
                <li> Deleniti eum est debitis voluptatem.</li>
                <li> Quas dolore mollitia commodi laborum.</li>
                <li> Nihil porro suscipit voluptate atque.</li>
                <li> Nostrum ratione assumenda quis minima.</li>
                <li> Deleniti eum est debitis voluptatem.</li>
                <li> Quas dolore mollitia commodi laborum.</li>
                <li> Nihil porro suscipit voluptate atque.</li>
                <li> Nostrum ratione assumenda quis minima.</li>
                <li> Deleniti eum est debitis voluptatem.</li>
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
