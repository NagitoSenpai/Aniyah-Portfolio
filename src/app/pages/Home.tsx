import { Link } from "react-router";

const BG_IMAGE = "https://images.unsplash.com/photo-1730206562928-0efd62560435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbGx1c3RyYXRpb24lMjBhcnQlMjBzdHVkaW8lMjB3b3Jrc3BhY2UlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NzI1NzI4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${BG_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(102,149,200,0.55) 0%, rgba(222,197,168,0.45) 100%)" }}
      />

      {/* Centered content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center gap-8">
        <h1
          className="text-7xl md:text-9xl tracking-widest uppercase"
          style={{
            color: "#E5DFD1",
            textShadow: "0 4px 32px rgba(102,149,200,0.35), 0 1px 0 rgba(222,197,168,0.5)",
            letterSpacing: "0.18em",
          }}
        >
          Portfolio
        </h1>

        <div
          className="w-24 h-px mx-auto"
          style={{ background: "linear-gradient(90deg, #6695c8, #dec5a8)" }}
        />

        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            to="/sketches"
            className="px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: "rgba(229,223,209,0.18)",
              border: "1.5px solid #E5DFD1",
              color: "#E5DFD1",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            View Work
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: "rgba(102,149,200,0.72)",
              border: "1.5px solid #6695c8",
              color: "#E5DFD1",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}