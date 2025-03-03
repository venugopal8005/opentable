import React from "react"
import "../CSS/allque.css"
import "../CSS/moto.css"
import { useState } from "react"
import { Player } from "@lottiefiles/react-lottie-player"
import wtbringsuhere from "../../assets/wtbringsuhere.json"
const Moto = ({setmoto}) => {
  const handlemoto = (e) => {
 console.log(e.target.value);
    
    setDescription(e.target.value);
    setmoto(description);
  };
  const [description, setDescription] = useState( localStorage.getItem("motoresponce") || "");
  return (
    <div className="getintomaindiv">
      <div className="motoquewhole">
        <div className="motoque">
          <div className="wtsthemoto">
            Tell Us About Yourself.
          </div>

          <div>
            <textarea
              value={description}
              onChange={handlemoto}
              placeholder="Write your description here..."
              rows={5}
              className="discriptionbox"
            >
{description}</textarea>
          </div>
        </div>
        <div className="motoanimation">
            <Player
            autoplay
            loop
            src={wtbringsuhere}
            />
        </div>
      </div>
    </div>
  )
};

export default Moto;
