export default function ProjectCard({ item }) {
  const { image, title, liveLink, githubLink, description, tech } = item;
  console.log(image);
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-stack">
          {tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={liveLink} target="_blank">
            Live Demo
          </a>
          <a href={githubLink} target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
