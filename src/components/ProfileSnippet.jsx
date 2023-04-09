import React from "react";
import photoIcon from "../assets/steve-jobs.jpeg";

export default function ProfileSnippet() {
  return (
    <div>
      <div className="user__info">
        <img
          className="user__img--post"
          src={photoIcon}
          alt="profile picture"
        />
        <h4>
          Steve Jobs
          <br />
          <span className="company__position--snippet">
            Founder & CEO at Apple
          </span>
        </h4>
        <button className="follow__btn--snippet">Follow</button>
      </div>
      <div className="reading__list"></div>
    </div>
  );
}
