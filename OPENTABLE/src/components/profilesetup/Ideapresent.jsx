import React, { useEffect } from "react"
import "../CSS/allque.css"
import "../CSS/moto.css"
import { useState } from "react";
import idea from "../../assets/idea.json"
import { Player } from "@lottiefiles/react-lottie-player";

const Ideapresent = ({setidea}) => {
  const pastidea = sessionStorage.getItem("idearesponce");

  const [description, setDescription] = useState((pastidea)?pastidea:" ");
   
  const handleideachange = (e) => {
    setDescription(e.target.value);
    setidea(e.target.value);

  }
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
            onChange={handleideachange}
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

            />
      </div>
    </div>
  </div>
  )
};

export default Ideapresent;
