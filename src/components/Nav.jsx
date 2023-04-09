import React from "react";
import "../styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faPenToSquare,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import photoIcon from "../assets/steve-jobs.jpeg";

export default function Nav() {
  return (
    <header>
      <FontAwesomeIcon className="side__menu" icon={faBars} />
      <nav className="nav">
        <h1 className="nav__title">BLOG SITE</h1>
      </nav>
      <FontAwesomeIcon
        className="user__icon notification__bell"
        icon={faBell}
      />
      <img className="user__img" src={photoIcon} alt="" />
      <button className="write__btn">
        <FontAwesomeIcon className="user__icon" icon={faPenToSquare} /> Write
      </button>
    </header>
  );
}
