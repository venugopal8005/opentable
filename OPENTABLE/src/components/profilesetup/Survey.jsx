import React, { useState } from "react";

const suggestedSkills = [
  "Web Application",
  "Artificial Intelligence",
  "Integral Calculus",
  "Mobile App",
  "Blockchain",
  "Block Flow Diagram",
  "Blockchain Development",
  "Blockchain Security",
];

const SkillsSelector = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredSkills, setFilteredSkills] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value) {
      const filtered = suggestedSkills.filter((skill) =>
        skill.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSkills(filtered);
    } else {
      setFilteredSkills([]);
    }
  };

  // Handle skill selection
  const handleSelectSkill = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
    setInputValue("");
    setFilteredSkills([]);
  };

  // Handle removing a skill
  const handleRemoveSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  return (
    <div style={{ width: "500px", margin: "20px auto", fontFamily: "Arial" }}>
      <h2>What work are you here to do?</h2>
      <p>Select skills to showcase your expertise</p>

      {/* Selected Skills */}
      <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
        {selectedSkills.map((skill, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              padding: "5px 10px",
              margin: "5px",
              border: "1px solid black",
              borderRadius: "20px",
              cursor: "pointer",
            }}
            onClick={() => handleRemoveSkill(skill)}
          >
            {skill} ✖
          </span>
        ))}

        {/* Input field */}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter skills here"
          style={{
            border: "none",
            outline: "none",
            marginLeft: "10px",
          }}
        />
      </div>

      {/* Dropdown Suggestions */}
      {filteredSkills.length > 0 && (
        <ul
          style={{
            listStyleType: "none",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginTop: "5px",
            maxHeight: "150px",
            overflowY: "auto",
          }}
        >
          {filteredSkills.map((skill, index) => (
            <li
              key={index}
              onClick={() => handleSelectSkill(skill)}
              style={{
                padding: "5px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
            >
              {skill}
            </li>
          ))}
        </ul>
      )}

      {/* Suggested Skills */}
      <h3>Suggested Skills</h3>
      <div>
        {suggestedSkills.map((skill, index) => (
          <button
            key={index}
            onClick={() => handleSelectSkill(skill)}
            style={{
              padding: "8px 15px",
              margin: "5px",
              border: "1px solid #ccc",
              borderRadius: "20px",
              cursor: "pointer",
              background: "white",
            }}
          >
            + {skill}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SkillsSelector;
