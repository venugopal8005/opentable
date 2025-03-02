import React, { useEffect } from "react";
import "../CSS/allque.css";
import "../CSS/moto.css";
import { useState } from "react";
import "../CSS/skills.css";
import { RxCrossCircled } from "react-icons/rx";
import { IoAdd } from "react-icons/io5";
import skillanimation from "../../assets/skills.json";
import { Player } from "@lottiefiles/react-lottie-player";

const Skills = ({ skillsetter }) => {
  const [suggestedskills, setsuggestedSkills] = useState([
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
  ]);
  const recomendskills = [
    // Broad Categories
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "Full-Stack Development",
    "Mobile Development",
    "AI & Machine Learning",
    "Cloud Computing",
    "Cybersecurity",
    "Blockchain & Web3",
    "DevOps",
    "Database Management",
    "API Development",
    "Software Development",
    "System Design",
    "Data Science",
    "Game Development",

    // Programming Languages
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "C#",
    "Go",
    "Ruby",
    "Swift",
    "Kotlin",
    "Dart",
    "Rust",

    // Frontend Development
    "HTML",
    "CSS",
    "SASS",
    "Tailwind CSS",
    "Bootstrap",
    "React.js",
    "Next.js",
    "Vue.js",
    "Nuxt.js",
    "Angular",
    "Svelte",
    "Redux",
    "Zustand",
    "Recoil",
    "PHP",
    "Laravel",
    "Blade",
    "Twig",

    // Backend Development
    "Node.js",
    "Express.js",
    "NestJS",
    "Django",
    "Flask",
    "FastAPI",
    "Ruby on Rails",
    "Spring Boot",
    "ASP.NET",

    // Databases
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Firebase",
    "Redis",
    "DynamoDB",
    "SQLite",

    // API Development
    "REST APIs",
    "GraphQL",
    "tRPC",
    "gRPC",
    "WebSockets",
    "OAuth",
    "JWT Authentication",
    "API Rate Limiting",
    "Postman",

    // Cloud Computing & DevOps
    "AWS",
    "Azure",
    "Google Cloud Platform (GCP)",
    "DigitalOcean",
    "Cloudflare",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Serverless",
    "CI/CD",
    "GitHub Actions",
    "Jenkins",
    "Vercel",
    "Netlify",

    // Security & Authentication
    "Encryption",
    "SSL/TLS",
    "OAuth2",
    "SAML",
    "JWT",
    "2FA",
    "Web Security",
    "Ethical Hacking",
    "Penetration Testing",

    // Mobile Development
    "React Native",
    "Flutter",
    "Swift (iOS)",
    "Kotlin (Android)",
    "Dart",

    // AI & Machine Learning
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing (NLP)",
    "Computer Vision",
    "OpenAI API",
    "LangChain",
    "Hugging Face",
    "TensorFlow",
    "PyTorch",
    "LLMs",

    // Blockchain & Web3
    "Blockchain",
    "Ethereum",
    "Solidity",
    "Smart Contracts",
    "Polygon",
    "IPFS",
    "Metamask",
    "Hardhat",
    "Truffle",

    // Other Tools & Technologies
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "Webpack",
    "Bun",
    "Vite",
    "ESLint",
    "Figma",
    "PostgreSQL",
    "Stripe",
    "Twilio",
    "Google Analytics",
  ];
    const [searchedskills, setsearchedskills] = useState([]);
    const [selectedskills, setselectedskills] = useState([]);
    const [searchingskill, setsearchingskill] = useState("");
    const [recomendbarvisible, setrecomendbarvisible] = useState(false);
    const [recomendposition, setrecomendposition] = useState(0);
  
    // Update parent component when selected skills change
    useEffect(() => {
      skillsetter(selectedskills);
    }, [selectedskills, skillsetter]);
  
    // Handle search filtering and visibility of recommendations
    useEffect(() => {
      if (searchingskill.trim().length > 0) {
        const filteredSkills = recomendskills.filter((skill) =>
          skill.toLowerCase().includes(searchingskill.toLowerCase())
        );
        setsearchedskills(filteredSkills);
        setrecomendbarvisible(filteredSkills.length > 0);
      } else {
        setsearchedskills([]);
        setrecomendbarvisible(false);
      }
    }, [searchingskill]);
  
    const handleSuggestedSkillClick = (skill) => {
      setselectedskills((prev) => [...prev, skill]);
      setsuggestedSkills((prev) => prev.filter((s) => s !== skill));
    };
  
    const removeSkill = (skill) => {
      setselectedskills((prev) => prev.filter((s) => s !== skill));
      setsuggestedSkills((prev) => [...prev, skill]);
    };
  
    const handleSelect = (skill) => {
      if (!selectedskills.includes(skill)) {
        setselectedskills([...selectedskills, skill]);
        setsuggestedSkills((prev) => prev.filter((s) => s !== skill));
      }
      setsearchingskill("");
      setrecomendbarvisible(false);
      setrecomendposition(0);
    };
  
    const handleKeyDown = (e) => {
      if (recomendbarvisible) {
        if (e.key === "ArrowDown") {
          setrecomendposition((prev) => (prev < searchedskills.length - 1 ? prev + 1 : prev));
        } else if (e.key === "ArrowUp") {
          setrecomendposition((prev) => (prev > 0 ? prev - 1 : prev));
        } else if (e.key === "Enter" && recomendposition >= 0) {
          handleSelect(searchedskills[recomendposition]);
        }
      }
    };
  
    return (
      <div className="getintomaindiv">
        <div className="motoquewhole">
          <div className="motoque">
            <div className="skillsque">What skills do you bring to the table?</div>
  
            {/* Selected Skills */}
            <div className="skillarea">
              {selectedskills.map((skill) => (
                <span className="suggestedskill" onClick={() => removeSkill(skill)} key={skill}>
                  {skill} <RxCrossCircled />
                </span>
              ))}
              <div style={{ display: "inline-block" }}>
                {/* Search Input */}
                <input
                  type="text"
                  className="inputtext"
                  placeholder="Enter skills here"
                  value={searchingskill}
                  onKeyDown={handleKeyDown}
                  onChange={(e) => setsearchingskill(e.target.value)}
                />
  
                {/* Skill Recommendations */}
                {recomendbarvisible && (
                  <div className="racomendationbar">
                    {searchedskills.map((skill, index) => (
                      <div
                        key={skill}
                        className={index === recomendposition ? "recomendedskillhigh" : "recomendedskill"}
                        onClick={() => handleSelect(skill)}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
  
            {/* Suggested Skills */}
            <div className="suggestedskills">
              {suggestedskills.map((skill) => (
                <span className="suggestedskill" onClick={() => handleSuggestedSkillClick(skill)} key={skill}>
                  {skill} <IoAdd />
                </span>
              ))}
            </div>
          </div>
  
          {/* Lottie Animation */}
          <div className="skillanimation">
            <Player autoplay loop src={skillanimation} />
          </div>
        </div>
      </div>
    );
  };
  
  export default Skills;