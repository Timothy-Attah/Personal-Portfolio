
import ProjectCard from "@/components/projects/ProjectCard";
import { projectData } from "@/data/projectData";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[--bg-1] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* HERO */}
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-[--border-1] bg-[--bg-1] px-5 py-2 text-sm tracking-wide text-[--primary-text] backdrop-blur-sm">
            Selected Projects
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-[--foreground] sm:text-6xl md:text-7xl">
            Crafted digital
            <br />
            experiences that feel
            <span className="bg-gradient-to-r from-violet-300 via-violet-400 to-purple-500 bg-clip-text text-transparent">
              {" "}
              modern.
            </span>
          </h1>

          {/* Subtext */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[--secondary-text] md:text-xl">
            A curated selection of websites and digital products focused on
            premium UI, performance, responsiveness, and user experience that
            helps brands stand out online.
          </p>
        </div>

        {/* SECTION TITLE */}
        <div className="mt-32 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[--primary-text]">
              Featured Work
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[--foreground] md:text-5xl">
              Recent Projects
            </h2>
          </div>

          <p className="max-w-xl text-[--secondary-text] leading-7">
            Every project is designed with attention to structure, interaction,
            scalability, and business goals — not just visuals.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16  grid gap-10 lg:grid-cols-2">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* CTA */}
        <div className="relative mt-36 overflow-hidden rounded-[2.5rem] border border-[--border] bg-[--bg] px-8 py-20 text-center backdrop-blur-xl md:px-16">
          {/* Glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[--bg-1] blur-[120px]" />
          </div>

          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-[--border-1] bg-[--bg-1] px-5 py-2 text-sm tracking-wide text-[--primary-text]">
            Let’s Build Something Great
          </div>

          {/* Heading */}
          <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[--foreground] md:text-6xl">
            Need a website that feels premium, performs fast, and converts
            better?
          </h2>

          {/* Text */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[--secondary-text]">
            I help startups, creators, and businesses build modern digital
            experiences that look polished, load fast, and create stronger first
            impressions.
          </p>

          {/* Button */}
          <Link href='/contact'>
            <button
              className="
              group
              mt-10
              inline-flex
              items-center
              gap-3
              rounded-2xl
              border
               border-[--border-1]
              bg-[--bg-3]
              px-8 py-4
              font-medium
              text-[--foreground]
              transition-all duration-300
              hover:scale-[1.03]
              hover:bg-[--text-violet-400]
              hover:shadow-[0_0_40px_rgba(139,92,246,0.45)]
            "
            >
              Start a Project
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-[--secondary-text]">
            More case studies and interactive product showcases coming soon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
