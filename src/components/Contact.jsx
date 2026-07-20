function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gray-900 text-white px-6"
    >
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-cyan-400 mb-6">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-12">
          I'm always open to internship opportunities,
          frontend developer roles, freelance projects,
          and collaborations.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <a
            href="mailto:your@email.com"
            className="bg-gray-800 rounded-xl p-6 hover:bg-cyan-500 transition"
          >
            <h3 className="text-xl font-bold mb-2">📧 Email</h3>
            <p>devbykings06@gmail.com</p>
          </a>

          <a
            href="https://github.com/Kings06"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 rounded-xl p-6 hover:bg-cyan-500 transition"
          >
            <h3 className="text-xl font-bold mb-2">🐙 GitHub</h3>
            <p>Kings06</p>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 rounded-xl p-6 hover:bg-cyan-500 transition"
          >
            <h3 className="text-xl font-bold mb-2">💼 LinkedIn</h3>
            <p>Coming Soon</p>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;