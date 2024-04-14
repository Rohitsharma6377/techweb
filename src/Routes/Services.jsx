import React from 'react'
import Navbar from '../components/navbarfile/Navbar';
import Heroimg2 from '../components/heroming2/Heroimg2';

import Footercomp from '../components/footercomponents/Footercomp';
import Servicecard from '../components/Servicescards/Servicecard';

const Services = () => {
  return (
    <div>
        <Navbar/>
      <Heroimg2 heading={"SERVICES"} text={"Here Is Our Some Plans For Web Dev."} />
      
      <Servicecard/>
     
      <Footercomp/>
    </div>
  )
}

export default Services;
