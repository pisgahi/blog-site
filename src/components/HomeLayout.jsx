import React from "react";
import Nav from "./Nav";
import Search from "./Search";
import Post from "./Post";
import Interests from "./Interests";

export default function HomeLayout() {
  return (
    <div className="home__layout--container">
      <div className="left__side">
        <Search />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="right__side">
        <Interests />
      </div>
    </div>
  );
}
