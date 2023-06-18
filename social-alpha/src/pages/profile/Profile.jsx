import React from 'react'
import ProfileLeft from './ProfileLeft'
import ProfileCard from '../../components/profIleCard/ProfileCard'
import PostSide  from '../../components/postSide/PostSide'
import RightSide from '../../components/rightSide/RightSide'

const Profile = () => {
  return (
	<div className="Profile relative grid grid-cols-3 gap-[1rem]">
  <ProfileLeft/>
  <div className="ProfileCenter flex flex-col gap-[1rem]">
    <ProfileCard/>
    <PostSide/>
  </div>
  <RightSide/>
  </div>
    )
}

export default Profile