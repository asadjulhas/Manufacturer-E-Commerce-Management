import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAward, faFileInvoiceDollar, faPeopleCarryBox, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Counter.css'

const Counter = () => {
  return (
    <div className="count_down">
  <div className="container">
   <div className="countdown_area text-center">
    <div className="row">

     <div className="col-md-3 col-sm-3">
      <div className="counter_item">
       <div className="awsam_icon">
       <FontAwesomeIcon className="cart_icon" icon={faScrewdriverWrench}/>
       </div>
         <h2><span><span className="counter">253+ </span></span></h2><p>Tools</p>
      </div>
     </div>

     <div className="col-md-3 col-sm-3">
      <div className="counter_item">
       <div className="awsam_icon">
       <FontAwesomeIcon className="cart_icon" icon={faPeopleCarryBox}/>
       </div>
         <h2><span><span className="counter">25K+ </span></span></h2><p>Happy Clients </p>
      </div>
     </div>

     <div className="col-md-3 col-sm-3">
      <div className="counter_item">
       <div className="awsam_icon">
       <FontAwesomeIcon className="cart_icon" icon={faAward}/>
       </div>
         <h2><span><span className="counter">17 </span></span></h2><p>Awards</p>
      </div>
     </div>

     <div className="col-md-3 col-sm-3">
      <div className="counter_item">
       <div className="awsam_icon">
       <FontAwesomeIcon className="cart_icon" icon={faFileInvoiceDollar}/>
       </div>
         <h2><span><span className="counter">$17M+ </span></span></h2><p>Annual revenue</p>
      </div>
     </div>

   </div>
  </div>
 </div>
</div>
  );
};

export default Counter;