import React, { useEffect } from "react";
import "../CSS/allque.css";
import "../CSS/moto.css";
import { useState } from "react";
import "../CSS/skills.css";
import { RxCrossCircled } from "react-icons/rx";
import { IoAdd } from "react-icons/io5";
import skillanimation from "../../assets/skills.json";
import { Player } from "@lottiefiles/react-lottie-player";

const Skills = (props) => {
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
  const handelsuggestedskills = (skill) => {
    setsuggestedSkills(suggestedskills.filter((s) => s !== skill));
    setselectedskills([...selectedskills, skill]);
  };
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
  const [recomendbarvisible, setrecomendbarvisible] = useState(false);
  const [recomendposition, setrecomendposition] = useState(0);
  const [searchingskill, setsearchingskill] = useState("");
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
    <div className="getintomaindiv">
      <div className="motoquewhole">
        <div className="motoque">
          <div className="skillsque">
            What skills do you bring to the table ?
          </div>

          <div className="skillarea">
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

          <div className="suggestedskills">
            {suggestedskills.map((skill) => (
              <span
                className="suggestedskill"
                onClick={() => handelsuggestedskills(skill)}
              >
                {skill} <IoAdd />
              </span>
            ))}
          </div>
        </div>
        <div className="skillanimation">
          <Player
            autoplay
            loop
            src={skillanimation}
            // className="tellabout-lottie"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
