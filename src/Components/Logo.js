import "./Logo.css";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../photos/85037-recruitment.json";

function Logo() {
  //  const myStyle=(
  //     {

  //     }
  //   )
  return (
    <>
      <div className="logo">
        <div className="logo-image-container">
          <img
            className="logo-image"
            src={require("../photos/recruiter-logo.png")}
            alt="photos"
          ></img>
        </div>
        <Lottie
          style={{
            width:"25%",
            height: "60vh",
            position: "relative",
            top: "15vh",
            left: "10vw",
          }}
          animationData={animationData}
        ></Lottie>
        <div className="logo-para">
          {" "}
          Streamline Your Hiring Process with Our Online Recruitment Solution
        </div>
       
          <div className="logo-youtube">
            {" "}
            <FaYoutube></FaYoutube>
          </div>
          <div className="logo-instagram">
            <FaInstagram></FaInstagram>
          </div>
        
      </div>
    </>
  );
}

export default Logo;
