import React from "react";
import PostSide from "../../components/postSide/PostSide";
import ProfileSide from "../../components/profileSide/ProfileSide";
import RightSide from "../../components/rightSide/RightSide";

function Home() {
  return (
    <div className="Home relative grid grid-cols-3 gap-[1rem]">
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  );
}

export default Home;
