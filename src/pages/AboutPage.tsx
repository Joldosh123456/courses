import About from "../components/About/About";
import AboutTeachers from "../components/AboutTeachers/AboutTeachers";
import Brands from "../components/Brands/Brands";
import CoreValues from "../components/CoreValues/CoreValues";
import Feedback from "../components/Feedback/Feedback";
import Forms from "../components/Forms/Forms";

function AboutPage() {
  return (
    <main>
      <About />
      <Forms />
      <CoreValues />
      <AboutTeachers />
      <Brands />
      <Feedback />
    </main>
  );
}

export default AboutPage;
