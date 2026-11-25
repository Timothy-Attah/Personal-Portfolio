import { skillsData } from "@/data/skillsData";
import Image from "next/image";

const Skills = () => {
  return (
    <section className="max-container relative">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="text-violet-400 uppercase tracking-[0.25em] text-sm mb-3">
          Expertise
        </p>

        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          Skills & Technologies
        </h2>

        <p className="mt-6 max-w-2xl text-zinc-400 text-lg leading-relaxed">
          Modern tools and technologies I use to craft fast, scalable,
          and visually engaging digital experiences.
        </p>
      </div>

      <div className="relative z-10 mt-20 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8">
        {skillsData.map((skill, i) => (
          <div
            key={i}
            className="
              group
              relative
              aspect-square
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              overflow-hidden
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-violet-400/40
              hover:bg-violet-500/10
              hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10" />

            <div className="relative flex flex-col items-center justify-center h-full p-5">
              <div className="relative w-14 h-14 md:w-16 md:h-16 transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={skill.imageUrl}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>

              <p className="mt-4 text-sm md:text-base text-zinc-300 font-medium text-center">
                {skill.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
