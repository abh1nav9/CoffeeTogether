import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isMoved, setIsMoved] = useState(false);
  const [randomLine, setRandomLine] = useState(""); // State to hold the random line
  const parentRef = useRef(null);

  const lines = [
    "Want to test our chemistry over coffee?",
    "Up for a date and some laughs?",
    "Coffee and charming company?",
    "Movie date and some smiles?",
    "Sunset with a hint of romance?",
    "Want to make some memories with me?",
    "A night of stargazing?",
    "You want me to click a cute picture of yours?",
    "Tea or Coffee? Let's try together?",
    "Wanna populate?",
  ];

  // Function to select a random line from the array
  const getRandomLine = () => {
    const randomIndex = Math.floor(Math.random() * lines.length);
    return lines[randomIndex];
  };

  // Update randomLine state on component mount
  useEffect(() => {
    setRandomLine(getRandomLine());
  }, []);

  const moveDivToRandomPosition = () => {
    const parent = parentRef.current;
    if (parent) {
      const parentHeight = parent.clientHeight;
      const parentWidth = parent.clientWidth;
      const randomTop = Math.floor(Math.random() * (parentHeight - 48)); // 48 is the height of the button
      const randomLeft = Math.floor(Math.random() * (parentWidth - 112)); // 112 is the width of the button
      setPosition({ top: randomTop, left: randomLeft });
      setIsMoved(true);
    }
  };

  const meetDate = () => {
    window.location.href = "https://calendly.com/abhinavgautam9";
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen p-4"
      ref={parentRef}
    >
      <div className="text-center">
        <div className="mb-4 font-bold text-2xl md:text-3xl lg:text-4xl">
          {randomLine}
        </div>
        <div className="flex justify-center gap-4 md:gap-6 relative">
          <div
            className="border-2 border-rose-500 bg-rose-500 rounded-full h-12 w-28 text-white flex items-center justify-center text-sm md:text-base lg:text-lg"
            onClick={meetDate}
          >
            YES
          </div>

          <div
            className="border-2 border-rose-500 bg-rose-500 rounded-full h-12 w-28 text-white flex items-center justify-center text-sm md:text-base lg:text-lg"
            onClick={moveDivToRandomPosition}
            style={{
              position: isMoved ? "absolute" : "relative",
              top: isMoved ? `${position.top}px` : "auto",
              left: isMoved ? `${position.left}px` : "auto",
              cursor: "pointer",
            }}
          >
            NO
          </div>
        </div>
        <div className="mb-4 text-sm font-thin mt-2">Don't like the idea? Reload it.</div>
      </div>
    </div>
  );
}

export default App;
