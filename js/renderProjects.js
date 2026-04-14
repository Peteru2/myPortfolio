import { projects } from "./projects.js";


export function renderProjects(containerId) {
  const container = document.getElementById(containerId);

  if (!container) return;

  projects.forEach(project => {
    const techStack = project.tech.map(tech => `
      <span class="tech">
        <i class="${tech.icon} ${tech.class}"></i> ${tech.name}
      </span>
    `).join("");

    const card = `
      <div class="project-card">

        <div class="project-image">
          <img src="${project.image}" alt="${project.title}">
        </div>

        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>

          <p class="project-description">
            ${project.description}
          </p>

          <div class="tech-stack">
            ${techStack}
          </div>

          <div class="project-actions">
            <a href="${project.liveLink}" target="_blank" class="btn-primary">
              Visit Site <i class="fas fa-arrow-right"></i>
                      </a>
               ${
                  project.github
                    ? `<a href="${project.github}" class="btn-link">
                        <i class="fab fa-github"></i> View Code
                      </a>`
                    : ""
                }
           
          </div>
        </div>

      </div>
    `;

    container.innerHTML += card;
  });
}