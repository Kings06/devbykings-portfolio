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

        <h2 className="section-heading text-4xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-12 max-w-2xl mx-auto leading-7">
          I'm open to frontend development opportunities, internships,
  freelance projects, and collaborations. Feel free to reach out
  if you'd like to work together.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Email */}
          <a
            href="mailto:devbykings06@gmail.com"
            className="group bg-gray-800 rounded-xl p-6 border border-white/5 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-[0.98] transition-all duration-300"
          >
            <FaEnvelope className="text-4xl text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />

            <h3 className="text-xl font-bold mb-2 transition-transform duration-300 group-hover:scale-105">
              Email
            </h3>

            <p className="text-gray-400 group-hover:text-white transition">
              devbykings06@gmail.com
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Kings06"
            target="_blank"
            rel="noreferrer"
            className="group bg-gray-800 rounded-xl p-6 border border-white/5 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-[0.98] transition-all duration-300"
          >
            <FaGithub className="text-4xl text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />

            <h3 className="text-xl font-bold mb-2 transition-transform duration-300 group-hover:scale-105">
              GitHub
            </h3>

            <p className="text-gray-400 group-hover:text-white transition">
              Kings06
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/ebuka-kings"
            target="_blank"
            rel="noreferrer"
            className="group bg-gray-800 rounded-xl p-6 border border-white/5 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-[0.98] transition-all duration-300"
          >
            <FaLinkedin className="text-4xl text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />

            <h3 className="text-xl font-bold mb-2 transition-transform duration-300 group-hover:scale-105">
              LinkedIn
            </h3>

            <p className="text-gray-400 group-hover:text-white transition">
              Ebuka Kings
            </p>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;