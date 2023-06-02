import scss from "./Contact.module.scss";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../hooks/hooks";
import { Button } from "@mui/material";
import illustration from "../../assets/Location/illustration_courses_contact.svg";

function Contact() {
  const darkScheme = useAppSelector((state) => state.general.darkScheme);

  const { t } = useTranslation();

  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setInputValue("");
  };
  return (
    <div className="container ">
      <div className={scss.contact}>
        <div className={scss.rightContact}>
          <img src={illustration} alt="illustration" />
        </div>
        <div className={scss.leftContact}>
          <h1>{t("contact.title")}</h1>
          <p>{t("contact.description")}</p>
          <input
            className={scss.inputContact}
            type="email"
            placeholder={t("contact.placeholder") || ""}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />
          <input
            className={scss.inputContact}
            type="email"
            placeholder={t("contact.placeholder2") || ""}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />
          <input
            className={scss.inputContact}
            type="email"
            placeholder={t("contact.placeholder3") || ""}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />
          <input
            className={scss.inputMessage}
            type="email"
            placeholder={t("contact.placeholder4") || ""}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />
          <Button
            className={scss.btnContact}
            type="submit"
            variant="contained"
            color="primary"
          >
            {t("contact.btnText")}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
