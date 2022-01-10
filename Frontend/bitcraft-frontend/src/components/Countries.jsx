import React, { useState } from "react";
import ballImage from "../assets/725e29b112f241f223437fbe8d0d299b.png";
import Navbar from "./Navbar";
import "../styles/Countries.css";
import axios from "axios";

export default function Countries() {
  const [countrydata, setcountrydata] = useState([""]);

  // Make a request for countries data fetch
  axios
    .get("https://murtuza-express-app.herokuapp.com/api/countries")
    .then(function (response) {
      // handle success
      return setcountrydata(response.data); // setting state of component
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  return (
    <div>
      <div className="main">
        <section className="glass">
          <Navbar />
          <div className="countries-card-rapper">
            {countrydata.map((element) => (
              <div className="countries-card" key={element._id}>
                <div className="card-content-wrapper" key={element._id}>
                  <img
                    className="card-image"
                    src={`${element.flagImage}`}
                    alt=""
                  />
                  <h1 className="countrie-name">
                    Name : {element.countryName}
                  </h1>
                  <h2 className="countrie-captain-name">
                    Captain : {element.captainname}
                  </h2>
                  <h2 className="association">
                    Association :{element.association}
                  </h2>
                  <h2 className="debut"> Debut : {element.debut}</h2>
                  <h2 className="winning-percentage">
                    Matches Won : {element.winningPercentage}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </section>

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
