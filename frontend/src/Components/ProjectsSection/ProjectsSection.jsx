import { ArrowRight, ExternalLink, Github } from "lucide-react";
import "./ProjectsSection.css";
import { projects } from "../../assets/assets";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">
          Featured Projects
        </h2>

        <p className="projects-description">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="projects-grid">
          {projects.map((project, key) => (
            <div key={key} className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>

              <hr />

              <div className="project-content">
                <div className="tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-text">{project.description}</p>

                <div className="project-links">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <ExternalLink size={25} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <Github size={25} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <a
            className="cosmic-button"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/git-suborno-hub"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
