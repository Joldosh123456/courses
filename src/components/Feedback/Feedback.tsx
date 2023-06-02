import scss from "./Feedback.module.scss";
import { useTranslation } from "react-i18next";
// import { slider } from "../../../constants/Feedback";
import vectorAp from "../../assets/Feedback/Vector.svg";
import avatar from "../../assets/Feedback/Avatar1.svg";
import avatar2 from "../../assets/Feedback/Avatar2.svg";
import avatar3 from "../../assets/Feedback/img3Active.svg";
import avatar4 from "../../assets/Feedback/Avatar3.svg";
import avatar5 from "../../assets/Feedback/Avatar4.svg";
import prev from "../../assets/Feedback/leftVector.svg";
import next from "../../assets/Feedback/rightVector.svg";
import { Button } from "@mui/material";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Feedback() {
  const arrowRef = useRef<Slider>(null);
  const { t } = useTranslation();
  // const arrowRef = useRef<HTMLButtonElement>(null);
  // useEffect(() => {
  //   arrowRef.current!.focus();
  // }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    // <div className="container flex flex-col justify-between items-center gap-16 lg:flex-row lg:gap-0">
    //   <div className={scss.feedback}>
    //     <Slider ref={arrowRef} {...settings}>
    //       <div>
    //         <h1>{t("feedback.title")}</h1>
    //         <img className={scss.vectorAp} src={vectorAp} alt="vectorAp" />
    //         <p>{t("feedback.description")}</p>
    //         <div className={scss.avatars}>
    //           <img src={avatar} alt="avatar" />
    //           <img src={avatar2} alt="avatar" />
    //           <img src={avatar3} alt="avatar" />
    //           <img src={avatar4} alt="avatar" />
    //           <img src={avatar5} alt="avatar" />
    //         </div>
    //         <h3>{t("feedback.students")}</h3>
    //         <p className={scss.profession}>{t("feedback.profession")}</p>
    //       </div>
    //       <div>
    //         <h1>{t("feedback.title")}</h1>
    //         <img className={scss.vectorAp} src={vectorAp} alt="vectorAp" />
    //         <p>{t("feedback.description")}</p>
    //         <div className={scss.avatars}>
    //           <img src={avatar} alt="avatar" />
    //           <img src={avatar2} alt="avatar" />
    //           <img src={avatar3} alt="avatar" />
    //           <img src={avatar4} alt="avatar" />
    //           <img src={avatar5} alt="avatar" />
    //         </div>
    //         <h3>{t("feedback.students")}</h3>
    //         <p className={scss.profession}>{t("feedback.profession")}</p>
    //       </div>
    //     </Slider>
    //     <div className=" flex mt-8 gap-8">
    //             <button onClick={() => arrowRef.current.slickPrev()}><img src={prev} alt='Prev'/></button>
    //             <button onClick={() => arrowRef.current.slickNext()}><img src={next} alt='Prev'/></button>
    //         </div>
    //   </div>
    // </div>
    <div className="container flex flex-col justify-between items-center gap-16 lg:flex-row lg:gap-0">
    <div className={scss.feedback}>
      <Slider ref={arrowRef} {...settings}>
        <div>
        
        </div>
        
      </Slider>
      <div className="flex mt-8 gap-8">
        <button onClick={() => arrowRef.current?.slickPrev()}><img src={prev} alt='Prev'/></button>
        <button onClick={() => arrowRef.current?.slickNext()}><img src={next} alt='Next'/></button>
      </div>
    </div>
  </div>
  );
}
export default Feedback;
