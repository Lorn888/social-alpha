import React from "react";
import { Followers } from "../Data/FollowersData";

const FollowersCard = () => {
  return (
    <div className="FollowesCard ">
      <h3 className="">Who is follwoing you?</h3>

      {Followers.map((follower, id) => {
        return (
          <div className="follower">
            <div>
              <img
                src={follower.img}
                alt="Follower img"
                className="FollowerImg"
              />

              <div className="name">
                <span>{follower.name}</span>
                <span>{follower.username}</span>
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
