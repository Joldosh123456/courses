import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";


import css from "./CourseDetailsLessons.module.scss";
import ic_play from '../../assets/CourseDetailsLessons/ic_play.svg'
import ic_locked from '../../assets/CourseDetailsLessons/ic_locked.svg'
import ic_check from '../../assets/CourseDetailsLessons/ic_check.svg'
import ic_book from '../../assets/CourseDetailsLessons/ic_book.svg'
import ic_users_group from '../../assets/CourseDetailsLessons/ic_users_group.svg'
import { useAppSelector } from "../../hooks/hooks";
import { courseIncludesArr, instructorsArr, learningsArr, lessonsArr, skillsArr, socialsArr } from "../../constants/CourseDetailsLessons";
import { course } from "../../constants/List";
import { useTranslation } from "react-i18next";

function CourseDetailsLessons() {
  const {courseId} = useParams()
  const coursesData = useAppSelector(state => state.courses.coursesData)
  const [currCourse, setCurrCourse] = useState<course>();

  const darkScheme = useAppSelector(state => state.general.darkScheme)
  const {t} = useTranslation()

  useEffect(() => {
    // window.scrollTo({
    //   // top: 0,
    // });
  }, []);

  useEffect(() => {
    setCurrCourse(
      coursesData.filter((elem: course) => elem.id === Number(courseId))[0]
    );
  }, [coursesData]);


  const renderLessons = useMemo(
    () =>
      lessonsArr.map((elem, index) => (
        <Accordion
          key={Date.now() + index}
          disabled={elem.isLocked}
          sx={{
            overflow: 'hidden',
            boxShadow: 'none',
            borderBottom: '1px solid rgba(var(--p-color-dark-rgb), 0.24)',
            backgroundColor: darkScheme ? 'rgba(33, 43, 54, 1)!important' : 'transparent',
            "&.Mui-expanded": {
              margin: "20px 0",
              boxShadow: darkScheme ? '' : '0px 10px 20px 0px rgba(var(--p-color-dark-rgb), 0.16)',
              borderRadius: '8px!important',
            },
            "&.Mui-disabled": {
              backgroundColor: 'transparent'
            },
            "& .MuiAccordionSummary-root": {
              minHeight: '0!important',
              padding: '16px',
              "& p": {
                color: darkScheme ? 'white' : ''
              },
              "&.Mui-expanded": {
                backgroundColor: 'rgba(var(--p-color-dark-rgb), 0.12)'
              },
              "&.Mui-disabled": {
                opacity: 1,
                "& p": {
                  color: 'var(--p-color-dark)'
                },
                "& path": {
                  fill: 'var(--p-color-dark)!important',
                  opacity: 0.6
                },
              },
              "& .MuiAccordionSummary-content": {
                margin: 0,
                gap: '16px',
                position: 'relative',
              },
              "& .MuiAccordionSummary-content.Mui-expanded": {
              },
              "& .MuiAccordionSummary-expandIconWrapper": {
                transform: 'rotate(-90deg)',
                "& path": {
                  fill: 'var(--p-color)'
                },
                "&.Mui-expanded": {
                  transform: 'rotate(0deg)'
                }
              },
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${elem.id}bh-content`}
            id={`panel${elem.id}bh-header`}
          >
            <img src={elem.isLocked ? ic_locked : ic_play} alt={elem.isLocked ? 'ic_locked' : 'ic_play'} />
            <Typography>
              {elem.title} {elem.id}
            </Typography>
            <Typography className="absolute right-4">
              {elem.duration > 60 ? `${Math.floor(elem.duration/60)}:${elem.duration%60}` : elem.duration}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>{elem.content}</Typography>
          </AccordionDetails>
        </Accordion>
      )),
    [lessonsArr, darkScheme]
  );


  const renderLearnings = useMemo(() => (
    learningsArr.map((elem, index) => (
      <div key={Date.now() + index} className="flex items-center gap-3">
        <img src={ic_check} alt="ic_check" />
        <h2>{elem.title}</h2>
      </div>
    ))
  ), [learningsArr])


  const renderSkills = useMemo(() => (
    skillsArr.map((elem, index) => (
      <div key={Date.now() + index} className="px-3 py-2 text-xs rounded-lg">
        <p>{elem}</p>
      </div>
    ))
  ), [skillsArr])


  const renderSocials = useMemo(() => (
    socialsArr.map((elem, index) => (
      <a key={Date.now() + index} href={elem.href} className={`${css[elem.title]} flex items-end gap-2 px-2.5 py-1 m-1 text-xs rounded-lg`}>
        <img src={elem.img} alt={elem.title} />
        <p className="font-semibold">{elem.title}</p>
      </a>
    ))
  ), [socialsArr])


  const renderInstructors = useMemo(() => (
    instructorsArr.map((elem, index) => (
      <div key={Date.now() + index} className={`${css['CourseDetailsLessons__instructor']} p-6 flex gap-6 rounded-2xl`}>
        <img src={elem.img} alt={elem.name} className='h-fit rounded-full' />

        <div className={`${css['CourseDetailsLessons__instructor-right']} [&>div]:flex [&>div]:items-center flex flex-col gap-2`}>
          <h1 className="text-lg font-semibold">{elem.name}</h1>
          <p>
            {elem.prof.map((elem2, index2, arr) => (
              <React.Fragment key={Date.now() + index2}>{index2 != arr.length-1 ? elem2 + ', ' : elem2}</React.Fragment>
            ))}
          </p>
          
          <div className="gap-1">
          <span>
            <svg
              width="21"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sc-1ohwd10-3 bjNpWs"
            >
              <defs>
                <linearGradient id={`star_2${index}_svg__a`}>
                  <stop
                    offset={elem.rating * 20 +"%"}
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
                fill={`url(#star_2${index}_svg__a)`}
                d="M8.451 1.49a1 1 0 00-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3.374 3.374 0 01-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 00-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9.167 9.167 0 00-.145.73c-.024.184-.042.445.087.68a1 1 0 00.733.508c.265.038.504-.072.667-.16a9.15 9.15 0 00.632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 00.733-.508c.13-.235.11-.496.087-.68a9.199 9.199 0 00-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 00-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3.372 3.372 0 01-.184-.018h-.003l-.002-.003a3.421 3.421 0 01-.069-.172l-.928-2.39a9.644 9.644 0 00-.296-.713c-.083-.17-.216-.405-.46-.529z"
              ></path>
            </svg>
          </span>
          <h1 className="text-lg font-semibold">{elem.rating.toFixed(1)}</h1>
          <p>({elem.ratings} ratings)</p>
          </div>

          <div className="gap-2">
            <img src={ic_users_group} alt="ic_users_group" />
            <h2><span>{elem.students > 1000 ? elem.students / 1000+'k' : ''}</span> students</h2>
          </div>

          <div className="gap-3">
            <img src={ic_book} alt="ic_book" />
            <h2><span>{elem.courses}</span> courses</h2>
          </div>
        </div>
      </div>
    ))
  ), [instructorsArr])


  const renderCourseIncludes = useMemo(() => (
    courseIncludesArr.map((elem, index) => (
      <h2 key={Date.now() + index} className="flex items-start gap-2">
        <img src={elem.img} alt={elem.title} />
        {elem!.amount} {elem.title}
      </h2>
    ))
  ), [courseIncludesArr])


  return (
    <article className={`${css["CourseDetailsLessons"]} ${darkScheme ? css["CourseDetailsLessons-dark"] : ''} py-20`}>
      <div className="container flex flex-col sm:flex-row gap-16">
        <div className={`${css["CourseDetailsLessons__left"]} flex flex-col gap-10 [&>section>h1]:text-xl sm:[&>section>h1]:text-2xl [&>section>h1]:font-bold [&>section>h1]:mb-6`}>
          <section>
            <h1>Lessons</h1>

            <div className="flex flex-col">{renderLessons}</div>
          </section>

          <section>
            <h1>What You Will Learn</h1>

            <div className="flex flex-col gap-2">{renderLearnings}</div>
          </section>

          <section>
            <h1>Skills You Will Gain</h1>

            <div className={`${css["CourseDetailsLessons__skills-container"]} flex flex-wrap gap-2`}>{renderSkills}</div>
          </section>

          <section>
            <h1>Overview</h1>

            <h2>Consentaneum aeternitate dignitati commoventur primisque cupit mea officia peccata parens egone dolorem minuis. Secundae neglegi sextilius conantur commodaita siti philosophi ioca tenere lorem apparet assentior pudoris sint leves neglegebat unde reliquisti simile. </h2>
          </section>

          <nav className={`${css["CourseDetailsLessons__socials-container"]} flex flex-wrap items-center`}>
            <span className="mr-2 font-semibold">Share:</span> 
            {renderSocials}
          </nav>

          <hr className="w-full h-px" />

          <section>
            <h1>Instructors({instructorsArr.length})</h1>

            <div className={`${css['CourseDetailsLessons__instructors-container']} grid grid-cols-1 gap-8 lg:grid-cols-2`}>
              {renderInstructors}
            </div>
          </section>

          <section className={`${css["CourseDetailsLessons__advertisement"]} relative overflow-hidden rounded-2xl sm:hidden`}>
              <img src="https://s3-alpha-sig.figma.com/img/4ae3/204b/30dc35b0185eb37693374bd71cb453ed?Expires=1686528000&Signature=KC4RIPNoz3mMuWdG9kEfVD3RkdzRCug8oQdL6C5FEN0~GWuKFNOUnchWbescJS9~Lvj12urUjwW4-2HfxXu9qbC8m0~e9fZOZXldsuE9CsJFE2KBg0XM~IFuq59sdTglL37BXFcXBL4P~m5zKih6nrF-yec5waCzlmCi1ENajMnil7sNVLGiEF-I98NMzCL3tCf14e91~YUlPZN3SSTZGwSQxL-IZvYhds8pevTjH7iPX2Toh6wMLz7OhTc73IuZjU9klIfHUC7ikEmgQRbKMpbhTUjhirMq7nkO9syvmiKwMWKI00iRxhvlJsO2Gf~uQNurFMoWbFLwiu0G1SfaAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="advertisement" />
              <div className={`${css['advertiesment-overlay']} absolute w-full h-full top-0 left-0`}></div>
              <div className={`${css['CourseDetailsLessons__advertisement-text']} w-full h-full p-10 flex flex-col items-center justify-end gap-2 absolute top-0 left-0 text-center`}>
                <h1 className="font-bold">Advetisement</h1>
                <p>Duis leo. Donec orci lectus, aliquam ut, faucibus non</p>
                <Button variant="contained" color='primary'>Go Now</Button>
              </div>
            </section>
        </div>

        {currCourse ? (
          <aside className={`${css["CourseDetailsLessons__aside"]} flex flex-col gap-10 order-first sm:order-none`}>
            <section className={`${css["CourseDetailsLessons__course-includes"]} p-6 flex flex-col gap-4 rounded-2xl`}>
              <h1 className="flex gap-1 font-bold">
                <span className="line-through">{currCourse.prevPrice?'$'+currCourse.prevPrice:''}</span> ${currCourse!.currPrice}
              </h1>

              <p>This course includes:</p>

              {renderCourseIncludes}

              <Button variant="contained" color='primary' size="large">Enrol Now</Button>
            </section>

            <section className={`${css["CourseDetailsLessons__advertisement"]} relative overflow-hidden rounded-2xl hidden sm:block`}>
              <img src="https://s3-alpha-sig.figma.com/img/4ae3/204b/30dc35b0185eb37693374bd71cb453ed?Expires=1686528000&Signature=KC4RIPNoz3mMuWdG9kEfVD3RkdzRCug8oQdL6C5FEN0~GWuKFNOUnchWbescJS9~Lvj12urUjwW4-2HfxXu9qbC8m0~e9fZOZXldsuE9CsJFE2KBg0XM~IFuq59sdTglL37BXFcXBL4P~m5zKih6nrF-yec5waCzlmCi1ENajMnil7sNVLGiEF-I98NMzCL3tCf14e91~YUlPZN3SSTZGwSQxL-IZvYhds8pevTjH7iPX2Toh6wMLz7OhTc73IuZjU9klIfHUC7ikEmgQRbKMpbhTUjhirMq7nkO9syvmiKwMWKI00iRxhvlJsO2Gf~uQNurFMoWbFLwiu0G1SfaAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="advertisement" />
              <div className={`${css['advertiesment-overlay']} absolute w-full h-full top-0 left-0`}></div>
              <div className={`${css['CourseDetailsLessons__advertisement-text']} w-full h-full p-10 flex flex-col items-center justify-end gap-2 absolute top-0 left-0 text-center`}>
                <h1 className="font-bold">Advetisement</h1>
                <p>Duis leo. Donec orci lectus, aliquam ut, faucibus non</p>
                <Button variant="contained" color='primary'>Go Now</Button>
              </div>
            </section>
          </aside>
        ) : ('')}
      </div>
    </article>
  );
}

export default CourseDetailsLessons;
