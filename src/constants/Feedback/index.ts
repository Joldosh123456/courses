import imgActive1 from "../../assets/Feedback/img1Active.svg";
import imgActive2 from "../../assets/Feedback/img2Active.svg";
import imgActive3 from "../../assets/Feedback/img3Active.svg";
import imgActive4 from "../../assets/Feedback/img4Active.svg";
import imgActive5 from "../../assets/Feedback/img5Active.svg";
import avatar1 from "../../assets/Feedback/Avatar1.svg";
import avatar2 from "../../assets/Feedback/Avatar2.svg";
import avatar3 from "../../assets/Feedback/Avatar3.svg";
import avatar4 from "../../assets/Feedback/Avatar4.svg";
import vector from "../../assets/Feedback/Vector.svg";
 
interface slider {
    title: string,
    img: any,
    description:string,
    img1: any,
    img2: any,
    img3: any,
    img4: any,
    img5: any,
    students: string,
    profession: string,
  }
  
  export const slider: slider[] = [
    {
      title:"feedback.title",
      img: vector,
      description:"feedback.description",
      img1: avatar1,
      img2: avatar2,
      img3: imgActive1,
      img4: avatar3,
      img5: avatar4,
      students: "feedback.students",
      profession: "feedback.profession",
    },
    {
      title:"feedback.title",
      img: vector,
      description:"feedback.description",
      img1: avatar1,
      img2: avatar3,
      img3: imgActive2,
      img4: avatar4,
      img5: avatar2,
      students: "feedback.students",
      profession: "feedback.profession",
    },
    {
      title:"feedback.title",
      img: vector,
      description:"feedback.description",
      img1: avatar3,
      img2: avatar2,
      img3: imgActive3,
      img4: avatar1,
      img5: avatar4,
      students: "feedback.students",
      profession: "feedback.profession",
    },
    {
      title:"feedback.title",
      img: vector,
      description:"feedback.description",
      img1: avatar4,
      img2: avatar3,
      img3: imgActive4,
      img4: avatar1,
      img5: avatar2,
      students: "feedback.students",
      profession: "feedback.profession",
    },
    {
      title:"feedback.title",
      img: vector,
      description:"feedback.description",
      img1: avatar3,
      img2: avatar1,
      img3: imgActive5,
      img4: avatar4,
      img5: avatar2,
      students: "feedback.students",
      profession: "feedback.profession",
    },
  ]