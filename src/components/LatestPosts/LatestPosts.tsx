import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import css from "./LatestPosts.module.scss";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import i18n from "../../i18n";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchGetPosts } from "../../redux/slices/postSlice";

function LatestPosts() {
  const darkScheme = useAppSelector((state) => state.general.darkScheme);
  const { t } = useTranslation();
  const location = useLocation();

  const dispatch = useAppDispatch();

  const PostData = useAppSelector((state) => state.posts.postData);

  useEffect(() => {
    dispatch(fetchGetPosts());
  }, []);

  useEffect(() => {
    setPostsArray(PostData);
  }, [PostData]);

  const [postArray, setPostsArray] = useState(PostData);



  const renderPostsCards = useMemo(
    () => (
      postArray.map((elem, index) => index < 3 ? (
          <section
          key={Date.now() + index}
          className={`${css["LatestPosts__card"]} flex xl:flex-col gap-4 sm:gap-0 border-none sm:border-solid border rounded-2xl overflow-hidden`}
        >
          <div className={`${css["LatestPosts__card-top"]}`}>
            <img
              className={`${css["LatestPosts__card-image"]} rounded-xl sm:rounded-none`}
              src={elem.image}
              alt={""}
            />
          </div>
          <div className={`${css["LatestPosts__card-bottom"]} flex gap-5 p-0 sm:p-6`}>
            <div
              className={`${css["LatestPosts__card-bottom-left"]} hidden sm:flex flex-col items-center gap-1`}
            >
              <h3>{t('CourseDetailsReviews.months.'+elem.date.month)}</h3>
              <hr />
              <h2>{elem.date.day}</h2>
            </div>
            <div
              className={`${css["LatestPosts__card-bottom_title"]} flex flex-col`}
            >
              <h1>{elem.title}</h1>
              <p className="hidden sm:block">{elem.description}</p>
              <div
                className={`${css["LatestPosts__card-bottom_avatar"]} flex items-center gap-3 mt-0 sm:mt-5`}
              >
                <img
                  className={`${css["LatestPosts__card-Avatar_image"]} hidden sm:block rounded-3xl`}
                  width={40}
                  src={elem.user.img}
                  alt={""}
                />
                <div
                  className={`${css["LatestPosts__card-Avatar-desk"]} flex flex-col`}
                >
                  <h4 className="hidden sm:block">{elem.user.name}</h4>
                  <span>{t('LatestPosts.read')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : ('')
      )),
    [postArray, i18n.language, location]
  );

  return (
    <article
      className={`${css["LatestPosts"]} ${
        darkScheme ? css["LatestPosts-dark"] : ""
      } pt-16 sm:pt-20 pb-16 sm:pb-28`}
    >
      <div
        className={`container flex flex-col items-center gap-16 sm:gap-12 sm:gap-10 relative sm:static`}
      >
        <div
          className={`${css["LatestPosts__header"]} w-full flex items-center justify-between`}
        >
          <div className="w-full sm:w-2/3 flex flex-col gap-6 pb-2 text-center sm:text-left">
            <h1 className="text-3xl sm:text-5xl font-bold">
              {t("LatestPosts.title")}
            </h1>
          </div>

          <Link to='/blog' className="hidden sm:block">{t("SimilarCourses.link")} &nbsp;→</Link>
        </div>

        <div
          className={`${css["LatestPosts__content"]} w-full flex flex-col xl:flex-row items-center gap-6 sm:gap-8`}
        >
          {renderPostsCards}
        </div>

        <Link to='/blog' className="sm:hidden">{t("SimilarCourses.link")} &nbsp;→</Link>
      </div>
    </article>
  );
}

export default LatestPosts;
