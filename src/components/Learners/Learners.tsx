import scss from "./Learners.module.scss";
import { useTranslation } from "react-i18next";
import leftImg from "../../assets/About/Image Ratio.svg";

function Learners() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className={scss.learn}>
        <div className={scss.rightLearn}>
          <div className={scss.LearnBox}>
            <h2>{t("learners.title")}</h2>
            <h1>{t("learners.subtitle")}</h1>
            <p>{t("learners.desc")}</p>
          </div>
          <div className={scss.LearnBox}>
            <h2>{t("learners.title2")}</h2>
            <h1>{t("learners.subtitle2")}</h1>
            <p>{t("learners.desc2")}</p>
          </div>
          <div className={scss.LearnBox}>
            <h2>{t("learners.title3")}</h2>
            <h1>{t("learners.subtitle3")}</h1>
            <p>{t("learners.desc3")}</p>
          </div>
        </div>
        <div className={scss.leftLearn}>
          <img src={leftImg} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Learners;
