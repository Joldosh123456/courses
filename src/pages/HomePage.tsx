import Brands from "../components/Brands/Brands";
import Category from "../components/Category/Category";
import Why from "../components/Why/Why";
import Main from "../components/Main/Main";
import DownloadApp from "../components/DownloadApp/DownloadApp";
import FeaturedCourses from "../components/FeaturedCourses/FeaturedCourses";
import Teachers from "../components/Teachers/Teachers";
import Feedback from "../components/Feedback/Feedback";
import LatestPosts from "../components/LatestPosts/LatestPosts";


function HomePage() {
  return (
    <main className='pt-24'>
      <Main />
      <Brands />
      <Why />
      <FeaturedCourses/>
      <Category />
      <Teachers/>
      <Feedback />
      <LatestPosts />
      <DownloadApp/>
    </main>
  )
}

export default HomePage;
