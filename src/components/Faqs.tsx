"use client";

import { useState } from "react";
import Image from "next/image";
import { IFaqsProps } from "@/utils/interface";
import { FiPlus, FiMinus } from "react-icons/fi";

const Faqs = ({ faqsData, faqPix }: IFaqsProps) => {
  const [selected, setSelected] = useState<number | null>(0);

  const handleSelect = (i: number) => {
    setSelected(selected === i ? null : i);
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[--bg-1] blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-[--border-1] bg-[--bg-1] px-4 py-2 text-sm text-[--primary-text] backdrop-blur-sm mb-6">
            FAQ
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-violet-300 via-violet-400 to-purple-500 bg-clip-text text-transparent">
              Questions
            </span>
            <br />
            <span className="text-[--foreground]">
              clients usually ask first
            </span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-[--secondary-text] leading-relaxed">
            Clear answers about process, timelines, communication, pricing, and
            how projects are handled from start to finish.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          {/* Accordion */}
          <div className="space-y-4">
            {faqsData.map((item, i) => (
              <div
                key={i}
                className={`group rounded-2xl border transition-all duration-300 overflow-hidden
                ${
                  selected === i
                    ? "border-[--border-2] bg-[--card] shadow-[0_0_30px_rgba(139,92,246,0.12)]"
                    : "border-[--border] bg-[--bg] hover:border-violet-500/20"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => handleSelect(i)}
                  className="w-full flex items-center justify-between gap-6 px-6 py-6 text-left"
                >
                  <h3 className="text-lg md:text-xl font-medium text-[--primary-text]leading-snug">
                    {item.question}
                  </h3>

                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border border-[--border] shrink-0 transition-all duration-300
                    ${
                      selected === i
                        ? "bg-[--bg-3] border-[--text-violet-400] text-[--foreground]"
                        : "border[--border] text-[--secondary-text] group-hover:border-[--border-2] group-hover:text-[--primary-text]"
                    }`}
                  >
                    {selected === i ? <FiMinus /> : <FiPlus />}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden
                  ${
                    selected === i
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5" />

                    <p className="text-[--secondary-text] text-base md:text-lg leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Side */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-violet-500/10 blur-3xl rounded-[2rem]" />

            {/* Glass Card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-3">
              <div className="relative h-[500px] w-full overflow-hidden rounded-[1.5rem]">
                <Image
                  src={faqPix}
                  alt="FAQ Image"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-violet-300 mb-2">
                    Need something custom?
                  </p>

                  <h3 className="text-xl font-semibold text-white leading-snug">
                    Every project is tailored around your goals, audience, and
                    business needs.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
