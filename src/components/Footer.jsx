function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 px-6 py-12">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <a
  href="#home"
  className="gradient-text text-2xl font-bold hover:opacity-80 transition-opacity duration-300"
>
  DevByKings
</a>

            <p className="leading-relaxed max-w-sm">
              Frontend developer passionate about building
              responsive, modern, and user-friendly web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <a
                href="#home"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Home
              </a>

              <a
                href="#about"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                About
              </a>

              <a
                href="#skills"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Connect With Me
            </h3>

            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/Kings06"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                GitHub
              </a>

              <a
                href="mailto:devbykings06@gmail.com"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Email Me
              </a>

              <a
                href="https://linkedin.com/in/ebuka-kings"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p>
            © {new Date().getFullYear()} DevByKings. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;