import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-cover bg-center relative h-20" style={{ backgroundImage: "url('./assets/BG.jpeg')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-75"></div>
      <div className="relative z-10 h-full flex flex-col justify-center items-center">
         <hr className="border-t border-white opacity-50 w-24 mx-auto my-4" />
        <div className="container mx-auto text-center">
          <p className="text-xs text-white">
            Designed and Coded by{" "}
            <a
              className="font-medium text-yellow-300 hover:text-yellow-500"
              href="https://www.linkedin.com/in/kunal-kumar-singh-developer"
              target="_blank"
              rel="noreferrer noopener"
            >
              Kunal Kumar Singh
            </a>{" "}
            with
            <span className="font-medium text-yellow-300"> Love</span> &
            <span className="font-medium text-yellow-300"> Coffee</span>
          </p>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
