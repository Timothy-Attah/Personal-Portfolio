const Info = () => {
  return (
    <section className="relative px-6 pb-28 -mt-10">

      {/* Ambient Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[--bg-1] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">

        {/* Card */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[--border] bg-[--bg] backdrop-blur-2xl px-7 py-14 md:px-16 md:py-20 shadow-[0_0_80px_rgba(139,92,246,0.06)]">

          {/* Glow Accent */}
          <div className="absolute inset-0 bg-gradient-to-b from-violet-500/[0.03] to-transparent pointer-events-none" />

          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm tracking-wide text-[--primary-text] backdrop-blur-md">
              Premium Web Experiences
            </span>
          </div>

          {/* Heading */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              <span className="bg-gradient-to-r from-violet-300 via-violet-400 to-purple-500 bg-clip-text text-transparent">
                Modern websites
              </span>

              <span className="text-[--foreground]">
                {" "}built for clarity,
              </span>

              <br />

              <span className="text-[--foreground]">
                performance, and growth.
              </span>
            </h2>
          </div>

          {/* Intro */}
          <p className="mx-auto mt-8 max-w-3xl text-center text-xl md:text-2xl leading-relaxed text-[--primary-text]">
            I craft high-converting digital experiences for startups,
            agencies, and ambitious businesses that refuse to settle for average.
          </p>

          {/* Divider */}
          <div className="mx-auto my-12 h-px w-28 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

          {/* Paragraphs */}
          <div className="mx-auto max-w-3xl space-y-7 text-center">
            <p className="text-lg leading-relaxed text-[--primary-text]">
              I help brands create a powerful online presence — websites that
              feel premium, load fast, and guide visitors toward meaningful
              action.
            </p>

            <p className="text-lg leading-relaxed text-[--primary-text]">
              From strategy and design to development and launch, I build
              complete digital experiences with performance, structure, and user
              experience in mind.
            </p>

            <p className="text-lg leading-relaxed text-[--primary-text]">
              Every project follows a clear process focused on communication,
              precision, and delivering results that truly move businesses
              forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
