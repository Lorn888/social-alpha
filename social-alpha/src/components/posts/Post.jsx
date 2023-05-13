import React from "react";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
const Post = ({ data }) => {
  return (
    <div className="Post flex flex-col p-[1rem] bg-[rgba(255,255,255,0.64)] rounded-[1rem] gap-[1rem]">
      <img src={data.img} className="w-[100%] max-h-[20rem] object-cover rounded-[0.5rem]"/> 

      <div className="postReact flex items-start gap-[1rem] ">
        <img src={data.liked ? Heart : NotLike} />
        <img src={Comment} />
        <img src={Share} />
      </div>

      <span>{data.likes} likes</span>

      <div className="details">
        <span>
          <b>{data.name} </b>
        </span>

      <span>
        {data.desc}
      </span>
      </div>
    </div>
  );
};

export default Post;
