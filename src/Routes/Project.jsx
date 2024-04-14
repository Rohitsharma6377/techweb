import React from 'react'
import Footercomp from '../components/footercomponents/Footercomp';
import Navbar from '../components/navbarfile/Navbar';
import Heroimg2 from '../components/heroming2/Heroimg2';
import Work from '../components/Workcard/Work'
const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading={"PROJECTS"} text={"Here is my some Projects , When you click View you can see the source code on github "} />
      <Work/>
 
     
      <Footercomp/>
    </div>
  )
}

export default Project;