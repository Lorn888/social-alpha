import React from "react";
import { PostsData } from "../Data/PostsData";
import Post from "./Post";

const Posts = () => {
  return (
    <div className="Posts flex flex-col gap-[1rem]">
      {PostsData.map((post, id) => {
        return <Post data={post} id={id} />;
      })}
    </div>
  );
};

export default Posts;
