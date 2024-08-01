import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="relative bg-cover bg-center bg-no-repeat w-full h-full flex items-center justify-center p-4 sm:p-8">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-75"></div>
      <div className="relative z-10 w-full max-w-6xl text-fuchsia-950">
        <section className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-relaxed ">
            About Me
          </h1>
          <p className="text-lg sm:text-xl mb-8 sm:mb-20 text-purple-950 ">
            {personalDetails.about}
          </p>
        </section>
        <section className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-relaxed">
            Work Experience
          </h1>
          {workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              key={Company} // Ensure each Work component has a unique key
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))}
        </section>
        <section>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-relaxed">
            Education
          </h1>
          {eduDetails.map(({ Course, Stream, Institute, Location, Type, Duration }) => (
            <Work
              key={Institute} // Ensure each Work component has a unique key
              course={Course}
              stream={Stream}
              institute={Institute}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

export default About;
