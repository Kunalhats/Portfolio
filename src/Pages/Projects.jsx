import React from "react";
import { projectDetails } from "../Details";

function Projects() {
  return (
    <main
      className="relative bg-cover bg-center bg-no-repeat w-full h-full flex flex-col items-center py-10 px-4 sm:px-8"
      style={{ backgroundImage: "url('/path/to/your/background.jpg')" }}>

      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-75"></div>
      <div className="relative z-10 w-full max-w-6xl text-gray-900 text-neutral-200">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Projects</h1>
          <p className="text-lg sm:text-xl mb-8 text-black">
            Discover a selection of my recent projects, demonstrating my skills and technologies used.
          </p>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 opacity-75 text-lime-950 ">
          {projectDetails.map(
            ({ title, image, description, techstack, previewLink, githubLink }) => (
              <div
                key={title}
                className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center text-center"
              >
                <img
                  src={image}
                  alt={`${title} Screenshot`}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-sm mb-4">{description}</p>
                <div className="flex justify-center gap-4">
                  {previewLink && (
                    <a
                      href={previewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                    >
                      Preview
                    </a>
                  )}
                  {githubLink && (
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            )
          )}
        </section>
      </div>
    </main>
  );
}

export default Projects;
