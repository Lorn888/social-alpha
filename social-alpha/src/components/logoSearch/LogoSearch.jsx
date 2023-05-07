import React from "react";
import Logo from "../../img/logo.svg";
import Search from "../../img/search.svg";

const LogoSearch = () => {
  return (
    <div className="LogoSearch flex gap-[0.75rem]">
      <img className="h-9" src={Logo} alt="logo" />
      <div className="Search flex bg-[rgb(40,52,62,0.07)] rounded-[10px] p-[5px]">
        <input className=" bg-transparent border outline-none" type="text" placeholder="#Explore" />
        <div className="s-icon">
          <img src={Search} alt="" className="h-6 flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 via-orange-600 rounded-[5px] p-[4px] cursor-pointer11111" />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
