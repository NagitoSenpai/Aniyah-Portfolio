import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Film, Play } from "lucide-react";

export function Storyboards() {
  const storyboards = [
    {
      id: 1,
      title: "Commercial: EcoDrive",
      client: "Electric Vehicle Campaign",
      description: "30-second commercial storyboard showcasing the future of sustainable transportation.",
      panels: 12,
      duration: "0:30",
      image: "https://images.unsplash.com/photo-1678799021566-2e2a748e9dd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9yeWJvYXJkJTIwZmlsbSUyMHBhbmVsc3xlbnwxfHx8fDE3NzI1NzE1OTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      title: "Short Film: The Last Letter",
      client: "Independent Film Festival",
      description: "Emotional narrative about connection and memory told through visual storytelling.",
      panels: 24,
      duration: "5:00",
      image: "https://images.unsplash.com/photo-1569154076682-4c0466623ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBzdG9yeWJvYXJkJTIwc2tldGNoZXN8ZW58MXx8fHwxNzcyNTcxNTkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      title: "Music Video: Neon Dreams",
      client: "Indie Music Artist",
      description: "Psychedelic visual journey synced to an electronic soundtrack.",
      panels: 36,
      duration: "3:45",
      image: "https://images.unsplash.com/photo-1605007623951-d53263481857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW5jaWwlMjBza2V0Y2glMjBpbGx1c3RyYXRpb24lMjBhcnR3b3JrfGVufDF8fHx8MTc3MjU3MTU5MHww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1
          className="text-5xl mb-4"
          style={{ color: "#6695c8" }}
        >
          Storyboards
        </h1>
        <div
          className="w-16 h-0.5 mb-4 rounded-full"
          style={{ background: "#dec5a8" }}
        />
        <p className="text-xl max-w-2xl" style={{ color: "#7a6e62" }}>
          Visual narratives for film, animation, and advertising. Each frame carefully crafted
          to bring stories to life before they hit the screen.
        </p>
      </div>

      <div className="grid gap-8">
        {storyboards.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(222,197,168,0.4)" }}
          >
            <div className="grid md:grid-cols-5 gap-6">
              <div className="md:col-span-2 relative">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover min-h-[300px]"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(102,149,200,0.4)" }}
                />
                <div className="absolute bottom-6 left-6 flex items-center gap-2">
                  <div
                    className="backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2"
                    style={{ background: "rgba(229,223,209,0.25)", color: "#E5DFD1" }}
                  >
                    <Film className="w-4 h-4" />
                    <span className="text-sm">{project.panels} Panels</span>
                  </div>
                  <div
                    className="backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2"
                    style={{ background: "rgba(229,223,209,0.25)", color: "#E5DFD1" }}
                  >
                    <Play className="w-4 h-4" />
                    <span className="text-sm">{project.duration}</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 p-8 flex flex-col justify-center">
                <div
                  className="inline-block px-4 py-1 rounded-full text-sm mb-4 w-fit"
                  style={{ background: "rgba(102,149,200,0.1)", color: "#6695c8", border: "1px solid rgba(102,149,200,0.25)" }}
                >
                  {project.client}
                </div>

                <h2 className="text-3xl mb-4" style={{ color: "#5a7aaa" }}>{project.title}</h2>

                <p className="text-lg leading-relaxed mb-6" style={{ color: "#7a6e62" }}>
                  {project.description}
                </p>

                <button
                  className="px-6 py-3 rounded-full w-fit hover:opacity-85 transition-opacity flex items-center gap-2"
                  style={{ background: "#6695c8", color: "#E5DFD1" }}
                >
                  <Play className="w-5 h-5" />
                  View Full Sequence
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="mt-16 rounded-2xl p-12 text-center"
        style={{ background: "#6695c8" }}
      >
        <h2 className="text-3xl mb-4" style={{ color: "#E5DFD1" }}>Need a Storyboard for Your Project?</h2>
        <p className="text-lg mb-6" style={{ color: "rgba(229,223,209,0.9)" }}>
          I specialize in translating scripts and concepts into compelling visual narratives.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full hover:opacity-85 transition-opacity"
          style={{ background: "#E5DFD1", color: "#6695c8" }}
        >
          Let's Collaborate
        </Link>
      </div>
    </div>
  );
}