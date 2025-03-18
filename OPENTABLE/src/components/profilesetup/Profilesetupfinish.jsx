import React, { useState } from "react";
import "../CSS/Profilesetupfinish.css";
import Skillset from "./Skillset";
import Allpagenav from "./Allpagenav";
import Roadmapgenaration from "./Roadmapgenaration";
const Profilesetupfinish = (props) => {
  const [hitroadmap,sethitroadmap] = useState(false);

  const [description, setdescription] = useState(
    sessionStorage.getItem("idearesponce")
      ? sessionStorage.getItem("idearesponce")
      : " "
  );

  const handleideachange = (e) => {
    setdescription(e.target.value);
    sessionStorage.setItem("idearesponce", e.target.value);
  };
  const [descriptionmoto, setDescriptionmoto] = useState(
    sessionStorage.getItem("motoresponce")
      ? sessionStorage.getItem("motoresponce")
      : ""
  );
  const handlemoto = (e) => {
    setDescriptionmoto(e.target.value);
  };
  const handlegen = ()=>{
sethitroadmap(true);
  }
  return (
    <>
      <div className="wholewrapup">
<Allpagenav/>

        <div className="wrapupinner">
        
        <div className="wrapupheading">Let's Wrap Up</div>
          <div className="wraupstuff">
            <div className="sidea">
              <div>
                <label htmlFor="ideachange" className="idealabel">
                  Your Idea
                </label>
                <textarea
                  id="ideachange"
                  value={description}
                  onChange={handleideachange}
                  placeholder="Write your description here..."
                  rows={5}
                  className="discriptionbox1"
                >
                  {description}
                </textarea>
              </div>
              <div className="skillwrapup">
                <label className="skilllable">Your Skills</label>
                <Skillset />
              </div>
              <div className="motowrapup">
                <label htmlFor="motowrap" className="lable">
                  Your Moto
                </label>
                <div>
                  <textarea
                    value={descriptionmoto}
                    onChange={handlemoto}
                    placeholder="Write your description here..."
                    rows={5}
                    id="motowrap"
                    className="discriptionboxwrap"
                  >
                    {descriptionmoto}
                  </textarea>
                </div>
              </div>
            </div>
            {
              (hitroadmap)? (<Roadmapgenaration description =  {description} hitroadmap={hitroadmap} sethitroadmap ={sethitroadmap}/>):(<button onClick={handlegen}>genarate roadmap</button>)


            }
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Profilesetupfinish;
