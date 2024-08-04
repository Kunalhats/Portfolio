import React, { useEffect, useState } from "react";
import { personalDetails } from "../Details";
import resume from "../assets/Resume_Kunal_Kumar_Singh.pdf";

function Home() {
  const { name, taglines, img } = personalDetails;
  const [currentTagline, setCurrentTagline] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTaglineAnimation = () => {
      const fullTagline = taglines[loopNum % taglines.length];
      const baseTagline = "I'm "; // Stable part
      const animatedPart = fullTagline.substring(baseTagline.length); // Part to animate

      setCurrentTagline((prev) => {
        if (isDeleting) {
          return baseTagline + animatedPart.substring(0, prev.length - baseTagline.length - 1);
        } else {
          return baseTagline + animatedPart.substring(0, prev.length - baseTagline.length + 1);
        }
      });

      if (!isDeleting && currentTagline === fullTagline) {
        setIsDeleting(true);
        setTypingSpeed(2000); // Pause before deleting
      } else if (isDeleting && currentTagline === baseTagline) {
        setIsDeleting(false);
        setLoopNum((prev) => (prev + 1) % taglines.length); // Move to next tagline
        setTypingSpeed(100); // Reset typing speed
      } else if (isDeleting) {
        setTypingSpeed(50); // Increase speed when deleting
      }
    };

    const interval = setInterval(handleTaglineAnimation, typingSpeed);

    return () => clearInterval(interval);
  }, [currentTagline, isDeleting, loopNum, taglines, typingSpeed]);

  return (
    <main className="relative bg-cover bg-center bg-no-repeat w-full h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-75"></div>
      <div className="relative done z-10 w-full max-w-6xl flex flex-col lg:flex-row justify-between items-center text-neutral-200	 mt-16 lg:mt-0">
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-relaxed">
            Hi, <span role="img" aria-label="waving hand">👋</span><br />
            My Name is <br />
            <span className="text-neutral-200">{name}</span>
          </h1>
          <h2 className="text-xl sm:text-3xl font-medium mb-6">
            <span className="tagline text-lime-200">{currentTagline}</span>
          </h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-30 text-black">
            I’m a passionate Frontend Developer with experience in creating beautiful and responsive web applications. My expertise lies in designing intuitive user interfaces and ensuring a seamless user experience.
          </p>
          <a href={resume} download className="btn-primary">
            Download Resume
          </a>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
          <img src={img} alt={name} className="profile-pic max-w-full h-auto rounded-full shadow-lg" />
        </div>
      </div>
    </main>
  );
}

export default Home;
