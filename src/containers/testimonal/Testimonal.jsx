import React from "react";
import "./Testimonal.css";
import Tesla from "../../Assets/tesla.png";
import l1 from "../../Assets/l1.svg";
import l2 from "../../Assets/l2.svg";
import l3 from "../../Assets/l3.svg";
import l4 from "../../Assets/l4.svg";
import l5 from "../../Assets/l5.svg";
import l6 from "../../Assets/l6.svg";
import { IoIosArrowRoundForward } from "react-icons/io";

const Testimonal = () => {
  return (
    <>
    <div className="testimonal">
      <div className="test-left">
        <img src={Tesla} alt="" className="tesla" />
      </div>

      <div className="test-right">
        <div className="test-about">
          {/* <div className="test-description"> */}
            <p className="test-desc">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
          {/* </div> */}
          {/* <div className="test-author"> */}
            <p className="test-author-title">Tim Smith</p>
          {/* </div> */}
          {/* <div className="author-about"> */}
            <p className="test-auth-desc">
              British Dragon Boat Racing Association
            </p>
          {/* </div> */}
        </div>
        <div className="test-clients">
          <div className="client-img">
            <img src={l1} alt="" className="tclient1" />
            <img src={l2} alt="" className="tclient2" />
            <img src={l3} alt="" className="tclient3" />
            <img src={l4} alt="" className="tclient4" />
            <img src={l5} alt="" className="tclient5" />
            <img src={l6} alt="" className="tclient6" />
          </div>
          <div className="test-more">
          <button className="test-button">Meet all customers
            <IoIosArrowRoundForward color="#4CAF4F" size={24} />
          </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Testimonal;
