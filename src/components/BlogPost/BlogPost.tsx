import React, { useEffect, useMemo, useState } from "react";
import css from "./BlogPost.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchGetPosts } from "../../redux/slices/postSlice";
import { useTranslation } from "react-i18next";
import { Button, Pagination } from "@mui/material";

import recent1 from "../../assets/BlogPost/Image Ratio-1.svg";
import recent2 from "../../assets/BlogPost/Image Ratio-2.svg";
import recent3 from "../../assets/BlogPost/Image Ratio-3.svg";
import recent4 from "../../assets/BlogPost/Image Ratio.svg";
import ic_search from "../../assets/List/ic_search.svg";
import { Link } from "react-router-dom";

const Belek = 1;

interface RecentsPostsDataProps {
  img: any;
  title: string;
  readDate: string;
}

const RecentsPostsData: RecentsPostsDataProps[] = [
  {
    img: recent1,
    title: "Understanding color theory: the color wheel and finding...",
    readDate: "November 7, 2017 · 8 min read",
  },
  {
    img: recent2,
    title: "How to design a product that can grow itself 10x in year",
    readDate: "October 24, 2018 · 8 min read",
  },
  {
    img: recent3,
    title: "Any mechanical keyboard enthusiasts in design?",
    readDate: "November 28, 2015 · 8 min read",
  },
  {
    img: recent4,
    title: "Yo Reddit! What’s a small thing that anyone can do at nearly...",
    readDate: "May 29, 2017 · 8 min read",
  },
];

interface PopularTagsDataProps {
  title: string;
}

const PopularTagsData: PopularTagsDataProps[] = [
  {
    title: "Marketing",
  },
  {
    title: "Development",
  },
  {
    title: "Banking",
  },
  {
    title: "HR & Recruting",
  },
  {
    title: "Design",
  },
  {
    title: "Management",
  },
  {
    title: "Business",
  },
  {
    title: "Community",
  },
  {
    title: "Tutorials",
  },
];

const firstFourTitles = PopularTagsData.slice(0, 5);

function BlogPost() {
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

  const dispatch = useAppDispatch();

  const PostData = useAppSelector((state) => state.posts.postData);

  useEffect(() => {
    dispatch(fetchGetPosts());
  }, []);

  useEffect(() => {
    setPostsArray(PostData);
    console.log(PostData);
  }, [PostData]);

  const [postArray, setPostsArray] = useState(PostData);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  const renderPostsCards = useMemo(() => {
    const filtered = postArray.filter((elem) =>
      elem.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filtered.map((elem, index) =>
      index >= (page - 1) * pageElems && index < pageElems * page ? (
        <Link to={'/blog/' + elem.id} className="w-fit">
          <section
          key={Date.now() + index}
          className={`${css["BlogPost__card"]} border-solid border rounded-2xl`}
        >
          <div className={`${css["BlogPost__card-top"]}`}>
            <img
              className={`${css["BlogPost__card-image"]} rounded-2xl`}
              src={elem.image}
              alt={""}
            />
          </div>
          <div className={`${css["BlogPost__card-bottom"]} flex gap-5 p-6`}>
            <div
              className={`${css["BlogPost__card-bottom-left"]} flex flex-col items-center gap-1`}
            >
              <h3>{elem.date.month}</h3>
              <hr />
              <h2>{elem.date.day}</h2>
            </div>
            <div
              className={`${css["BlogPost__card-bottom_title"]} flex flex-col`}
            >
              <h1>{elem.title}</h1>
              <p>{elem.description}</p>
              <div
                className={`${css["BlogPost__card-bottom_avatar"]} flex items-center gap-3 mt-5`}
              >
                <img
                  className={`${css["BlogPost__card-Avatar_image"]} rounded-3xl`}
                  width={40}
                  src={elem.user.img}
                  alt={""}
                />
                <div
                  className={`${css["BlogPost__card-Avatar-desk"]} flex flex-col`}
                >
                  <h4>{elem.user.name}</h4>
                  <span>{elem.user.minRead}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        </Link>
      ) : (
        ""
      )
    );
  }, [postArray, page, searchQuery]);

  // const renderPostsCards = useMemo(
  //   () =>
  //   postArray.map((elem, index) => index >= (page - 1) * pageElems && index < pageElems * page ? (
  //     <section key={Date.now() + index}  className={`${css['BlogPost__card']} border-solid border rounded-2xl`} >
  //       <div className={`${css['BlogPost__card-top']}`}>
  //         <img className={`${css['BlogPost__card-image']} rounded-2xl`}  width={362} src={elem.image} alt={''} />
  //       </div>
  //         <div className={`${css['BlogPost__card-bottom']} flex gap-5 p-6`}>
  //           <div className={`${css['BlogPost__card-bottom-left']} flex flex-col items-center gap-1`}>
  //             <h3>{elem.date.month}</h3>
  //             <hr />
  //             <h2>{elem.date.day}</h2>
  //           </div>
  //           <div className={`${css['BlogPost__card-bottom_title']} flex flex-col`}>
  //             <h1>{elem.title}</h1>
  //             <p>{elem.description}</p>
  //             <div className={`${css['BlogPost__card-bottom_avatar']} flex items-center gap-3 mt-5`}>
  //               <img className={`${css['BlogPost__card-Avatar_image']} rounded-3xl`} width={40} src={elem.user.img} alt={''} />
  //               <div className={`${css['BlogPost__card-Avatar-desk']} flex flex-col`}>
  //                 <h4>{elem.user.name}</h4>
  //                 <span>{elem.user.minRead}</span>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //     </section>
  //   ) : (
  //     ""
  //   )
  // ), [postArray, page]);

  const darkScheme = useAppSelector((state) => state.general.darkScheme);
  const { t } = useTranslation();

  return (
    <article
      className={`container ${css["BlogPost"]} ${
        darkScheme ? css["BlogPost-dark"] : ""
      } flex justify-between py-32`}
    >
      <div
        className={`${css["BlogPost_fix"]} flex flex-col items-center  gap-16`}
      >
        <div className={`${css["BlogPost_aside"]} grid grid-cols-1 sm:grid-cols-2 gap-8`}>
          {renderPostsCards.length ? renderPostsCards : "Empty..."}
        </div>
        <div className={`${css["BlogPost_pagination"]} `}>
          <Pagination
            count={Math.ceil(renderPostsCards.length / pageElems)}
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
      <div className={`${css["BlogPost_sideBar"]} flex flex-col gap-10 `}>
        <div>
          <label
            className="p-4 flex items-center rounded-lg"
            aria-label="search"
          >
            <img src={ic_search} alt={"ic_search.svg"} />
            <input
              type="text"
              // placeholder={t("List.aside.search") + "..."}
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </label>
        </div>
        <div
          className={`${css["BlogPost_sideBar-Categories"]} flex flex-col gap-6`}
        >
          <h1>Categories</h1>
          {firstFourTitles.map((elem) => (
            <div className={`${css["BlogPost_sideBar-Categories_card"]}`}>
              <h1>{elem.title}</h1>
            </div>
          ))}
        </div>
        <div
          className={`${css["BlogPost_sideBar-recentPosts"]} flex flex-col gap-8`}
        >
          <h1>Recent Posts</h1>
          {RecentsPostsData.map((elem) => (
            <div
              className={`${css["BlogPost_sideBar-recentPosts_card"]} flex items-center gap-4`}
            >
              <img src={elem.img} alt="Recent Image" />
              <div>
                <h2>{elem.title}</h2>
                <p>{elem.readDate}</p>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`${css["BlogPost_sideBar-PopularTags"]} flex flex-col gap-8`}
        >
          <h1>Popular Tags</h1>
          <div
            className={`${css["BlogPost_sideBar-PopularTags_Tags"]} flex flex-wrap gap-2`}
          >
            {PopularTagsData.map((elem) => (
              <div
                className={`${css["BlogPost_sideBar-PopularTags_card"]} py-1 px-3 h-9 rounded-lg`}
              >
                <h1>{elem.title}</h1>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`${css["BlogPost_sideBar-Advertisement"]} flex flex-col items-center pt-36 px-10 pb-10`}
        >
          <h1>Advertisement</h1>
          <p>Duis leo. Donec orci lectus, aliquam ut, faucibus non</p>
          <Button variant="contained" color="primary">
            Go Now
          </Button>
        </div>
      </div>
    </article>
  );
}

export default BlogPost;
