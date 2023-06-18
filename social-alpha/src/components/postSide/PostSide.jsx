import React from 'react'
import Posts from '../posts/Posts'
import PostShare from '../postShare/PostShare'

const PostSide = () => {
  return (
    <div className="PostSide flex flex-col gap-[1rem] h-[100vh] overflow-auto w-auto no-scrollbar">
        <PostShare/>
        <Posts/>
    </div>
     )
}

export default PostSide