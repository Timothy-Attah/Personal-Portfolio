import { IProjectsItem } from "@/utils/interface";

export const projectData: IProjectsItem[] = [
  {
    image: "/assets/projects/piusvirgin.png",
    name: "PIUSVIRGIN",
    category: "Business & Media Platform",
    description:
      "Developed a modern, responsive web platform for a multidisciplinary organization operating across West Africa. The platform showcases services in media and advertising, tours and excursions, logistics, web development, marketing, printing, publishing, and professional development.",

    stacks: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Prisma",
      "MongoDB",
      "Vercel",
    ],
    role: "Full-Stack Developer",
    githubLink: null,
    privateProject: true,
    livePreview: "https://www.piusvirgin.com",
    highlights: [
      "Responsive design across all devices",
      "SEO-optimized pages",
      "Smooth animations with Framer Motion",
      "Integrated MongoDB database with Prisma ORM",
    ],
  },
  {
    image: "/assets/projects/joshcalebwill.png",

    name: "Joshcalebwill Petroleum",

    category: "Energy & Petroleum Platform",

    description:
      "Built a modern corporate web platform for an energy and petroleum services company, combining immersive motion design, responsive layouts, and strategic content presentation to communicate the company's expertise, services, and operational capabilities.",

    stacks: [
      "React",
      "Tailwind CSS",
      "Styled Components",
      "Framer Motion",
      "GSAP",
      "Vercel",
    ],

    role: "Frontend Developer",

    githubLink: null,

    privateProject: true,

    livePreview: "https://www.joshcalebwill.com",

    highlights: [
      "Advanced scroll-based animations with GSAP",
      "Interactive user experience powered by Framer Motion",
      "Responsive layouts optimized for all screen sizes",
      "Corporate service and operations showcase",
    ],
  },
  {
    image: "/assets/projects/neoteric.png",

    name: "Neoteric",

    category: "Engineering & Construction Platform",

    description:
      "Designed and developed a premium corporate website for an engineering and construction company, combining modern UI, immersive animations, and responsive layouts to showcase services, expertise, and industry credibility.",

    stacks: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Cursor Animation",
      "Vercel",
    ],

    role: "Frontend Developer",

    githubLink: null,

    privateProject: true,

    livePreview: "https://neoteric-engineering.vercel.app",

    highlights: [
      "Premium Awwwards-inspired interface",
      "Interactive cursor animations",
      "Smooth page transitions with Framer Motion",
      "Responsive design optimized for every device",
    ],
  },
  {
    image: "/assets/projects/todo-app.png",
    name: "Todo App",
    category: "Full-Stack Productivity Application",
    description:
      "A modern task management application built with Next.js, Prisma, and MongoDB. Users can securely manage tasks, track progress, and organize daily workflows through a responsive and intuitive interface.",

    stacks: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Prisma",
      "MongoDB",
      "Vercel",
    ],

    role: "Full-Stack Developer",

    githubLink: "https://github.com/TimothyAttah/todos-app",

    privateProject: false,

    livePreview: "https://todos-app-auth.vercel.app",

    highlights: [
      // "Secure authentication and protected routes",
      // "Full CRUD with MongoDB + Prisma ORM",
      "Full CRUD task management functionality",
      "Database integration with Prisma ORM and MongoDB",
      "Responsive UI with smooth Framer Motion interactions",
    ],
  },
  {
    image: "/assets/projects/ecommerce-shopsphere.png",

    name: "ShopSphere",

    category: "E-Commerce Platform",

    description:
      "Built a responsive e-commerce experience focused on product discovery, streamlined cart interactions, and secure online payments. The application integrates Stripe Checkout to provide a fast and reliable purchasing workflow.",
    stacks: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Stripe",
      "Vercel",
    ],

    role: "Frontend Developer",

    githubLink: "https://github.com/TimothyAttah/ecommerce-nextjs-smart-shop",

    privateProject: false,

    livePreview: "https://smart-shop-zeta.vercel.app/",

    highlights: [
      "Dynamic product filtering and browsing",
      "Cart management with real-time updates",
      "Stripe Checkout payment integration",
      "Mobile-first responsive user experience",
    ],
  },

  {
    image: "/assets/projects/daunku.png",

    name: "Daunku",

    category: "Lifestyle & E-Commerce Experience",

    description:
      "Built a modern lifestyle commerce experience for an indoor plant and home decor brand, combining responsive design, intuitive navigation, and engaging interactions to enhance product discovery and customer engagement.",

    stacks: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],

    role: "Frontend Developer",

    githubLink: "https://github.com/TimothyAttah/interior-design-with-ts",

    privateProject: false,

    livePreview: "https://interior-designs-sigma.vercel.app/",

    highlights: [
      "Modern product discovery experience",
      "Mobile-first responsive design",
      "Animated interactions with Framer Motion",
      "Component-driven UI architecture",
    ],
  },

  {
    image: "/assets/projects/salone.png",

    name: "Salone",

    category: "Beauty Salon Website",

    description:
      "Built a modern and elegant website for a beauty salon, creating a polished online presence that highlights services, promotes customer engagement, and delivers a seamless browsing experience across all devices.",

    stacks: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],

    role: "Frontend Developer",

    githubLink: "https://github.com/TimothyAttah/salone",

    privateProject: false,

    livePreview: "https://salone-pi.vercel.app",

    highlights: [
      "Elegant and responsive landing pages",
      "Modern beauty-focused UI design",
      "Cross-device compatibility",
      "Clean and accessible user experience",
    ],
  },

  {
    image: "/assets/projects/trendingmarket.png",

    name: "TrendingMarket",

    category: "Fashion E-Commerce Platform",

    description:
      "Developed a modern fashion e-commerce platform focused on delivering an intuitive shopping experience with product discovery, form validation, state management, and responsive performance.",

    stacks: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "React Hook Form",
      "Zod",
      "React Toastify",
    ],

    role: "Frontend Developer",

    githubLink: "https://github.com/TimothyAttah/shopping-app",

    privateProject: false,

    livePreview: "https://devs-shop-six.vercel.app/",

    highlights: [
      "Modern fashion shopping experience",
      "State management with Zustand",
      "Form validation using React Hook Form and Zod",
      "Responsive mobile-first design",
    ],
  },
];
