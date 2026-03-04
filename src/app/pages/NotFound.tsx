import { Link } from "react-router";
import { Home, Frown } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <div
          className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6"
          style={{ background: "#6695c8" }}
        >
          <Frown className="w-12 h-12" style={{ color: "#E5DFD1" }} />
        </div>

        <h1 className="text-6xl mb-4" style={{ color: "#6695c8" }}>404</h1>
        <h2 className="text-3xl mb-4" style={{ color: "#5a7aaa" }}>Page Not Found</h2>
        <p className="text-xl mb-8" style={{ color: "#7a6e62" }}>
          Oops! This page seems to have wandered off the canvas.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full hover:opacity-85 transition-opacity"
          style={{ background: "#6695c8", color: "#E5DFD1" }}
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}