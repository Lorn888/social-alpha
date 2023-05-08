import React from "react";
import { Followers } from "../Data/FollowersData";

const FollowersCard = () => {
  return (
    <div className="FollowesCard w-full rounded-[0.7rem] gap-[1rem] flex flex-col text-[13px]">
      <h3 className="">Who is follwoing you?</h3>

      {Followers.map((follower, id) => {
        return (
          <div className="follower flex justify-between items-center">
            <div className="flex  gap-[10px]">
              <img
                src={follower.img}
                alt="Follower img"
                className="FollowerImg w-[3.2rem] h-[3.2rem] rounded-full"
              />

              <div className="name flex flex-col items-start justify-center">
                <span className=" font-bold">{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button>
              Follow
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
