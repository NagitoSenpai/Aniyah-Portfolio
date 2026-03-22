import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { sketchCategories } from "../data/sketchData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Sketches() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <div className="mb-10 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl mb-4" style={{ color: "#6695c8", fontFamily: "'FONTSPRING DEMO - Selina Bold', serif" }}>
          Gallery
        </h1>
        <div
          className="w-16 h-0.5 mb-4 rounded-full"
          style={{ background: "#dec5a8" }}
        />
        <p className="text-lg sm:text-xl max-w-2xl" style={{ color: "#7a6e62" }}>
          A collection of my artwork across different themes. Click any section to browse
          the full gallery.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {sketchCategories.map((category) => (
          <Link
            key={category.id}
            to={`/sketches/${category.slug}`}
            className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 block"
            style={{
              background: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(222,197,168,0.4)",
            }}
          >
            <div className="relative overflow-hidden h-64">
              <ImageWithFallback
                src={category.cardImage}
                alt={category.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                style={{ background: "rgba(102,149,200,0.45)" }}
              >
                <span
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
                  style={{ background: "#E5DFD1", color: "#6695c8" }}
                >
                  View Gallery <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>

            <div className="p-6 flex items-start justify-between gap-3">
              <div>
                <h3 className="mb-1 text-[20.3px]" style={{ color: "#5a7aaa", fontFamily: "'Bennet Text Four', serif" }}>
                  {category.title}
                </h3>
                <p className="text-sm" style={{ color: "#7a6e62" }}>
                  {category.description}
                </p>
              </div>
              <span
                className="text-xs px-2 py-1 rounded-full shrink-0 mt-1"
                style={{
                  background: "rgba(102,149,200,0.1)",
                  color: "#6695c8",
                  border: "1px solid rgba(102,149,200,0.2)",
                }}
              >
                {category.gallery.length} works
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}