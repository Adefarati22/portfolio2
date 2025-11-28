import { useState, useEffect } from "react";

export default function Typewriter({ words = [], typingSpeed = 120, pauseTime = 1500 }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const handleTyping = () => {
      setText((prev) => {
        const next = isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1);

        return next;
      });

      // When finished typing full word
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      }

      // When done deleting
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) =>
          prev === words.length - 1 ? 0 : prev + 1
        );
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 60 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentWordIndex, words, typingSpeed, pauseTime]);

  return (
    <span className="border-r-2 border-[#d3e97a] pr-1 animate-pulse">
      {text}
    </span>
  );
}
