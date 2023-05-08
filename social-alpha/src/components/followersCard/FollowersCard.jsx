import React from 'react'
import { Followers } from '../Data/FollowersData'

const FollowersCard = () => {
  return (
    <div className="FollowesCard">
        <h3 className="">Who is follwoing you?</h3>

        {Followers.map((follower, id)=> {
          return(
            <div className="follower">Yes Follower</div>
          )
        })}
    </div>
  )
}

export default FollowersCard