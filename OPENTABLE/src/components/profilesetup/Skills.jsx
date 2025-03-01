import React from "react"
import "../CSS/allque.css"
import "../CSS/moto.css" 
import { useState } from "react";
import "../CSS/skills.css"
import { RxCrossCircled } from "react-icons/rx";


const Skills = (props) => {
    const [suggestedskills, setsuggestedSkills] = useState([
        "React","Node","MongoDB","Express","Javascript","HTML","CSS","Python","Java","C++","C#","Ruby","PHP","Swift",
    ]);
  
  return (
    <div className="getintomaindiv">
    <div className="motoquewhole">
      <div className="motoque">
        <div className="skillsque">
        What skills do you bring to the table ?
        </div>

        <div className="skillarea">
          <input type="text" className="inputtext" placeholder="Enter skills here"/>


        </div>

<div className="suggestedskills">
    
        {suggestedskills.map((skill) => (
            <span className="suggestedskill">{skill} < RxCrossCircled />
 </span>
        ))}

</div>
      </div>
     
    </div>
    </div>
  )
};

export default Skills;
