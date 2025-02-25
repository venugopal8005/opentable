import { useState } from "react";

export default function Survey() {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState(""); // Creator or Contributor
  const [skills, setSkills] = useState([]);
  const [interests, setInterests] = useState([]);
  const [timeCommitment, setTimeCommitment] = useState("");
  const [teamStyle, setTeamStyle] = useState("");

  // Function to move to the next step
  const nextStep = () => setStep(step + 1);

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Startup Matchmaking Survey</h2>

      {step === 1 && (
        <div>
          <p className="mb-3">1️⃣ What best describes you?</p>
          <button className="block w-full bg-blue-500 text-white p-2 rounded mb-2"
            onClick={() => { setUserType("creator"); nextStep(); }}>
            I have a startup idea and need a team
          </button>
          <button className="block w-full bg-green-500 text-white p-2 rounded"
            onClick={() => { setUserType("contributor"); nextStep(); }}>
            I don’t have an idea but want to collaborate
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <p className="mb-3">2️⃣ What are your skills? (Select multiple)</p>
          {["Web Development", "AI/ML", "UI/UX", "Marketing", "Business Strategy"].map((skill) => (
            <button key={skill} className={`block w-full p-2 rounded mb-2 ${skills.includes(skill) ? "bg-blue-600 text-white" : "bg-gray-200"}`}
              onClick={() => setSkills(skills.includes(skill) ? skills.filter(s => s !== skill) : [...skills, skill])}>
              {skill}
            </button>
          ))}
          <button className="mt-3 bg-purple-500 text-white p-2 rounded w-full" onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <p className="mb-3">3️⃣ Which tech domains excite you?</p>
          {["AI & ML", "Fintech", "EdTech", "HealthTech", "SaaS"].map((interest) => (
            <button key={interest} className={`block w-full p-2 rounded mb-2 ${interests.includes(interest) ? "bg-blue-600 text-white" : "bg-gray-200"}`}
              onClick={() => setInterests(interests.includes(interest) ? interests.filter(i => i !== interest) : [...interests, interest])}>
              {interest}
            </button>
          ))}
          <button className="mt-3 bg-purple-500 text-white p-2 rounded w-full" onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 4 && (
        <div>
          <p className="mb-3">4️⃣ How much time can you commit?</p>
          {["Less than 5 hours", "5-10 hours", "10-20 hours", "20+ hours"].map((option) => (
            <button key={option} className={`block w-full p-2 rounded mb-2 ${timeCommitment === option ? "bg-blue-600 text-white" : "bg-gray-200"}`}
              onClick={() => setTimeCommitment(option)}>
              {option}
            </button>
          ))}
          <button className="mt-3 bg-purple-500 text-white p-2 rounded w-full" onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 5 && (
        <div>
          <p className="mb-3">5️⃣ What type of team environment suits you best?</p>
          {["Fast-paced & deadline-driven", "Chill & exploratory", "Structured with clear goals", "Creative & experimental"].map((style) => (
            <button key={style} className={`block w-full p-2 rounded mb-2 ${teamStyle === style ? "bg-blue-600 text-white" : "bg-gray-200"}`}
              onClick={() => setTeamStyle(style)}>
              {style}
            </button>
          ))}
          <button className="mt-3 bg-green-500 text-white p-2 rounded w-full" onClick={nextStep}>Submit</button>
        </div>
      )}

      {step === 6 && (
        <div>
          <h3 className="text-xl font-bold text-center">🎉 Survey Completed!</h3>
          <p className="mt-3">You are classified as a <span className="font-bold">{userType === "creator" ? "Startup Founder (Creator)" : "Team Contributor"}</span></p>
          <p>Skills: {skills.join(", ") || "None selected"}</p>
          <p>Interests: {interests.join(", ") || "None selected"}</p>
          <p>Time Commitment: {timeCommitment || "Not provided"}</p>
          <p>Team Style: {teamStyle || "Not selected"}</p>
          <button className="mt-4 bg-blue-500 text-white p-2 rounded w-full" onClick={() => setStep(1)}>Restart Survey</button>
        </div>
      )}
    </div>
  );
}
