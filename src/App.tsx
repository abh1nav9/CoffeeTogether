import { RouterProvider } from "react-router-dom";
import { router } from "./route/router";
import { ThemeWatcher } from "./components/ui/ThemeWatcher";

export default function App() {
  return (
    <>
      <ThemeWatcher />
      <RouterProvider router={router} />
    </>
  );
}
