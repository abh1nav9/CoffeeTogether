import { useState, useRef, useEffect } from "react";
import { Button } from "../components/Button";

export function HomePage() {
  const [position, setPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const [isMoved, setIsMoved] = useState<boolean>(false);
  const [randomLine, setRandomLine] = useState<string>("");
  const parentRef = useRef<HTMLDivElement | null>(null);

  const lines: string[] = [
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

  const getRandomLine = () => {
    const randomIndex = Math.floor(Math.random() * lines.length);
    return lines[randomIndex];
    };

  useEffect(() => {
    setRandomLine(getRandomLine());
  }, []);

  const moveDivToRandomPosition = () => {
    const parent = parentRef.current;
    if (parent) {
      const parentHeight = parent.clientHeight;
      const parentWidth = parent.clientWidth;
      const randomTop = Math.floor(Math.random() * (parentHeight - 48));
      const randomLeft = Math.floor(Math.random() * (parentWidth - 112));
      setPosition({ top: randomTop, left: randomLeft });
      setIsMoved(true);
    }
  };

  const meetDate = () => {
    window.location.href = "https://calendly.com/abhinavgautam9";
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4" ref={parentRef}>
      <div className="text-center">
        <div className="mb-4 font-bold text-2xl md:text-3xl lg:text-4xl">
          {randomLine}
        </div>
        <div className="flex justify-center gap-4 md:gap-6 relative">
          <Button variant="cta" onClick={meetDate}>
            YES
          </Button>

          <div
            style={{
              position: isMoved ? "absolute" : "relative",
              top: isMoved ? `${position.top}px` : "auto",
              left: isMoved ? `${position.left}px` : "auto",
              cursor: "pointer",
            }}
          >
            <Button variant="cta" onClick={moveDivToRandomPosition}>
              NO
            </Button>
          </div>
        </div>
        <div className="mt-4 text-sm font-thin">
          Don't like the idea?{' '}
          <Button variant="link" onClick={() => window.location.reload()}>
            Reload it.
          </Button>
        </div>
      </div>
    </div>
  );
}

