import React from "react";
import img from "../../img/profilePic.jpeg";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";

const PostShare = () => {
  return (
    <div className="PostShare flex gap-[1ren] bg-[rgba(255,255,255,0.64)] p-[1rem] rounded-[1rem]">
      <img src={img} className="rounded-[50%] w-[3rem] h-[3rem]" />
      <div className="flex  flex-col w-[90%] gap-[1rem]">
        <input
          type="text"
          placeholder="What's up?"
          className="bg-[rgba(40,52,62,0.07)] rounded-[10px] p-[10px] text-[17px] border-none outline-none"
        />
        <div className="postOptions flex justify-around ">
          <div className="option p-[10px] p-x-[10px] rounded-[10px] flex items-center justify-center text-[12px] hover:cursor-pointer text-[#4cb256]">
            <UilScenery />
            Photo
          </div>
          <div className="option p-[10px] p-x-[10px] rounded-[10px] flex items-center justify-center text-[12px] text-[#4a4eb7]">
            <UilPlayCircle />
            Video
          </div>
          <div className="option p-[10px] p-x-[10px] rounded-[10px] flex items-center justify-center text-[12px] text-[#ef5757]">
            <UilLocationPoint />
            Location
          </div>
          <div className="option p-[10px] p-x-[10px] rounded-[10px] flex items-center justify-center text-[12px] text-[#e1ae4a]">
            <UilSchedule />
            Schedule
          </div>
          <button className="h-[2rem] p-[5px] px-[20px] text-[12px] text-white bg-[orange] flex items-center justify-center rounded-[0.5rem] hover:cursor-pointer hover:text-[#fca61f] hover:bg-transparent hover:border-[2px] hover:border-[#fca61f] ">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostShare;
