import scss from "./About.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import leftImgCon from "../../assets/About/illustration_courses_hero.svg";

function About() {
  const { t } = useTranslation();

  return (
    <div className={scss.about}>
      <div className="container">
        <div className={scss.aboutCont}>
        <div className={scss.rightAbout}>
          <h1>{t("about.title")}</h1>
          <p>{t("about.desc")}</p>
          <Button
            className={scss.btnText}
            variant="contained"
            color="primary"
            size="large"
          >
            {t("about.btnText")}
          </Button>
        </div>
        <div className={scss.leftAbout}>
          <img src={leftImgCon} alt="leftImgContent" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;
