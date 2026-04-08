export function Characters() {
  const characters = [
    {
      id: 1,
      name: "Jake",
      role: "Demonology — Main Character",
      description: "Dr. Jake Hedricks is a 28-year-old scientist at Ophelia University, a lifelong dream fueled by his passion for demonology, the study of non-human creatures from government tests and experiments. His dedication to research often overrides his emotional instincts, leaving him perpetually exhausted and socially clinical. He tends to substitute everyday words with technical ones (the bathroom becomes \"the sanitization zone\"), and his composed professional demeanor is the only thing standing between him and the feelings he's quietly developing for his favorite test subject.",
      // Replace with raw GitHub URL once image is pushed to the repo
      image: "https://raw.githubusercontent.com/NagitoSenpai/Aniyah-Portfolio/main/images/characters/jake.png",
      tags: ["Analytical", "Workaholic", "Emotionally Repressed", "Dedicated"]
    },
    {
      id: 2,
      name: "Kai",
      role: "Demonology — Main Character",
      description: "Once known only as Test Subject #1542, Kai is approximately 200 years old, the equivalent of 19 in human years. For most of his time in Jake's care, he was treated like any other feral demon: tested on, injected with substances, and monitored around the clock. That all changed when Jake began a domestication study for a research paper. Given the chance to exist beyond a number, Kai's personality blossomed into something mischievous, cunning, and wholly his own: a food-motivated love bug with a sharp edge.",
      // Replace with raw GitHub URL once image is pushed to the repo
      image: "https://raw.githubusercontent.com/NagitoSenpai/Aniyah-Portfolio/main/images/characters/kai.png",
      tags: ["Mischievous", "Cunning", "Food-Motivated", "Adaptable"]
    },
    {
      id: 3,
      name: "Eric",
      role: "Demonology — Supporting Character",
      description: "Dr. Eric Reeves is Jake's childhood friend and colleague at Ophelia University, a few years his senior at around 30. He works in the Advanced Physics Lab halfway across campus, far enough to mind his own business, close enough to show up exactly when Jake doesn't want him to. Eccentric and relentlessly teasing, Eric nonetheless carries a genuine brotherly love for Jake. He becomes an unexpected guide when Jake's emotions start getting the better of him, helping him figure out how to navigate feelings he was never trained to understand.",
      // Replace with raw GitHub URL once image is pushed to the repo
      image: "https://raw.githubusercontent.com/NagitoSenpai/Aniyah-Portfolio/main/images/characters/eric.png",
      tags: ["Eccentric", "Teasing", "Brotherly", "Perceptive"]
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <div className="mb-10 sm:mb-12">
        <h1
          className="text-4xl sm:text-5xl mb-4"
          style={{ color: "#6695c8", fontFamily: "'FONTSPRING DEMO - Selina Bold', serif" }}
        >
          Character Design
        </h1>
        <div
          className="w-16 h-0.5 mb-4 rounded-full"
          style={{ background: "#dec5a8" }}
        />
        <p className="text-lg sm:text-xl max-w-2xl" style={{ color: "#7a6e62" }}>
          Original characters crafted for various media including games, animation, and comics.
          Each design tells a story and brings personality to life.
        </p>
      </div>

      <div className="space-y-10 sm:space-y-12">
        {characters.map((character, index) => (
          <div
            key={character.id}
            className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center"
          >
            <div className={index % 2 === 1 ? "md:order-2" : ""}>
              <div
                className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300"
                style={{
                  border: "1px solid rgba(222,197,168,0.4)",
                  marginLeft: index === 0 ? "-2rem" : undefined,
                }}
              >
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-auto block"
                  style={{ background: "#ece6e3" }}
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

              <h2 className="text-3xl sm:text-4xl" style={{ color: "#5a7aaa" }}>{character.name}</h2>

              <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#7a6e62" }}>
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
