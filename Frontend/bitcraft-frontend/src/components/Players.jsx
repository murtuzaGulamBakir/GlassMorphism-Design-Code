import React, { useEffect, useState } from "react";
import ballImage from "../assets/725e29b112f241f223437fbe8d0d299b.png";
import Navbar from "./Navbar";
import "../styles/Players.css";
import axios from "axios";
export default function Players() {
  const [playerData, setplayerData] = useState([""]);

  useEffect(() => {
    // Make a request for player data fetch
    axios
      .get("https://murtuza-express-app.herokuapp.com/api/players") // hosted backend url
      .then(function (response) {
        // handle success
        console.log("Calling..");
        return setplayerData(response.data); // setting state of component
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, playerData == null);

  return (
    <div>
      <div className="main">
        <section className="glass">
          <Navbar />
          <div className="players-card-wrapper">
            {playerData.map((element) => (
              <div className="players-card">
                <div className="player-card-content-wrapper">
                  <img
                    className="player-card-image"
                    src={`${element.playerImage}`}
                    alt={`${element.altName}`}
                  />
                  <h1 className="player-name">Name : {element.playerName}</h1>
                  <h2 className="team-name">Team : {element.teamName}</h2>
                  <h2 className="matches-played">
                    Matches Played :{element.matchesPlayed}
                  </h2>
                  <h2 className="player-specialization">
                    Specialization : {element.playerSpecialization}
                  </h2>
                  <h2 className="strike-rate">
                    Strike Rate: {element.strikeRate}
                  </h2>
                  <h2 className="wickets-taken">
                    Wickets: {element.wicketsTaken}
                  </h2>
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
