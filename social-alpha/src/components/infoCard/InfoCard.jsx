import React from "react";
import { UilPen } from "@iconscout/react-unicons";

const InfoCard = () => {
  return (
    <div className="InoCard flex flex-col gap-[0.75rem] bg-[rgba(255,255,255,0.64)] p-[1rem] rounded-[1rem] w-[90%]">
      <div className="infoHead flex justify-between items-center">
        <h4 className=" font-bold">Your Info</h4>
        <div className=" hover:cursor-pointer">
          <UilPen className="w-[2rem] h-[1.2rem] " />
          
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in Relationship</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>London </span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Fox news </span>
      </div>
      <button className=" w-[7rem] mt-[6rem] self-end h-[2rem] px-[20px] text-white bg-[orange] flex items-center justify-center rounded-[0.5rem] hover:cursor-pointer hover:text-[#fca61f] hover:bg-transparent hover:border-[2px] hover:border-[#fca61f]">
        Logout
      </button>{" "}
    </div>
  );
};

export default InfoCard;
