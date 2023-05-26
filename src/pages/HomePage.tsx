import Brands from '../components/Brands/Brands'
import Category from '../components/Category/Category'
import Forget from '../components/Forget/Forget'
import Why from '../components/Why/Why'
import DownloadApp from '../components/DownloadApp/DownloadApp'



 


function HomePage() {
  return (
    <main className='pt-24'>
      <Brands/>
      <Why/>
      <Category/>
      <DownloadApp/>
      <Forget/>
    </main>
  )
}

export default HomePage