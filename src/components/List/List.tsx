import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  FormControl,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import css from "./List.module.scss";

import { course, filters, star } from "../../constants/List";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchGetCourses } from "../../redux/slices/coursesSlice";
import ic_search from "../../assets/List/ic_search.svg";
import ic_star from "../../assets/List/ic_star.svg";
import ic_clock from "../../assets/List/ic_clock.svg";
import ic_skillLevel from "../../assets/List/ic_skill_level.svg";
import ic_filter from "../../assets/List/ic_filter.svg";
import i18n from "../../i18n";
import { Link } from "react-router-dom";

function List() {
  const darkScheme = useAppSelector((state) => state.general.darkScheme);
  const { t } = useTranslation();

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

  const [searchValue, setSearchValue] = useState("");
  const [duration, setDuration] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [fee, setFee] = useState("");
  const [language, setLanguage] = useState("");

  const [page, setPage] = useState(1);
  const pageElems = 8;
  const handlePaginationChange = (
    e: any,
    value: React.SetStateAction<number>
  ) => {
    setPage(value);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [page]);

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
      <h2>{t("List.aside." + elem.title)}</h2>

      <div className={`${css["List__aside-select-container"]}`}>
        <FormControl
          sx={{
            width: "100%",
            minWidth: 120,
            border: "none",
            "& .MuiInputBase-root": {
              height: "54px",
              minHeight: "54px",
              color: darkScheme ? "white" : "rgba(33, 43, 54, 1)",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              background: "rgba(var(--p-color-dark-rgb), 0.08)",
              border: "none",
              borderRadius: "8px",
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
            <MenuItem value={""}>{t("List.aside.all")}</MenuItem>
            {elem.data.map((elem2, index2) => (
              <MenuItem key={Date.now() + index2} value={elem2}>
                {elem2 == Number(elem2)
                  ? elem.title == "duration"
                    ? elem2 +
                      ` ${t("List.aside.select.hours")} ${t(
                        "List.aside.select.up"
                      )}`
                    : "$" + elem2 + ` ${t("List.aside.select.up")}`
                  : t("List.aside.select." + elem2)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  ));

  const dispatch = useAppDispatch();

  const coursesData = useAppSelector((state) => state.courses.coursesData);
  useEffect(() => {
    dispatch(fetchGetCourses());
  }, []);

  useEffect(() => {
    let copy = coursesData.filter(
      (elem, index) =>
        elem.rating >= starsActive.filter((elem) => elem.active == true).length
    );

    setCoursesArray(copy);
  }, [coursesData]);

  const [coursesArray, setCoursesArray] = useState(coursesData);

  const renderCoursesCards = useMemo(
    () =>
      coursesArray.map((elem, index) =>
        index >= (page - 1) * 8 && index < pageElems * page ? (
          <Link key={Date.now() + index} to={`/list/${elem.id}`} className="w-full">
            <section
              className={`${css["List__card"]} ${
                elem.bestseller ? css["bestseller"] : ""
              } flex flex-col sm:flex-row rounded-2xl overflow-hidden`}
            >
              <div className={`${css["List__card-left"]} relative`}>
                <img src={elem.image} alt={elem.title} />
              </div>

              <div
                className={`${css["List__card-right"]} flex flex-col gap-6 p-8`}
              >
                <span className="text-xs font-semibold uppercase">
                  {t("List.aside.select." + elem.category)}
                </span>
                <h1 className="text-lg font-semibold">
                  {elem.id} {elem.title}
                </h1>
                <p>{elem.description}</p>

                <div
                  className={`${css["List__card-rating"]} flex items-center gap-1 text-sm`}
                >
                  <span>
                    <svg
                      width="21"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-1ohwd10-3 bjNpWs"
                    >
                      <defs>
                        <linearGradient id="star_16_svg__a">
                          <stop
                            offset={elem.rating * 20 + "%"}
                            stopColor="#FFD200"
                          ></stop>
                          <stop
                            offset="50%"
                            stopColor="#999"
                            stopOpacity="0.5"
                          ></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#star_16_svg__a)"
                        d="M8.451 1.49a1 1 0 00-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3.374 3.374 0 01-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 00-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9.167 9.167 0 00-.145.73c-.024.184-.042.445.087.68a1 1 0 00.733.508c.265.038.504-.072.667-.16a9.15 9.15 0 00.632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 00.733-.508c.13-.235.11-.496.087-.68a9.199 9.199 0 00-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 00-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3.372 3.372 0 01-.184-.018h-.003l-.002-.003a3.421 3.421 0 01-.069-.172l-.928-2.39a9.644 9.644 0 00-.296-.713c-.083-.17-.216-.405-.46-.529z"
                      ></path>
                    </svg>
                  </span>
                  <h2>{elem.rating.toFixed(1)}</h2>
                  <p>
                    ({elem.reviews} {t("List.aside.card.reviews")})
                  </p>
                  <hr />
                  <h2>
                    <span className="font-semibold">{elem.students}</span>{" "}
                    {t("List.aside.card.students")}
                  </h2>
                </div>

                <div
                  className={`${css["List__card-right-user"]} flex items-center gap-2`}
                >
                  <img src={elem.user.img} alt={elem.user.name} />
                  <h2>{elem.user.name}</h2>
                </div>

                <div
                  className={`${css["List__card-right-footer"]} flex items-center gap-5`}
                >
                  <span>
                    <img src={ic_clock} alt="ic_clock.svg" />
                    {elem.hours + ` ${t("List.aside.select.hours")}`}
                  </span>

                  <span>
                    <img src={ic_skillLevel} alt="ic_skill_level.svg" />
                    {t("List.aside.select." + elem.level)}
                  </span>
                </div>

                <h1 className={`${css["List__card-price"]} text-2xl font-bold`}>
                  <span>{elem.prevPrice ? `$${elem.prevPrice}` : ""}</span> $
                  {elem.currPrice}
                </h1>
              </div>

              <h3 className={css["bestseller-title"]}>
                {elem.bestseller ? t("List.aside.card.bestseller") : ""}
              </h3>
            </section>
          </Link>
        ) : (
          ""
        )
      ),
    [coursesArray, page, i18n.language]
  );

  useEffect(() => {
    let arrayCopy = coursesData.slice(0);
    let search = searchValue.trim().toLowerCase().split(" ");

    let newArray = arrayCopy.filter((elem, index) => {
      let title = elem.title.toLowerCase().split(" ");

      const firstWordIndex = title.findIndex(
        (elem2) => elem2.substring(0, search[0].length) == search[0]
      );

      if (firstWordIndex > -1) {
        if (
          title
            .splice(firstWordIndex, search.length)
            .join(" ")
            .substring(0, search.join(" ").length) == search.join(" ")
        ) {
          return elem;
        }
      }
      return;
    });

    let finalArray = newArray.filter(
      (elem, index) =>
        elem.rating >=
          starsActive.filter((elem) => elem.active == true).length &&
        (category ? elem.category == category : elem) &&
        (level ? elem.level == level : elem) &&
        (duration ? String(elem.hours) >= duration : elem) &&
        (fee ? String(elem.currPrice) >= fee : elem)
    );

    setPage(1);
    setCoursesArray(finalArray);
  }, [starsActive, category, level, duration, fee, searchValue]);

  const [isFilterActive, setIsFilterActive] = useState(false);
  let body = document.querySelector("body") as HTMLElement;

  useEffect(() => {
    if (isFilterActive) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [isFilterActive]);

  return (
    <article
      className={`${css["List"]} ${
        darkScheme ? css["List-dark"] : ""
      } pt-10 pb-28 relative overflow-hidden`}
    >
      <div
        className={`container ${css["List__container"]} flex flex-col lg:grid gap-16`}
      >
        <div
          className={`${css["List__title"]} h-fit col-start-1 col-end-3 flex items-center justify-between`}
        >
          <h1 className="text-3xl sm:text-5xl font-bold">{t("List.title")}</h1>

          <Button
            variant="contained"
            color="secondary"
            className={`${css["List__filter-button"]} flex !items-items gap-2 lg:!hidden`}
            size="large"
            onClick={() => setIsFilterActive(true)}
          >
            <img src={ic_filter} alt="ic_filter.svg" />
            {t("List.filter")}
          </Button>
        </div>

        <div
          className={`${css["List__aside-container"]} ${
            isFilterActive ? css["List__aside-container_active"] : "F"
          } col-start-1 col-end-2 row-start-2 row-end-4 flex flex-col items-center absolute lg:static`}
        >
          <div
            className={`${css["List__aside-background"]}`}
            onClick={() => setIsFilterActive(false)}
          ></div>
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
                  placeholder={t("List.aside.search") + "..."}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </label>
            </div>

            <div>
              <h2>{t("List.aside.rating")}</h2>

              <div className="flex items-center flex-wrap gap-3">
                <div
                  className={`${css["List__stars-container"]} flex items-center gap-2`}
                >
                  {renderStars}
                </div>

                <span>{t("List.aside.up")}</span>
              </div>
            </div>

            {renderFilters}
          </aside>
        </div>

        <div
          className={`${css["List__pages"]} col-start-2 col-end-3 row-start-2 row-end-4 flex flex-col items-center justify-between gap-20`}
        >
          <div
            className={`${css["List__cards-container"]} flex flex-col items-center justify-between gap-8`}
          >
            {renderCoursesCards.length ? renderCoursesCards : "Empty..."}
          </div>

          <Pagination
            count={Math.ceil(coursesArray.length / pageElems)}
            className="BlogPage__posts-main-pagination"
            page={page}
            boundaryCount={0}
            onChange={handlePaginationChange}
            sx={{
              "& .MuiInputBase-root": {
                border: "5px solid red",
              },
              "& .Mui-selected": {
                backgroundColor: "rgba(var(--main-orange-rgb), 0.1)!important",
                color: "var(--main-orange)",
              },
              "& .Mui-selected:hover": {
                backgroundColor: "rgba(var(--main-orange-rgb), 0.2)!important",
              },
              "& button[disabled]": {
                backgroundColor: "rgba(var(--main-orange-rgb), 0)!important",
                color: "var(--main-orange)",
              },
              "& button": {
                width: "40px",
                height: "40px",
                borderRadius: "100%",
                color: darkScheme ? "white" : "rgba(33, 43, 54, 1)",
              },
              "& button:hover": {
                backgroundColor: "rgba(var(--main-orange-rgb), 0.04)!important",
                color: "var(--main-orange)",
              },
              "& button:hover svg path": {
                backgroundColor: "rgba(var(--main-orange-rgb), 0.05)!important",
                fill: "var(--main-orange)",
              },
            }}
          />
        </div>
      </div>
    </article>
  );
}

export default List;
