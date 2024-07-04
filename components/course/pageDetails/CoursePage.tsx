import '@/components/course/pageDetails/Coursepage.scss'
import { CourseCard } from '../CourseCardSection/CourseCard'

export const CoursePage = () => {
  return (
    <>
        <h1 className='font-sans font-normal text-7xl'>Courses</h1>
        <p>the card is not completed</p>
        <div id="card-section">
            <CourseCard/>
        </div>
    </>
  )
}
