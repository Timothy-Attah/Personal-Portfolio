import Image from "next/image";
import { servicesData } from "@/data/servicesData";
import { roadmapServiceData, roadmapServiceInfoData } from "@/data/roadmapData";
import servicePix from "@/assets/servicePix1.jpg";
import Roadmap from "@/components/Roadmap";
import { servicesFaqs, faqPix } from "@/data/faqsData";
import Faqs from "@/components/Faqs";
import Link from "next/link";

const ServicesPage = () => {
  return (
    <>
      <section className="relative overflow-hidden px-6 pt-36 pb-28">
        {/* Glow */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[--border-1] blur-[140px]" />
        </div>

        {/* HERO */}
        <div className="mx-auto max-w-6xl min-h-[90vh] text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-[--border-1] bg-[--bg-1] px-5 py-2 text-sm text-[--primary-text] backdrop-blur-md">
            Premium Web Design & Development
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-5xl text-5xl  font-bold leading-[1.05] tracking-tight text-[--foreground] md:text-7xl">
            Modern websites built
            <span className="bg-gradient-to-r from-violet-300 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              {" "}
              for growth,
            </span>
            <br />
            performance, and clarity.
          </h1>

          {/* Paragraph */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[--secondary-text] md:text-xl">
            I design and develop premium websites for startups, agencies,
            creators, and businesses that want a stronger online presence and a
            more modern digital experience.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <button className="rounded-2xl bg-violet-600 px-8 py-4 font-medium text-white transition duration-300 hover:bg-violet-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.35)]">
                Start a Project
              </button>
            </Link>

            <Link href='/projects'>
              <button className="rounded-2xl border border-[--border] bg-[--bg] px-8 py-4 text-[--secondary-text] backdrop-blur-md transition duration-300 hover:border-violet-500/40 hover:bg-[--card] hover:text-[--foreground]">
                View My Work
              </button>
            </Link>
          </div>
        </div>

        {/* SERVICES WRAPPER */}
        <div className="relative py-24">
          <div className="mx-auto max-w-7xl px-6">
            {/* SECTION TITLE */}
            <div className="mx-auto mb-20 max-w-3xl text-center">
              <div className="mb-4 inline-flex rounded-full border border-[--border-1] bg-[--bg-1] px-4 py-2 text-sm text-[--primary-text]">
                Services
              </div>

              <h2 className="text-4xl font-bold tracking-tight text-[--foreground] md:text-6xl">
                What I Can
                <span className="bg-gradient-to-r from-violet-300 to-fuchsia-500 bg-clip-text text-transparent">
                  {" "}
                  build for you
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-[--secondary-text]">
                Every website is designed to feel premium, perform smoothly, and
                communicate clearly across every device.
              </p>
            </div>

            {/* BIG SERVICES */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {servicesData.map(
                (service, i) =>
                  service.size === "big" && (
                    <div
                      key={i}
                      className="group relative overflow-hidden rounded-[2rem]border border-[--border] bg-[--bg] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/40 hover"
                    >
                      {/* IMAGE */}
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        <div className="absolute inset-0 bg-violet-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
                      </div>

                      {/* CONTENT */}
                      <div className="p-6">
                        <h3 className="text-2xl font-semibold tracking-tight text-[--foreground]">
                          {service.title}
                        </h3>

                        <p className="mt-4 text-[15px] leading-7 text-[--secondary-text]">
                          {service.desc}
                        </p>

                        <ul className="mt-5 space-y-2">
                          {service.lists.map((list, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-sm text-[--secondary-text]"
                            >
                              <span className="mt-2 h-2 w-2 rounded-full bg-[--text-violet-400]" />

                              {list}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ),
              )}
            </div>

            {/* ADDITIONAL SERVICES */}
            <div className="mt-[120px] grid items-start gap-14 xl:grid-cols-[1.1fr_0.9fr]">
              {/* LEFT CONTENT */}
              <div>
                {/* Heading */}
                <div className="mb-10">
                  <div className="mb-4 inline-flex rounded-full border border-[--border-1] bg-[--bg-1] px-4 py-2 text-sm text-[--primary-text]">
                    Additional Capabilities
                  </div>

                  <h3 className="text-4xl font-bold tracking-tight text-[--foreground]">
                    More than just
                    <span className="bg-gradient-to-r from-violet-300 to-fuchsia-500 bg-clip-text text-transparent">
                      {" "}
                      website design
                    </span>
                  </h3>

                  <p className="mt-5 max-w-2xl text-lg leading-8 text-[--secondary-text]">
                    Extra services focused on performance, visibility,
                    structure, and long-term scalability — helping your website
                    feel polished from every angle.
                  </p>
                </div>

                {/* Small Services */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {servicesData.map(
                    (service, i) =>
                      service.size === "small" && (
                        <div
                          key={i}
                          className="group rounded-[1.7rem] border border-[--border] bg-[--bg] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[--border-2] hover:bg-[--card]"
                        >
                          <h4 className="text-lg font-semibold text-[--foreground] transition duration-300 group-hover:text-[--primary-text]">
                            {service.title}
                          </h4>

                          <p className="mt-3 text-sm leading-7 text-[--secondary-text]">
                            {service.desc}
                          </p>

                          <ul className="mt-5 space-y-2">
                            {service.lists.map((list, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-3 text-sm text-[--secondary-text]"
                              >
                                <span className="mt-2 h-2 w-2 rounded-full bg-[--text-violet-400]" />
                                {list}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ),
                  )}
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="sticky top-28">
                <div className="relative overflow-hidden rounded-[2rem] border border-[--border] bg-[--bg] backdrop-blur-xl">
                  <Image
                    src={servicePix}
                    alt="Services Image"
                    className="h-[720px] w-full object-cover transition duration-700 hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Glow */}
                  <div className="absolute inset-0 bg-[--bg-1] mix-blend-screen" />

                  {/* Floating Label */}
                  <div className="absolute bottom-6 left-6 rounded-full border border-[--border] bg-black/40 px-4 py-2 text-sm text-zinc-200  backdrop-blur-md">
                    Modern digital experiences
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <Roadmap
        title={roadmapServiceInfoData.title}
        desc={roadmapServiceInfoData.desc}
        process={roadmapServiceData}
      />

      {/* BENEFITS + CTA */}
      <section className="mx-auto mt-32 md:mt-40 max-w-7xl px-6 relative">
        {/* <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px]" />
        </div> */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* WHAT YOU GET */}
          <div className="rounded-[2rem] border border-[--border] bg-[--bg] p-8 backdrop-blur-xl">
            <div className="mb-4 inline-flex rounded-full border border-[--border-1] bg-[--bg-1] px-4 py-2 text-sm text-[--primary-text]">
              Included
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[--foreground] md:text-4xl">
              What You Get With Every Project
            </h2>

            <p className="mt-5 text-lg leading-8 text-[--secondary-text]">
              I don’t just build websites — I build premium digital experiences
              that help businesses look professional and convert better.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Mobile-first responsive design",
                "Fast performance and smooth animations",
                "Clear structure and readable content",
                "Basic SEO setup and optimization",
                "Clean scalable code architecture",
                "Post-launch support if needed",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-[--secondary-text]"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-[ --text-violet-400]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="relative overflow-hidden rounded-[2rem] border border-[--border-1] bg-gradient-to-br from-violet-500/10 via-transparent to-fuchsia-500/10 p-10 backdrop-blur-xl">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[--border-1] blur-3xl" />

            <div className="mb-4 inline-flex rounded-full border border-[--border-1] bg-[--bg-1] px-4 py-2 text-sm text-[--primary-text]">
              Let’s Work
            </div>

            <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-[--foreground] md:text-5xl">
              Ready to build something exceptional?
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[--secondary-text]">
              Let’s turn your idea into a premium digital experience that feels
              modern, performs fast, and leaves a strong impression.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href='/contact'>
              <button className="rounded-2xl bg-violet-600 px-8 py-4 font-medium text-[--foreground] transition duration-300 hover:bg-[--bg-3] hover:shadow-[0_0_40px_rgba(139,92,246,0.35)]">
                Let&apos;s Talk
              </button>
              </Link>

             <Link href='/projects'>
             <button className="rounded-2xl border border-[--border] bg-[--bg] px-8 py-4 text-[--primary-text] backdrop-blur-md transition duration-300 hover:border-violet-500/40 hover:text-[--foreground]">
                View Projects
              </button>
             </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className=" mt-32 md:mt-40">
        <Faqs faqsData={servicesFaqs} faqPix={faqPix.pix} />
      </div>
    </>
  );
};

export default ServicesPage;
