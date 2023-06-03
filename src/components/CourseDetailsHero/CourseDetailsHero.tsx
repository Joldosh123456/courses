import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { course } from "../../constants/List";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchGetCourses } from "../../redux/slices/coursesSlice";
import { useTranslation } from "react-i18next";

import css from "./CourseDetailsHero.module.scss";

import i18n from "../../i18n";
import ic_chevron_right from "../../assets/CourseDetailsHero/ic_chevron_right.svg";
import ic_clock from "../../assets/CourseDetailsHero/ic_clock.svg";
import ic_file from "../../assets/CourseDetailsHero/ic_file.svg";
import ic_global from "../../assets/CourseDetailsHero/ic_global.svg";
import ic_question from "../../assets/CourseDetailsHero/ic_question.svg";
import ic_skill_level from "../../assets/CourseDetailsHero/ic_skill_level.svg";
import ic_play from "../../assets/CourseDetailsHero/ic_play.svg";
import ic_pause from "../../assets/CourseDetailsHero/ic_pause.png";
import { courseParticular } from "../../constants/CourseDetailsHero";

function CourseDetailsHero() {
  const darkScheme = useAppSelector((state) => state.general.darkScheme);
  const { t } = useTranslation();

  const { courseId } = useParams();
  const coursesData = useAppSelector((state) => state.courses.coursesData);
  const [currCourse, setCurrCourse] = useState<course>();

  const dispatch = useAppDispatch();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    dispatch(fetchGetCourses());
  }, []);

  useEffect(() => {
    setCurrCourse(
      coursesData.filter((elem: course) => elem.id === Number(courseId))[0]
    );
  }, [coursesData]);

  const courseParticulars: courseParticular[] = [
    {
      img: ic_clock,
      alt: "ic_clock",
      amount: currCourse?.hours,
      title: "hours",
    },
    {
      img: ic_skill_level,
      alt: "ic_skill_level",
      title: currCourse?.level || "",
    },
    {
      img: ic_file,
      alt: "ic_file",
      amount: 89,
      title: "lessons",
    },
    {
      img: ic_global,
      alt: "ic_global",
      title: "english",
    },
    {
      img: ic_question,
      alt: "ic_question",
      amount: 89,
      title: "quizzes",
    },
  ];

  const renderParticulars = useMemo(
    () =>
      courseParticulars.map((elem, index) => (
        <div
          key={Date.now() + index}
          className="flex items-center gap-2 capitalize text-sm"
        >
          <img src={elem.img} alt={elem.alt} />
          <h1>
            {elem.amount!} {t("CourseDetailsHero." + elem.title)}
          </h1>
        </div>
      )),
    [i18n.language, courseParticulars]
  );

  const [isPause, setIsPause] = useState(false);

  const handleImageClick = () => {
    if (isPause) {
      setIsPause(false);
    }
    return;
  };

  return (
    <article
      className={`${css["CourseDetailsHero"]} ${
        darkScheme ? css["CourseDetailsHero-dark"] : ""
      } pb-20`}
    >
      <div className={`container ${css["CourseDetailsHero__container"]}`}>
        {currCourse ? (
          <>
            <nav
              className={`${css["CourseDetailsHero__breadcrumb-nav"]} py-10 flex items-center gap-2`}
            >
              <Link to={"/"}>{t("header.home")}</Link>
              <img src={ic_chevron_right} alt="chevron-right" />
              <Link to={"/list"}>{t("header.select.list")}</Link>
              <img src={ic_chevron_right} alt="chevron-right" />
              <Link to={"#"}>{currCourse.title}</Link>
            </nav>

            <div
              className={`${css["CourseDetailsHero__content"]} pt-6 flex flex-col sm:flex-row gap-16 sm:gap-20`}
            >
              <div
                className={`${css["CourseDetailsHero__left"]} w-3/5 flex flex-col gap-4`}
              >
                {currCourse.bestseller ? (
                  <h3
                    className={`${css["bestseller-title"]} text-xs font-semibold`}
                  >
                    {t("List.aside.card.bestseller")}
                  </h3>
                ) : (
                  ""
                )}

                <h1 className="text-2xl sm:text-4xl font-bold">
                  {currCourse.title}
                </h1>
                <span
                  className={`${css["category"]} uppercase text-xs font-semibold`}
                >
                  {t("List.aside.select." + currCourse.category)}
                </span>
                <p>{currCourse.description}</p>

                <div
                  className={`${css["CourseDetailsHero__left-rating"]} py-2 flex items-center gap-1 text-sm`}
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
                            offset={currCourse.rating * 20 + "%"}
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
                  <h2 className="text-lg font-bold">
                    {currCourse.rating.toFixed(1)}
                  </h2>
                  <p>
                    ({currCourse.reviews} {t("List.aside.card.reviews")})
                  </p>
                  <hr className="mx-2" />
                  <h2>
                    <span className="font-semibold">{currCourse.students}</span>{" "}
                    {t("List.aside.card.students")}
                  </h2>
                </div>

                <div
                  className={`${css["CourseDetailsHero__left-user"]} flex items-center gap-2`}
                >
                  <img
                    src={currCourse.user.img}
                    alt={currCourse.user.name}
                    className="w-10 rounded-full"
                  />
                  <h2 className="text-sm">
                    {currCourse.user.name}{" "}
                    <span className="ml-1 underline opacity-70">
                      +10 {t('CourseDetailsHero.teachers')}
                    </span>
                  </h2>
                </div>

                <hr className="h-px w-full my-2" />

                <div
                  className={`${css["CourseDetailsHero__left-particulars"]} w-3/5 flex flex-wrap items-center gap-x-12 gap-y-4`}
                >
                  {renderParticulars}
                </div>
              </div>

              <div
                className={`${css["CourseDetailsHero__right"]} ${
                  isPause ? css["CourseDetailsHero__right_active"] : ""
                } flex items-center justify-center order-first sm:order-last relative rounded-2xl overflow-hidden`}
                onClick={handleImageClick}
              >
                <img src={currCourse.image} alt={currCourse.title} />
                <div
                  className={`${css["CourseDetailsHero__right-foreground"]} w-full h-full absolute top-0 left-0`}
                ></div>
                <button
                  className="p-5 flex items-center justify-center absolute rounded-full"
                  onClick={() => setIsPause(!isPause)}
                >
                  {isPause ? (
                    <img src={ic_pause} alt="ic_pause" className="w-5" />
                  ) : (
                    <img src={ic_play} alt="ic_play" className="w-5" />
                  )}
                </button>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </article>
  );
}

export default CourseDetailsHero;
