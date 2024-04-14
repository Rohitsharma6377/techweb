import React from 'react'
import "../heroimg/Herostyle.css"
import n3 from '/Users/THE-HELL-LORD/Desktop/portfolio web r/src/assets/n3.jpg'
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className='hero'>
      <div className="mask">
        <img src={n3}  className='into-img' />
      </div>
      <div className="content">
        <p>HI, I'M ROHIT</p>
        <h1>Freelancer & React Developer.</h1>
      <div className='button1'>
        <Link to="/project" className="btn1">Project</Link>
        <Link to="/contact" className="btn1t">Contact</Link>
      </div>
      </div>

    </div>
  )
}

export default Heroimg;
