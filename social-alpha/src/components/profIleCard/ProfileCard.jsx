import React from "react";
import profilePic from "../../img/profilePic.jpeg";
import Cover from "../../img/cover.jpeg";

const ProfileCard = () => {

  const ProfilePage = true
  return (
    <div className="PrfileCard rounded-[1.5rem] flex flex-col relative gap-[1rem] overflow-x-clip bg-[rgba(255,255,255,0.64)]">
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

      <div className="followStatus flex flex-col items-center justify-center gap-[0.75rem]">
        <hr className="w-[85%] border-[#cfcdcd]" />
        <div className=" flex gap-[1rem] w-[80%] justify-around items-center">
          <div className="follow flex flex-col gap-[0.4rem] items-center justify-center font-display">
            <span className="font-bold">6,890</span> 
            <span className="text-[rgba(36,45,73,0.65)] text-[13px]">Follwoing</span>
          </div>
          <div className="vl h-[50px] border-r-[2px] border-[#cfcdcd]"></div>
          <div className="follow flex flex-col gap-[0.4rem] items-center justify-center  font-display">
            <span className="font-bold">1</span>
            <span className="text-[rgba(36,45,73,0.65)] text-[13px]">Follwers</span>
          </div>

          {ProfilePage && (
            <>
          <div className="vl h-[50px] border-r-[2px] border-[#cfcdcd]">

          </div>

          <div className="follow flex flex-col gap-[0.4rem] items-center justify-center  font-display">
              <span className="font-bold">
                3 
              </span>
              <span className="text-[rgba(36,45,73,0.65)] text-[13px]">
                Posts
              </span>
            </div>
            </>
          )}
        </div>
      <hr className="w-[85%] border-[#cfcdcd] p-1" />
      </div>
      {ProfilePage? '':
      
      <span className="items-center font-bold text-orange-400 mb-[1rem] cursor-pointer self-center">
        My Profile
      </span>
    }
    </div>
  );
};

export default ProfileCard;
