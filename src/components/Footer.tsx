import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FiLinkedin, FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <footer className="pt-14 pb-6 border-gray-800 border-t text-white">
        <div className="mx-auto px-4 container">
          <div className="mb-10" style={{ opacity: 1, transform: "none" }}>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/TimothyAttah/"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 text-[--secondary-text] hover:text-[--link-text]"
                style={{ opacity: 1, transform: "none" }}
              >
                <FiGithub />
                {/* <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 496 512"
                  className="w-7 h-7 text-stone-300 hover:text-white transition"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg> */}
              </a>
              <a
                href="https://www.linkedin.com/in/timothy-attah-447077158/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 text-[--secondary-text] hover:text-[--link-text]"
                style={{ opacity: 1, transform: "none" }}
              >
                <FiLinkedin />
                {/* <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  className="w-7 h-7 text-stone-300 hover:text-white transition"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                </svg> */}
              </a>
              <a
                href="mailto:timothy-attah733@gmail.com"
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 text-[--secondary-text] hover:text-[--link-text]"
                style={{ opacity: 1, transform: "none" }}
              >
                <Mail />
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="w-7 h-7 text-stone-300 hover:text-white transition"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  ></path>
                </svg> */}
              </a>
              {/* <a
                href="https://www.facebook.com/share/16YLCxt6fX/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
                style={{ opacity: 1, transform: "none" }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  className="w-7 h-7 text-stone-300 hover:text-white transition"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/hd_webdesigner?igsh=NjNjYm9hY2s2d3cw"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
                style={{ opacity: 1, transform: "none" }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  className="w-7 h-7 text-stone-300 hover:text-white transition"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a> */}
            </div>
          </div>
          <div
            className="flex flex-col items-center gap-4 mx-auto mb-10 max-w-xl text-center"
            style={{ opacity: 1, transform: "none" }}
          >
            {/* <img
              src="/Logo-Image.png"
              alt="Haza’ElDevs logo – Web developer in Lagos, Nigeria"
              className="w-32"
            /> */}
            <Link
              href="/"
              className="group relative flex h-[60px]  w-[100px] items-center justify-center overflow-hidden rounded-xl border border-[--border] bg-[--bg] backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-violet-500/0 transition duration-500 group-hover:bg-violet-500/10" />

              <Image src="/logo.png" alt="Timothy Attah" fill />
            </Link>
            <p className="text-[--secondary-text] text-sm">
              {/* I design and build fast, conversion-focused websites for
              businesses that want to look credible, modern, and intentional
              online. */}
              Creating modern, scalable web experiences with clean codes and
              thoughtful design.
            </p>
            <p className="text-[--secondary-text] text-xs">
              Based in Lagos, Nigeria · Working with clients worldwide
            </p>
          </div>
          <nav
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-sm"
            aria-label="Footer navigation"
            style={{ opacity: 1, transform: "none" }}
          >
            <a
              className="text-[--primary-text] hover:text-[--link-text] transition-all"
              href="/about"
              data-discover="true"
            >
              About
            </a>
            <a
              className="text-[--primary-text] hover:text-[--link-text] transition-all"
              href="/services"
              data-discover="true"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-[--primary-text] hover:text-[--link-text] transition-all"
            >
              Contact
            </a>
          </nav>
          <p className="mb-6 text-[--secondary-text] text-sm text-center">
            Every serious build begins with discovery. Strategy first. Execution
            second. No exceptions.
          </p>
          <div
            className="text-[--primary-text] text-sm text-center"
            style={{ opacity: 1, transform: "none" }}
          >
            <p>
              © 2026 TimothyAttah · Built by{" "}
              <a
                href="/contact"
                // target="_blank"
                rel="noreferrer"
                className="text-[ --text-violet-400] hover:underline"
              >
                Timothy Attah
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
