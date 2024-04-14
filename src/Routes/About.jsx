import React from 'react'
import Navbar from '../components/navbarfile/Navbar';
import Footercomp from '../components/footercomponents/Footercomp';
import Heroimg2 from '../components/heroming2/Heroimg2';
import Abouthero from '../components/AboutHero/Abouthero';
const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2  heading={"ABOUT ME"} text={"Who I Am."}/>
      <Abouthero/>
   
      <Footercomp/>
    </div>
  )
}

export default About;
