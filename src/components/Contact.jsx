import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      data-aos="fade-left"
      className="py-24 bg-gray-900 text-white px-6"
    >
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-cyan-400 mb-6">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-12 max-w-2xl mx-auto leading-7">
          I'm open to internship opportunities, junior frontend developer
          roles, freelance projects, and collaborations. Feel free to reach
          out—I'd love to connect and discuss how we can work together.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <a
            href="mailto:devbykings06@gmail.com"
            className="group bg-gray-800 rounded-xl p-6 border border-white/5 hover:border-cyan-500/30 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              <FaEnvelope className="text-4xl text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
            </div>

            <h3 className="text-xl font-bold mb-2">
              Email
            </h3>

            <p className="text-gray-400">
              devbykings06@gmail.com
            </p>
          </a>

          <a
            href="https://github.com/Kings06"
            target="_blank"
            rel="noreferrer"
            className="group bg-gray-800 rounded-xl p-6 border border-white/5 hover:border-cyan-500/30 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              <FaGithub className="text-4xl text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
            </div>

            <h3 className="text-xl font-bold mb-2">
              GitHub
            </h3>

            <p className="text-gray-400">
              Kings06
            </p>
          </a>

          <a
            href="https://linkedin.com/in/ebuka-kings"
            target="_blank"
            rel="noreferrer"
            className="group bg-gray-800 rounded-xl p-6 border border-white/5 hover:border-cyan-500/30 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              <FaLinkedin className="text-4xl text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
            </div>

            <h3 className="text-xl font-bold mb-2">
              LinkedIn
            </h3>

            <p className="text-gray-400">
              Ebuka Kings
            </p>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;