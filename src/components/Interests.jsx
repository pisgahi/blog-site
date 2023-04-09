import React from "react";
import ProfileSnippet from "./ProfileSnippet";
import PostSnippet from "./PostSnippet";

export default function Interests() {
  return (
    <div className="interests__container">
      <h4 className="profile__interests--title">
        People you might be interested in
      </h4>
      <div className="follow__interests--constainer">
        <ProfileSnippet />
        <ProfileSnippet />
        <ProfileSnippet />
      </div>
      <h4 className="profile__interests--title">Trending Posts</h4>
      <div className="post__interests--container">
        <PostSnippet />
        <PostSnippet />
        <PostSnippet />
      </div>
    </div>
  );
}
