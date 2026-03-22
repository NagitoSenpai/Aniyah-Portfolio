import { Mail, Heart, Phone } from "lucide-react";

export function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <div className="text-center mb-10 sm:mb-12">
        <div
          className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
          style={{ background: "#6695c8" }}
        >
          <Heart className="w-10 h-10 animate-pulse" style={{ color: "#E5DFD1" }} />
        </div>

        <h1
          className="text-4xl sm:text-5xl mb-4"
          style={{ color: "#6695c8", fontFamily: "'FONTSPRING DEMO - Selina Bold', serif" }}
        >Thank You<span style={{ fontFamily: "serif" }}>!</span></h1>

        <p className="text-lg sm:text-xl max-w-2xl mx-auto" style={{ color: "#7a6e62" }}>
          Thank you for taking the time to explore my work. I'd love to hear from you and
          discuss how we can bring your creative vision to life together.
        </p>
      </div>

      <div
        className="rounded-2xl shadow-xl p-6 sm:p-12 mb-10 sm:mb-12"
        style={{ background: "rgba(255,255,255,0.65)", border: "1px solid rgba(222,197,168,0.4)" }}
      >
        <h2 className="text-2xl mb-6 text-center font-[Bennet_Text_Four]" style={{ color: "#6695c8" }}>Get in Touch</h2>

        <div className="space-y-6">
          <div
            className="rounded-xl p-6 flex items-center gap-4 hover:shadow-lg transition-shadow"
            style={{ background: "rgba(102,149,200,0.07)", border: "1px solid rgba(222,197,168,0.35)" }}
          >
            <div
              className="p-3 rounded-full"
              style={{ background: "#6695c8" }}
            >
              <Mail className="w-6 h-6" style={{ color: "#E5DFD1" }} />
            </div>
            <div>
              <p className="text-sm mb-1" style={{ color: "#7a6e62" }}>Email me at</p>
              <a
                href="mailto:Aniyah.6424@gmail.com"
                className="text-lg sm:text-xl transition-colors hover:opacity-70 break-all"
                style={{ color: "#6695c8" }}
              >
                Aniyah.6424@gmail.com
              </a>
            </div>
          </div>

          <div
            className="rounded-xl p-6 flex items-center gap-4 hover:shadow-lg transition-shadow"
            style={{ background: "rgba(102,149,200,0.07)", border: "1px solid rgba(222,197,168,0.35)" }}
          >
            <div
              className="p-3 rounded-full"
              style={{ background: "#6695c8" }}
            >
              <Phone className="w-6 h-6" style={{ color: "#E5DFD1" }} />
            </div>
            <div>
              <p className="text-sm mb-1" style={{ color: "#7a6e62" }}>Call or text</p>
              <a
                href="tel:9732557437"
                className="text-lg sm:text-xl transition-colors hover:opacity-70"
                style={{ color: "#6695c8" }}
              >
                (973) 255-7437
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-8 pt-8"
          style={{ borderTop: "1px solid rgba(222,197,168,0.5)" }}
        >
          <h3 className="mb-3" style={{ color: "#6695c8" }}>What I'm looking for:</h3>
          <ul className="space-y-2" style={{ color: "#7a6e62" }}>
            {[
              "Character design for games, animation, and comics",
              "Storyboarding for film, advertising, and music videos",
              "Conceptual illustration and visual development",
              "Collaborative creative projects and commissioned work",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1" style={{ color: "#dec5a8" }}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center space-y-4">
        <p style={{ color: "#7a6e62" }}>Looking forward to creating something amazing together!</p>

        <div className="flex items-center justify-center gap-2" style={{ color: "#6695c8" }}>
          <span className="text-2xl">✨</span>
          <span>Let's bring your story to life</span>
          <span className="text-2xl">✨</span>
        </div>
      </div>
    </div>
  );
}