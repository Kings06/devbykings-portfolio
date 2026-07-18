function Hero() {
  return (
    <section
  id="home"
  className="min-h-[90vh] flex items-center justify-center px-6"
>
      <div className="text-center max-w-3xl">

        <h2 className="text-cyan-400 text-xl font-semibold">
          👋 Hello, I'm
        </h2>

        <h1 className="text-6xl font-bold mt-2">
          DevByKings
        </h1>

        <h3 className="text-3xl text-gray-300 mt-4">
          Frontend Developer
        </h3>

        <p className="mt-6 text-gray-400 leading-8">
          I build modern, responsive, and user-friendly web
          applications using React, JavaScript, and Tailwind CSS.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition">
            View Projects
          </button>

          <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-lg transition">
            Contact Me
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;