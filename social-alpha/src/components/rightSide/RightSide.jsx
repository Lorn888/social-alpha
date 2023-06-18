import React from "react";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../trendCard/TrendCard";

const RightSide = () => {
  return (
    <div className="RightSide flex flex-col gap-[2rem]">
      <div className="navIcons flex mt-[1rem] justify-between">
        <img src={Home} className="w-[1.5rem] h-[1.5rem]" />
        <UilSetting />
        <img src={Noti} className="w-[1.5rem] h-[1.5rem]" />
        <img src={Comment} className="w-[1.5rem] h-[1.5rem]" />
      </div>
      <TrendCard />

      <button className="h-[3rem] w-[80%] self-center p-[5px] px-[20px] text-[12px] text-white bg-[orange] flex items-center justify-center rounded-[0.5rem] hover:cursor-pointer hover:text-[#fca61f] hover:bg-transparent hover:border-[2px] hover:border-[#fca61f] ">
        Share
      </button>
    </div>
  );
};

export default RightSide;
