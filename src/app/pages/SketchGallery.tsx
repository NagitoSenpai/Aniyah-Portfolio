import { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router";
import { X, ArrowLeft } from "lucide-react";
import { sketchCategories } from "../data/sketchData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function SketchGallery() {
  const { slug } = useParams<{ slug: string }>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const category = sketchCategories.find((c) => c.slug === slug);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [closeLightbox]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <p className="text-xl" style={{ color: "#7a6e62" }}>
          Category not found.
        </p>
        <Link
          to="/sketches"
          className="inline-flex items-center gap-2 mt-6 px-5 py-2 rounded-full"
          style={{ background: "#6695c8", color: "#E5DFD1" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Sketches
        </Link>
      </div>
    );
  }

  const activeImage =
    lightboxIndex !== null ? category.gallery[lightboxIndex] : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      {/* Header */}
      <div className="mb-8 sm:mb-10">
        <Link
          to="/sketches"
          className="inline-flex items-center gap-1.5 text-sm mb-6 transition-opacity hover:opacity-70"
          style={{ color: "#6695c8" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Gallery
        </Link>

        <h1 className="text-4xl sm:text-5xl mb-3" style={{ color: "#6695c8", fontFamily: "'FONTSPRING DEMO - Selina Bold', serif" }}>
          {category.title}
        </h1>
        <div
          className="w-16 h-0.5 mb-4 rounded-full"
          style={{ background: "#dec5a8" }}
        />
        <p className="text-base sm:text-lg max-w-2xl" style={{ color: "#7a6e62" }}>
          {category.description}
        </p>
      </div>

      {/* Gallery grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-start">
        {category.gallery.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setLightboxIndex(index)}
            className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 text-left w-full flex flex-col"
            style={{
              background: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(222,197,168,0.4)",
            }}
            aria-label={`Open ${item.caption}`}
          >
            <div className="relative overflow-hidden">
              <ImageWithFallback
                src={item.src}
                alt={item.caption}
                className="w-full h-auto block transform group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "rgba(102,149,200,0.3)" }}
              />
            </div>
            <div className="px-5 py-4">
              <p className="text-sm" style={{ color: "#7a6e62" }}>
                {item.caption}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(30, 30, 40, 0.75)", backdropFilter: "blur(12px)" }}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-70 z-10"
            style={{ background: "rgba(229,223,209,0.9)", color: "#5a7aaa" }}
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image container — stop propagation so clicking image doesn't close */}
          <div
            className="relative max-w-4xl w-full mx-auto flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage.src}
              alt={activeImage.caption}
              className="rounded-xl shadow-2xl max-h-[80vh] w-auto object-contain"
              style={{ maxWidth: "100%" }}
            />
            <p
              className="text-sm px-4 py-2 rounded-full"
              style={{ background: "rgba(229,223,209,0.85)", color: "#5a7aaa" }}
            >
              {activeImage.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}