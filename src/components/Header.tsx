"use client";
import Link from "next/link";
import { Twirl as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { navbarData } from "@/data/navbarData";
import { usePathname } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import { Theme, ThemeContext } from "@/context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

export const scrollToTop = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
};

const listVariants = {
  closed: {
    x: "100%",
  },
  opened: {
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
  exit: {
    x: "100%",
  },
};

const listItemVariants = {
  closed: {
    x: 10,
    opacity: 0,
  },
  opened: {
    x: 0,

    opacity: 1,
  },
};

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const context = useContext(ThemeContext);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);



  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-[999] transition-all duration-500 ${
          scrolled
            ? "border-b border-[--border] bg-black/80 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
            : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-500">
          <Link
            href="/"
            className="group relative flex h-[60px] w-[80px] md:w-[100px] items-center justify-center overflow-hidden rounded-xl border border-[--border] bg-[--bg] backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-violet-500/0 transition duration-500 group-hover:bg-violet-500/10" />

            {/* <p className="relative bg-gradient-to-r from-violet-300 to-fuchsia-500 bg-clip-text text-[18px] font-bold text-transparent transition duration-300 group-hover:scale-110">
              TA
            </p> */}
            <Image src='/logo.png' alt='Timothy Attah' fill />
          </Link>
          <nav className="hidden items-center gap-10 md:flex">
            {navbarData.map((item) => {
              const isActive = pathname === item.linkPath;
              const isHome = pathname === "/";

              return (
                <Link
                  key={item.linkPath}
                  href={item.linkPath}
                  className={`group relative text-[15px] font-medium tracking-wide transition-all duration-300 ${
                    isActive
                      ? `${scrolled ? "text-white" : "text-[--primary-text]"}`
                      : isHome
                        ? `${scrolled ? "text-white" : "text-zinc-800"}`
                        : `${scrolled ? "text-[#a1a1aa] hover:text-[--primary-text]" : "text-[--foreground] hover:text-[--primary-text]"}`
                  }`}
                >
                  {/* Text */}
                  <span
                    className={`relative z-10 transition duration-300 ${
                      isActive
                        ? "drop-shadow-[0_0_12px_rgba(139,92,246,0.7)]"
                        : "group-hover:drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]"
                    }`}
                  >
                    {item.linkName}
                  </span>

                  {/* Underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-violet-400 to-fuchsia-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />

                  {/* Hover Glow */}
                  <span className="absolute inset-0 rounded-full bg-violet-500/0 blur-xl transition duration-500 group-hover:bg-violet-500/10" />
                </Link>
              );
            })}
          </nav>
          <ThemeToggle />

        </div>
      </header>
    </>
  );
};

export default Header;
