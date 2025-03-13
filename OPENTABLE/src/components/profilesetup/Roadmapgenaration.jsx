import React, { useEffect } from "react"
import axios from "axios";
import "../CSS/Profilesetupfinish.css";
import { motion } from "framer-motion";
import { useState } from "react";
const Roadmapgenaration = ({description ,hitroadmap , sethitroadmap}) => {
      const prevroadmap = sessionStorage.getItem("roadmapresponce");  
      const [roadmapres, setroadmapres] = useState((false)?prevroadmap:" ");
      const [maploading,setmaploading] = useState("false");
      const raodmapgen1 =async () => {
        try {
          console.log("gen called!!");
        setmaploading(true);

          const res = await axios.post("http://localhost:5000/profile/roadmap", {
            idea: description,
          });
          sessionStorage.setItem("roadmapresponce"  , res.data);
          setroadmapres(res.data);

        } catch (error) {
          console.log(error);
        } finally {
          console.log("done!!!");
          setmaploading(false);
        }
       
      };
      const formatText = (text) => {
        if (!text) return null;

        const sections = text.split(/\n/); // Split by new lines
      
        return sections.map((line, index) => {
          line = line.trim();
      
          if (line.startsWith("### ")) {
            // Headings prefixed with "###"
            return (
              <motion.h2
                key={index}
                className="roadmap-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {line.slice(4)}
              </motion.h2>
            );
          } else if (line.match(/^\d+\.\s/)) {
            // Numbered sections (1., 2., etc.)
            return (
              <motion.h3
                key={index}
                className="roadmap-subheading"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {line}
              </motion.h3>
            );
          } else if (line.startsWith("- ")) {
            // Bullet points prefixed with "- "
            return (
              <motion.li
                key={index}
                className="roadmap-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {line.slice(2)}
              </motion.li>
            );
          } else if (line) {
            // Regular text
            return (
              <motion.p
                key={index}
                className="roadmap-text"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {line}
              </motion.p>
            );
          }
          return null;
        });
      };
  
      useEffect(() => {
        if (!hitroadmap) return;
        raodmapgen1();
      }, [hitroadmap]);  // Runs only when `hitroadmap` changes
      

  return (
    <div className="sideb">
                    {maploading ? (
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
  )
};

export default Roadmapgenaration;
