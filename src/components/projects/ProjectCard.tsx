"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { IProjectsItem } from "@/utils/interface";

interface Props {
  project: IProjectsItem;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <article
      className="
      group
      relative
      overflow-hidden
      rounded-[32px]
      border border-[--border]
      bg-[--bg]
      transition-all
      duration-500
      hover:scale-[1.015]
      hover:border-violet-500/20
      hover:shadow-[0_40px_100px_rgba(139,92,246,0.12)]
    "
    >
      {/* Glow */}{" "}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        {" "}
        <div className="absolute left-1/2 top-0 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[--bg-1] blur-[120px]" />{" "}
      </div>
      ```
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          width={1200}
          height={900}
          className="
         h-[280px]
         w-full
         object-cover
         transition-transform
         duration-700
         group-hover:scale-105
       "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Labels */}
        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          <span
            className="
           rounded-full
           border border-white/10
           bg-black/40
           px-4 py-2
           text-[11px]
           uppercase
           tracking-[0.25em]
           text-white
           backdrop-blur-xl
         "
          >
            Featured
          </span>

          {project.privateProject && (
            <span
              className="
             rounded-full
             border border-white/10
             bg-black/40
             px-4 py-2
             text-[11px]
             uppercase
             tracking-[0.25em]
             text-white
             backdrop-blur-xl
           "
            >
              Client Project
            </span>
          )}
        </div>
      </div>
      {/* CONTENT */}
      <div className="p-7">
        {/* Category */}
        <p
          className="
         text-xs
         uppercase
         tracking-[0.25em]
         text-[--secondary-text]
       "
        >
          {project.category}
        </p>

        {/* Title */}
        <h3
          className="
         mt-3
         text-3xl
         font-semibold
         tracking-tight
         text-[--foreground]
       "
        >
          {project.name}
        </h3>

        {/* Role */}
        <p className="mt-2 text-sm text-violet-400">{project.role}</p>

        {/* Description */}
        <p
          className="
         mt-5
         text-[15px]
         leading-7
         text-[--secondary-text]
       "
        >
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mt-8">
          <h4
            className="
           text-xs
           uppercase
           tracking-[0.2em]
           text-[--primary-text]
         "
          >
            Highlights
          </h4>

          <div className="mt-4 space-y-3">
            {project.highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div
                  className="
                 h-2
                 w-2
                 rounded-full
                 bg-violet-400
               "
                />

                <span
                  className="
                 text-sm
                 text-[--secondary-text]
               "
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stack Pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {project.stacks.map((stack) => (
            <span
              key={stack}
              className="
             rounded-full
             border border-[--border]
             bg-[--card]
             px-3 py-1.5
             text-xs
             text-[--secondary-text]
           "
            >
              {stack}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div
          className="
         my-8
         h-px
         bg-gradient-to-r
         from-transparent
         via-white/10
         to-transparent
       "
        />

        {/* Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="
             h-2
             w-2
             rounded-full
             bg-green-500
           "
            />

            <span
              className="
             text-sm
             text-[--secondary-text]
           "
            >
              Live Project
            </span>
          </div>

          {project.privateProject && (
            <span
              className="
             text-sm
             text-[--secondary-text]
           "
            >
              🔒 Private Repository
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-8 flex gap-3">
          {project.livePreview && (
            <Link
              href={project.livePreview}
              target="_blank"
              className="
             inline-flex
             items-center
             gap-2
             rounded-2xl
             bg-[--bg-3]
             px-5
             py-3
             text-sm
             font-medium
             text-white
             transition-all
             duration-300
             hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]
           "
            >
              Visit Site
              <ArrowUpRight size={16} />
            </Link>
          )}

          {!project.privateProject && project.githubLink && (
            <Link
              href={project.githubLink}
              target="_blank"
              className="
             rounded-2xl
             border border-[--border]
             px-5
             py-3
             text-sm
             text-[--secondary-text]
           "
            >
              Source Code
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
