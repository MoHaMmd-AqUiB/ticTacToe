import React, { useState } from "react";
import DashBoard from "./DashBoard";
import { queans } from "./dummyData";
import "./Search.css";
import logo from "../photos/144574-recruitment.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const Search = (data) => {
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.experience.toLowerCase().includes(query)||
        item.answer.toLowerCase().includes(query)||
        item.position.toLowerCase().includes(query)||
        item.location.toLowerCase().includes(query)

    );
  };

  function handleLogout() {
    navigate("/");
  }

  return (
    <>
      <header>
        <Lottie
          style={{
            width: "100px",
            height: "100px",
          }}
          animationData={logo}
        ></Lottie>
        <h1 className="company-title">Recruitment Solution</h1>

        <button className="header-button2" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <input
        type="text"
        placeholder="Search..."
        className="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <DashBoard data={Search(queans)} />
    </>
  );
}

export default Search;
