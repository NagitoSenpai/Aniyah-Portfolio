import { Outlet } from "react-router";
import { Navigation } from "./Navigation";

export function Layout() {
  return (
    <div className="min-h-screen" style={{ background: "#E5DFD1" }}>
      <Navigation />
      <main className="pt-[72px] sm:pt-[80px] md:pt-[104px]">
        <Outlet />
      </main>
    </div>
  );
}