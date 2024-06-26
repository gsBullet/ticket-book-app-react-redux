import React from "react";

const Header = () => {
  return (
    <div className="container">
      <img src="./img/lws-logo.svg" alt="logo" className="logo" />
      <div className="flex items-center">
        <a className="text-white min-w-[50px] font-medium" href="/#">
          Home
        </a>
        <button className="log-btn btn">Login</button>
      </div>
    </div>
  );
};

export default Header;
