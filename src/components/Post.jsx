import React from "react";
import "../styles.css";
import photoIcon from "../assets/steve-jobs.jpeg";

export default function Post() {
  return (
    <div className="post__container">
      <div className="user__info">
        <img
          className="user__img--post"
          src={photoIcon}
          alt="profile picture"
        />
        <h4 className="user__name__date">
          Steve Jobs · April 04, 2023 <br />
          <span className="company__position">Founder & CEO at Apple</span>
        </h4>
      </div>
      <div className="post__content">
        <h1 className="post__title">The Days Have Started</h1>
        <p className="post__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          adipisci quas at, impedit ut, fuga beatae reiciendis dolorum, illo
          vero vitae sint atque autem deleniti ipsam dicta velit totam?
          Laboriosam cupiditate qui inventore nostrum fugit et rerum non illum
          atque.
        </p>
      </div>
    </div>
  );
}
