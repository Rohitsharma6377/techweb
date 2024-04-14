import React from 'react'
import '../Workcard/workcard.css'
import { NavLink } from 'react-router-dom'
const Workcards = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="image" />
    <h2 className="project-title">{props.title}</h2>
    <div className="project-details">
        <p>{props.text}</p>
        <div className="project-btnss">
            <NavLink to="https://github.com/hell-lord-5911" className="btnp">view</NavLink>
       </div>
    </div>
</div>
  )
}

export default Workcards;
