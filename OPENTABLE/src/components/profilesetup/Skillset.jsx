import React, { useEffect } from "react";
import "../CSS/allque.css";
import "../CSS/moto.css";
import { useState } from "react";
import "../CSS/skillset.css";
import { RxCrossCircled } from "react-icons/rx";
import { Recommendskills } from "./Recommendskills";

const Skillset = () => {
  if (sessionStorage.getItem("suggestedskills")) {
    var suggestedskillsinit = sessionStorage
      .getItem("suggestedskills")
      .split(",");
  }
  const [suggestedskills, setsuggestedSkills] = useState(
    suggestedskillsinit
      ? suggestedskillsinit
      : [
          "React.js",
          "Node.js",
          "MongoDB",
          "Express.js",
          "JavaScript",
          "HTML",
          "CSS",
          "Python",
          "Java",
          "C++",
          "C#",
          "Ruby",
          "PHP",
          "Swift",
        ]
  );
  const recomendskills = Recommendskills;
  if (sessionStorage.getItem("skillsresponce")) {
    var intitalskills = sessionStorage.getItem("skillsresponce").split(",");
  }
  const [recomendbarvisible, setrecomendbarvisible] = useState(false);
  const [recomendposition, setrecomendposition] = useState(0);
  const [searchingskill, setsearchingskill] = useState("");
  const [searchedskills, setsearchedskills] = useState([]);
  const [selectedskills, setselectedskills] = useState(
    intitalskills ? intitalskills : []
  );
  const removeiskill = (item) => {
    setselectedskills(selectedskills.filter((s) => s !== item));
    setsuggestedSkills([...suggestedskills, item]);
  };
  const handleSelect = (skill) => {
    if (!selectedskills.includes(skill)) {
      setselectedskills([...selectedskills, skill]);
      setsuggestedSkills(suggestedskills.filter((s) => s !== skill));
    }
    setsearchingskill("");
    setrecomendbarvisible(false);
    setrecomendposition(0);
  };

  //   useEffect(() => {
  //     skillsetter(selectedskills);
  //     suggestedskillsetter(suggestedskills);
  //   }, [selectedskills ,skillsetter,suggestedskillsetter,suggestedskills]);
  useEffect(() => {
    if (searchingskill.length > 0) {
      setsearchedskills(
        recomendskills.filter((skill) =>
          skill.toLowerCase().includes(searchingskill.toLowerCase())
        )
      );
      if (searchedskills.length > 0) {
        setrecomendbarvisible(true);
      } else {
        setrecomendbarvisible(false);
      }
    } else {
      setrecomendbarvisible(false);
      setsearchedskills([]);
    }
    console.log(searchedskills);
  }, [searchingskill]);
  const handelkeydown = (e) => {
    if (e.key === "ArrowDown" && recomendbarvisible) {
      setrecomendposition((prev) =>
        prev < searchedskills.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      setrecomendposition((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (
      e.key === "Enter" &&
      recomendposition >= 0 &&
      recomendbarvisible
    ) {
      handleSelect(searchedskills[recomendposition]);
    }
  };
  return (
    <>
      <div className="skillarea1">
        {selectedskills.length > 0
          ? selectedskills.map((item) => (
              <span
                className="suggestedskill"
                onClick={() => removeiskill(item)}
              >
                {item} <RxCrossCircled />
              </span>
            ))
          : null}
        <div style={{ display: "inline-block" }}>
          <input
            type="text"
            className="inputtext"
            placeholder="Enter skills here"
            value={searchingskill}
            onKeyDown={handelkeydown}
            onChange={(e) => setsearchingskill(e.target.value)}
          />
          {searchedskills.length > 0 && (
            <div className="racomendationbar">
              {searchedskills.length > 0
                ? searchedskills.map((skill, index) => (
                    <div
                      key={index}
                      className={
                        index === recomendposition
                          ? "recomendedskillhigh"
                          : "recomendedskill"
                      }
                    >
                      {skill}
                    </div>
                  ))
                : null}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Skillset;
