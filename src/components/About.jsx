function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gray-800 text-white px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <h3 className="text-3xl font-bold mb-4">
              Hi, I'm Ebuka Kings 👋
            </h3>

            <p className="text-gray-300 leading-8">
              I'm a Computer Science graduate and an aspiring Frontend
              Developer passionate about building modern,
              responsive, and user-friendly web applications.
            </p>

            <p className="text-gray-300 leading-8 mt-6">
              I'm currently mastering React, Tailwind CSS,
              and JavaScript while building real-world projects
              that strengthen my problem-solving skills and
              prepare me for professional software development.
            </p>
          </div>

          {/* Right Side */}
          <div className="bg-gray-900 rounded-xl p-8 shadow-lg">

            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              Quick Facts
            </h3>

            <div className="space-y-4">

              <p><strong>Name:</strong> Kings Ebuka</p>

              <p><strong>Country:</strong> Nigeria 🇳🇬</p>

              <p><strong>Role:</strong> Frontend Developer</p>

              <p><strong>Learning:</strong> React + Tailwind CSS</p>

              <p><strong>Available for:</strong> Internship & Junior Roles</p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;