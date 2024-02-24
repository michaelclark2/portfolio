export default function Project({ project }) {
  return (
    <div
      key={project.id}
      className="rounded-2xl border-4 border-black py-2 bg-slate-200 shadow mb-4 p-4"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-extrabold text-xl sm:text-2xl">{project.title}</h3>
      </div>
      <div className="flex mb-2 flex-col">
        <div className="flex sm:space-x-4">
          <img
            className="rounded-2xl border-4 border-black max-w-64 sm:block hidden"
            src={project.imageURL}
          />
          <p className="">{project.description}</p>
        </div>
        <div className="flex flex-wrap mt-4">
          {project.techStack?.split(",").map((tech, i) => (
            <span
              key={tech + i}
              className="rounded-2xl border-2 border-black bg-yellow-500 py-1 text-xs font-bold px-3 mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex  sm:justify-center space-x-5 mt-2">
          {project.githubURL && (
            <a
              className="flex justify-center items-center rounded-full bg-teal-600 border-2 border-black p-2 px-4"
              href={project.githubURL}
              target="_blank"
              rel="noopener"
            >
              <span className="mr-2 font-black">View Source</span>
              <img
                className="rounded-full bg-blue-600 h-8 w-8 flex justify-center items-center border-2 border-black p-1"
                src="./code-outline.svg"
              />
            </a>
          )}
          {project.deployedURL && (
            <a
              className="flex justify-center items-center rounded-full bg-teal-600 border-2 border-black p-2 px-4"
              href={project.deployedURL}
              target="_blank"
              rel="noopener"
            >
              <span className="mr-2 font-black">Live Demo</span>
              <img
                className="rounded-full bg-blue-600 h-8 w-8 flex justify-center items-center border-2 border-black p-1"
                src="./external-link-outline.svg"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
