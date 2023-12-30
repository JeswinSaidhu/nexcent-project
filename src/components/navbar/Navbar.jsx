import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
import nexcent from "../../Assets/Nav-Nexcent.svg";
import logo from "../../Assets/Nav-Icon.svg";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar scale-up-center">
      <div className="nav-logo">
        <img src={logo} className="logo" alt="" />
        <img src={nexcent} className="nexcent" alt="" />
      </div>
      <div className="nav-links">
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#service">Service</a>
        </p>
        <p>
          <a href="#feature">Feature</a>
        </p>
        <p>
          <a href="#prduct">Product</a>
        </p>
        <p>
          <a href="#testimonal">Testimonal</a>
        </p>
        <p>
          <a href="#faq">FAQ</a>
        </p>
      </div>
      <div className="nav-buttons">
        <button type="button" className="log">
          Log in
        </button>
        <button type="button" className="sign">
          Sign up
        </button>
      </div>
      <div className="nav-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#4D4D4D"
            size={25}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#4D4D4D"
            size={25}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="nav-menu-container scale-up-center">
            <div className="nav-menu-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#service">Service</a>
              </p>
              <p>
                <a href="#feature">Feature</a>
              </p>
              <p>
                <a href="#product">Product</a>
              </p>
              <p>
                <a href="#testimonal">Testimonal</a>
              </p>
              <p>
                <a href="#faq">FAQ</a>
              </p>
            </div>
            <div className="nav-menu-buttons">
              <button type="button" className="log">
                Log in
              </button>
              <button type="button" className="sign">
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
