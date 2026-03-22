import { Link } from "react-router";
import bgImage from "figma:asset/1da6855555464472d36bdbd120106b47116ad6f6.png";

export function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />

      {/* Centered content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center gap-8">
        <h1
          className="tracking-widest uppercase text-[125px]"
          style={{
            fontFamily: "'FONTSPRING DEMO - Selina Bold', serif",
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