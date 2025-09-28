import React from "react";
import "./About.css";
import { Book, Code } from "lucide-react";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="description-skills">
        <div class="about-text">
          <h3>A Passionate Tech Enthusiast</h3>

          <p>
            As a tech enthusiast, I love exploring how technology can transform
            ideas into impactful solutions. I regularly build projects to
            experiment with modern frameworks. Alongside web development, I am deeply interested in Artificial Intelligence and eager to explore how AI can shape the future of software.
          </p>

          <p>
            My journey in Software Development is just beginning, and I’m
            excited to keep learning, building, and solving challenges.
          </p>
        </div>

        <div class="about-cards">
          <div class="card">
            <div class="card-inner">
              <div class="card-text">
                <Book className="icon"/>
                <h4>Education</h4>
                <p>
                  B.Sc. in Computer Science and Engineering <br />
                  Dhaka International University
                </p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-inner">
              <div class="card-text">
                <Code className="icon"/>
                <h4>Web Development</h4>
                <p>
                  Creating responsive websites and web applications with modern
                  frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
