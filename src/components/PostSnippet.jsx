import React from "react";
import photoIcon from "../assets/steve-jobs.jpeg";

export default function PostSnippet() {
  return (
    <div>
      <div className="post__content--snippet">
        <h1 className="post__title--snippet">The Days Have Started</h1>
        <p className="post__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eaque
          sequi aut facilis libero dolores, ullam repudiandae veniam recusandae
          nihil eveniet sunt fugit aliquid tempore exercitationem nemo suscipit,
          assumenda ex.
        </p>
      </div>
      <div className="user__info--snippet">
        <img
          className="user__img--post--snippet"
          src={photoIcon}
          alt="profile picture--snippet"
        />
        <h4 className="user__name__date--snippet">
          Steve Jobs · April 04, 2023 <br />
        </h4>
      </div>
    </div>
  );
}
