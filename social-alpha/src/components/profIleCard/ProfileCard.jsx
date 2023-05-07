import React from "react";
import profilePic from "../../img/profilePic.jpeg";
import Cover from "../../img/cover.jpeg";

const ProfileCard = () => {
  return (
    <div className="PrfileCard rounded-[1.5rem] flex flex-col relative gap-[1rem]">
      <div className="ProfileImages relative flex flex-col items-center justify-center">
        <img src={Cover} alt="Cover" className=" w-full" />
        <img
          src={profilePic}
          alt="profilePic"
          className="w-[6rem] rounded-[50%] absolute bottom-[-3rem] shadow-2xl "
        />
      </div>
      <div className="ProfileName flex flex-col items-center mt-[3rem] gap-[10px]">
        <span className="font-bold font-display">Patryk O</span>
        <span>Junior Dev</span>
      </div>
      <div className="followStatus">
        <hr />
        <div className="follow">
          <span>6,890</span>
          <span>Follwoing</span>
        </div>
        <div className="vl"></div>
        <div className="follow">
          <span>1</span>
          <span>Follwers</span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ProfileCard;
