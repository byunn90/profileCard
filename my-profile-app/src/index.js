import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import levi from "./images/92012.jpg";
// Array of skills 1 object for each skill
// One skill for each
const skills = [
  {
    skill: "HTML+CSS",
    level: ["Beginner", "Intermediate", "Advanced"],
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: ["Beginner", "Intermediate", "Advanced"],
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: ["Beginner", "Intermediate", "Advanced"],
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: ["Beginner", "Intermediate", "Advanced"],
    color: "#E84F33",
  },
  {
    skill: "React",
    level: ["Beginner", "Intermediate", "Advanced"],
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: ["Beginner", "Intermediate", "Advanced"],
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src={levi} alt="attack on Titans" />;
}

function Intro({ skills }) {
  return (
    <div>
      <h1>Kayhan Mamak</h1>
      <p>
        Full-stack web developer and student at udemy currently Learnning react
        zero to master with jonas. When im not coding or studying a course, I
        like to play video games with my friend, or to just enjoy turkish food
        and Australian beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
