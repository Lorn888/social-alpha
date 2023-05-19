import React from 'react'
import FollowersCard from '../../components/followersCard/FollowersCard'
import InfoCard from '../../components/infoCard/InfoCard'
import LogoSearch from '../../components/logoSearch/LogoSearch'

const ProfileLeft = () => {
  return (
    <div className="ProfileLeft w-[18rem]">
        <LogoSearch/>
        <InfoCard/>
        <FollowersCard/>
    </div>
    )
}

export default ProfileLeft