import { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router";
import { X, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { sketchCategories } from "../data/sketchData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

/** Mini slideshow card rendered inside the gallery grid */
function SlideshowCard({
  slides,
  caption,
  onOpen,
}: {
  slides: { src: string; label?: string }[];
  caption: string;
  onOpen: (startIndex: number) => void;
}) {
  const [current, setCurrent] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % slides.length);
  };

  return (
    <div
      onClick={() => onOpen(current)}
      className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 text-left w-full flex flex-col cursor-pointer"
      style={{
        background: "rgba(255,255,255,0.6)",
        border: "1px solid rgba(222,197,168,0.4)",
      }}
      role="button"
      tabIndex={0}
      aria-label={`Open slideshow: ${caption}`}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onOpen(current); }}
    >
      {/* Image area — square container with object-contain so full image is visible */}
      <div
        className="relative overflow-hidden aspect-square flex items-center justify-center"
        style={{ background: "#ece6e3" }}
      >
        <ImageWithFallback
          src={slides[current].src}
          alt={`${caption} — ${slides[current].label ?? current + 1}`}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ background: "rgba(102,149,200,0.15)" }}
        />

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
          style={{ background: "rgba(229,223,209,0.85)", color: "#5a7aaa" }}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
          style={{ background: "rgba(229,223,209,0.85)", color: "#5a7aaa" }}
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
          {slides.map((_, i) => (
            <span
              key={i}
              className="block rounded-full transition-all duration-300"
              style={{
                width: i === current ? "18px" : "6px",
                height: "6px",
                background: i === current ? "#9dabb4" : "rgba(229,223,209,0.7)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Caption row */}
      <div className="px-4 py-3 flex items-center justify-between">
        <p className="text-sm truncate" style={{ color: "#7a6e62" }}>
          {caption}
        </p>
        <span
          className="text-xs px-2 py-0.5 rounded-full shrink-0 ml-2"
          style={{ background: "rgba(157,171,180,0.2)", color: "#77786f" }}
        >
          {current + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
}

/** Lightbox that supports both single images and slideshows */
function Lightbox({
  item,
  startSlide,
  onClose,
}: {
  item: { src: string; caption: string; prototypeLink?: string; slides?: { src: string; label?: string }[] };
  startSlide: number;
  onClose: () => void;
}) {
  const isSlideshow = !!(item.slides && item.slides.length > 1);
  const [slideIndex, setSlideIndex] = useState(startSlide);

  const currentSrc = isSlideshow ? item.slides![slideIndex].src : item.src;
  const currentLabel = isSlideshow ? item.slides![slideIndex].label : undefined;

  const prevSlide = useCallback(() => {
    if (!item.slides) return;
    setSlideIndex((i) => (i - 1 + item.slides!.length) % item.slides!.length);
  }, [item.slides]);

  const nextSlide = useCallback(() => {
    if (!item.slides) return;
    setSlideIndex((i) => (i + 1) % item.slides!.length);
  }, [item.slides]);

  useEffect(() => {
    if (!isSlideshow) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isSlideshow, prevSlide, nextSlide]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(30, 30, 40, 0.80)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-70 z-10"
        style={{ background: "rgba(229,223,209,0.9)", color: "#5a7aaa" }}
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Content — stop propagation */}
      <div
        className="relative max-w-4xl w-full mx-auto flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {isSlideshow && (
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-70 z-10 hidden sm:flex"
            style={{ background: "rgba(229,223,209,0.85)", color: "#5a7aaa" }}
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        <img
          src={currentSrc}
          alt={currentLabel ? `${item.caption} — ${currentLabel}` : item.caption}
          className="rounded-xl shadow-2xl max-h-[72vh] w-auto object-contain"
          style={{ maxWidth: "100%" }}
        />

        {isSlideshow && (
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-70 z-10 hidden sm:flex"
            style={{ background: "rgba(229,223,209,0.85)", color: "#5a7aaa" }}
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        <div className="flex flex-col items-center gap-2 w-full">
          <p
            className="text-sm px-4 py-2 rounded-full"
            style={{ background: "rgba(229,223,209,0.85)", color: "#5a7aaa" }}
          >
            {item.caption}
            {currentLabel && (
              <span style={{ color: "#9dabb4" }}> — {currentLabel}</span>
            )}
          </p>

          {isSlideshow && (
            <div className="flex items-center gap-2 mt-1">
              <button
                onClick={prevSlide}
                className="sm:hidden w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "rgba(229,223,209,0.85)", color: "#5a7aaa" }}
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex gap-2">
                {item.slides!.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlideIndex(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === slideIndex ? "20px" : "8px",
                      height: "8px",
                      background: i === slideIndex ? "#9dabb4" : "rgba(229,223,209,0.6)",
                    }}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="sm:hidden w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "rgba(229,223,209,0.85)", color: "#5a7aaa" }}
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {item.prototypeLink && (
            <a
              href={item.prototypeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 rounded-full transition-opacity hover:opacity-80"
              style={{ background: "#6695c8", color: "#E5DFD1" }}
              onClick={(e) => e.stopPropagation()}
            >
              Prototype ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function Gallery() {
  const { slug } = useParams<{ slug: string }>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxSlide, setLightboxSlide] = useState(0);

  const category = sketchCategories.find((c) => c.slug === slug);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [closeLightbox]);

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

  const activeItem = lightboxIndex !== null ? category.gallery[lightboxIndex] : null;

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

        <h1
          className="text-4xl sm:text-5xl mb-3"
          style={{ color: "#6695c8", fontFamily: "'FONTSPRING DEMO - Selina Bold', serif" }}
        >
          {category.title}
        </h1>
        <div className="w-16 h-0.5 mb-4 rounded-full" style={{ background: "#dec5a8" }} />
        <p className="text-base sm:text-lg max-w-2xl" style={{ color: "#7a6e62" }}>
          {category.description}
        </p>
      </div>

      {/* Gallery grid — 3-column with equal spacing, full images visible */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {category.gallery.map((item, index) =>
          item.slides && item.slides.length > 1 ? (
            <SlideshowCard
              key={item.id}
              slides={item.slides}
              caption={item.caption}
              onOpen={(startSlide) => {
                setLightboxSlide(startSlide);
                setLightboxIndex(index);
              }}
            />
          ) : (
            <div
              key={item.id}
              onClick={() => {
                setLightboxSlide(0);
                setLightboxIndex(index);
              }}
              className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(222,197,168,0.4)",
              }}
              role="button"
              tabIndex={0}
              aria-label={`Open ${item.caption}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setLightboxSlide(0);
                  setLightboxIndex(index);
                }
              }}
            >
              {/* Square container with object-contain so the full image is visible */}
              <div
                className="relative overflow-hidden aspect-square flex items-center justify-center"
                style={{ background: "#ece6e3" }}
              >
                <ImageWithFallback
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "rgba(102,149,200,0.15)" }}
                />
              </div>
              <div className="px-4 py-3">
                <p className="text-sm truncate" style={{ color: "#7a6e62" }}>
                  {item.caption.replace(/,\s*\d{4}$/, "")}
                </p>
              </div>
            </div>
          )
        )}
      </div>

      {/* Lightbox */}
      {activeItem && (
        <Lightbox
          item={activeItem}
          startSlide={lightboxSlide}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
}
