import React from 'react'
import Home from './pages/home/Home'

function App() {
  return (
<div className="App overflow-hidden text-[#242d49] bg-[#f3f3f3] p-[1rem]">
      <div className = "absolute top-[-6%] right-0 w-80 h-56 rounded-full bg-[#a6ddf0] blur-3xl"></div>
      <div className = "absolute top-36 left-[-8rem] w-80 h-56 rounded-full bg-[#a6ddf0] blur-3xl"></div>
      <Home/>
    </div>  )
}

export default App