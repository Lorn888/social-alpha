import React from 'react'
import ProfileSide from '../../components/profileSide/ProfileSide'

function Home() {
  return (
    <div className="Home relative grid grid-cols-3 gap-[1rem]">
      	<ProfileSide/>
        <div className="postSide w-auto">Posts</div>
        <div className="rightSide w-[20rem]" >Right Side</div>
    </div>
    )
}

export default Home