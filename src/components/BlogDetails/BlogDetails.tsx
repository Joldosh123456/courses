import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchGetPosts } from "../../redux/slices/postSlice";
import { post } from "../../constants/Post";
import css from "./BlogDetails.module.scss";
import { Breadcrumbs } from "@mui/material";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import ic_play from "../../assets/CourseDetailsHero/ic_play.svg";
import ic_pause from "../../assets/CourseDetailsHero/ic_pause.png";
import iconFacebook from '../../assets/BlogDetails/iconbase.svg'
import iconInstagram from '../../assets/BlogDetails/iconbase-1.svg'
import iconLinkedin from '../../assets/BlogDetails/iconbase-2.svg'
import iconTwitter from '../../assets/BlogDetails/iconbase-3.svg'
import iconFacebook2 from '../../assets/BlogDetails/Blog/ic_facebbook_outlined.svg'
import iconInstagram2 from '../../assets/BlogDetails/Blog/ic_instagram_outlined.svg'
import iconLinkedin2 from '../../assets/BlogDetails/Blog/iconbase.svg'
import iconTwitter2 from '../../assets/BlogDetails/Blog/iconbase-1.svg'
import iconQuotes from '../../assets/BlogDetails/Blog/ic_quotes.svg'
import shareIcon from '../../assets/BlogDetails/ShareAndLike/iconbase-1.svg'
import likeIcon  from '../../assets/BlogDetails/ShareAndLike/iconbase.svg'
import { useTranslation } from "react-i18next";



function BlogDetails() {
  const { postId } = useParams();
  const dispatch = useAppDispatch();

  const PostData = useAppSelector((state) => state.posts.postData);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    dispatch(fetchGetPosts());
  }, []);

  useEffect(() => {
    setCurrentPost(PostData.filter((elem) => elem.id === Number(postId))[0]);
    console.log(PostData.filter((elem) => elem.id === Number(postId))[0]);
  }, [PostData]);

  const [currentPost, setCurrentPost] = useState<post>();

  const breadcrumbs = [
    <Link key={1} to={"/"}>
      Home
    </Link>,
    <Link to={"/blog"} key={2}>
      Blog
    </Link>,
    <Typography key="3" color="text.primary">
      {currentPost?.title}
    </Typography>,
  ];

  const [isPause, setIsPause] = useState(false);

  const handleImageClick = () => {
    if (isPause) {
      setIsPause(false);
    }
    return;
  };

  const darkScheme = useAppSelector(state => state.general.darkScheme)
  const {t} = useTranslation()

  return (
    <article className={` container ${css["BlogDetails"]} ${ darkScheme ? css['BlogDetails-dark'] : ''} flex flex-col items-center`}>
      <div className={`${css["BlogDetails_breadCrumb"]} py-10 w-full`}>
        <Stack>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </div>
      <div
        className={`${css["CourseDetailsHero__right"]} ${
          isPause ? css["CourseDetailsHero__right_active"] : ""
        } flex items-center justify-center relative rounded-2xl overflow-hidden`}
        onClick={handleImageClick}
      >
        <img src={currentPost?.image} alt={currentPost?.title} />
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
      <div className={`${css['BlogDetails__content']} my-20`}>
        <span>8 min read</span> 
        <h1>{currentPost?.title}</h1>
        <p className={`${css['BlogDetails__content-description']}`}>
          Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac
          venenatis condimentum, sem libero volutpat nibh, nec pellentesque
          velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet.
          Praesent egestas tristique nibh.
        </p>

        <div className={`${css['BlogDetailsPage__content-autor']}`}>
          <div className={`${css['left']}`}>
            <img
              className={`${css['user-avatar']}`}
              src={currentPost?.image}
              alt="user-avatar"
            />

            <div>
              <h1>{currentPost?.user.name}</h1>

              <span>
                {currentPost?.date.month} {currentPost?.date.day}, 2023
              </span>
            </div>
          </div>

          <div className={`${css['right']}`}>
            <button>
              <img src={shareIcon} alt="share-icon" />
            </button>
            <button>
              <img src={likeIcon} alt="like-icon" />
            </button>
          </div>
        </div>
        <p className={`${css['BlogDetailsPage__bigletter']} my-12`}>
          Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac
          venenatis condimentum, sem libero volutpat nibh, nec pellentesque
          velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet.
          Praesent egestas tristique nibh. Donec posuere vulputate arcu. Quisque
          rutrum.
          <br />
          <br />
          Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
          aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris
          at ligula.
          <br />
          <br />
          Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac
          venenatis condimentum, sem libero volutpat nibh, nec pellentesque
          velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet.
          Praesent egestas tristique nibh.
        </p>

        <img
          src="https://s3-alpha-sig.figma.com/img/9fd5/0f41/c6213e98281210a76c2b113f194e6ca6?Expires=1687132800&Signature=WPUtRbkgSsknqlWAt82ElxAPCQTfB~-EUpCk-Z0XV3RODG53gQ75RzHMfuHwOcjNWexXL-rFVTvOc7xMk52TN1QzAHPkpizBT4FgMnxKrmx7xeqw1NZzg~nZV4Q81jPW2IuRybiPG8~jR4K4KIJusTmzl1OYjmV4uSx4ANkAyvA4LKIe-B5CMwtG6H~4eNcR~GJWtBE0aCIYh0HS2YrqfgXcqhv3ai7wgb6hf5jna0zai6h30sYH4IbnaYudSigpUcQsFXm7ps64KcQ9FiZcLPt2Zit9AbPCW0OikURKx3tyOgWHRpJqmNkoQitDICvreOcsRtG1f04-6mMtmG7MFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="content-image1"
        />

        <div>
          <h1>Curabitur suscipit suscipit tellus</h1>
          <p>
            Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
            aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper
            mauris at ligula.
          </p>
        </div>

        <div>
          <h1>Nullam accumsan lorem in</h1>
          <p>
            Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
            aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper
            mauris at ligula.
          </p>
        </div>

        <div className={`${css['quotes']}`}>
          <img src={iconQuotes} alt="quotes" />
          <h1>
            Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
            aliquam leo.
          </h1>
        </div>

        <img
          src="https://s3-alpha-sig.figma.com/img/67dc/1fc9/3528e1c2593ed0f09ccd57ab0e687db8?Expires=1687132800&Signature=SeipVuVTv7j~cfkLxb0y4fdonSyNpMFpX1x95k~RVeFFBa2pf4bjZJbBVKvPSrNGIjOEOrFmF0FRc0uLE5Qg9IoYjeQv8tt5MKBIap7pwcwiaEJHvQK80eJGf~MEVdYLtR5iITWY8bUwyDsVYS17jQ6ZH5zLUAWyRcX2QsgYSBL~G~gr7Ec3uww3D5nRT8IQM5fdQLP9J6j8AbKRFS5Q7l0PYFSlC82DFmsYvmWSZ1m3CRVe7K2O0ZBRHD8UL2wkS8YkmqQYNfmcK-T6h97C8R9MQyUO5O3787kK28WY35DWpYL2oUOnv1jeibLH0xb-hNtN5goSC2OAqstX9D1CHw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="content-image2"
        />

        <p className={`${css['BlogDetails__content-description2']} my-10`}>
          Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
          aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris
          at ligula.
          <br />
          <br />
          Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac
          venenatis condimentum, sem libero volutpat nibh, nec pellentesque
          velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet.
          Praesent egestas tristique nibh.
          <br />
          <br />
          Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
          aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris
          at ligula.
        </p>

        <div className={`${css['tags']} ${css['BlogDetailsPage__tags']}`}>
          <h2>Tags:</h2>

          <button>Marketing</button>
          <button>Development</button>
          <button>HR & Recruting</button>
          <button>Design</button>
          <button>Management</button>
        </div>

        <div className={`${css['social-media']} ${css['BlogDetailsPage__social-media']}`}>
          <h2>Share:</h2>

          <div>
            <button className={`${css['facebook-btn']}`}>
              <img src={iconFacebook} alt="Facebook-icon" />
              Facebook
            </button>
            <button className={`${css['instagram-btn']}`}>
              <img src={iconInstagram} alt="Instagram-icon" />
              Instagram
            </button>
            <button className={`${css['linkedin-btn']}`}>
              <img src={iconLinkedin} alt="LinkedIn-icon" />
              LinkedIn
            </button>
            <button className={`${css['twitter-btn']}`}>
              <img src={iconTwitter} alt="Twitter-icon" />
              Twitter
            </button>
          </div>
        </div>
        <div className={`${css['BlogDetailsPage__content-comments']} py-16`}>
          <img
            src={currentPost?.user.img}
            alt="user-avatar"
          />

          <div>
            <div className={`${css['BlogDetailsPage__content-comments-top']} `}>
              <div className={`${css['left']}`}>
                <h1>{currentPost?.user.name}</h1>
                <p>Curator of Marketing Course</p>
              </div>

              <div className={`${css['right']} flex items-center`}>
                <a href="https://facebook.com">
                  <img width={15} src={iconFacebook2} alt="facebook-icon" />
                </a>
                <a href="https://instagram.com">
                  <img width={15} src={iconInstagram2} alt="instagram-icon" />
                </a>
                <a href="https://linkedin.com">
                  <img width={15} src={iconLinkedin2} alt="linkedin-icon" />
                </a>
                <a href="https://twitter.com">
                  <img width={15} src={iconTwitter2} alt="twitter-icon" />
                </a>
              </div>
            </div>
            <p>
              Integer tincidunt. Nullam dictum felis eu pede mollis pretium.
              Maecenas ullamcorper, dui et placerat feugiat, eros pede varius
              nisi, condimentum viverra felis nunc et lorem..
            </p>
            <span>Member since Mar 15, 2021</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BlogDetails;
