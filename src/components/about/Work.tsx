"use client";

import { useState } from "react";
import {
  RiGraduationCapLine,
  RiBriefcase3Line,
} from "react-icons/ri";

const experienceData = [
  {
    title: "Frontend Developer (Intern)",
    company: "Unbird",
    year: "2022",
    description:
      "I was in charge of making use of Figma design to create the setting page into a fully functional, ease of use and responsive page from scratch to finish resulting in an overall operational efficiency and  system performance.",
  },
  {
    title: "Web Developer Instructor",
    company: "Enoch Louis Coding Bootcamp",
    year: "2024 - 2026",
    description:
      "Actively participated in meetings, professional development workshops, and parent-teacher conferences, contributing to the school community and students success.",
  },
  {
    title: "Fullstack Developer",
    company: "Freelance Projects",
    year: "Now",
    description:
      "Designed and developed complete web applications with smooth UI, backend integration, and modern deployment workflows.",
  },
];

const educationData = [
  {
    title: "High School",
    company: "Shining Lords Secondary and Technical College",
    year: "Sep 2004 - Jun 2010",
    description:
      "Graduated with strong grades in Mathematics & English. Head Boy 2009. Member, Boys Scout.",
  },
  {
    title: "Frontend Developer Trainee (Certified)",
    company: "Andela Learning Community",
    year: "Mar 2018 - Aug 2018",
    description:
      "Studied programming fundamentals, software systems, and engineering principles with strong technical foundations.",
  },
  {
    title: "Web Programming",
    company: "Online Academy",
    year: "2021",
    description:
      "Focused on frontend and backend development, modern frameworks, and real-world application architecture.",
  },
];

const Work = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const activeData =
    activeTab === "experience" ? experienceData : educationData;

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[--bg-2] blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-[--text-violet-400] text-xs md:text-sm mb-4">
            Journey
          </p>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[--foreground]">
            Work & Experience
          </h2>

          <p className="mt-6 text-[--secondary-text] text-lg max-w-2xl mx-auto leading-relaxed">
            My professional journey, experience, and continuous learning path in
            building modern digital experiences.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex rounded-2xl border border-[--border] bg-[--bg] p-2 backdrop-blur-xl">
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center gap-2 rounded-xl px-6 py-3 text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === "experience"
                  ? "bg-[--bg-3] text-[--foreground] shadow-[0_0_30px_rgba(139,92,246,0.35)]"
                  : "text-[--secondary-text] hover:text-[--foreground]"
              }`}
            >
              <RiBriefcase3Line className="text-lg" />
              Experience
            </button>

            <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center gap-2 rounded-xl px-6 py-3 text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === "education"
                  ? "bg-[--bg-3] text-[--foreground] shadow-[0_0_30px_rgba(139,92,246,0.35)]"
                  : "text-[--secondary-text] hover:text-[--foreground]"
              }`}
            >
              <RiGraduationCapLine className="text-lg" />
              Education
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-violet-500/0 via-violet-500 to-violet-500/0 -translate-x-1/2" />

          <div className="space-y-12">
            {activeData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-8 h-4 w-4 rounded-full border-4 border-black bg-[--bg-3] shadow-[0_0_20px_rgba(139,92,246,0.8)] -translate-x-1/2 z-10" />

                {/* Card */}
                <div className="ml-14 md:ml-0 w-full md:w-[calc(50%-3rem)]">
                  <div className="group relative overflow-hidden rounded-3xl border border-[--border] bg-[--bg] p-6 md:p-8 backdrop-blur-xl transition-all duration-500 hover:border-violet-500/30 hover:bg-[--foreground]/[0.05] hover:-translate-y-1">
                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Year */}
                    <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1 text-sm text-[--text-primary]-300 mb-6">
                      {item.year}
                    </span>

                    {/* Content */}
                    <h3 className="text-2xl md:text-3xl font-bold text-[--foreground] leading-tight">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[--primary-text] font-medium">
                      {item.company}
                    </p>

                    <p className="mt-5 text-[--secondary-text] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
