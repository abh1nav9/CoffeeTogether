import { useState, useRef, useEffect } from "react";
import { Button } from "../components/common/Button";

export function HomePage() {
  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const [isMoved, setIsMoved] = useState<boolean>(false);
  const [randomLine, setRandomLine] = useState<string>("");
  const parentRef = useRef<HTMLDivElement | null>(null);
  const noButtonRef = useRef<HTMLDivElement | null>(null);

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
    const buttonContainer = noButtonRef.current;
    if (buttonContainer) {
      const buttonRect = buttonContainer.getBoundingClientRect();
      const buttonWidth = buttonRect.width;
      const buttonHeight = buttonRect.height;

      // Limit movement to 90% of viewport
      const limitWidth = Math.floor(window.innerWidth * 0.9);
      const limitHeight = Math.floor(window.innerHeight * 0.9);

      const maxLeft = Math.max(0, limitWidth - buttonWidth);
      const maxTop = Math.max(0, limitHeight - buttonHeight);

      const randomTop = Math.floor(Math.random() * (maxTop + 1));
      const randomLeft = Math.floor(Math.random() * (maxLeft + 1));

      setPosition({ top: randomTop, left: randomLeft });
      setIsMoved(true);
    }
  };

  const meetDate = () => {
    window.location.href = "https://calendly.com/abhinavgautam9";
  };

  return (
    <div className="min-h-screen w-full relative">
      {/* Theme gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(125% 125% at 50% 90%, var(--color-gradient-start) 40%, var(--color-gradient-end) 100%)",
          backgroundSize: "100% 100%",
        }}
      />

      <div
        className="relative z-10 flex items-center justify-center min-h-screen p-4"
        ref={parentRef}
      >
        <div className="text-center text-[var(--color-text)]">
          <div className="mb-4 font-bold text-2xl md:text-3xl lg:text-4xl">
            {randomLine}
          </div>
          <div className="flex justify-center gap-4 md:gap-6">
            <Button variant="cta" onClick={meetDate}>
              YES
            </Button>

            <div
              style={{
                position: isMoved ? "fixed" : "relative",
                top: isMoved ? `${position.top}px` : "auto",
                left: isMoved ? `${position.left}px` : "auto",
                cursor: "pointer",
              }}
              ref={noButtonRef}
            >
              <Button variant="cta" onClick={moveDivToRandomPosition}>
                NO
              </Button>
            </div>
          </div>
          <div className="mt-4 text-sm font-thin">
            Don't like the idea?{" "}
            <Button variant="link" onClick={() => window.location.reload()}>
              Reload it.
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
