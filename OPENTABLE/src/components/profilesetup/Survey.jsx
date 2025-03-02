import React, { useState } from "react";

const skills = ["JavaScript", "Python", "React", "Node.js", "Angular", "Vue.js"];

export default function CustomAutoComplete() {
  const [inputValue, setInputValue] = useState("");
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value) {
      const filtered = skills.filter((skill) =>
        skill.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSkills(filtered);
      setShowDropdown(true);
    } else {
      setFilteredSkills([]);
      setShowDropdown(false);
    }
  };

  const handleSelect = (skill) => {
    setInputValue(skill);
    setShowDropdown(false);
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prev) =>
        prev < filteredSkills.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter" && highlightedIndex >= 0) {
      handleSelect(filteredSkills[highlightedIndex]);
    }
  };

  return (
    <div style={{ position: "relative", width: "250px" }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Type to search..."
        onFocus={() => setShowDropdown(true)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
        style={{
          width: "100%",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      {showDropdown && filteredSkills.length > 0 && (
        <ul
          style={{
            position: "absolute",
            top: "40px",
            left: "0",
            right: "0",
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "4px",
            listStyle: "none",
            padding: "0",
            margin: "0",
            maxHeight: "150px",
            overflowY: "auto",
            zIndex: 10,
          }}
        >
          {filteredSkills.map((skill, index) => (
            <li
              key={index}
              onClick={() => handleSelect(skill)}
              style={{
                padding: "8px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
                backgroundColor: highlightedIndex === index ? "#ddd" : "white",
              }}
            >
              {skill}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
