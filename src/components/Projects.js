import React from "react";

const Projects = () => {
  return (
    <section id="projects" class="projects">
      <h1>Projects</h1>
      <p>
        These are some of my projects. I have built these with React, MERN, and
        vanilla CSS. Check them out.
      </p>
      <div class="project-list">
        <div class="project-item">
          <div class="project-desc">
            <aside>Links:</aside>
            <ul>
              <li>
                <a href="https://github.com/sxrxyx/React_Proj/tree/main/Cocktails">
                  ✔ Cocktail-Web application with React Js.
                </a>
              </li>
              <br />
              <li>
                <a href="https://github.com/sxrxyx/Node_express_Project/tree/main/task-manager">
                  ✔ Task Manager - API with Node,Express.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
