import React from "react";
import "./Header.css";
import ill1 from "../../Assets/illustration1.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="heading">
          <p>
            Lessons and insights{" "}
            <span className="color-heading">from 8 years</span>
          </p>
          </div>
          <div className="sub-heading">
          <p>
            Where to grow your business as a photographer: site or social media?
          </p>
        </div>
        <div className="header-button">
          <button className="btn" type="submit">
            Register
          </button>
        </div>
      </div>
      <div className="header-right">
        <img src={ill1} alt="" className="ill1" />
      </div>
    </div>
  );
};

export default Header;
