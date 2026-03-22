import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Mail, Menu, X } from "lucide-react";
import logoSrc from "figma:asset/29f8034d0f36928218b063481ac58bcee4033217.png";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/sketches", label: "Gallery" },
  { to: "/characters", label: "Characters" },
  { to: "/resume", label: "Resume" },
];

export function Navigation() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (path: string) =>
    path === "/sketches"
      ? location.pathname.startsWith("/sketches")
      : location.pathname === path;

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
        style={{
          background: "rgba(229,223,209,0.92)",
          borderBottomColor: "rgba(102,149,200,0.18)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src={logoSrc}
                alt="Aniyah Williams logo"
                className="h-14 sm:h-16 md:h-20 w-auto"
              />
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {NAV_LINKS.map(({ to, label }) => (
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

            {/* Mobile hamburger button */}
            <button
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ color: "#6695c8" }}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col md:hidden"
          style={{ background: "rgba(229,223,209,0.98)", paddingTop: "72px" }}
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="flex flex-col px-6 pt-8 pb-10 gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className="py-4 border-b transition-colors text-xl"
                style={{
                  color: isActive(to) ? "#6695c8" : "#7a6e62",
                  borderBottomColor: "rgba(222,197,168,0.45)",
                  fontWeight: isActive(to) ? 600 : 400,
                }}
              >
                {label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 mt-6 px-6 py-3.5 rounded-full hover:opacity-85 transition-opacity text-lg"
              style={{ background: "#6695c8", color: "#E5DFD1" }}
            >
              <Mail className="w-5 h-5" />
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
