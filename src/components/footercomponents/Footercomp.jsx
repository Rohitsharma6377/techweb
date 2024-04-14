import React from "react";
import "../footercomponents/Footerstyle.css";
import {
  FaFacebook,
  FaHome,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
const Footercomp = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="up">
          <h4>About the Company</h4>
          <p>
            This is the official website of Pixelpioneerstech .
            We Deals in All type of Software & website Development.
            we are also Available for discuss about new technology 
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{
                color: "#fff",
                marginRight: "3rem",
              }}
            />
            <FaTwitter
              size={30}
              style={{
                color: "#fff",
                marginRight: "3rem",
              }}
            />
            <FaLinkedin
              size={30}
              style={{
                color: "#fff",
                marginRight: "3rem",
              }}
            />
          </div>
        </div>
        <div className="down">
          <div className="location">
            <h4>
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "3rem" }}
              />
              Gurugaon , Haryana India
            </h4>
          </div>
        <div className="phone">
          <h4>
            <FaPhone size={20} style={{ color: "#fff", marginRight: "3rem" }} />
            +91 6377289324
          </h4>
        </div>
        <div className="mail">
          <h4>
            <FaMailBulk
              size={20}
              style={{
                color: "#fff",
                marginRight: "3rem",
              }}
            />
            Lavish637728@gmail.com
          </h4>
        </div>
        </div>
      </div>
    <div>
      <p class="footer__copyright">
          &copy; 2023 Copyright. All Rights Reserved
        </p>

    </div>
    </div>
  );
};

export default Footercomp;
