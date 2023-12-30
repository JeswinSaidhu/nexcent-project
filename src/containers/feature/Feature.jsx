import React from "react";
import "./Feature.css";
import fl1 from "../../Assets/fl1.svg";
import fl2 from "../../Assets/fl2.svg";
import fl3 from "../../Assets/fl3.svg";
import flbg from "../../Assets/flbg.svg";

const Feature = () => {
  return (
    <div className="feature" id="feature">
      <div className="feature-heading">
        <div className="feature-title">
          <p>Manage your entire community in a single system</p>
        </div>
        <div className="feature-description">
          <p>Who is Nextcent suitable for?</p>
        </div>
      </div>
      <div className="feature-list">
        <div className="list-item">
          <div className="list-img">
            <img src={flbg} alt="" className="fl-bg" />
            <img src={fl1} alt="" className="fl-img" />
          </div>
          <p className="fl-title">Membership Organisations</p>
          <p className="fl-description">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="list-item">
          <div className="list-img">
            <img src={flbg} alt="" className="fl-bg" />
            <img src={fl2} alt="" className="fl-img" />
          </div>
          <p className="fl-title">National Associations</p>
          <p className="fl-description">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="list-item">
          <div className="list-img">
            <img src={flbg} alt="" className="fl-bg" />
            <img src={fl3} alt="" className="fl-img" />
          </div>
          <p className="fl-title">Clubs And Groups</p>
          <p className="fl-description">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;

