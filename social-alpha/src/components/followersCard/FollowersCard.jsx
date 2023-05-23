import React from "react";
import { Followers } from "../Data/FollowersData";

const FollowersCard = () => {
  return (
    <div className="FollowesCard w-full rounded-[0.7rem] gap-[1rem] flex flex-col text-[13px]">
      <h3 className=" font-bold">Who is following you?</h3>

      {Followers.map((follower, id) => {
        return (
          <div className="follower flex justify-between items-center">
            <div className="flex gap-[10px]">
              <img
                src={follower.img}
                alt="Follower img"
                className="FollowerImg w-[3.2rem] h-[3.2rem] rounded-full"
              />

              <div className="name flex flex-col items-start justify-center">
                <span className="font-bold">{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className="h-[2rem] px-[20px] text-white bg-[orange] flex items-center justify-center rounded-[0.5rem] hover:cursor-pointer hover:text-[#fca61f] hover:bg-transparent hover:border-[2px] hover:border-[#fca61f]">
              Follow
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
