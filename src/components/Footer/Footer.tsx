import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";

import css from "./Footer.module.scss";

import mainLogoLight from "../../assets/Footer/mainLogo-lightMode.svg";
import mainLogoDark from "../../assets/Footer/mainLogo-darkMode.svg";
import facebookIcon from "../../assets/Footer/facebookIcon-lightMode.svg";
import instagramIcon from "../../assets/Footer/instagramIcon-lightMode.svg";
import linkedInIcon from "../../assets/Footer/linkedInIcon-lightMode.svg";
import twitterIcon from "../../assets/Footer/twitterIcon-lightMode.svg";
import letterIcon from "../../assets/Footer/letterIcon-lightMode.svg";
import geopositionIcon from "../../assets/Footer/geopositionIcon-lightMode.svg";
import arrowIcon from "../../assets/Footer/arrow-darkMode.svg";
import { useAppSelector } from "../../hooks/hooks";
import { addressInfo, socialLink } from "../../constants/Footer";
import i18n from "../../i18n";

function Footer() {
  const darkScheme = useAppSelector((state) => state.general.darkScheme);

  const { t } = useTranslation();

  const [emailInputValue, setEmailInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, setState: any) => {
    e.preventDefault();

    setState("");
  };

  const socialLinks: socialLink[] = [
    {
      href: "https://www.facebook.com",
      src: facebookIcon,
      alt: "facebook-icon.svg",
    },
    {
      href: "https://www.instagram.com",
      src: instagramIcon,
      alt: "instagram-icon.svg",
    },
    {
      href: "https://www.linkedin.com",
      src: linkedInIcon,
      alt: "linkedin-icon.svg",
    },
    {
      href: "https://www.twitter.com",
      src: twitterIcon,
      alt: "twitter-icon.svg",
    },
  ];

  const renderSocialLinks = useMemo(
    () =>
      socialLinks.map((elem, index) => (
        <a href={elem.href} key={Date.now() + index}>
          <img src={elem.src} alt={elem.alt} />
        </a>
      )),
    []
  );


  const addressInfoArr: addressInfo[] = [
    {
      src: letterIcon,
      alt: "letter-icon.svg",
      info: "info@example.com",
      translate: false,
    },
    {
      src: geopositionIcon,
      alt: "geoposition-icon.svg",
      info: "footer.address",
      translate: true,
    },
  ];

  const renderAddressInfo = useMemo(
    () =>
      addressInfoArr.map((elem, index) => (
        <address key={Date.now() + index}>
          <img src={elem.src} alt={elem.alt} />
          {elem.translate ? t(elem.info) : elem.info}
        </address>
      )),
    [i18n.language]
  );

  return (
    <footer className={darkScheme ? css["footer-dark"] : ""}>
      <article className={css["footer__main"]}>
        <div className={`container ${css['footer__main-container']}`}>
          <div className={css["footer__main-content"]}>
            <section className={css["footer__title"]}>
              <img
                className={css["footer__title-logo"]}
                src={darkScheme ? mainLogoDark : mainLogoLight}
                alt="main-logo.svg"
              />

              <p>{t("footer.text")}</p>

              <div className={css["footer__title-socials"]}>{renderSocialLinks}</div>
            </section>

            <section className={css["footer__contacts"]}>{renderAddressInfo}</section>

            <section className={css["footer__form-section"]}>
              <form onSubmit={(e) => handleSubmit(e, setEmailInputValue)}>
                <input
                  type="email"
                  placeholder={t("footer.input-placeholder") || ""}
                  value={emailInputValue}
                  onChange={(e) => setEmailInputValue(e.target.value)}
                  required
                />
                <Button variant="contained" color="secondary" type="submit">
                  <img src={arrowIcon} alt="arrow-icon.svg" />
                </Button>
              </form>
            </section>
          </div>

          <section className={css["footer__copyright"]}>
            <p>{t("footer.copyright")}</p>

            <nav>
              <a href="#">{t("footer.help-center")}</a>
              <a href="#">{t("footer.terms-of-service")}</a>
            </nav>
          </section>
        </div>
      </article>
    </footer>
  );
}

export default Footer;
