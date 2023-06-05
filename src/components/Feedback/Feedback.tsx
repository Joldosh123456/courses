import css from "./Feedback.module.scss";
import { useTranslation } from "react-i18next";
import vectorAp from "../../assets/Feedback/Vector.svg";
import avatar from "../../assets/Feedback/Avatar1.svg";
import avatar2 from "../../assets/Feedback/Avatar2.svg";
import avatar3 from "../../assets/Feedback/img3Active.svg";
import avatar4 from "../../assets/Feedback/Avatar3.svg";
import avatar5 from "../../assets/Feedback/Avatar4.svg";
import ic_left_arrow from "../../assets/Feedback/ic_left_arrow.svg";
import { Button } from "@mui/material";
import { useRef, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { slider } from "../../constants/Feedback";
import { Navigation } from "swiper";
import Avatar from '@mui/material/Avatar';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {useState} from 'react';
import { useAppSelector } from '../../hooks/hooks';

function Feedback() {
  const darkScheme = useAppSelector(state => state.general.darkScheme)
  const { t } = useTranslation();


  const [alignment, setAlignment] = useState(3);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: number,
  ) => {
    setAlignment(newAlignment);
  };


  const prevBtn = useRef(null)
  const nextBtn = useRef(null)
  
  const renderSlides = useMemo(() => (
    slider.map((elem, index) => (
      <SwiperSlide key={Date.now()+index} className="w-full !flex flex-col items-center">
        <img src={vectorAp} alt="quote" className="w-12 opacity-50" />
        <p className="pt-6 pb-10">{elem.description}</p>

        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleChange}
          sx={{
            gap: '20px',
            '& > button': {
              border: 'none',
              padding: '0px',
              opacity: 0.5,
              paddingBottom: '20px',
              '&:hover': {
                backgroundColor: 'transparent'
              },
              '&:active *': {
                backgroundColor: 'transparent'
              },
              '& > span': {
                opacity: 0
              }
            },
            '& .Mui-selected': {
              backgroundColor: 'transparent!important',
              opacity: 1,
              '& > div': {
                width: 96,
                height: 96,
              },
              '& > span': {
                opacity: 1
              }
            }
          }}
        >
          {
            elem.students.map((elem2, index2) => (
              <ToggleButton key={Date.now()+index2} value={index2+1} className={`${css['Feedback__user']} flex flex-col gap-4`}>
                <Avatar src={elem2.img} alt={elem2.name} className='pointer-events-none' sx={{width: 48, height: 48}} />

                <span className={`flex flex-col`}>
                  <h3 className="!capitalize">{elem2.name}</h3>
                  <p>{t(elem.profession)}</p>
                </span>
              </ToggleButton>
            ))
          }
        </ToggleButtonGroup>
      </SwiperSlide>
    ))
  ), [slider, alignment])


  return (
  <article className={`${css['Feedback']} ${darkScheme ? css['Feedback-dark'] : ''}`}>
    <div className={`${css['Feedback__container']} container flex flex-col justify-center items-center gap-16`}>
      <h1 className="text-center">{t('feedback.title')}</h1>
      
      <div className={`${css['Feedback__swiper-wrapper']} w-full relative`}>
        <Swiper
        breakpoints={{
          0: {
            allowTouchMove: true
          },
          1024: {
            allowTouchMove: false
          }
        }}
          navigation={{
            prevEl: prevBtn.current,
            nextEl: nextBtn.current
          }}
          spaceBetween='200'
          modules={[Navigation]}
          className={`${css['Feedback__swiper']} text-center`}
        >
          {renderSlides}
        </Swiper>

        <button ref={prevBtn} className="absolute left-0 hidden lg:block"><img src={ic_left_arrow} alt='Prev'/></button>
        <button ref={nextBtn} className="absolute right-0 hidden lg:block"><img className="rotate-180" src={ic_left_arrow} alt='Next'/></button>
      </div>

    </div>
  </article>
  );
}
export default Feedback;
