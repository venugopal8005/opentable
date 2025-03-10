import React, { useState } from "react";
import "../CSS/Profilesetupfinish.css";
import Skillset from "./Skillset";
import axios from "axios";
import { motion } from "framer-motion";
const Profilesetupfinish = (props) => {
  const [runroadmap, setrunroadmap] = useState(1);
  const [roadmaploading, setroadmaploading] = useState(false);
  const [roadmapres, setroadmapres] = useState("");
  const [roadmapdone , setroadmapdone] = useState(false);
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
  const raodmapgen = async () => {
    try {
      setroadmaploading(true);

      console.log("gen called!!");
      const res = await axios.post("http://localhost:5000/profile/roadmap", {
        idea: description,
      });
      setroadmapdone(true);
      setroadmapres(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setroadmaploading(false);
    }
  };
  if (runroadmap) {
    raodmapgen();
    setrunroadmap(0);
  }
  const formatText = (text) => {
    if (!text) return null;

    const sections = text.split(/\d+\.\s/).slice(1); 

    return sections.map((section, index) => {
      const lines = section.split("\n"); 
      const title = lines[0].trim();

      const content = lines.slice(1).map((line, idx) => {
        if (line.startsWith("   -")) return <ul key={idx}>{line.slice(4)}</ul>;
        return <p key={idx}>{line.trim()}</p>; 
      });
console.log(content);
      return (
        <motion.div
        key={index}
        className="roadmap-section"
        initial={{ opacity: 0, y: 20 }}  // Start faded and shifted down
        animate={{ opacity: 1, y: 0 }}  // Fade in and move up
        transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger effect
      >
        <h2>{title}</h2>
        <ul>{content}</ul>  
      </motion.div>
      );
    });
  };

  return (
    <>
      <div className="wholewrapup">
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
                    {description}
                  </textarea>
                </div>
              </div>
            </div>
            <div className="sideb">
              {roadmaploading ? (
                <div className="skeleton-container">
                  {[...Array(33)].map((_, i) => (
                    <div
                      key={i}
                      className={`skeleton-line ${i === 0 ? "indent" : ""} ${
                        i === 33 - 1 ? "short-line" : ""
                      }`}
                    ></div>
                  ))}
                </div>
              ) : (
                <div className="roadmapgenarated sidea1">{formatText(roadmapres)}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profilesetupfinish;
