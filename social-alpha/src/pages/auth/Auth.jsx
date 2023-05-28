import React from "react";
import logo from "../../img/g-h.png";

const Auth = () => {
  return (
    <div className="Auth flex items-center justify-center h-[100vh] gap-[4rem] relative">
      <div className="a-left flex items-center justify-center gap-[2rem] ">
        <img src={logo} className="w-[4rem] h-[4rem] " />
        <div className="Webname ">
          <h1 className="text-[3rem] font-display font-bold text-[#3074E5] bg-[100%] bg-repeat">
            G-Spot
          </h1>
          <h6 className="text-[0.85rem] font-bold ">
            Connect with your Gym buddies
          </h6>
        </div>
      </div>
      <Signup />
    </div>
  );
};

function Signup() {
  return (
    <div className="a-right">
      <form
        action=""
        className="infoForm authForm bg-[rgba(255,255,255,0.64)] flex flex-col justify-center items-center gap-[2rem] p-[1rem] rounded-[1rem]"
      >
        <h3 className="">Sign up</h3>
        <div className=" flex gap-[1rem] h-[2rem] w-[100%] items-center justify-center">
          <input
            type="text"
            placeholder="First Name"
            className="infoInput border-none outline-none bg-[rgba(40,52,62,0.07)] rounded-[8px] p-[20px] flex-1"
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput border-none outline-none bg-[rgba(40,52,62,0.07)] rounded-[8px] p-[20px] flex-1"
            name="lastName"
          />
        </div>
        <div className=" flex gap-[1rem] h-[2rem] w-[100%] items-center justify-center">
          <input
            type="text"
            className="infoInput border-none outline-none bg-[rgba(40,52,62,0.07)] rounded-[8px] p-[20px] flex-1"
            name="userName"
            placeholder="User Name"
          />
        </div>
        <div className=" flex gap-[1rem] h-[2rem] w-[100%] items-center justify-center">
          <input
            type="text"
            className="infoInput border-none outline-none bg-[rgba(40,52,62,0.07)] rounded-[8px]  p-[20px] flex-1"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="infoInput border-none outline-none bg-[rgba(40,52,62,0.07)] rounded-[8px] p-[20px] flex-1"
            name="confirmPass"
            placeholder="Confirm Password"
          />
        </div>

        <div>
          <span> Already ahve an account? Login!</span>
        </div>
        <button type="submit" className="h-[2rem] px-[20px] text-white bg-[orange] flex items-center justify-center rounded-[0.5rem] hover:cursor-pointer hover:text-[#fca61f] hover:bg-transparent hover:border-[2px] hover:border-[#fca61f] self-end">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Auth;