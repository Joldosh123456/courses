import { useTranslation } from 'react-i18next'
import Brands from '../components/Brands/Brands'
import Why from '../components/Why/Why'



 


function HomePage() {
  const {t} = useTranslation()
  return (
    <div>HomePage
      <Brands/>
      <Why/>
    </div>
  )
}

export default HomePage