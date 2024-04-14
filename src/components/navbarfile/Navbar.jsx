import React, { useState } from "react";
import "../navbarfile/Navbarstyle.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { colors } from "@material-ui/core";
import logonav from '/Users/THE-HELL-LORD/Desktop/portfolio web r/src/assets/logonav.jpg'
const Navbar = () => {
  const [click, setClick] = useState(false);

  const Handelclick = () => {
    setClick(!click);
    const [ colors , setColors]=useState(false)
    const Changecolor = ()=>{
        if (window.scrollY >=100){
            setColors(true);
        }else{
            setColors(false);
        }
    }
    window.addEventListener("scroll" , Changecolor);
  };
  return (
    <div className={colors ? "header header-bg" : "header"} >
      <Link to="/">
       <div className="img11">
       <img src={logonav} alt="this is logo" />
       </div>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" className="tag">Home</Link>
        </li>
        <li>
          <Link to="/project" className="tag">Project</Link>
        </li>
        <li>
          <Link to="/contact" className="tag">Contact</Link>
        </li>
        <li>
          <Link to="/services"className="tag">Services</Link>
        </li>
        <li>
          <Link to="/about" className="tag">About</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={Handelclick}>
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
