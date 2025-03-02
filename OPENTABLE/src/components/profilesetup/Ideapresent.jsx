import React, { useEffect } from "react"
import "../CSS/allque.css"
import "../CSS/moto.css"
import { useState } from "react";
import idea from "../../assets/idea.json"
import { Player } from "@lottiefiles/react-lottie-player";

const Ideapresent = ({setidea}) => {
    const [description, setDescription] = useState("");
    useEffect(() => {
      setidea(description);
    }, [description]);
  
  return (
    <div className="getintomaindiv">
    <div className="motoquewhole">
      <div className="motoque">
        <div className="wtsthemoto">
          Tell Us About Your Idea!
        </div>

        <div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write your description here..."
            rows={5}
            className="discriptionbox"
          >
{description}</textarea>
        </div>

      </div>
      <div className="ideaanimation">
      <Player
            autoplay
            loop
            src={idea}
            // className="tellabout-lottie"
            />
      </div>
    </div>
  </div>
  )
};

export default Ideapresent;
