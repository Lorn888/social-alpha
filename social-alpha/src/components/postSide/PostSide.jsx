import React from 'react'
import PostShare from '../postShare/PostShare'

const PostSide = () => {
  return (
    <div className="PostSide flex flex-col gap-[1rem] h-[100vh] overflow-auto w-auto">
        <PostShare/>
    </div>
     )
}

export default PostSide