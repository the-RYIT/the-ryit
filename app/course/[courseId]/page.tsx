import { useRouter } from "next/router";
import Image from "next/image";
import { ntr } from "@/utils/fonts/fonts";
import "@/components/course/CourseCardSection/courseDetails.scss";
import python from "@/public/assets/images/course/python.jpg";

const CourseDetails = ({ params }: { params: { courseId: string } }) => {
  return (
    <>
      <div className="h-screen w-full flex items-start justify-start absolute course-details-container flex-col">
        <div id="CourseImageHeader">
          <div className="course-Image flex items-center justify-end p-4">
            <div className="img-div">
              <Image src={python} alt="course-Image" />
            </div>
          </div>
          <div className={`${ntr.className} course-header`}>
            <h1>Python Course {params.courseId}</h1>
            <h2>Intermediate</h2>
          </div>
        </div>
        <div className="effects1"></div>
        <div className="effects2"></div>
        <div className="course-description-enroll">
          <div className="course-description flex flex-col">
            <h1 className={`${ntr.className}`}>About this Course</h1>
            <div className="about-course">
              <p>
                This introductory Python course is designed for beginners who want to learn the fundamentals of programming. It covers basic concepts, syntax, and data structures, providing a strong foundation for further learning. Students will gain hands-on experience through practical exercises and projects, enabling them to apply their skills in real-world scenarios.
              </p>
            </div>
            <h2>Opportunities</h2>
            <div className="course-opportunities">
              <ul className="ul">
                <li> Python is in high demand across various industries, including web development, data science, and automation.</li>
                <li> Mastering Python can open doors to advanced roles such as data analyst, machine learning engineer, and software developer.</li>
                <li> With Python skills, students can take on freelance projects, offering flexibility and diverse work opportunities.</li>
              </ul>
            </div>
           
            <h2>Who is this course for?</h2>
            <div className="course-eligibily">
              <p>
                This course is suitable for beginners with no prior programming experience, individuals looking to switch careers into tech, and students who want to add programming skills to their resume.
              </p>
            </div>
            <h2>Extra Facilities</h2>
            <div className="course-extra-facilities">
              <ul className="ul">
                <li> Access to experienced mentors for guidance and support.</li>
                <li> Join a community of learners for collaboration and networking.</li>
                <li> Additional learning materials and resources provided.</li>
              </ul>
            </div>
          </div>
          <div className="course-enroll flex flex-col justify-center">
          <h2>Course lessons</h2>
          <div className="course-lessons">
              <ul className="ul">
                <li> Introduction to Python</li>
                <li> Variables and Data Types</li>
                <li> Conditional Statements</li>
                <li> Loops</li>
                <li> Functions</li>
                <li> Lists and Dictionaries</li>
                <li> File Handling</li>
                <li> Error and Exception Handling</li>
                <li> Modules and Packages</li>
                <li> Introduction to Object-Oriented Programming</li>
                <li> Working with Libraries</li>
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
