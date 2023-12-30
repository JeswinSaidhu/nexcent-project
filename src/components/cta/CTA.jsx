import React from 'react';
import './CTA.css';
import { IoIosArrowRoundForward } from "react-icons/io";

const CTA = () => {
  return (
    <div className='cta' id='cta'>
      <div className="cta-text">
        <p>Pellentesque suscipit fringilla libero eu.</p>
      </div>
      <div className="cta-button">
         <button className="cta-btn" type="submit">
            Get a Demo 
            <IoIosArrowRoundForward color="#fff" size={24} />
          </button>
      </div>
    </div>
  )
}

export default CTA
