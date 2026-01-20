import styles from "./ProjectCard.module.css";

function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <h3>{project.title}</h3>

      <p className={styles.description}>{project.description}</p>

      <p className={styles.tech}>
        <strong>Tech Stack:</strong> {project.tech}
      </p>

      <div className={styles.links}>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>

        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
