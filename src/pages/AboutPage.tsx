import About from "../components/About/About";
import AboutTeachers from "../components/AboutTeachers/AboutTeachers";
import Brands from "../components/Brands/Brands";
import Feedback from "../components/Feedback/Feedback";
import Forms from "../components/Forms/Forms";
import LatestPosts from "../components/LatestPosts/LatestPosts";

function AboutPage() {
  return (
    <main>
      <About />
      <Forms />
      <AboutTeachers />
      <Brands />
      <Feedback />
      <LatestPosts />
    </main>
  );
}

export default AboutPage;
