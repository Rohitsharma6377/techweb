import React from "react";
import "../AboutHero/abouthero.css";
import hero1 from "/Users/THE-HELL-LORD/Desktop/portfolio web r/src/assets/hero1.jpg";
const Abouthero = () => {
  return (
    <div className="hero11">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h1 className="hero__title">
              HI, I'M ROHIT,
              <br />
              Freelancer & React Developer.
            </h1>
            <p className="hero__description">
              I am a Dedicated Software Engineer With equipped Skilled in React js. and python with 
              a comperhansive Diploma in Computer science.My journey in the
              realm of technology has been marked by a passion for innovation, a
              hunger of knowledge, and a relentless pursuit of excellence. With
              a firm grounding in the principles of computer science. I have
              honed my skills to address the dynamic of the modern digital
              landscape.
            </p>
            <p className="Founder">
              Founder & CEO of Pixelpioneerstech
            </p>
            <div className="hero__info">
              <div className="hero__info-wrapper">
                <p className="hero__info-number">0.6</p>
                <h2 className="hero__info-title">
                  Years
                  <br />
                  Experience
                </h2>
              </div>
              <div className="hero__info-wrapper">
                <p className="hero__info-number">10+</p>
                <h2 className="hero__info-title">
                  Projects
                  <br />
                  Completed
                </h2>
              </div>
              <div className="hero__info-wrapper">
                <p className="hero__info-number">01</p>
                <h2 className="hero__info-title">
                  Companies
                  <br />
                  Worked
                </h2>
              </div>
            </div>
          </div>
        </div>
        <img src={hero1} alt="Rohit img" className="hero__img" />
      </div>
        
    </div>
  );
};

export default Abouthero;
