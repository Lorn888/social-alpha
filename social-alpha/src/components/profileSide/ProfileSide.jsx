import React from 'react'
import LogoSearch from '../logoSearch/LogoSearch'
import ProfileCard from '../profIleCard/ProfileCard'

const ProfileSide = () => {
  return (
<div className="ProfileSide w-[18rem] flex flex-col gap-[1rem] items-center ">
    <LogoSearch/>
    <ProfileCard/>
	</div>  )
}

export default ProfileSide