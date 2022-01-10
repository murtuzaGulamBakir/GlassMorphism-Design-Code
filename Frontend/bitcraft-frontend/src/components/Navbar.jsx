import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div>
          <Link to="/" className="link-tag">
            <img className="navbar-avatar" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-left">
          <Link to="/" className="link-tag">
            <li className="navbar-list-items">
              <h2>Countries</h2>
            </li>
          </Link>

          <li className="navbar-list-items">
            <Link className="link-tag" to="/players">
              <h2>Players</h2>
            </Link>
          </li>
          <Link className="link-tag" to="/matches">
            <li className="navbar-list-items">
              <h2>Matches</h2>
            </li>
          </Link>
          <Link className="link-tag" to="/results">
            <li className="navbar-list-items">
              <h2>Results</h2>
            </li>
          </Link>
          <Link className="link-tag" to="/score">
            <li className="navbar-list-items">
              <h2>ScoreTable</h2>
            </li>
          </Link>
        </div>
      </div>
    </div>
  );
}
