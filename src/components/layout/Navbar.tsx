import { Button } from "../common/Button";
import { useAppDispatch, useAppSelector } from "../../redux/useStore";
import { toggleTheme } from "../../redux/themeSlice";
import { Moon, Sun } from "lucide-react";

export function Navbar() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((s) => s.theme.value);

  return (
    <header className="w-full fixed top-0 left-0 z-20 bg-transparent">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 ">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                  fill="#e53e3e"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <span className="font-semibold text-[var(--color-text)] text-lg">
            CoffeeTogether
          </span>
        </div>
        <Button variant="link" onClick={() => dispatch(toggleTheme())}>
          {theme === "dark" ? (
            <span className="inline-flex items-center gap-2">
              <Sun color="var(--color-text)" size={18} />
            </span>
          ) : (
            <span className="inline-flex items-center gap-2">
              <Moon color="var(--color-text)" size={18} />
            </span>
          )}
        </Button>
      </div>
    </header>
  );
}
