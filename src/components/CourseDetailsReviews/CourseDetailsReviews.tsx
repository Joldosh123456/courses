import React, { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router";
import {
  Button,
  SelectChangeEvent,
  FormControl,
  MenuItem,
  Select,
  Pagination,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import css from "./CourseDetailsReviews.module.scss";

import { reviewsArr, sorting } from "../../constants/CourseDetailsReviews";
import { useAppSelector } from "../../hooks/hooks";
import ic_star from "../../assets/CourseDetailsReviews/ic_star.svg";
import ic_like from "../../assets/CourseDetailsReviews/ic_like.svg";
import ic_reply from "../../assets/CourseDetailsReviews/ic_reply.svg";
import ic_write from "../../assets/CourseDetailsReviews/ic_write.svg";
import ic_star_outlined from "../../assets/CourseDetailsReviews/ic_star_outlined.svg";
import { course } from "../../constants/List";
import i18n from "../../i18n";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function CourseDetailsReviews() {
  const darkScheme = useAppSelector((state) => state.general.darkScheme);
  const { t } = useTranslation();

  const { courseId } = useParams();
  const coursesData = useAppSelector((state) => state.courses.coursesData);
  const [currCourse, setCurrCourse] = useState<course>();

  useEffect(() => {
    setCurrCourse(
      coursesData.filter((elem: course) => elem.id === Number(courseId))[0]
    );
  }, [coursesData]);

  const stars = [1, 1, 1, 1, 1];

  const [reviewsState, setReviewsState] = useState(reviewsArr);

  const [sortingValue, setSortingValue] = useState(sorting[0]);
  const handleChange = (event: SelectChangeEvent) => {
    setSortingValue(event.target.value);
  };

  useEffect(() => {
    let arrCopy;

    if (sortingValue == "newest") {
      arrCopy = reviewsState.slice(0);

      arrCopy = arrCopy.sort((a, b) => {
        const dateA = a.date.split(".");
        const dateB = b.date.split(".");
        if (dateA[2] > dateB[2]) {
          return -1;
        } else if (dateA[2] < dateB[2]) {
          return 1;
        } else {
          if (dateA[1] > dateB[1]) {
            return -1;
          } else if (dateA[1] < dateB[1]) {
            return 1;
          } else {
            if (dateA[0] > dateB[0]) {
              return -1;
            } else if (dateA[0] < dateB[0]) {
              return 1;
            }
            return 0;
          }
        }
      });
    } else {
      arrCopy = reviewsState.slice(0);

      arrCopy = arrCopy.sort((a, b) => {
        const likesA = a.likes;
        const likesB = b.likes;

        if (likesA > likesB) {
          return -1;
        } else if (likesA < likesB) {
          return 1;
        } else {
          return 0;
        }
      });
    }

    setReviewsState(arrCopy);
    setPage(1)
  }, [sortingValue]);

  const handleLike = (index: number) => {
    setTimeout(() => {
      setReviewsState(
        reviewsState.map((review, reviewId) => {
          if (reviewId === index) {
            if (review.liked) {
              review.likes -= 1;
              review.liked = false;
              return review;
            }
            review.likes += 1;
            review.liked = true;
            return review;
          }
          return review;
        })
      );
    }, 250);
  };


  const [page, setPage] = useState(1);
  const pageElems = 4;
  const handlePaginationChange = (
    e: any,
    value: React.SetStateAction<number>
  ) => {
    setPage(value);
  };

  useEffect(() => {
  }, [page])

  const renderReviews = useMemo(
    () =>
      reviewsState.map((elem, index) =>
        index >= (page - 1) * 4 && index < pageElems * page ? (
          <div
            key={Date.now() + index}
            className={`${css["CourseDetailsReviews__review"]} flex gap-5`}
          >
            <img
              className="rounded-full"
              src={elem.user.img}
              alt={elem.user.name}
            />

            <div className={`flex flex-col gap-2`}>
              <div
                className={`${css["CourseDetailsReviews__review-header"]} flex items-center justify-between`}
              >
                <h1 className="text-sm font-semibold">{elem.user.name}</h1>

                <div
                  className={`${css["CourseDetailsReviews__review-stars"]} flex`}
                >
                  {stars.map((elem2, index2) =>
                    index2 < elem.rated ? (
                      <img
                        key={Date.now() + index2}
                        src={ic_star}
                        alt="ic_star"
                      />
                    ) : (
                      ""
                    )
                  )}
                </div>
              </div>
              <small className="text-xs">
                {elem.date
                  .split(".")
                  .map((elem2: any, index2: number) =>
                    index2 == 1
                      ? t(
                          "CourseDetailsReviews.months." +
                            months[Number(elem2) - 1]
                        )
                      : elem2
                  )
                  .join(" ")}
              </small>
              <p className="!text-sm">{elem.text}</p>

              <div
                className={`${css["CourseDetailsReviews__review-buttons"]} mt-6 flex items-center gap-2 font-bold`}
              >
                <Button
                  className="!rounded-full"
                  onClick={() => handleLike(index)}
                >
                  <img src={ic_like} alt="ic_reply" />
                  {t("CourseDetailsReviews.review.like")}{" "}
                  {elem.likes ? `(${elem.likes})` : ""}
                </Button>
                ·
                <Button className="!rounded-full">
                  <img src={ic_reply} alt="ic_reply" />
                  {t("CourseDetailsReviews.review.reply")}
                </Button>
              </div>

              <div className={`${css["CourseDetailsReviews__review-replies"]}`}>
                {elem.replies
                  ? elem.replies.map((reply, replyId) => (
                      <div
                        key={Date.now() + replyId}
                        className={`${css["CourseDetailsReviews__review"]} flex gap-5`}
                      >
                        <img
                          className="rounded-full"
                          src={reply.user.img}
                          alt={reply.user.name}
                        />

                        <div className={`flex flex-col gap-2`}>
                          <div
                            className={`${css["CourseDetailsReviews__review-header"]} flex items-center justify-between`}
                          >
                            <h1 className="text-sm font-semibold">
                              {reply.user.name}
                            </h1>
                          </div>
                          <small className="text-xs">
                            {reply.date
                              .split(".")
                              .map((elem2: any, index2: number) =>
                                index2 == 1
                                  ? t(
                                      "CourseDetailsReviews.months." +
                                        months[Number(elem2) - 1]
                                    )
                                  : elem2
                              )
                              .join(" ")}
                          </small>
                          <p className="!text-sm">{elem.text}</p>
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      ),
    [reviewsState, i18n.language, page]
  );

  const reviewsRating = Number(
    (
      reviewsState.reduce((sum, elem) => (sum += elem.rated), 0) /
      reviewsState.length
    ).toFixed(1)
  );

  const diagramFunc = (rating: number) => {
    return (
      (reviewsState.filter((elem) => elem.rated === rating).length /
        reviewsState.length) *
      100
    );
  };


  return (
    <article
      className={`${css["CourseDetailsReviews"]} ${
        darkScheme ? css["CourseDetailsReviews-dark"] : ""
      }`}
    >
      <div className="container flex flex-col lg:flex-row gap-16">
        <div className={`${css["CourseDetailsReviews__content"]}`}>
          <header className="flex items-center justify-between static">
            <h1 className="text-2xl sm:text-4xl font-bold">
              {t("CourseDetailsReviews.title")}
            </h1>

            <FormControl
              sx={{
                width: "fit-content",
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
                value={sortingValue}
                onChange={(e) => handleChange(e)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                variant="outlined"
              >
                {sorting.map((elem2, index2) => (
                  <MenuItem key={Date.now() + index2} value={elem2}>
                    {t("CourseDetailsReviews.select." + elem2)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </header>

          <div
            className={`${css["CourseDetailsReviews__reviews-container"]} flex flex-col items-center`}
          >
            {renderReviews}
            <Pagination
              count={Math.ceil(reviewsState.length / pageElems)}
              className="BlogPage__posts-main-pagination"
              page={page}
              boundaryCount={0}
              onChange={handlePaginationChange}
              sx={{
                "& .MuiInputBase-root": {
                  border: "5px solid red",
                },
                "& .Mui-selected": {
                  backgroundColor:
                    "rgba(var(--main-orange-rgb), 0.1)!important",
                  color: "var(--main-orange)",
                },
                "& .Mui-selected:hover": {
                  backgroundColor:
                    "rgba(var(--main-orange-rgb), 0.2)!important",
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
                  backgroundColor:
                    "rgba(var(--main-orange-rgb), 0.04)!important",
                  color: "var(--main-orange)",
                },
                "& button:hover svg path": {
                  backgroundColor:
                    "rgba(var(--main-orange-rgb), 0.05)!important",
                  fill: "var(--main-orange)",
                },
              }}
            />
          </div>
        </div>

        <aside
          className={`${css["CourseDetailsReviews__aside"]} h-fit p-8 rounded-2xl flex flex-col gap-6 order-first lg:order-none`}
        >
          {currCourse ? (
            <>
              <div
                className={`${css["CourseDetailsReviews__aside-header"]} flex gap-6`}
              >
                <h1>{reviewsRating}</h1>

                <div className="flex flex-col gap-1">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((elem, index) => (
                        <svg
                          key={Date.now()+index}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sc-1ohwd10-3 bjNpWs"
                        >
                          <defs>
                            <linearGradient id={`star_3${index}_svg__a`}>
                              <stop
                                offset={
                                  Math.floor(reviewsRating) >= index
                                    ? Math.floor(reviewsRating) == index
                                      ? (reviewsRating -
                                          Math.floor(reviewsRating)) *
                                          100 +
                                        "%"
                                      : "100%"
                                    : "0%"
                                }
                                stopColor="#FFD200"
                              ></stop>
                              <stop
                                offset="0%"
                                stopColor="#999"
                                stopOpacity="0.5"
                              ></stop>
                            </linearGradient>
                          </defs>
                          <path
                            fill={`url(#star_3${index}_svg__a)`}
                            d="M8.451 1.49a1 1 0 00-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3.374 3.374 0 01-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 00-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9.167 9.167 0 00-.145.73c-.024.184-.042.445.087.68a1 1 0 00.733.508c.265.038.504-.072.667-.16a9.15 9.15 0 00.632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 00.733-.508c.13-.235.11-.496.087-.68a9.199 9.199 0 00-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 00-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3.372 3.372 0 01-.184-.018h-.003l-.002-.003a3.421 3.421 0 01-.069-.172l-.928-2.39a9.644 9.644 0 00-.296-.713c-.083-.17-.216-.405-.46-.529z"
                          ></path>
                        </svg>
                      ))}
                  </div>

                  <p>
                    {renderReviews.length}{" "}
                    {t("CourseDetailsReviews.aside.reviews")}
                  </p>
                </div>
              </div>

              <div>
                {Array(5)
                  .fill(0)
                  .map((elem, index) => (
                    <div
                      key={Date.now()+index}
                      className={`${css["CourseDetailsReviews__aside-statistic"]} flex items-center justify-between gap-4`}
                    >
                      <span className="flex gap-1 justify-end">
                        <h1>{Math.abs(index - 5)}</h1>
                        <img src={ic_star_outlined} alt="ic_star_outlined" />
                      </span>

                      <div className="grow rounded-sm">
                        <div
                          className="w-full h-full rounded-sm"
                          style={{
                            width: diagramFunc(Math.abs(index - 5)) + "%",
                          }}
                        ></div>
                      </div>

                      <p>
                        {
                          reviewsState.filter(
                            (review, index2) =>
                              review.rated == Math.abs(index - 5)
                          ).length
                        }
                      </p>
                    </div>
                  ))}
              </div>

              <Button
                className="w-full gap-2"
                sx={{
                  "& .MuiTouchRipple-root .MuiTouchRipple-child": {
                    backgroundColor: "red",
                  },
                }}
              >
                <img src={ic_write} alt="ic_write" />
                <p>{t("CourseDetailsReviews.aside.button")}</p>
              </Button>
            </>
          ) : (
            ""
          )}
        </aside>
      </div>
    </article>
  );
}

export default CourseDetailsReviews;
