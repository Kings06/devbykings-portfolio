function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-5 bg-gray-900/90 backdrop-blur-md text-white border-b border-gray-800">
      <h1 className="text-2xl font-bold text-cyan-400">
        DevByKings
      </h1>

      <ul className="flex gap-6">
  <li>
    <a href="#home" className="hover:text-cyan-400 transition">
      Home
    </a>
  </li>

  <li>
    <a href="#about" className="hover:text-cyan-400 transition">
      About
    </a>
  </li>

  <li>
    <a href="#skills" className="hover:text-cyan-400 transition">
      Skills
    </a>
  </li>

  <li>
    <a href="#projects" className="hover:text-cyan-400 transition">
      Projects
    </a>
  </li>

  <li>
    <a href="#contact" className="hover:text-cyan-400 transition">
      Contact
    </a>
  </li>
</ul>
    </nav>
  );
}

export default Navbar;