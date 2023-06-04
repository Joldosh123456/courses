import CourseDetailsHero from "../components/CourseDetailsHero/CourseDetailsHero"
import CourseDetailsLessons from "../components/CourseDetailsLessons/CourseDetailsLessons"
import CourseDetailsReviews from "../components/CourseDetailsReviews/CourseDetailsReviews"

function DetailsPage() {
  return (
    <main>
      <CourseDetailsHero />
      <CourseDetailsLessons />
      <CourseDetailsReviews />
    </main>
  )
}

export default DetailsPage