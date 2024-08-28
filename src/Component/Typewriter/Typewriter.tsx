import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed: number; // Speed of typing (ms per character)
  deletingSpeed: number; // Speed of deleting (ms per character)
  pauseDuration: number; // Pause duration after typing and before deleting
}
const Typewriter: React.FC<TypewriterProps> = ({ words, typingSpeed, deletingSpeed, pauseDuration }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentIndex < words[wordIndex].length) {
      // Typing
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + words[wordIndex][currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && currentIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText.slice(0, -1));
        setCurrentIndex(prevIndex => prevIndex - 1);
      }, deletingSpeed);
    } else if (!isDeleting && currentIndex === words[wordIndex].length) {
      // Start deleting after a pause
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && currentIndex === 0) {
      // Move to the next word and start typing again after a pause
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex(prevIndex => (prevIndex + 1) % words.length);
      }, pauseDuration);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="typewriter">
      {currentText}
      <span className="cursor"></span>
    </span>
  );
};

export default Typewriter;
