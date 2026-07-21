import { TypeAnimation } from "react-type-animation";
import Button from "./Button";
import avatar from "../assets/avatar.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16">

        <div className="flex-1 text-center md:text-left">
          <p className="text-cyan-400 text-lg mb-4">
          👋 Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Ebuka Kings
          </span>
        </h1>

        <h2 className="text-2xl md:text-4xl mt-6 font-semibold text-gray-300">
  <TypeAnimation
    sequence={[
      "Frontend Developer",
      2000,
      "React Developer",
      2000,
      "Computer Scientist",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</h2>

        <p className="mt-8 max-w-2xl mx-auto text-gray-400 text-lg leading-8">
          I build modern, responsive and user-friendly web applications
          using React, JavaScript and Tailwind CSS.
          I enjoy turning ideas into clean, interactive experiences.
        </p>

         <div className="flex flex-wrap gap-4 mt-10 justify-center md:justify-start">

  <Button href="#projects">
    View Projects
  </Button>

  <Button
    href="#contact"
    variant="outline"
  >
    Contact Me
  </Button>

  <Button
    href="/Ebuka_Kings_CV.pdf"
  >
    Download CV
  </Button>

</div>

        </div>
        <div className="flex-1 flex justify-center">

  <div className="w-72 h-72 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 p-1">

    <img
      src={avatar}
      alt="Ebuka Kings"
      className="w-full h-full rounded-full object-cover float-animation"
    />

  </div>

</div>

      </div>
    </section>
  );
}

export default Hero;