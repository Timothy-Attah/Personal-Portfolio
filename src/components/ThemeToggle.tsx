"use client";

import { Moon, Sun } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { navbarData } from "@/data/navbarData";
import { usePathname } from "next/navigation";

import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { scrollToTop } from "./Header";

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

export default function ThemeToggle() {
  const context = useContext(ThemeContext);

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !context) {
    return (
      <div
        className="
          h-11
          w-11
          rounded-full
          border
          border-[--border]
          bg-[--card]
        "
      />
    );
  }

  const { toggle, theme } = context;

  const isDark = theme === "dark";

  return (
    <div className="flex gap-4">
      <button
        onClick={toggle}
        className="
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      border
      border-[--border]
      bg-[--card]
      text-[--foreground]
      backdrop-blur-xl
      transition-all
      duration-300
      hover:scale-105
      hover:bg-[--foreground]/10
    "
      >
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>
      <div className="md:hidden relative z-[1000]">
        <button
          className="relative z-[1000]"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <Hamburger
            size={25}
            rounded
            toggled={open}
            color={isDark ? "#fff" : "#000"}
          />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              exit="exit"
              className="fixed left-0 top-0 z-[900] min-h-screen w-full overflow-x-hidden bg-[--background] text-[--foreground] backdrop-blur-2xl"
            >
              <div className="flex min-h-screen flex-col items-center justify-center gap-10 text-4xl font-semibold tracking-tight">
                {navbarData.map((item) => {
                  const isActive = pathname === item.linkPath;

                  return (
                    <motion.div key={item.linkPath} variants={listItemVariants}>
                      <Link
                        href={item.linkPath}

                        className={`relative transition-all duration-300 ${
                          isActive
                            ? "text-[--primary-text] drop-shadow-[0_0_14px_rgba(139,92,246,0.7)]"
                            : "text-[--link-text] hover:text-[--primary-text]"
                        }`}
                        onClick={() => {
                          setOpen(false);
                          scrollToTop();
                        }}
                      >
                        {item.linkName}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
