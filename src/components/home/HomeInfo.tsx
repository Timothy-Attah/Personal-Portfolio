"use client";

import Link from "next/link";
import { JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

interface IHomeInfoProps {
  text?: string;
  link: string;
  btnText: string;
}

interface ICurrentStageProps {
  currentStage: number;
}

const InfoBox = ({ text, link, btnText }: IHomeInfoProps) => (
  <div className="info-box neo-brutalism-blue logo-text shadow-[0_0_30px_rgba(59,130,246,0.25)]">
    <p className="font-medium text-center  text-[14px]">{text}</p>
    <Link href={link} className=" neo-brutalism-white neo-btn">
      {btnText}
      <FiArrowRight />
    </Link>
  </div>
);

const renderContent: Record<number, JSX.Element> = {
  1: (
    <div className="neo-brutalism-blue py-4 px-8 text-white mx-5 shadow-[0_0_30px_rgba(59,130,246,0.25)] logo-text">
      {/* <h1 className="sm:text-xl sm:leading-snug text-center">
        Hi, I'm Timothy Attah 👋
        <br />
        Transforming ideas into fast, modern web experiences..
      </h1> */}
      <h1 className="text-3xl font-semibold">Hi, I’m Timothy Attah 👋</h1>
      <p className="text-lg text-white/90 mt-2">
        Transforming ideas into fast, modern web experiences.
      </p>
    </div>
  ),

  2: (
    <InfoBox
      text="I’m driven by curiosity and creativity—always learning new tools to build better websites and user experiences."
      link="/about"
      btnText="Learn more"
    />
  ),

  3: (
    <InfoBox
      text="I build with structure and clarity. Every project follows a clear process."
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a reliable developer?"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }: ICurrentStageProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentStage}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.4 }}
        // transition={{
        //   duration: 4,
        //   repeat: Infinity,
        //   ease: "easeInOut",
        // }}
      >
        {renderContent[currentStage]}
      </motion.div>
    </AnimatePresence>
  );
};

export default HomeInfo;
