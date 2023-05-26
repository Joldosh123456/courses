import Brands from "../components/Brands/Brands";
import Category from "../components/Category/Category";
import Why from "../components/Why/Why";
import Main from "../components/Main/Main";
import Forget from '../components/Forget/Forget'
import Teachers from '../components/Teachers/Teachers'
import DownloadApp from '../components/DownloadApp/DownloadApp'




 


function HomePage() {
  return (
    <main className='pt-24'>
      <Main />
      <Brands />
      <Why />
      <Category />
      <Teachers/>
      <DownloadApp/>
      <Forget/>
    </main>
  )
}

export default HomePage;
