import React, { Component } from 'react'
import '../heroming2/Heroimg2style.css'
import n1 from '/Users/THE-HELL-LORD/Desktop/portfolio web r/src/assets/n1.jpg'
class Heroimg2 extends Component{
    render(){

        return (
            <div className='hero'>
            <div className="mask">
              <img src={n1}  className='into-img2' />
            </div>
            <div className="content">
              <p>{this.props.heading}</p>
              <h1>{this.props.text}</h1>
          
            </div>
      
          </div>
        )
    }
}

export default Heroimg2;
