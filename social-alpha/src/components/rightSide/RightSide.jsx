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
    </div>
  );
};

export default RightSide;
