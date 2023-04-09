import React from "react";
import "../styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return (
    <div className="search__options">
      <div className="search__and__topics">
        <div className="search__container">
          <input type="text" placeholder="Search..." className="search__bar" />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="magnifying__glass"
          />
        </div>
        <div className="search__options__container">
          <ul className="search__topics">
            <span className="topic__title">Topics: </span>
            <button className="topic__btn">Tech</button>
            <button className="topic__btn">Economics</button>
            <button className="topic__btn">Design</button>
            <button className="topic__btn">News</button>
          </ul>
        </div>
      </div>
      <div className="feed__options">
        <div className="feed__type">
          <h2 className="feed__title">Posts</h2>
        </div>
        <div className="following__btn__container">
          <div className="article__source">
            <button className="article__source--btn">
              Following <FontAwesomeIcon icon={faChevronDown} className="btn" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
