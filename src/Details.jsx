// Enter all your details in this file
// Logo images
import logogradient from "./assets/port.png";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import mySQL from './assets/techstack/mysql.png';
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import canva from "./assets/techstack/canva.png";
import postman from "./assets/techstack/postman.png";
import adobe from "./assets/techstack/adobe.png";
// Project Images
import Devine from "./assets/projects/Devine.png";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Kunal Kumar Singh",
  taglines: [
    "I'm Front-End Developer",
    "I'm Web Designer",
    "I'm Tech Enthusiast",
    "I'm Open Source Contributor",
    "I'm Curious Learner",
  ],
  img: profile,
  about: `A dedicated Front-end Developer with expertise in HTML, CSS,
JavaScript, and ReactJS, passionate about creating user-centric
websites and enhancing user experience. Skilled in collaborative
work and problem-solving, with a commitment to staying updated
on industry trends. Proficient in modern JavaScript frameworks,
particularly React, with a keen eye for creating intuitive and
responsive user interfaces.`,
};

// Enter your Social Media URLs here
export const socialMedia = {
  linkedin: "https://www.linkedin.com/in/kunal-kumar-singh-developer/",
  github: "https://github.com/Kunalhats/",
};

export const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/in/kunal-kumar-singh-developer/",
  github: "https://github.com/Kunalhats/",
};


// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `CodersVoice`,
    Location: "Kolkata",
    Type: "Full Time",
    Duration: "Oct 2023 - Apr 2024",
  },
  {
    Position: "Web Developer Intern",
    Company: `OPC PVT LTD`,
    Location: "New Delhi",
    Type: "Internship",
    Duration: "Jun 2022 - Aug 2022",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Course: "Bachelor of Technology",
    Stream: "Computer Science and Engineering",
    Institute: "Roorkee College of Engineering",
    Location: "Roorkee, Uttarakhand",
    Type: "Full Time",
    Duration: "Aug 2019 - Jun 2023",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  mySQL: mySQL,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  canva: canva,
  git: git,
  github: github,
  adobe: adobe,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Devine (Social Media Website)",
    image: Devine,
    description: `A social media website developed using React. Features include list
    notable features, e.g., user profiles, messaging, real-time updates, etc.`,
    techstack: "HTML/CSS, JavaScript, ReactJs",
    previewLink: "https://kunalhats.github.io/Devine/",
    githubLink: "https://github.com/Kunalhats/Devine",
  },
  {
    title: "Spotify Clone",
    image: projectImage2,
    description: `Developed a fully functional music streaming application inspired by
    Spotify. Created dynamic and responsive UI components using React.`,
    techstack: "HTML/CSS, JavaScript, ReactJs",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "NotesHub",
    image: projectImage3,
    description: `Crafted a web-based solution enabling effortless note-sharing between
    students and educators, with built-in administrative functionalities for
    streamlined note approval.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "kunalsg13689@gmail.com",
  phone: "+91 8102014885",
};
