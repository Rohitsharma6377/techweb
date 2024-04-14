import React from 'react'
import Navbar from '../components/navbarfile/Navbar';
import Footercomp from '../components/footercomponents/Footercomp';
import Heroimg2 from '../components/heroming2/Heroimg2';
import Form from '../components/form/Form';
const Contact = () => {
  return (
    <div>
 <Navbar/>
 <Heroimg2 heading={"Contact"} text={"Lets Connect via chat"}/>
 <Form/>

 <Footercomp/>
    </div>
  )
}

export default Contact;
