import { Outlet } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";

export function RootLayout() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
        <Outlet />
      </div>
    </>
  );
}
