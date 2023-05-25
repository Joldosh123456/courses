import { Button } from "@mui/material";
import React, { useMemo } from "react";

import css from "./Category.module.scss";

import { cards } from "../../constants/Category";
import { useAppSelector } from "../../hooks/hooks";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

function Category() {
  const darkScheme = useAppSelector((state) => state.general.darkScheme);

  const {t} = useTranslation()


  const decimalPoints = (num: number) => {
    const amount = String(num);
    let i = 0;
    const newAmount = amount.split("").reverse();

    for (let i = 0; i < newAmount.length; i++) {
      if (i % 3 === 0 && i > 0) {
        newAmount[i] = newAmount[i] + ",";
      }
    }

    newAmount.reverse();

    return newAmount;
  };

  const renderCards = useMemo(
    () =>
      cards.map((elem, index) => (
        <section key={Date.now()+index} className="sm:h-fit flex flex-col justify-center gap-y-2 p-6 rounded-lg duration-500">
          <h1 className="duration-500 font-semibold">{t(`Category.cards.${elem.title}`)}</h1>
          <p>{decimalPoints(elem.students)} {t('Category.cards.students')}</p>
        </section>
      )),
    [i18n.language]
  );

  return (
    <article
      className={`${css["Category"]} ${darkScheme ? css["Category-dark"] : ""}`}
    >
      <div className="container flex flex-col justify-between items-center gap-16 lg:flex-row lg:gap-0">
        <div
          className={`${css["Category__title"]} flex flex-col items-center text-center w-full lg:w-1/3 lg:items-start lg:text-left`}
        >
          <h1 className="text-3xl font-bold sm:text-5xl">{t('Category.title')}</h1>
          <p>{t('Category.description')}</p>
          <Button variant="contained" color="primary" size="large">
          {t('Category.button')}
          </Button>
        </div>

        <div
          className={`${css["Category__cards-container"]} w-full lg:w-3/5 grid grid-cols-2 grid-rows-8 gap-4 sm:grid-cols-3 sm:grid-rows-3 sm:gap-6`}
        >
          {renderCards}
        </div>
      </div>
    </article>
  );
}

export default Category;
