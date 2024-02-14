export default function Project({ project }) {
  return <p key={project.id}>{project.title}</p>;
}
