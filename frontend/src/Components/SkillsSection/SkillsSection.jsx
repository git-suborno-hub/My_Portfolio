import { useState } from "react";
import './SkillsSection.css'

const skills = [
  { name: "C++", level: 90 },
  // Frontend
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "React", level: 70, category: "frontend" },
  { name: "Tailwind CSS", level: 70, category: "frontend" },

  // Backend
  { name: "Node.js", level: 50, category: "backend" },
  { name: "Express", level: 50, category: "backend" },
  { name: "MongoDB", level: 50, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 70, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="my-skills">
      <div className="container">
        <h2>
          My <span>Skills</span>
        </h2>

        <div className="categories">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? "active" : "inactive"}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid">
          {filteredSkills.map((skill, key) => (
            <div key={key} className="card">
              <div className="card-header">
                <h3>{skill.name}</h3>
              </div>
              <div className="progress-container">
                <div
                  className="progress-bar"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="percentage">
                <span>{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
