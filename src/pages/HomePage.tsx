import { useTranslation } from "react-i18next";
import Brands from "../components/Brands/Brands";
import Category from "../components/Category/Category";
import Why from "../components/Why/Why";
import Main from "../components/Main/Main";

function HomePage() {
  const { t } = useTranslation();
  return (
    <main>
      <Main />
      {/* <Brands />
      <Why />
      <Category /> */}
    </main>
  );
}

export default HomePage;
