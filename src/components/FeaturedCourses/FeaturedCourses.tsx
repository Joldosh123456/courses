import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import css from "./FeaturedCourses.module.scss";

import ic_leftArrow from "../../assets/FeaturedCourses/ic_left-arrow.svg";
import ic_clock from "../../assets/List/ic_clock.svg";
import ic_skillLevel from "../../assets/List/ic_skill_level.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchGetCourses } from "../../redux/slices/coursesSlice";
import i18n from "../../i18n";

function FeaturedCourses() {
  const darkScheme = useAppSelector(state => state.general.darkScheme)
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const coursesData = useAppSelector((state) => state.courses.coursesData);
  const [coursesArray, setCoursesArray] = useState(coursesData);

  useEffect(() => {
    dispatch(fetchGetCourses());
  }, [])
  
  useEffect(() => {
    setCoursesArray(coursesData);
  }, [coursesData]);

  const prevBtn = useRef(null);
  const nextBtn = useRef(null);

  const renderCoursesCards = useMemo(
    () =>
      coursesArray.map((elem, index) => (
        <SwiperSlide key={Date.now() + index}>
          <section
            key={Date.now() + index}
            className={`${css["List__card"]} ${
              elem.bestseller ? css["bestseller"] : ""
            } flex flex-col rounded-2xl overflow-hidden`}
          >
            <div className={`${css["List__card-left"]} relative`}>
              <img src={elem.image} alt={elem.title} />
            </div>

            <div
              className={`${css["List__card-right"]} flex flex-col gap-6 p-8 relative`}
            >
              <span className="text-xs font-semibold uppercase">
                {t("List.aside.select." + elem.category)}
              </span>
              <h1 className="text-lg font-semibold">
                {elem.title}
              </h1>

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
                <img src={elem.user.img} alt={elem.user.name} className='w-10 rounded-full' />
                <h2>{elem.user.name}</h2>
              </div>

              <div
                className={`${css["List__card-right-footer"]} flex items-center gap-5 [&>span]:flex [&>span]:gap-2`}
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
        </SwiperSlide>
      )),
    [coursesArray, i18n.language]
  );

  return (
    <article className={`${css['FeaturedCourses']} ${darkScheme ? css['FeaturedCourses-dark'] : ''} pt-16 sm:pt-20 pb-16 sm:pb-28`}>
      <div className={`container flex flex-col gap-2 sm:gap-10 relative sm:static`}>
        <div
          className={`${css["FeaturedCourses__header"]} flex items-end justify-between`}
        >
          <div className="w-full sm:w-2/3 flex flex-col gap-6 pb-2 text-center sm:text-left">
            <h1 className="text-3xl sm:text-5xl font-bold">
              {t("FeaturedCourses.title")}
            </h1>
            <p>{t("FeaturedCourses.description")}</p>
          </div>

          <div className={`${css['FeaturedCourses__swiper-buttons']} flex gap-1 h-fit [&>button]:p-2 [&>button]:rounded-full [&>button]:absolute [&>button]:sm:static`}>
            <button ref={prevBtn}>
              <img src={ic_leftArrow} alt="left-arrow" />
            </button>
            <button ref={nextBtn}>
              <img
                className="rotate-180"
                src={ic_leftArrow}
                alt="right-arrow"
              />
            </button>
          </div>
        </div>

        <Swiper
          navigation={{
            prevEl: prevBtn.current,
            nextEl: nextBtn.current,
          }}
          modules={[Navigation]}
          spaceBetween={33}
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            600: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              allowTouchMove: false,
            },
          }}
          className={`${css['FeaturedCourses__swiper']} w-full`}
        >
          {renderCoursesCards}
        </Swiper>
      </div>
    </article>
  );
}

export default FeaturedCourses;
