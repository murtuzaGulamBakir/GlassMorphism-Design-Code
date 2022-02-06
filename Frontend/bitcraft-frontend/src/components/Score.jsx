import React, { useEffect, useState } from "react";
import ballImage from "../assets/725e29b112f241f223437fbe8d0d299b.png";
import Navbar from "./Navbar";
import "../styles/Score.css";
import axios from "axios";
export default function Result() {
  const [scoreData, setscoreData] = useState([""]);
  useEffect(() => {
    // Make a request for scores data fetch
    axios
      .get("https://murtuza-express-app.herokuapp.com/api/scores") // hosted backend url
      .then(function (response) {
        // handle success
        console.log("Calling..");
        return setscoreData(response.data); // setting state of component
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, scoreData == null);

  return (
    <div>
      <div className="main">
        <section className="glass">
          <Navbar />
          <div className="score-card-rapper">
            <div className="score-card">
              <div className="score-card-content-wrapper boldit">
                <h2 className="Scoredata">Icon</h2>
                <h2 className="Scoredata">Teamname</h2>
                <h2 className="Scoredata">PCTs</h2>
                <h2 className="Scoredata">Points</h2>
                <h2 className="Scoredata">Won</h2>
                <h2 className="Scoredata">Lost</h2>
                <h2 className="Scoredata">Draw</h2>
                <h2 className="Scoredata">Series</h2>
              </div>
            </div>
            {scoreData.map((element) => (
              <div className="score-card">
                <div className="score-card-content-wrapper">
                  <img
                    src={`${element.scoretableteamImage}`}
                    className="scoreteamImage"
                  />
                  <h2 className="Scoredata">{element.scoretableTeamname}</h2>
                  <h2 className="Scoredata">{element.PCTs}</h2>
                  <h2 className="Scoredata">{element.points}</h2>
                  <h2 className="Scoredata">{element.won}</h2>
                  <h2 className="Scoredata">{element.lost}</h2>
                  <h2 className="Scoredata">{element.draw}</h2>
                  <h2 className="Scoredata">{element.series}</h2>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Glass Design design */}

        <marquee behavior="alternate" scrollamount="40">
          <marquee behavior="alternate" direction="down" scrollamount="30">
            <img className="moving-circle" src={ballImage} alt="" />
          </marquee>
        </marquee>
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  );
}
