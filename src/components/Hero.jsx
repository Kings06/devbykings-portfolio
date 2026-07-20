function Hero() {
  return (
    <section
  id="home"
  className="min-h-screen flex items-center bg-gray-900 px-8"
>
  <div className="max-w-7xl mx-auto w-full">

    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* Left */}

      <div>

        <p className="text-cyan-400 text-xl mb-4">
          👋 Hello, I'm
        </p>

        <h1 className="text-6xl font-bold leading-tight">
          DevByKings
        </h1>

        <h2 className="text-3xl text-gray-300 mt-4">
          Frontend Developer
        </h2>

        <p className="mt-8 text-gray-400 leading-8 max-w-xl">

          I build modern, responsive,
          and user-friendly web applications
          using React, JavaScript and Tailwind CSS.

        </p>

        <div className="flex gap-4 mt-10">

          <a
  href="#projects"
  className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition"
>
  View Projects
</a>

          <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-lg transition">
            Download CV
          </button>

        </div>

      </div>

      {/* Right */}

      <div className="flex justify-center">

        <div className="w-80 h-80 rounded-full bg-cyan-500 flex items-center justify-center text-8xl shadow-2xl">

          KE

        </div>

      </div>

    </div>

  </div>
</section>
  );
}

export default Hero;