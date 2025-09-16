import { useEffect } from "react";
import { useAppSelector } from "../../redux/useStore";
import { persistTheme } from "../../redux/themeSlice";

export function ThemeWatcher() {
  const theme = useAppSelector((s) => s.theme.value);

  useEffect(() => {
    const html = document.documentElement;

    // Set data-theme attribute instead of classes
    html.setAttribute("data-theme", theme);

    // Persist to localStorage
    persistTheme(theme);
  }, [theme]);

  return null;
}
