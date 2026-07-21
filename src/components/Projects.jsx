 import projects from "../data/projects";
 
function Projects() {

  return (
    <section
      id="projects"
      data-aos="zoom-in"
      className="py-24 bg-gray-800 text-white px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div
              key={project.title}
              className="group bg-gray-900 rounded-xl p-6 flex flex-col h-full hover:-translate-y-2 transition duration-300 shadow-lg"
            >
            {project.image && (
  <div className="overflow-hidden rounded-lg mb-6">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover transition duration-500 group-hover:scale-105"
    />
  </div>
)}

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
  {Array.isArray(project.tech) ? (
    project.tech.map((tech) => (
      <span
        key={tech}
        className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded-full text-sm"
      >
        {tech}
      </span>
    ))
  ) : (
    <span className="text-cyan-400">
      {project.tech}
    </span>
  )}
</div>

              <div className="flex gap-4 mt-auto pt-4">

                <a
                  href={project.github}
                  className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  className="border border-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-500 transition"
                >
                  Live Demo
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;