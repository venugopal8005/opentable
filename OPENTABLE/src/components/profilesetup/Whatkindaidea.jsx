import React from "react"
import "../CSS/allque.css"
import "../CSS/moto.css"
import { useState } from "react"
import wtkindaanimation from "../../assets/wtkindaanimation.json"
import { Player } from "@lottiefiles/react-lottie-player"

const Whatkindaidea = ({setwhatkindidea}) => {
  const [description, setDescription] = useState(sessionStorage.getItem("whatkindidea") || "");
  
  return (
    <div className="getintomaindiv">
    <div className="motoquewhole">
      <div className="motoque">
        <div className="wtkindaproject">
        What kind of project would you like to be part of ?
        </div>

        <div>
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setwhatkindidea(description);
            }}
            placeholder="Write your description here..."
            rows={5}
            className="discriptionbox"
          >
{description}</textarea>
        </div>

      </div>
      <div className="wtkindaanimation">
      <Player
            autoplay
            loop
            src={wtkindaanimation}
            // className="tellabout-lottie"
            />
      </div>
    </div>
  </div>
  )
};

export default Whatkindaidea;
