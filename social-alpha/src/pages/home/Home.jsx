import React from 'react'
import PostSide from '../../components/postSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'

function Home() {
  return (
    <div className="Home relative grid grid-cols-3 gap-[1rem]">
      	<ProfileSide/>
				<PostSide/>
        <div className="rightSide w-[20rem]" >Right Side</div>
    </div>
    )
}

export default Home