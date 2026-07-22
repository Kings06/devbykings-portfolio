import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaMobileAlt,
  FaPaintBrush,
} from "react-icons/fa";

import { RiTailwindCssFill } from "react-icons/ri";

function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-5xl text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-5xl text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-5xl text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-5xl text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-5xl text-sky-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-5xl text-orange-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-5xl" /> },
    { name: "Responsive Design", icon: <FaMobileAlt className="text-5xl text-green-400" /> },
    { name: "UI/UX Principles", icon: <FaPaintBrush className="text-5xl text-purple-400" />,},
  ];

  return (
    <section id="skills" data-aos="fade-right" className="py-24 bg-gray-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group bg-gray-800 p-6 rounded-xl text-center border border-white/5 hover:border-cyan-500/30 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>

              <h3 className="font-semibold">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;