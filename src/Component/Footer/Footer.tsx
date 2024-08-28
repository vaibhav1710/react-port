import React from "react";
import { FaDiscord, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Footer() {

  const email = "singhvaibhav1710@gmail.com";

  return (
    <div className="mt-4 w-full bg-neutral-300 p-3 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
    <div className="flex items-center justify-center space-x-4">
      <span>© Vaibhav Singh 2024</span>
      <a
        href={`mailto:${email}`}
        className="text-neutral-800 dark:text-neutral-200"
      >
        <FaEnvelope className="h-5 w-5" />
      </a>
      <a
        href="https://twitter.com/SinghV1710"
        className="text-neutral-800 dark:text-neutral-200"
      >
        <FaTwitter className="h-5 w-5" />
      </a>
    </div>
  </div>
  );
}

export default Footer;
