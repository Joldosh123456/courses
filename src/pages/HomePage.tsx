import { useTranslation } from 'react-i18next'
import Brands from '../components/Brands/Brands'
import Category from '../components/Category/Category'
import Forget from '../components/Forget/Forget'
import Teachers from '../components/Teachers/Teachers'
import Why from '../components/Why/Why'



 


function HomePage() {
  const {t} = useTranslation()
  return (
    <main className='pt-24'>
      <Brands/>
      <Why/>
      <Category/>
      <Teachers/>
      <Forget/>
    </main>
  )
}

export default HomePage