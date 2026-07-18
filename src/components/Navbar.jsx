function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold text-cyan-400">
        DevByKings
      </h1>

      <ul className="flex gap-6">
        <li className="hover:text-cyan-400 cursor-pointer">Home</li>
        <li className="hover:text-cyan-400 cursor-pointer">About</li>
        <li className="hover:text-cyan-400 cursor-pointer">Projects</li>
        <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;