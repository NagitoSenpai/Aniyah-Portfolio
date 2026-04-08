import React, { type ElementType } from "react";
import {
  Download,
  Briefcase,
  GraduationCap,
  BookOpen,
  Heart,
  Clock,
  Lightbulb,
  Users,
  HandHeart,
  Phone,
  Mail,
  Linkedin,
  Instagram,
} from "lucide-react";

const contact = {
  phone: "(973) 255-7437",
  email: "Aniyah.6424@gmail.com",
  linkedin: "https://www.linkedin.com/in/aniyah-williams-75a88b3a5/",
  instagram: "@aniya_h6424",
};

const summary =
  "A Graphic Design student with an expertise in digital illustration. Each art piece demonstrates precision in technical execution and attention to compositional detail. Excels in collaborative, fast paced environments where clear communication and adaptive problem solving are essential.";

const education = {
  degree: "Bachelor of Art, Graphic Design",
  school: "Caldwell University, Caldwell, NJ",
  period: "Graduating May 2026",
  gpa: "Cumulative GPA of 3.17",
};

const experience = [
  {
    id: 1,
    role: "Peer Tutor",
    company: "Caldwell University",
    period: "January 2025 – Present",
    bullets: ["Tutoring Digital Art 1 and Graphic Design 1 students"],
  },
];

const coursework = [
  {
    id: 1,
    course: "Graphic Design 2",
    bullets: [
      "Redesigned Logos",
      "Created infographic posters",
      "Used illustration skills in tandem with typography",
    ],
  },
  {
    id: 2,
    course: "Web Design",
    bullets: [
      "Created a website from including design, layout, and programming",
    ],
  },
  {
    id: 3,
    course: "Graphic Design 2 — Brand Focus",
    bullets: [
      "Redesigned logo for Montclair Animal Shelter",
      "Created brand guidelines",
    ],
  },
];

const softwareSkills = [
  { name: "Illustrator", abbr: "Ai", color: "#FF9A00" },
  { name: "Photoshop", abbr: "Ps", color: "#31A8FF" },
  { name: "Procreate", abbr: "Pc", color: "#4A4A4A" },
  { name: "Affinity Designer", abbr: "Ad", color: "#1B72BE" },
];

const softSkills = [
  { label: "Time Management", icon: Clock },
  { label: "Creative", icon: Lightbulb },
  { label: "Collaborative", icon: Users },
  { label: "Supportive", icon: HandHeart },
];

const volunteer = {
  org: "Food Bank, Community Food Bank of Hillside, New Jersey",
  period: "2019 – 2020",
  bullets: ["Participated in packaging food for distribution"],
};

// Diamond bullet matching the resume's aesthetic
function Diamond() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      className="shrink-0 mt-1"
      fill="none"
    >
      <path d="M5 0L10 5L5 10L0 5Z" fill="#6695c8" fillOpacity="0.5" />
    </svg>
  );
}

function SectionHeading({
  icon: Icon,
  label,
}: {
  icon: ElementType;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <Icon className="w-5 h-5 shrink-0" style={{ color: "#6695c8" }} />
      <h2 className="text-2xl" style={{ color: "#6695c8" }}>
        {label}
      </h2>
      <div
        className="flex-1 h-px ml-2"
        style={{ background: "rgba(102,149,200,0.25)" }}
      />
    </div>
  );
}

export function Resume() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      {/* ── Header ── */}
      <div
        className="rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6"
        style={{
          background: "rgba(255,255,255,0.65)",
          border: "1px solid rgba(222,197,168,0.4)",
        }}
      >
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl mb-1" style={{ color: "#6695c8", fontFamily: "'FONTSPRING DEMO - Selina Bold', serif" }}>
            Resume
          </h1>
          <div
            className="w-16 h-0.5 rounded-full mb-3"
            style={{ background: "#dec5a8" }}
          />
          <p className="text-base sm:text-lg mb-5" style={{ color: "#7a6e62" }}>
            Graphic Design Student · Digital Illustrator
          </p>

          {/* Contact info */}
          <div className="flex flex-col gap-2 text-sm" style={{ color: "#7a6e62" }}>
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              <Phone className="w-4 h-4 shrink-0" style={{ color: "#6695c8" }} />
              {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 hover:opacity-70 transition-opacity break-all"
            >
              <Mail className="w-4 h-4 shrink-0" style={{ color: "#6695c8" }} />
              {contact.email}
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              <Linkedin className="w-4 h-4 shrink-0" style={{ color: "#6695c8" }} />
              LinkedIn Profile
            </a>
            <span className="flex items-center gap-2">
              <Instagram className="w-4 h-4 shrink-0" style={{ color: "#6695c8" }} />
              {contact.instagram}
            </span>
          </div>
        </div>

        <a
          href="https://raw.githubusercontent.com/NagitoSenpai/Aniyah-Portfolio/a299f0d6f378f82bc3d10dd7882d16c8e25a9124/Resume/Resume.pdf"
          download="Aniyah_Williams_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-200 hover:shadow-md hover:opacity-90 shrink-0 self-start sm:self-auto"
          style={{ background: "#6695c8", color: "#E5DFD1" }}
        >
          <Download className="w-4 h-4" />
          Download PDF
        </a>
      </div>

      {/* ── Summary ── */}
      <section className="mb-8 sm:mb-10">
        <div
          className="rounded-xl p-6"
          style={{
            background: "rgba(255,255,255,0.6)",
            border: "1px solid rgba(222,197,168,0.4)",
          }}
        >
          <p className="leading-relaxed" style={{ color: "#7a6e62" }}>
            {summary}
          </p>
        </div>
      </section>

      {/* ── Two-column layout ── */}
      <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
        {/* LEFT column — 2/3 */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          {/* Education */}
          <section>
            <SectionHeading icon={GraduationCap} label="Education" />
            <div
              className="rounded-xl p-6"
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(222,197,168,0.4)",
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <p className="text-lg" style={{ color: "#5a7aaa" }}>
                    {education.degree}
                  </p>
                  <p style={{ color: "#7a6e62" }}>{education.school}</p>
                  <p className="text-sm mt-1" style={{ color: "#7a6e62" }}>
                    {education.gpa}
                  </p>
                </div>
                <span
                  className="text-sm px-3 py-1 rounded-full shrink-0 self-start"
                  style={{
                    background: "rgba(102,149,200,0.1)",
                    color: "#6695c8",
                  }}
                >
                  {education.period}
                </span>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <SectionHeading icon={Briefcase} label="Experience" />
            <div className="space-y-4">
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
                      <span className="text-lg" style={{ color: "#5a7aaa" }}>
                        {job.role}
                      </span>
                      <span className="mx-2" style={{ color: "#dec5a8" }}>
                        ·
                      </span>
                      <span style={{ color: "#7a6e62" }}>{job.company}</span>
                    </div>
                    <span
                      className="text-sm px-3 py-1 rounded-full shrink-0"
                      style={{
                        background: "rgba(102,149,200,0.1)",
                        color: "#6695c8",
                      }}
                    >
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {job.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: "#7a6e62" }}
                      >
                        <Diamond />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Relevant Coursework */}
          <section>
            <SectionHeading icon={BookOpen} label="Relevant Coursework" />
            <div className="space-y-4">
              {coursework.map((c) => (
                <div
                  key={c.id}
                  className="rounded-xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    border: "1px solid rgba(222,197,168,0.4)",
                  }}
                >
                  <p className="mb-3" style={{ color: "#5a7aaa" }}>
                    {c.course}
                  </p>
                  <ul className="space-y-1.5">
                    {c.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: "#7a6e62" }}
                      >
                        <Diamond />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Volunteer Work */}
          <section>
            <SectionHeading icon={Heart} label="Volunteer Work" />
            <div
              className="rounded-xl p-6"
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(222,197,168,0.4)",
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <p style={{ color: "#5a7aaa" }}>{volunteer.org}</p>
                <span
                  className="text-sm px-3 py-1 rounded-full shrink-0 self-start"
                  style={{
                    background: "rgba(102,149,200,0.1)",
                    color: "#6695c8",
                  }}
                >
                  {volunteer.period}
                </span>
              </div>
              <ul className="space-y-1.5">
                {volunteer.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "#7a6e62" }}
                  >
                    <Diamond />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* RIGHT column — 1/3 */}
        <div className="flex flex-col gap-8">
          {/* Proficient In */}
          <section>
            <SectionHeading icon={BookOpen} label="Proficient In…" />
            <div className="space-y-3">
              {softwareSkills.map((sw) => (
                <div
                  key={sw.name}
                  className="rounded-xl px-5 py-4 flex items-center gap-4"
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    border: "1px solid rgba(222,197,168,0.4)",
                  }}
                >
                  {/* Coloured badge mimicking the app icon squares */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-white text-xs"
                    style={{ background: sw.color }}
                  >
                    <span style={{ fontStyle: "italic" }}>{sw.abbr}</span>
                  </div>
                  <span style={{ color: "#5a7aaa" }}>{sw.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Soft Skills */}
          <section>
            <SectionHeading icon={Users} label="Soft Skills" />
            <div className="space-y-3">
              {softSkills.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-xl px-5 py-4 flex items-center gap-4"
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    border: "1px solid rgba(222,197,168,0.4)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(102,149,200,0.12)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#6695c8" }} />
                  </div>
                  <span style={{ color: "#5a7aaa" }}>{label}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}