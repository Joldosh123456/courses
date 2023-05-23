import { useTranslation } from 'react-i18next'
import Brands from '../components/Brands/Brands'



 


function HomePage() {
  const {t} = useTranslation()
  return (
    <div>HomePage
      <Brands/>
    </div>
  )
}

export default HomePage