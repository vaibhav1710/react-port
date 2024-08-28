import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const ButtonSection = ({ isDarkMode }) => {
  return (
    <div
    className={`buts flex flex-col md:flex-row p-2 w-full justify-center items-center ${isDarkMode ? 'bg-zinc-900 text-white' : 'bg-white text-black'}`}
  >
      <button
        className={`w-32 border text-pink-700 border-pink-500 hover:bg-pink-500 ${isDarkMode ? 'hover:text-white' : 'hover:text-black'} focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
        onClick={() => window.open('/path/to/your/resume.pdf', '_blank')}
      >
        <FontAwesomeIcon icon={faDownload} className="mr-2" />
        Resume
      </button>
      <a
        href="https://github.com/vaibhav1710"
        target="_blank"
        rel="noopener noreferrer"
        className={`w-32 border text-pink-700 border-pink-500 hover:bg-pink-500 ${isDarkMode ? 'hover:text-white' : 'hover:text-black'} focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
      >
        <FontAwesomeIcon icon={faGithub} className="mr-2" />
        GitHub
      </a>
      <a
        href="https://github.com/vaibhav1710"
        target="_blank"
        rel="noopener noreferrer"
        className={`w-32 border text-pink-700 border-pink-500 hover:bg-pink-500 ${isDarkMode ? 'hover:text-white' : 'hover:text-black'} focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
      >
        <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
        Linkedin
      </a>
    </div>
  );
};

export default ButtonSection;
