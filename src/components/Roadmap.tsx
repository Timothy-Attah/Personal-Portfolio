import { IRoadmapItem } from "@/utils/interface";

const Roadmap = ({ title, desc, process }: IRoadmapItem) => {
  return (
    <section className="relative py-15 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 w-[500px] h-[500px] -translate-x-1/2 rounded-full bg-[--bg-2] blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-full border border-[--border-1] bg-[--bg-1] px-4 py-2 text-sm uppercase tracking-[0.2em] text-[--primary-text]">
            Process
          </span>

          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-[--foreground]">
            {title}
          </h2>

          <p className="mt-6 text-lg md:text-xl leading-relaxed text-[--secondary-text]">
            {desc}
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative mt-20">
          {/* Center Line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-violet-500/60 via-violet-500/20 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-14">
            {process.map((item, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* EMPTY SIDE */}
                <div className="hidden md:block md:w-1/2" />

                {/* CONTENT CARD */}
                <div className="relative w-full md:w-1/2">
                  <div className="relative overflow-hidden rounded-3xl border border-[--border] bg-[--bg] backdrop-blur-xl p-8 shadow-[0_0_40px_rgba(139,92,246,0.08)] transition-all duration-500 hover:border-violet-500/30 hover:shadow-[0_0_60px_rgba(139,92,246,0.18)]">
                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.05] via-transparent to-transparent pointer-events-none" />

                    {/* Step Number */}
                    <div className="mb-6 flex items-center gap-4">
                      <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 text-[--foreground] font-bold text-lg shadow-[0_0_25px_rgba(139,92,246,0.45)]">
                        {item.step}
                      </div>

                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-[--primary-text]">
                          Step {item.step}
                        </p>

                        <h3 className="text-2xl font-semibold text-[--foreground]">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[--secondary-text] leading-8 text-[17px]">
                      {item.text}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-6 top-10 hidden md:flex md:left-1/2 md:-translate-x-1/2 items-center justify-center">
                  <div className="w-5 h-5 rounded-full border-4 border-black bg-violet-500 shadow-[0_0_25px_rgba(139,92,246,0.7)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
