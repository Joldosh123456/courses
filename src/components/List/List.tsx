import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FormControl,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import css from "./List.module.scss";

import ic_search from "../../assets/List/ic_search.svg";
import ic_star from "../../assets/List/ic_star.svg";
import { filters, star } from "../../constants/List";




function List() {
  const {t} = useTranslation()


  const stars: star[] = [
    {
      active: true,
      hover: false,
    },
    {
      active: true,
      hover: false,
    },
    {
      active: true,
      hover: false,
    },
    {
      active: true,
      hover: false,
    },
    {
      active: false,
      hover: false,
    },
  ];
  const [starsActive, setStarsActive] = useState(stars.reverse());

  const handleStarClick = (clickIndex: number) => {
    console.log("click");
    let arrCopy = starsActive.slice(0);

    arrCopy.map((elem, index) => {
      if (index <= Math.abs(clickIndex - 4)) {
        elem.active = true;
      } else {
        elem.active = false;
      }
    });

    setStarsActive(arrCopy.reverse());
  };

  const renderStars = useMemo(
    () => [
      starsActive.map((elem, index, arr) => (
        <img
          key={Date.now() + index}
          className={`${!elem.active ? css["star-disabled"] : ""} ${
            elem.hover ? css["star-hover"] : ""
          } ${css["List__aside-star"]} cursor-pointer`}
          // style={{order: arr.length - index}}
          src={ic_star}
          alt="ic_star.svg"
          onClick={() => handleStarClick(index)}
        />
      )),
    ],
    [starsActive]
  );

  const [duration, setDuration] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [fee, setFee] = useState("");
  const [language, setLanguage] = useState("");

  const defineState = (index: number) => {
    switch (index) {
      case 0:
        return duration;
        break;
      case 1:
        return category;
        break;
      case 2:
        return level;
        break;
      case 3:
        return fee;
        break;
      case 4:
        return language;
        break;

      default:
        break;
    }
  };

  const defineStateFunc = (index: number) => {
    switch (index) {
      case 0:
        return setDuration;
        break;
      case 1:
        return setCategory;
        break;
      case 2:
        return setLevel;
        break;
      case 3:
        return setFee;
        break;
      case 4:
        return setLanguage;
        break;

      default:
        break;
    }
  };

  const handleChange = (event: SelectChangeEvent, setValue: any) => {
    setValue(event.target.value);
  };

  const renderFilters = filters.map((elem, index) => (
    <div key={Date.now() + index}>
      <h2>{t('List.aside.' + elem.title)}</h2>

      <div className={`${css["List__aside-select-container"]}`}>
        <FormControl
          sx={{
            width: "100%",
            minWidth: 120,
            border: "none",
            '& .MuiInputBase-root': {
              height: '54px',
              minHeight: '54px',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              background: 'rgba(var(--p-color-dark-rgb), 0.08)',
              border: 'none',
              borderRadius: '8px'
            },
          }}
        >
          <Select
            value={defineState(index)}
            onChange={(e) => handleChange(e, defineStateFunc(index))}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            variant="outlined"
          >
            <MenuItem value={""}>{t('List.aside.all')}</MenuItem>
            {elem.data.map((elem, index) => (
              <MenuItem
                key={Date.now() + index}
                value={(index + 1) * 10}
              >
                {elem == Number(elem) ? elem : t('List.aside.select.' + elem)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  ));



  const [page, setPage] = useState(1)
  const handlePaginationChange = (e: any, value: React.SetStateAction<number>) => {
    setPage(value)
  }


  return (
    <article className={`pt-10 pb-28`}>
      <div className={`container ${css["List__container"]} grid gap-16`}>
        <div className={`${css["List__title"]} h-fit col-start-1 col-end-3`}>
          <h1 className="text-3xl sm:text-5xl font-bold">{t('List.title')}</h1>
        </div>

        <div className={`col-start-1 col-end-2 row-start-2 row-end-4 flex flex-col items-center`}>
          <div className={`${css["List__aside-copy"]}`}></div>
          <aside className={`${css["List__aside"]} flex flex-col gap-6`}>
            <div>
              <label
                className="p-4 grid grid-rows-1 items-center rounded-lg"
                aria-label="search"
              >
                <img src={ic_search} alt={"ic_search.svg"} />
                <input
                  className="col-start-2"
                  type="text"
                  placeholder={t('List.aside.search') + '...'}
                />
              </label>
            </div>

            <div>
              <h2>{t('List.aside.rating')}</h2>

              <div className="flex items-center gap-3">
                <div
                  className={`${css["List__stars-container"]} flex items-center gap-2`}
                >
                  {renderStars}
                </div>

                <span>{t('List.aside.up')}</span>
              </div>
            </div>

            {renderFilters}
          </aside>
        </div>

        <div
          className={`${css["List__pages"]} col-start-2 col-end-3 row-start-2 row-end-4 flex flex-col items-center justify-between`}
        >
          <div></div>

          <Pagination 
            count={10} 
            className='BlogPage__posts-main-pagination'
            page={page}
            boundaryCount={0}
            onChange={handlePaginationChange}
            sx={{
              '& .Mui-selected': {
                backgroundColor: 'rgba(var(--main-orange-rgb), 0.1)!important',
                color: 'var(--main-orange)'
              },
              '& .Mui-selected:hover': {
                backgroundColor: 'rgba(var(--main-orange-rgb), 0.2)!important',
              },
              '& button[disabled]': {
                backgroundColor: 'rgba(var(--main-orange-rgb), 0)!important',
                color: 'var(--main-orange)'
              },
              '& button':{
                width: '40px',
                height: '40px',
                borderRadius: "100%"
              },
              '& button:hover': {
                backgroundColor: 'rgba(var(--main-orange-rgb), 0.04)!important',
                color: 'var(--main-orange)'
              },
              '& button:hover svg path': {
                backgroundColor: 'rgba(var(--main-orange-rgb), 0.05)!important',
                fill: 'var(--main-orange)'
              }
            }}
          />
        </div>
      </div>
    </article>
  );
}

export default List;
