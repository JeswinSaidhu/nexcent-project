import React from 'react';
import './Service.css';
import l1 from "../../Assets/l1.svg";
import l2 from "../../Assets/l2.svg";
import l3 from "../../Assets/l3.svg";
import l4 from "../../Assets/l4.svg";
import l5 from "../../Assets/l5.svg";
import l6 from "../../Assets/l6.svg";


const Service = () => {
  return (
    <div className="service" id='service'>
      <div className="service-heading">
        <div className="service-text">
          <div className="service-title">
            <p>Our Clients</p>
          </div>
          <div className="service-description">
            <p>We have been working with some Fortune 500+ clients</p>
          </div>
        </div>
      </div>
      <div className="clients">
          <img src={l1} alt="" className='client1'/>
          <img src={l2} alt="" className='client2'/>
          <img src={l3} alt="" className='client3'/>
          <img src={l4} alt="" className='client4'/>
          <img src={l5} alt="" className='client5'/>
          <img src={l6} alt="" className='client6' />
        </div>
    </div>
  )
}

export default Service;
