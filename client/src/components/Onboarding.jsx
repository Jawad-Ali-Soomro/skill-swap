import { useState } from "react";
import "../style/onboard.scss";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
    const navigate = useNavigate()
  const csSkills = [
    "Web Development",
    "Android Development",
    "Game Development",
    "Blockchain Development",
    "Cybersecurity",
    "Machine Learning",
    "Graphic Design",
    "UI/UX Design",
    "Cloud Computing",
    "Data Science",
    "Software Engineering",
    "DevOps",
    "AI & Deep Learning",
    "Digital Marketing",
    "Penetration Testing",
    "Networking",
    "Video Editing",
    "3D Modeling",
  ];

  const toggleSkill = (skill) => {
    setSelectedSkills((prevSkills) =>
      prevSkills.includes(skill)
        ? prevSkills.filter((s) => s !== skill) // Allow deselection
        : prevSkills.length < 5
        ? [...prevSkills, skill] // Add only if less than 5
        : prevSkills
    );
  };

  return (
    <div className="onboarding-container flex col">
      <div className="skills-container flex">
        {csSkills.map((skill) => (
          <div
            className="skill-card flex"
            key={skill}
            style={{
              background: selectedSkills.includes(skill) ? "royalblue" : "",
              color: selectedSkills.includes(skill) ? "white" : "",
            }}
            onClick={() => toggleSkill(skill)}
          >
            {skill}
          </div>
        ))}
      </div>
      <div className="steps flex col">
        <h1>{selectedSkills.length}/5</h1>
        <button
          style={{ background: selectedSkills?.length < 1 ? "gray" : "", cursor: selectedSkills?.length < 1 ? "not-allowed" : '' }}
          disabled={selectedSkills.length === 0}
          onClick={() => navigate('/onboard/about')}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
