import React from "react";
import "./FAQ.css";
import faq1 from "../../Assets/faq1.png";
import faq2 from "../../Assets/faq2.png";
import faq3 from "../../Assets/faq3.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const FAQ = () => {
  return (
    <div className="faq" id="faq">
      <div className="faq-text">
        <p className="faq-title">Caring is the new marketing</p>
        <p className="faq-description">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
      </div>
      <div className="faq-box">
        <div className="faq-ques">
          <div className="faq-img">
            <img src={faq1} alt="" />
          </div>
          <div className="faq-qtext">
            <p>Creating Streamlined Safeguarding Processes with OneRen</p>
            <button className="faq-button">
              Readmore
              <IoIosArrowRoundForward color="#4CAF4F" size={24} />
            </button>
          </div>
        </div>

        <div className="faq-ques">
          <div className="faq-img">
            <img src={faq2} alt="" />
          </div>
          <div className="faq-qtext">
            <p>
              What are your safeguarding responsibilities and how can you manage
              them?
            </p>
            <button className="faq-button">
              Readmore
              <IoIosArrowRoundForward color="#4CAF4F" size={24} />
            </button>
          </div>
        </div>
        <div className="faq-ques">
          <div className="faq-img">
            <img src={faq3} alt="" />
          </div>
          <div className="faq-qtext">
            <p>Revamping the Membership Model with Triathlon Australia</p>
            <button className="faq-button">
              Readmore
              <IoIosArrowRoundForward color="#4CAF4F" size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
