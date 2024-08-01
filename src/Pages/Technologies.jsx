import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    mySQL,
    vscode,
    git,
    github,
    canva,
    postman,
    adobe,
  } = techStackDetails;

  const techStack = [
    { src: html, title: "HTML", description: "Markup language for creating web pages." },
    { src: css, title: "CSS", description: "Stylesheet language for designing web pages." },
    { src: js, title: "JavaScript", description: "Programming language for the web." },
    { src: react, title: "React", description: "JavaScript library for building user interfaces." },
    { src: redux, title: "Redux", description: "State management library for JavaScript apps." },
    { src: tailwind, title: "Tailwind CSS", description: "Utility-first CSS framework." },
    { src: bootstrap, title: "Bootstrap", description: "CSS framework for responsive design." },
    { src: mySQL, title: "MySQL", description: " Manage and organize data in a structured manner." },
  ];

  const tools = [
    { src: vscode, title: "Visual Studio Code", description: "Code editor by Microsoft." },
    { src: git, title: "Git", description: "Version control system." },
    { src: github, title: "GitHub", description: "Code hosting platform for version control." },
    { src: canva, title: "Canva", description: "Graphic design tool." },
    { src: postman, title: "Postman", description: "API development environment." },
    { src: adobe, title: "Adobe", description: "Tools for video, graphic, photoshop Design" },
  ];

  return (
    <main
      className="relative bg-cover bg-center bg-no-repeat w-full h-full flex flex-col items-center py-10 px-4 sm:px-8"
      style={{ backgroundImage: "url('/path/to/your/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-75"></div>
      <div className="relative z-10 w-full max-w-6xl text-white">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-purple-950 ">Tech Stack</h1>
          <p className="text-lg sm:text-xl mb-8 sm:mb-12 text-purple-950 ">Technologies I've been working with recently</p>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12 opacity-75">
          {techStack.map((tech, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105"
            >
              <img src={tech.src} title={tech.title} alt={`${tech.title} Logo`} className="w-16 h-16 object-contain mb-4" />
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">{tech.title}</h2>
              <p className="text-sm text-gray-600">{tech.description}</p>
            </div>
          ))}
        </section>
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-purple-950">Tools</h1>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 opacity-75">
          {tools.map((tool, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105"
            >
              <img src={tool.src} title={tool.title} alt={`${tool.title} Logo`} className="w-16 h-16 object-contain mb-4" />
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">{tool.title}</h2>
              <p className="text-sm text-gray-600">{tool.description}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Technologies;
