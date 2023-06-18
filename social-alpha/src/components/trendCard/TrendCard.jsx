import React from "react";
import { TrendData } from "../Data/TrendData.js";

const TrendCard = () => {
  return (
    <div className="TrendCard flex flex-col gap-[1rem] bg-[rgba(255,255,255,0.64)] p-[1rem] rounded-[1rem] pl-[2rem]">
      <h3 className=" font-bold">Trends for you</h3>
      {TrendData.map((trend) => {
        return (
          <div className="trend flex flex-col gap-[0.5rem]">
            <span className="font-bold  ">#{trend.name}</span>
            <span className="font-[13px]  ">{trend.shares}k shares</span>
          </div>
        )
      })}
    </div>
  );
};

export default TrendCard;
