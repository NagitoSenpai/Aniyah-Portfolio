import { Download, Briefcase, GraduationCap, Wrench, Award } from "lucide-react";

const experience = [
  {
    id: 1,
    role: "Freelance Illustrator",
    company: "Self-Employed",
    period: "2020 – Present",
    bullets: [
      "Character design for indie game studios and animation studios",
      "Storyboarding for commercial and independent film projects",
      "Brand mascot and visual identity illustration",
    ],
  },
  {
    id: 2,
    role: "Junior Concept Artist",
    company: "Pixel & Ink Studio",
    period: "2018 – 2020",
    bullets: [
      "Developed concept art and style guides for mobile game titles",
      "Collaborated with narrative team on environment and character direction",
      "Iterated on designs based on art director feedback",
    ],
  },
  {
    id: 3,
    role: "Illustration Intern",
    company: "Bright Pages Publishing",
    period: "Summer 2017",
    bullets: [
      "Assisted senior illustrators on children's book projects",
      "Created spot illustrations and page layouts under tight deadlines",
    ],
  },
];

const education = [
  {
    id: 1,
    degree: "BFA in Illustration",
    school: "School of Visual Arts",
    period: "2014 – 2018",
    note: "Graduated with Honors",
  },
];

const skills = [
  "Character Design",
  "Storyboarding",
  "Visual Development",
  "Concept Art",
  "Procreate",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Clip Studio Paint",
  "Figure Drawing",
  "Typography",
  "Brand Identity",
  "Art Direction",
];

const awards = [
  { id: 1, title: "Illustration Excellence Award", org: "Society of Illustrators", year: "2023" },
  { id: 2, title: "Best Character Design", org: "Indie Game Showcase", year: "2022" },
  { id: 3, title: "Dean's List", org: "School of Visual Arts", year: "2017–2018" },
];

export function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
        <div>
          <h1 className="text-5xl mb-2" style={{ color: "#6695c8" }}>
            Résumé
          </h1>
          <div
            className="w-16 h-0.5 rounded-full"
            style={{ background: "#dec5a8" }}
          />
          <p className="mt-4 text-lg" style={{ color: "#7a6e62" }}>
            Illustrator · Character Designer · Storyboard Artist
          </p>
        </div>

        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-200 hover:shadow-md hover:opacity-90 shrink-0"
          style={{ background: "#6695c8", color: "#E5DFD1" }}
          title="PDF download would be linked here"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </a>
      </div>

      {/* Experience */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="w-5 h-5" style={{ color: "#6695c8" }} />
          <h2 className="text-2xl" style={{ color: "#6695c8" }}>Experience</h2>
        </div>

        <div className="space-y-6">
          {experience.map((job) => (
            <div
              key={job.id}
              className="rounded-xl p-6"
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(222,197,168,0.4)",
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                <div>
                  <span className="text-lg" style={{ color: "#5a7aaa" }}>{job.role}</span>
                  <span className="mx-2" style={{ color: "#dec5a8" }}>·</span>
                  <span style={{ color: "#7a6e62" }}>{job.company}</span>
                </div>
                <span
                  className="text-sm px-3 py-1 rounded-full shrink-0"
                  style={{ background: "rgba(102,149,200,0.1)", color: "#6695c8" }}
                >
                  {job.period}
                </span>
              </div>
              <ul className="space-y-1">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#7a6e62" }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#dec5a8" }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="w-5 h-5" style={{ color: "#6695c8" }} />
          <h2 className="text-2xl" style={{ color: "#6695c8" }}>Education</h2>
        </div>

        {education.map((edu) => (
          <div
            key={edu.id}
            className="rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
            style={{
              background: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(222,197,168,0.4)",
            }}
          >
            <div>
              <p className="text-lg" style={{ color: "#5a7aaa" }}>{edu.degree}</p>
              <p style={{ color: "#7a6e62" }}>{edu.school}</p>
              {edu.note && (
                <p className="text-sm mt-1" style={{ color: "#dec5a8" }}>{edu.note}</p>
              )}
            </div>
            <span
              className="text-sm px-3 py-1 rounded-full shrink-0 self-start sm:self-center"
              style={{ background: "rgba(102,149,200,0.1)", color: "#6695c8" }}
            >
              {edu.period}
            </span>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Wrench className="w-5 h-5" style={{ color: "#6695c8" }} />
          <h2 className="text-2xl" style={{ color: "#6695c8" }}>Skills</h2>
        </div>

        <div
          className="rounded-xl p-6"
          style={{
            background: "rgba(255,255,255,0.6)",
            border: "1px solid rgba(222,197,168,0.4)",
          }}
        >
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-1.5 rounded-full text-sm"
                style={{
                  background: "rgba(102,149,200,0.1)",
                  color: "#6695c8",
                  border: "1px solid rgba(102,149,200,0.2)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Award className="w-5 h-5" style={{ color: "#6695c8" }} />
          <h2 className="text-2xl" style={{ color: "#6695c8" }}>Awards & Recognition</h2>
        </div>

        <div className="space-y-3">
          {awards.map((award) => (
            <div
              key={award.id}
              className="rounded-xl px-6 py-4 flex items-center justify-between"
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(222,197,168,0.4)",
              }}
            >
              <div>
                <p style={{ color: "#5a7aaa" }}>{award.title}</p>
                <p className="text-sm" style={{ color: "#7a6e62" }}>{award.org}</p>
              </div>
              <span className="text-sm" style={{ color: "#dec5a8" }}>{award.year}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
