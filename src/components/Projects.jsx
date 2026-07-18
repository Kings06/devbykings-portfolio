function Projects() {
  const projects = [
    {
      title: "DevByKings Portfolio",
      description:
        "A modern portfolio website built with React and Tailwind CSS.",
      tech: "React • Tailwind CSS • Vite",
      github: "#",
      live: "#",
    },
    {
      title: "Coming Soon...",
      description:
        "This project will be added as I continue my frontend journey.",
      tech: "Future Project",
      github: "#",
      live: "#",
    },
    {
      title: "Coming Soon...",
      description:
        "Another amazing project will live here.",
      tech: "Future Project",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
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
              className="bg-gray-900 rounded-xl p-6 hover:-translate-y-2 transition duration-300 shadow-lg"
            >

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <p className="text-cyan-400 mb-6">
                {project.tech}
              </p>

              <div className="flex gap-4">

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