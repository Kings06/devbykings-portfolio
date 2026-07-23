function About() {
  return (
    <section
      id="about"
      data-aos="fade-up"
      className="py-24 bg-gray-800 text-white px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <h2 className="section-heading text-4xl font-bold text-center mb-12">
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
              Developer passionate about building modern, responsive,
              and user-friendly web applications.
            </p>

            <p className="text-gray-300 leading-8 mt-6">
              I'm currently deepening my skills in React, Tailwind CSS,
              and JavaScript while building real-world projects that
              strengthen my problem-solving skills and prepare me for
              professional software development.
            </p>
          </div>

          {/* Right Side */}
          <div className="bg-gray-900 rounded-xl p-8 border border-white/5 shadow-lg hover:border-cyan-500/30 hover:shadow-cyan-500/10 active:scale-[0.98] transition-all duration-300">

            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              Quick Facts
            </h3>

            <div className="space-y-4">

              <p>
                <span className="font-semibold text-gray-400">
                  Name:
                </span>{" "}
                Ebuka Kings
              </p>

              <p>
                <span className="font-semibold text-gray-400">
                  Country:
                </span>{" "}
                Nigeria 🇳🇬
              </p>

              <p>
                <span className="font-semibold text-gray-400">
                  Role:
                </span>{" "}
                Frontend Developer
              </p>

              <p>
                <span className="font-semibold text-gray-400">
                  Focus:
                </span>{" "}
                React + Tailwind CSS
              </p>

              <p>
                <span className="font-semibold text-gray-400">
                  Available for:
                </span>{" "}
                Internship & Junior Roles
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;