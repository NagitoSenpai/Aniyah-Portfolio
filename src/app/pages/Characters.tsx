import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Characters() {
  const characters = [
    {
      id: 1,
      name: "The Wanderer",
      role: "Fantasy RPG Character",
      description: "A mysterious traveler with a hidden past, designed for an indie game project.",
      image: "https://images.unsplash.com/photo-1772389634170-481480aa05b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyYWN0ZXIlMjBkZXNpZ24lMjBjb25jZXB0JTIwYXJ0fGVufDF8fHx8MTc3MjU3MTU5MXww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Fantasy", "RPG", "Hero"]
    },
    {
      id: 2,
      name: "Luna the Scientist",
      role: "Animated Series Protagonist",
      description: "A brilliant young inventor who solves problems with creativity and science.",
      image: "https://images.unsplash.com/photo-1759863738666-7584248cdf7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21pYyUyMGJvb2slMjBjaGFyYWN0ZXIlMjBhcnR8ZW58MXx8fHwxNzcyNTcxNTkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Cartoon", "STEM", "Kids"]
    },
    {
      id: 3,
      name: "Captain Steele",
      role: "Comic Book Hero",
      description: "A cyberpunk vigilante fighting corporate corruption in a dystopian future.",
      image: "https://images.unsplash.com/photo-1633984568401-79572ce094eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbGx1c3RyYXRpb24lMjBwb3J0Zm9saW8lMjBhcnR3b3JrfGVufDF8fHx8MTc3MjU3MTU5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Cyberpunk", "Action", "Comics"]
    },
    {
      id: 4,
      name: "Zephyr & Co.",
      role: "Mascot Collection",
      description: "A set of whimsical characters for a children's brand identity.",
      image: "https://images.unsplash.com/photo-1605007621946-916b7a9b6e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydGlzdCUyMGRyYXdpbmd8ZW58MXx8fHwxNzcyNTcxNTkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Mascot", "Branding", "Cute"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1
          className="text-5xl mb-4"
          style={{ color: "#6695c8" }}
        >
          Character Design
        </h1>
        <div
          className="w-16 h-0.5 mb-4 rounded-full"
          style={{ background: "#dec5a8" }}
        />
        <p className="text-xl max-w-2xl" style={{ color: "#7a6e62" }}>
          Original characters crafted for various media including games, animation, and comics.
          Each design tells a story and brings personality to life.
        </p>
      </div>

      <div className="space-y-12">
        {characters.map((character, index) => (
          <div
            key={character.id}
            className={`grid md:grid-cols-2 gap-8 items-center`}
          >
            <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
              <div
                className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300"
                style={{ border: "1px solid rgba(222,197,168,0.4)" }}
              >
                <ImageWithFallback
                  src={character.image}
                  alt={character.name}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

            <div className={`space-y-4 ${index % 2 === 1 ? "md:order-1" : ""}`}>
              <div
                className="inline-block px-4 py-1 rounded-full text-sm"
                style={{ background: "#6695c8", color: "#E5DFD1" }}
              >
                {character.role}
              </div>

              <h2 className="text-4xl" style={{ color: "#5a7aaa" }}>{character.name}</h2>

              <p className="text-lg leading-relaxed" style={{ color: "#7a6e62" }}>
                {character.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {character.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{ background: "rgba(102,149,200,0.12)", color: "#6695c8", border: "1px solid rgba(102,149,200,0.25)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}