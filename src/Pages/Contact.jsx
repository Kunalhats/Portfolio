import React from "react";
import { contactDetails, socialMedia } from "../Details";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Contact() {
  const { email, phone } = contactDetails;

  return (
    <main
      className="relative bg-cover bg-center bg-no-repeat w-full h-full flex flex-col items-center py-10 px-4 sm:px-8"
      style={{ backgroundImage: "url('/path/to/your/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-75"></div>
      <div className="relative z-10 w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg text-purple-950">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 rounded-lg"></div>
        <section className="text-center mb-12 relative bg-cover bg-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Contact Me</h1>
          <p className="text-lg sm:text-xl mb-8">
            I’m always open to discussing new projects or opportunities. Feel free to reach out through any of the following channels or fill out the form below.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Get in Touch */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 rounded-lg"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">Get in Touch</h2>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-lg md:text-xl font-medium mb-2">Email</h3>
                  <a
                    href={`mailto:${email}`}
                    className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {email}
                  </a>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-medium mb-2">Phone</h3>
                  <a
                    href={`tel:${phone}`}
                    className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors">
                    {phone}
                  </a>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-medium mb-4">Follow Me</h3>
                  <div className="flex space-x-4">
                    {socialMedia && socialMedia.length > 0 ? (
                      socialMedia.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          className="text-blue-600 hover:text-blue-800 transition-colors text-2xl"
                          aria-label={link.name}
                        >
                          {link.name === 'GitHub' && <FaGithub />}
                          {link.name === 'LinkedIn' && <FaLinkedin />}
                          {link.name === 'Twitter' && <FaTwitter />}
                        </a>
                      ))
                    ) : (
                      <p className="text-lg text-gray-600">No social media links available.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 rounded-lg"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900 text-center">Contact Form</h2>
              <form
                action="#"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 hover:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 hover:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 hover:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    className="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 hover:border-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Contact;
