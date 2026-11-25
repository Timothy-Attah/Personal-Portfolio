import AboutHero from "@/components/about/aboutHero/AboutHero";
import Info from "@/components/about/info";
import Work from "@/components/about/Work";
import { workingWithMeFaqs, faqPix } from "@/data/faqsData";
import Faqs from "@/components/Faqs";
import TechnologyStackSection from "@/components/about/TechnologyStackSection";
import ProcessSection from "@/components/about/ProcessSection";

const About = () => {
  return (
    <>
      <AboutHero />
      <Info />
      <TechnologyStackSection/>
      <Work />
      <ProcessSection/>
      <Faqs faqsData={workingWithMeFaqs} faqPix={faqPix.pix} />
    </>
  );
};

export default About;
