function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Responsive Design",
  ];

  return (
    <section id="skills" className="py-24 bg-gray-900 text-white px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-800 p-6 rounded-xl text-center hover:bg-cyan-500 hover:text-black transition duration-300 cursor-pointer"
            >
              <h3 className="font-semibold text-lg">
                {skill}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;