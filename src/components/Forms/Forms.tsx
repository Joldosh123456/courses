import scss from "./Forms.module.scss";
import { useTranslation } from "react-i18next";

function Forms() {
    const { t } = useTranslation();
    return (
      <div className="container">
       <div className={scss.forms}>
        <div className={scss.rightForms}>
        <p>{t("forms.text")}</p>
        </div>
        <div className={scss.leftForms}>
        <h1>{t("forms.title")}</h1>
        <p>{t("forms.desc")}</p>
        </div>
        </div>        
      </div>
    )
  }
  
  export default Forms