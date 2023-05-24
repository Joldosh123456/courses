import { useTranslation } from 'react-i18next'


function HomePage() {
    const {t} = useTranslation()
  return (
    <div>
      <div className='homepage-test'></div>
    </div>
  )
}

export default HomePage