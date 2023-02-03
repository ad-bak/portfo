import { React, useEffect, useState } from "react";
import Project from "../../components/Project/Project";

import classes from "./Projects.module.css";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7070/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section className={classes.section}>
      {projects.map((project) => (
        <Project
          className={classes.project}
          title={project.project_name}
          link={project.project_link}
          key={project.project_name}
        >
          {project.tools.map((tool) => (
            <span>{tool}</span>
          ))}
        </Project>
      ))}
    </section>
  );
}

export default Projects;
