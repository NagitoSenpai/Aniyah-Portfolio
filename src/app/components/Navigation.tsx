import { Link, useLocation } from "react-router";
import { Palette, Mail } from "lucide-react";

export function Navigation() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{
        background: "rgba(229,223,209,0.82)",
        borderBottomColor: "rgba(102,149,200,0.18)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div
              className="p-2 rounded-lg"
              style={{ background: "#6695c8" }}
            >
              <Palette className="w-5 h-5" style={{ color: "#E5DFD1" }} />
            </div>
            <span style={{ color: "#6695c8" }}>
              Portfolio
            </span>
          </Link>

          <div className="flex items-center gap-8">
            {[
              { to: "/", label: "Home" },
              { to: "/sketches", label: "Sketches" },
              { to: "/characters", label: "Characters" },
              { to: "/storyboards", label: "Storyboards" },
              { to: "/resume", label: "Résumé" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="relative transition-colors"
                style={{ color: isActive(to) ? "#6695c8" : "#7a6e62" }}
              >
                {label}
                {isActive(to) && (
                  <div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{ background: "#6695c8" }}
                  />
                )}
              </Link>
            ))}

            <Link
              to="/contact"
              className="flex items-center gap-2 px-4 py-2 rounded-full hover:opacity-85 transition-opacity"
              style={{ background: "#6695c8", color: "#E5DFD1" }}
            >
              <Mail className="w-4 h-4" />
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}