import scss from "./Main.module.scss";
import vector from "../../assets/Main/OVERLAY COLOR.svg";
import iconBtn from "../../assets/Main/Fab.svg";
import ellipse from "../../assets/Main/Ellipse.svg";
import ellipse2 from "../../assets/Main/Ellipse (1).svg";
import ellipse3 from "../../assets/Main/Ellipse (2).svg";
import leftImg from "../../assets/Main/leftImg.svg";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();
  return (
    <div className="container flex flex-col justify-between items-center gap-16 lg:flex-row lg:gap-0">
    <div className={scss.main}>
      <div className={scss.rightMain}>
        <div className={scss.textMain}>
          <h1>
            {t("main.title")}
            <span className={scss.online}>{t("main.title2")}</span>
          </h1>
          <span className={scss.courses}>{t("main.title3")}</span>
          <span>{t("main.title4")}</span>
        </div>
        <p className={scss.desciption}>{t("main.desc")}</p>
        <div className={scss.menuBtns}>
          <Button className={scss.btnText} variant="contained" color="primary" type="submit">
            {t("main.btnText")}
            <img src={vector} alt="vector" />
          </Button>
          <div className={scss.btnVideo}>
            <img src={iconBtn} alt="icon" />
            <p>{t("main.btnText1")}</p>
          </div>
        </div>
        <div className={scss.dashed}></div>
        <div className={scss.dataMain}>
          <div className={scss.data}>
             <img src={ellipse} alt="ellipse" />
             <h1>14k+</h1>
             <p>{t("main.divider")}</p>
          </div>
          <div className={scss.data}>
             <img src={ellipse2} alt="ellipse" />
             <h1>1,05k+</h1>
             <p>{t("main.divider2")}</p>
          </div>
          <div className={scss.data}>
             <img src={ellipse3} alt="ellipse" />
             <h1>59k+</h1>
             <p>{t("main.divider3")}</p>
          </div>
        </div>
      </div>
      <div className={scss.leftMain}>
       <img src={leftImg} alt="img" />
      </div>
    </div>
    </div>
  );
};
export default Main;
