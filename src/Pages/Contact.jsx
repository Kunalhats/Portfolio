import React, { useState } from "react";
import { contactDetails, socialMedia } from "../Details";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  const { email, phone } = contactDetails;
  const { linkedin, github } = socialMedia;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you would typically handle the form submission, e.g., send data to an API
    console.log('Form submitted:', formData);

    // Example of sending data using fetch (if you're using an API endpoint)
    // fetch('/Portfolio/your-form-handler', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(formData)
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Success:', data);
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });

    // Clear the form after submission (optional)
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <main
      className="relative bg-cover bg-center bg-no-repeat w-full min-h-screen flex flex-col items-center py-10 px-4 pt-20"
      style={{ backgroundImage: "url('/path/to/your/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-75"></div>
      <div className="relative z-10 w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg text-purple-950">
        <section className="text-center mb-8 relative">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">Contact Me</h1>
          <p className="text-md sm:text-lg mb-6 text-gray-700">
            I’m always open to discussing new projects or opportunities. Feel free to reach out through any of the following channels or fill out the form below.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 rounded-lg"></div>
            <div className="relative z-10 w-full">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">Get in Touch</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="text-md md:text-lg font-medium mb-2">Email</h3>
                  <a
                    href={`mailto:${email}`}
                    className="text-md font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {email}
                  </a>
                </div>
                <div>
                  <h3 className="text-md md:text-lg font-medium mb-2">Phone</h3>
                  <a
                    href={`tel:${phone}`}
                    className="text-md font-medium text-blue-600 hover:text-blue-800 transition-colors">
                    {phone}
                  </a>
                </div>
                <div>
                  <h3 className="text-md md:text-lg font-medium mb-4">Follow Me</h3>
                  <div className="flex space-x-4 justify-start">
                    <a
                      href={github}
                      className="text-blue-600 hover:text-blue-800 transition-colors text-xl"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={linkedin}
                      className="text-blue-600 hover:text-blue-800 transition-colors text-xl"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 rounded-lg"></div>
            <div className="relative z-10 w-full">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 text-center">Contact Form</h2>
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 hover:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 hover:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 hover:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 hover:border-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
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
