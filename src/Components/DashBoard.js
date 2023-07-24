import "./DashBoard.css";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GiModernCity } from "react-icons/gi";
import { TbFileDescription } from "react-icons/tb";
import { FaBusinessTime } from "react-icons/fa";

function DashBoard({ data }) {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="wrapper">
      <div className="accordian">
        {data.map((item, i) => (
          <div className="item" key={item.id}>
            <div className="Title" onClick={() => toggle(i)}>
              <div className="dash-name">
                <CgProfile style={{position:"relative",top:"3px",fontSize:"40px"}}/> 
                {" "}<span>{item.name}</span>
              </div>
              <div className="dash-location">
                <GiModernCity style={{position:"relative",top:"3px",fontSize:"40px"}}/> 
                {" "}<span>{item.location}</span>
              </div>
              <div className="dash-position">
                <TbFileDescription style={{position:"relative",top:"3px",fontSize:"40px"}} /> 
                {" "}<span>{item.position}</span>
              </div>
              <div className="dash-experience">
                <FaBusinessTime style={{position:"relative",top:"3px",fontSize:"40px"}} /> 
                {" "}<span>{item.experience}</span>
              </div>
              <span>{selected === i ? "-" : "+"}</span>
            </div>
            <div className={selected === i ? "content show" : "content"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default DashBoard;
