import React from "react";
import "./Product.css";
import ill2 from "../../Assets/illustration2.svg";
import ill3 from "../../Assets/illustration3.svg";
import { GoPeople, GoCreditCard } from "react-icons/go";
import { TbHandClick } from "react-icons/tb";
import { FaRegHandshake } from "react-icons/fa6";

const Product = () => {
  return (
    <>
      <div className="product" id="product">
        <div className="product-section1">
          <div className="ps1-right">
            <img src={ill2} alt="" className="ps1-img" />
          </div>
          <div className="ps1-left">
            <div className="ps1-title">
              <p>The unseen of spending three years at Pixelgrade</p>
            </div>
            <div className="ps1-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </p>
            </div>
            <div className="ps1-button">
              <button className="btn" type="submit">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ps2-box">
        <div className="product-section2">
          <div className="ps2-left">
            <div className="ps2-heading">
              <p>
                Helping a local{" "}
                <span className="ps-color-heading">business reinvent itself</span>
              </p>
            </div>
            <div className="sub-heading">
              <p>We reached here with our hard work and dedication</p>
            </div>
          </div>
          <div className="ps2-right">
            <div className="grid-top">
              <div className="g-img">
                <GoPeople color="#4CAF4F" size={48} />
              </div>
              <div className="g-text">
                <div className="g-title">2,245,341</div>
                <div className="g-stext">Members</div>
              </div>
              <div className="g-img">
                <FaRegHandshake color="#4CAF4F" size={48} />
              </div>
              <div className="g-text">
                <div className="g-title">46,328</div>
                <div className="g-stext">Clubs</div>
              </div>
            </div>
            <div className="grid-bottom">
              <div className="g-img">
                <TbHandClick color="#4CAF4F" size={48} />
              </div>
              <div className="g-text">
                <div className="g-title">828,867</div>
                <div className="g-stext">Event Bookings</div>
              </div>
              <div className="g-img">
                <GoCreditCard color="#4CAF4F" size={48} />
              </div>
              <div className="g-text">
                <div className="g-title">1,926,436</div>
                <div className="g-stext">Payments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="product-section1">
          <div className="ps1-right">
            <img src={ill3} alt="" className="ps1-img" />
          </div>
          <div className="ps1-left">
            <div className="ps1-title">
              <p>How to design your site footer like we did</p>
            </div>
            <div className="ps1-description">
              <p>
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
                scelerisque elit erat a magna. Donec quis erat at libero
                ultrices mollis. In hac habitasse platea dictumst. Vivamus
                vehicula leo dui, at porta nisi facilisis finibus. In euismod
                augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                in nisi eget nulla commodo faucibus efficitur quis massa.
                Praesent felis est, finibus et nisi ac, hendrerit venenatis
                libero. Donec consectetur faucibus ipsum id gravida.
              </p>
            </div>
            <div className="ps1-button">
              <button className="btn" type="submit">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
