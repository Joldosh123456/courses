
import { useTranslation } from "react-i18next";
import Brands from "../components/Brands/Brands";
import Category from "../components/Category/Category";
import Why from "../components/Why/Why";
import Main from "../components/Main/Main";
import Forget from '../components/Forget/Forget'
import Teachers from '../components/Teachers/Teachers'



 


function HomePage() {
  const { t } = useTranslation();
  return (
    <main className='pt-24'>
      <Main />
      <Brands />
      <Why />
      <Category />
      <Teachers/>
      <Forget/>
    </main>
  )
}

export default HomePage;
