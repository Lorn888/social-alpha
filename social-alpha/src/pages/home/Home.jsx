import React from 'react'

function Home() {
  return (
    <div className="Home relative grid grid-cols-3 gap-[1rem]">
        <div className="profileSide w-[18rem]">Profile</div>
        <div className="postSide w-auto">Posts</div>
        <div className="rightSide w-[20rem]" >Right Side</div>
    </div>
    )
}

export default Home