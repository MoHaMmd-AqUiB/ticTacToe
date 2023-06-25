import "./DashBoard.css";
import { useState } from "react";


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
                <div className="dash-name">Name:{item.name}</div>
                <div className="dash-location">{item.location}</div>
                <div className="dash-position">{item.position}</div>
                <div className="dash-experience">{item.experience}</div>
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
