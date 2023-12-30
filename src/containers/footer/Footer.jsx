import React from "react";
import "./Footer.css";
import logo from "../../Assets/Icon.svg";
import nexcent from "../../Assets/Nexcent.svg";
import insta from "../../Assets/insta.svg";
import web from "../../Assets/web.svg";
import x from "../../Assets/x.svg";
import youtube from "../../Assets/youtube.svg";
// import { FiSend } from "react-icons/fi";
import send from "../../Assets/send.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot-left">
        <div className="company-info">
          <img src={logo} alt="" className="footer-logo" />
          <img src={nexcent} alt="" className="footer-nexcent" />
        </div>
        <div className="copyright-info">
          <p>Copyright © 2020 Nexcent ltd.</p>
          <p>All rights reserved</p>
        </div>
        <div className="socials">
          <img src={insta} alt="" className="social" />
          <img src={web} alt="" className="social" />
          <img src={x} alt="" className="social" />
          <img src={youtube} alt="" className="social" />
        </div>
      </div>
      <div className="foot-right">
        <div className="footer-about">
          <p className="footer-title">Company</p>
          <p className="footer-sub">About</p>
          <p className="footer-sub">Blog</p>
          <p className="footer-sub">Contact Us</p>
          <p className="footer-sub">Pricing</p>
          <p className="footer-sub">Testimonals</p>
        </div>
        <div className="footer-about">
          <p className="footer-title">Support</p>
          <p className="footer-sub">Help center</p>
          <p className="footer-sub">Terms of service</p>
          <p className="footer-sub">Legal</p>
          <p className="footer-sub">Privacy policy</p>
          <p className="footer-sub">Status</p>
        </div>
        <div className="footer-about">
          <p className="footer-title">Stay up to date</p>
          <form action="">
            <div className="footer-input">
              <input
                type="text"
                required
                name="email"
                placeholder="Your email address"
              />
              <input type="image" src={send} alt="submit" className="send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
