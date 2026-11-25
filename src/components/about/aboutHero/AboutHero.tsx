

"use client";

import { FiLinkedin, FiGithub, FiFile } from "react-icons/fi";
import { animate, splitText, stagger } from "animejs";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const AboutHero = () => {
  useEffect(() => {
    const { chars: chars1 } = splitText(".about__profession-1", {
      chars: true,
    });

    const { chars: chars2 } = splitText(".about__profession-2", {
      chars: true,
    });

    animate(chars1, {
      y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 4000, ease: "in(3)" }],
      duration: 900,
      ease: "out(3)",
      delay: stagger(60),
      loop: true,
    });

    animate(chars2, {
      y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 4000, ease: "in(3)" }],
      duration: 900,
      ease: "out(3)",
      delay: stagger(60),
      loop: true,
    });
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 md:px-12 pt-28 pb-16">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/15 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-3">
        {/* LEFT */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="space-y-3">
            <p className="text-lg md:text-xl font-light tracking-wide text-[--primary-text]">
              Hello, I&apos;m
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-[--foreground]">
              Timothy <br /> Attah
            </h1>
          </div>

          <p className="max-w-md text-[--secondary-text] text-lg leading-relaxed mx-auto lg:mx-0">
            Crafting immersive digital experiences with modern design,
            performance, and creativity at the center.
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
            <Link
              href="https://github.com/TimothyAttah"
              target="_blank"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-[--border] bg-[--bg] backdrop-blur-md transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10"
            >
              <FiGithub className="text-lg text-[--foreground] transition group-hover:text-violet-300" />
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-[--border] bg-[--bg] backdrop-blur-md transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10"
            >
              <FiLinkedin className="text-lg text-[--foreground] transition group-hover:text-violet-300" />
            </Link>
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="relative flex justify-center">
          {/* Glow */}
          <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-violet-500/10 blur-3xl" />

          {/* Floating Ring */}
          <div className="absolute h-[320px] w-[320px] rounded-full border border-violet-500/10" />

          <Image
            src="/assets/tim5.png"
            alt="Timothy Attah"
            width={520}
            height={520}
            priority
            className="relative z-10 object-contain w-[300px] sm:w-[380px] lg:w-[420px] drop-shadow-[0_0_45px_rgba(139,92,246,0.18)] animate-[float_6s_ease-in-out_infinite]"
          />

          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20" />
        </div>

        {/* RIGHT */}
        <div className="space-y-2 text-center lg:text-right">
          <p className="text-lg md:text-xl font-light text-violet-300">
            Creative
          </p>

          <div className="overflow-hidden">
            <h2 className="about__profession-1 text-4xl md:text-5xl xl:text-6xl font-bold leading-none text-violet-400">
              Developer
            </h2>
          </div>

          <div className="overflow-hidden">
            <h2 className="about__profession-2 text-4xl md:text-5xl xl:text-6xl font-bold leading-none text-[--foreground]">
              & Designer
            </h2>
          </div>

          <div className="pt-8 flex justify-center lg:justify-end">
            <Link
              href="/assets/cv.pdf"
              download
              target="_blank"
              className="cv-btn"
            >
              RESUME <FiFile />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
