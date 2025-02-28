import React, { useState } from "react"
import "../CSS/allque.css"
import "../CSS/hasornotwhole.css"
import { LuUserRoundCheck } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";


const Ideahasornot = ({setradiofinally}) => {
  
  const [radio1, setradio1] = useState(false);
  const [radio2, setradio2] = useState(false);
  const [radiofinal , setradiofinal] = useState("");
  const clickradio1 = () => {
    setradio1(true);
    setradio2(false);
    setradiofinal("radio1");
  }
  const clickradio2 = () => {
    setradio2(true);
    setradio1(false);
    setradiofinal("radio2");

  }
  // console.log("this is radio1 : ", radio1);
  // console.log("this is radio2 : ", radio2);
  setradiofinally(radiofinal);
  return (
    <>
    <div className="getintomaindiv">
      <div className="hasornotwhole">
        <div className="hasornotque">What Best Discribes You?</div>
        <div className="hasornotchoice">
          <form className="hasornotchoice">
            <div className={radio1?"choicechecked":"choices"} onClick={clickradio1}><input type="radio" name="choice" id="radio1" className="radiobt" checked={radio1} />
            <div className="hasicon"><LuUserRoundCheck />
            </div>
              <div className="choiceque">I have a startup idea and need a team to build it.</div></div>
            <div className={radio2?"choicechecked":"choices"} onClick={clickradio2}><input type="radio" name="choice" className="radiobt" checked={radio2}  />
            <div className="hasicon"><HiOutlineUserGroup /></div>
              <div className="choiceque two"> I don’t have an idea but want to collabrate on a project. </div></div>
          </form>
        </div>

      </div>
    </div>
    </>
  )
};

export default Ideahasornot;
