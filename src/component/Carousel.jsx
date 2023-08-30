import React from 'react';
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// ....

import Benner1 from "../assets/Website Assets/Banner 1.png"
import Benner2 from "../assets/Website Assets/Banner 2.png"
import Benner3 from "../assets/Website Assets/Banner 3.png"
import Benner4 from "../assets/Website Assets/Banner 4.png"
import Benner5 from "../assets/Website Assets/Banner 5.png"


const Carousel  = () => {

    return (
        
   <OwlCarousel 
   className="owl-thame"
   items="4"
 
   padding = "23"
   autoHeight = "true"
   autoplay
   nav
   dots
   loop
  
   
   >
    

    
        <div className='item'>
        <div>
           <img src={Benner1} alt="" />
          </div>
        </div>
        <div className='item'>
        <div>
        <img src={Benner2} alt="" />
          </div>
        </div>
        <div className='item'>
        <div>
        <img src={Benner3} alt="" />
          </div>
        </div>
        <div className='item'><div>
        <img src={Benner4} alt="" />
          </div> 
        </div>
        <div className='item' ><div>
        <img src={Benner5} alt="" />
          </div>
        </div>
        
   </OwlCarousel>
    );
    
  
  };
  
  export default Carousel ;