import React from "react";
import "../Workcard/work.css";
import Workcards from "./Workcards";
import Workcarddata from "./Workcarddata";
const Work = () => {
  return (
    <div className="work-container">
      <div className="project-container">
        {Workcarddata &&
          Workcarddata.map((val, ind) => {
            return (
              <Workcards
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Work;
