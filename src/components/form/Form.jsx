import React, { useRef , useState} from 'react';
import emailjs from '@emailjs/browser';
import '../form/form.css'

const FORM = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm('service_euldzpm', 'template_rxvdsas', form.current, {
        publicKey: 'JoHAXFfPwofJeixVA',
      })
      .then(
        () => {
          alert("SUCCESS!");
          console.log('SUCCESS!');
        },
        (error) => {
          alert("FAILED...")
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
      
      <div className="container1">
<div className="form-card1">
    <div className="form-card2">
      
    <form className="form"ref={form} onSubmit={sendEmail}>




      <p className="form-heading">Get In Touch </p>
  
  <div className="form-field">
    <input required=""name="user_name"placeholder="Name" className="input-field" type="text"  />
  </div>

  <div className="form-field">
    <input
      required=""
      placeholder="Email"
      className="input-field"
      type="email"
      name='user_email'
      />
   
  </div>

  <div className="form-field">
    <input
      required=""
      placeholder="Subject"
      className="input-field"
      type="text"
      name='user_subject'
      
      />
  </div>

  <div className="form-field">
    <textarea
      required=""
      placeholder="Message"
      cols="30"
      rows="3"
      name='user_message'
      className="input-field"

      ></textarea>
    
  </div>

  <button className="sendMessage-btn" value="send">Send Message</button>
      </form>
    </div>
    </div>
  </div>
</div> 


  );
    
}
  


export default FORM;
