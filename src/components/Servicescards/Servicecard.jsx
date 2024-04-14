import React from 'react'
import '../Servicescards/services.css'
import { FaLine, FaPaintBrush, FaServicestack } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Servicecard = () => {
  return (
        <div className="container">
         
          

            <div className="service__card">
             
           <div className="containercard">
           <h3>- Basic -</h3>
        <span className='bar'></span>
        <p className='btc'>$ 50</p>
        <p>- 3 Days -</p>
        <p>- 3 Pages -</p>
        <p>- Featured - </p>
        <p>- Responsiv Design -</p>
        <Link to="/contact" className="btn1">PURCHASE NOW</Link>
           </div>
            </div>
    
            <div className="service__card">
            <div className="containercard">
            <h3>- Premium -</h3>
        <span className='bar'></span>
        <p className='btc'>$ 100</p>
        <p>- 5 Days -</p>
        <p>- 5 Pages -</p>
        <p>- Featured - </p>
        <p>- Responsiv Design -</p>
        <Link to="/contact" className="btn1">PURCHASE NOW</Link>
                
            </div>
            </div>
         
            <div className="service__card">
           <div className="containercard">
              
            <h3>- Business -</h3>
        <span className='bar'></span>
        <p className='btc'>$ 200</p>
        <p>- 8 Days -</p>
        <p>- 8 Pages -</p>
        <p>- Featured - </p>
        <p>- Responsiv Design -</p>
        <Link to="/contact" className="btn1">PURCHASE NOW</Link>
           </div>
            </div>
          </div>
        
  
  )
}

export default Servicecard;
