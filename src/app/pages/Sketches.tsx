import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Sketches() {
  const sketches = [
    {
      id: 1,
      title: "Urban Landscape Study",
      description: "Quick pencil sketch exploring city architecture",
      image: "https://images.unsplash.com/photo-1605007623951-d53263481857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW5jaWwlMjBza2V0Y2glMjBpbGx1c3RyYXRpb24lMjBhcnR3b3JrfGVufDF8fHx8MTc3MjU3MTU5MHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      title: "Portrait Series",
      description: "Expression studies in graphite",
      image: "https://images.unsplash.com/photo-1605007621946-916b7a9b6e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydGlzdCUyMGRyYXdpbmd8ZW58MXx8fHwxNzcyNTcxNTkyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      title: "Nature Studies",
      description: "Botanical illustrations and organic forms",
      image: "https://images.unsplash.com/photo-1633984568401-79572ce094eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbGx1c3RyYXRpb24lMjBwb3J0Zm9saW8lMjBhcnR3b3JrfGVufDF8fHx8MTc3MjU3MTU5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 4,
      title: "Daily Sketches",
      description: "Quick observational drawings from life",
      image: "https://images.unsplash.com/photo-1558259299-5d46c4408730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjB3b3Jrc3BhY2UlMjBjcmVhdGl2ZSUyMGRlc2t8ZW58MXx8fHwxNzcyNTEzNjIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 5,
      title: "Gesture Drawings",
      description: "Dynamic figure studies capturing movement",
      image: "https://images.unsplash.com/photo-1569154076682-4c0466623ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBzdG9yeWJvYXJkJTIwc2tldGNoZXN8ZW58MXx8fHwxNzcyNTcxNTkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 6,
      title: "Concept Thumbnails",
      description: "Exploratory sketches for larger projects",
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
          Sketches
        </h1>
        <div
          className="w-16 h-0.5 mb-4 rounded-full"
          style={{ background: "#dec5a8" }}
        />
        <p className="text-xl max-w-2xl" style={{ color: "#7a6e62" }}>
          A collection of my sketches and studies. These pieces represent my daily practice
          and exploration of different techniques and subjects.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sketches.map((sketch) => (
          <div
            key={sketch.id}
            className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(222,197,168,0.4)" }}
          >
            <div className="relative overflow-hidden h-64">
              <ImageWithFallback
                src={sketch.image}
                alt={sketch.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "rgba(102,149,200,0.45)" }}
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl mb-2" style={{ color: "#5a7aaa" }}>{sketch.title}</h3>
              <p style={{ color: "#7a6e62" }}>{sketch.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}