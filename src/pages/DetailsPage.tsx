import {useEffect} from 'react'
import { useLocation } from 'react-router'

import CourseDetailsHero from "../components/CourseDetailsHero/CourseDetailsHero"
import CourseDetailsLessons from "../components/CourseDetailsLessons/CourseDetailsLessons"
import CourseDetailsReviews from "../components/CourseDetailsReviews/CourseDetailsReviews"
import Forget from '../components/Forget/Forget'
import SimilarCourses from "../components/SimilarCourses/SimilarCourses"

function DetailsPage() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({top:0})
  }, [location])
  return (
    <main>
      <CourseDetailsHero />
      <CourseDetailsLessons />
      <CourseDetailsReviews />
      <SimilarCourses />
      <Forget />
    </main>
  )
}

export default DetailsPage