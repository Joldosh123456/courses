import scss from "./CoreValues.module.scss";
import { useTranslation } from "react-i18next";
import curve from "../../assets/About/curve.svg";
import chat from "../../assets/About/chat-bot.svg";
import irport from "../../assets/About/airport.svg";
import event from "../../assets/About/ic_event.svg";
import { useAppSelector } from "../../hooks/hooks";

function CoreValues() {
  const { t } = useTranslation();
  const darkScheme = useAppSelector((state) => state.general.darkScheme);
  return (
    <div className={`${scss["coreValues"]} ${darkScheme ? scss["coreValues-dark"] : ""}`}>
      <div className="container">
        <div className={scss.values}>
          <div className={scss.topValues}>
            <h1>{t("coreValues.title")}</h1>
            <p>{t("coreValues.desc")}</p>
          </div>
          <div className={scss.bottomValues}>
            <div className={scss.valuesBox}>
              <img src={curve} alt="curve" />
              <h2>{t("coreValues.subtitle")}</h2>
              <p>{t("coreValues.subtext")}</p>
            </div>
            <div className={scss.valuesBox}>
              <img src={chat} alt="chat" />
              <h2>{t("coreValues.subtitle2")}</h2>
              <p>{t("coreValues.subtext")}</p>
            </div>
            <div className={scss.valuesBox}>
              <img src={irport} alt="irport" />
              <h2>{t("coreValues.subtitle3")}</h2>
              <p>{t("coreValues.subtext")}</p>
            </div>
            <div className={scss.valuesBox}>
              <img src={event} alt="event" />
              <h2>{t("coreValues.subtitle4")}</h2>
              <p>{t("coreValues.subtext")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreValues;
