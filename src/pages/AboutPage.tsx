import About from "../components/About/About";
import Brands from "../components/Brands/Brands";
import CoreValues from "../components/CoreValues/CoreValues";
import FeaturedCourses from "../components/FeaturedCourses/FeaturedCourses";
import Feedback from "../components/Feedback/Feedback";
import Forget from "../components/Forget/Forget";
import Forms from "../components/Forms/Forms";
import Learners from "../components/Learners/Learners";

function AboutPage() {
  return (
    <div>
      <About />
      <Forms />
      <Learners />
      <CoreValues />
      <Brands />
      <Feedback />
      <FeaturedCourses />
      <Forget />
    </div>
  );
}

export default AboutPage;
