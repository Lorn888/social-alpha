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
          className="w-[6rem] rounded-[50%] absolute bottom-[-3rem]"
        />
      </div>
    </div>
  );
};

export default ProfileCard;
