import About from "../components/About/About";
import Brands from "../components/Brands/Brands";
import CoreValues from "../components/CoreValues/CoreValues";
import Feedback from "../components/Feedback/Feedback";
import Forms from "../components/Forms/Forms";
import Learners from "../components/Learners/Learners";
import AboutTeachers from "../components/AboutTeachers/AboutTeachers";
import LatestPosts from "../components/LatestPosts/LatestPosts";


function AboutPage() {
  return (
    <main>
      <About />
      <Forms />
      <Learners />
      <CoreValues />
      <AboutTeachers/>
      <Brands />
      <Feedback />
      <LatestPosts/>
    </main>
  );
}

export default AboutPage;
