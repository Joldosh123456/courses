import scss from "./Location.module.scss";
import email from "../../assets/Location/emails.svg";
import phone from "../../assets/Location/phone.svg";
import location from "../../assets/Location/Vector.svg";
import facebook from "../../assets/Location/OVERLAY COLOR.svg";
import insta from "../../assets/Location/OVERLAY COLOR (1).svg";
import inIcon from "../../assets/Location/OVERLAY COLOR (2).svg";
import twitter from "../../assets/Location/OVERLAY COLOR (3).svg";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../hooks/hooks";
import { shareLink } from "../../constants/Location/index";
import React, { useMemo } from "react";

function Location() {
  const darkScheme = useAppSelector((state) => state.general.darkScheme);
  const { t } = useTranslation();

  const shareLinks: shareLink[] = [
    {
      href: "https://www.facebook.com",
      src: facebook,
      alt: "facebook-icon.svg",
    },
    {
      href: "https://www.instagram.com",
      src: insta,
      alt: "instagram-icon.svg",
    },
    {
      href: "https://www.linkedin.com",
      src: inIcon,
      alt: "linkedin-icon.svg",
    },
    {
      href: "https://www.twitter.com",
      src: twitter,
      alt: "twitter-icon.svg",
    },
  ];

  const renderShareLinks = useMemo(
    () =>
      shareLinks.map((elem, index) => (
        <a href={elem.href} key={Date.now() + index}>
          <img src={elem.src} alt={elem.alt} />
        </a>
      )),
    []
  );
  
  return (
    <article
      className={`${scss["wrapper"]} ${
        darkScheme ? scss["Location-dark"] : ""
      }`}
    >
      <div className="container">
        <div className={scss.location}>
          <div className={scss.rightContent}>
            <h1> {t("location.title")}</h1>
            <div className={scss.iconLocation}>
              <img src={email} alt="email" />
              <b>{t("location.subtitle")}</b>
            </div>
            <p>debbie.baker@example.com</p>
            <div className={scss.iconLocation}>
              <img src={phone} alt="phone" />
              <b>{t("location.subtitle2")}</b>
            </div>
            <p>(907) 555-0101</p>
            <div className={scss.iconLocation}>
              <img src={location} alt="location" />
              <b>{t("location.subtitle3")}</b>
            </div>
            <p>{t("location.description")}</p>
            <div className={scss.dashed}></div>
            <h4>{t("location.text")}</h4>
            <div className={scss.shareBox}>
              {renderShareLinks}
            </div>
          </div>
          <div className={scss.leftContent}>
            <iframe
              className={scss.gps}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.3877622247555!2d74.59295271547174!3d42.84354487915743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb620e9c75a0b%3A0x75cc9f8c5cd22e08!2zMTMzINGD0LsuINCQ0YXRg9C90LHQsNC10LLQsCwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1684248110723!5m2!1sru!2skg"
              width="662"
              height="498"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Location;
