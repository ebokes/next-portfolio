import { CgBrowser, CgPerformance } from "react-icons/cg";
import { IoIosApps } from "react-icons/io";
import { MdOutlineDevices } from "react-icons/md";
import { RiCodeView } from "react-icons/ri";
import { TbWorldSearch } from "react-icons/tb";

export const servicesData = [
  {
    id: 1,
    icon: MdOutlineDevices,
    title: "Responsive Web Design",
    body: "Create beautiful and responsive websites that look great on all devices.",
  },
  {
    id: 2,
    icon: RiCodeView,
    title: "Frontend Development",
    body: "Implement interactive and user-friendly frontend interfaces using modern technologies.",
  },
  {
    id: 3,
    icon: IoIosApps,
    title: "Web App Development",
    body: "Build scalable and efficient web applications to meet your business needs.",
  },

  {
    id: 4,
    icon: CgPerformance,
    title: "Performance Optimization",
    body: "Optimize website performance for faster loading and better user experience.",
  },
  {
    id: 5,
    icon: CgBrowser,
    title: "Cross-Browser Testing",
    body: "Ensure your website works flawlessly across different web browsers and devices.",
  },

  {
    id: 6,
    icon: TbWorldSearch,
    title: "Search Engine Optimisation",
    body: "Improve your website's visibility in search engines and drive organic traffic.",
  },
];

export const TechStack = [
  {
    title: "Next.js",
    value: 90,
  },
  {
    title: "React.js",
    value: 90,
  },
  {
    title: "Vue.js",
    value: 80,
  },
  {
    title: "Typescript",
    value: 80,
  },
  {
    title: "Javascript",
    value: 90,
  },
];

export const TechStack2 = [
  "Git & Github",
  "Netlify & Vercel",
  "Firebase & Postman",
  "Figma",
];

export interface ProjectDataProps {
  id: string;
  img: string[];
  title: string;
  intro: string;
  details?: string;
  features?: string[];
  category?: string;
  stack?: string[];
  code?: string;
  live?: string;
}

export const projectsData = [
  {
    id: "chitchat",
    img: [
      "/images/chitchat1.webp",
      "/images/chitchat1.webp",
      "/images/chitchat1.webp",
    ],
    title: "ChitChat Social Media Web App",
    intro:
      "This is a vuejs application that allows users to search for and view GitHub profiles.",
    details:
      "ChitChat is a social media web app that helps you can stay connected with the people who matter to you the most as well as meet new people.",
    features: [
      "The app includes a landing page, a login page, a sign-up page and a page for joining an existing chat room.",
      " User authentication is handled using Firebase Authentication",
      "Posts, likes and comments are handled by firestore database",
      "Media files are handled by firebase storage.",
    ],
    category: "REACTJS",
    stack: ["React", "Chakra UI", "React-Icons", "Firebase"],
    code: "https://github.com/ebokes/chitchat",
    live: "https://chitchat-tau.vercel.app/",
  },
  {
    id: "github-profile-vue",
    img: [
      "/images/vgithub1.webp",
      "/images/vgithub2.webp",
      "/images/vgithub3.webp",
    ],
    title: "Github Profile Vue",
    intro:
      "This is a vuejs application that allows users to search for and view GitHub profiles.",
    details:
      "This is a vuejs application that allows users to search for and view GitHub profiles. The application fetches user data from the GitHub API and displays it in a responsive UI.",
    features: [
      "Built using Vue.js, a popular JavaScript framework for building user interfaces",
      "Integrates with the GitHub API to fetch user data and display it in a user-friendly way",
    ],
    category: "VUEJS",
    stack: ["Vue", "TailwindCSS", "React-Icons"],
    code: "https://github.com/ebokes/gihub-profile-vue",
    live: "https://gihub-profile-vue.vercel.app/",
  },
  {
    id: "the-nail-boutique",
    img: [
      "/images/nailboutique1.webp",
      "/images/nailboutique2.webp",
      "/images/nailboutique3.webp",
    ],
    title: "Nail Boutique",
    intro:
      "This is a vuejs application that allows users to search for and view GitHub profiles.",
    details:
      "Nail Boutique is a beauty brand that offers nail, hair and skin care services to her clients.",
    features: [
      "Service catalog that allows users to browse nail care services by category",
      "Search functionality that enables users to search for service providers by keyword",
      "Appointment booking system that allows users to book appointments for their preferred services and service providers",
    ],
    category: "REACTJS",
    stack: ["React", "MUI", "Styled-Components", "Context-API"],
    code: "https://github.com/Meldy2503/nail-boutique",
    live: "https://nail-boutique.netlify.app/",
  },
  {
    id: "surtfweb",
    img: ["/images/surftweb.webp"],
    title: "Surftweb",
    intro:
      "This is a vuejs application that allows users to search for and view GitHub profiles.",
    details:
      "Surftweb is a simple multiple page website that is a front for a web development company that renders digital products & services to small, medium and large scale businesses.",
    features: [
      "Responsive and user-friendly design that works across different devices and screen sizes",
      "Modular and reusable codebase that promotes maintainability and scalability",
    ],
    category: "REACTJS",
    stack: ["React", "Styled-Components", "MUI"],
    code: "https://github.com/ebokes/surftweb",
    live: "https://surftweb.netlify.app/",
  },
  {
    id: "crypto-tracker",
    img: ["/images/crypto.webp"],
    title: "Crypto Tracker",
    intro:
      "This is a vuejs application that allows users to search for and view GitHub profiles.",
    details:
      "Surftweb is a simple multiple page website that is a front for a web development company that renders digital products & services to small, medium and large scale businesses.",
    features: [
      "Responsive and user-friendly design that works across different devices and screen sizes",
      "Modular and reusable codebase that promotes maintainability and scalability",
    ],
    category: "NEXTJS",
    stack: ["React", "Styled-Components", "MUI"],
    code: "https://github.com/ebokes/surftweb",
    live: "https://surftweb.netlify.app/",
  },
  {
    id: "quizbee",
    img: ["/images/quizbee.webp"],
    title: "Quizbee",
    intro:
      "This is a vuejs application that allows users to search for and view GitHub profiles.",
    details:
      "Surftweb is a simple multiple page website that is a front for a web development company that renders digital products & services to small, medium and large scale businesses.",
    features: [
      "Responsive and user-friendly design that works across different devices and screen sizes",
      "Modular and reusable codebase that promotes maintainability and scalability",
    ],
    category: "REACTJS",
    stack: ["React", "Styled-Components", "MUI"],
    code: "https://github.com/ebokes/surftweb",
    live: "https://surftweb.netlify.app/",
  },
];

export const TechStackData = [
  {
    src: "git",
    caption: "Git",
  },
  {
    src: "github",
    caption: "Github",
  },
  {
    src: "gitlab",
    caption: "Gitlab",
  },
  {
    src: "netlify",
    caption: "Netlify",
  },
  {
    src: "bitbucket",
    caption: "Bitbucket",
  },
  {
    src: "codepen",
    caption: "Codepen",
  },
  {
    src: "figma",
    caption: "Figma",
  },
  {
    src: "firebase",
    caption: "Firebase",
  },
  {
    src: "html",
    caption: "HTML 5",
  },
  {
    src: "css",
    caption: "CSS 3",
  },
  {
    src: "js",
    caption: "JavaScript",
  },
  {
    src: "ts",
    caption: "TypeScript",
  },
  {
    src: "nextjs",
    caption: "Nextjs",
  },
  {
    src: "react",
    caption: "Reactjs",
  },
  {
    src: "vue",
    caption: "Vuejs",
  },
  {
    src: "sass",
    caption: "Sass",
  },
  {
    src: "styled",
    caption: "Styled-Comp.",
  },
  {
    src: "tailwind",
    caption: "TailwindCSS",
  },
  {
    src: "mui",
    caption: "MaterialUi",
  },
  {
    src: "chakra-ui",
    caption: "Chakra-UI",
  },
  {
    src: "vercel",
    caption: "Vercel",
  },
  {
    src: "aws",
    caption: "AWS",
  },
  {
    src: "framer-motion",
    caption: "Framer-Motion",
  },
];

export interface ReviewProps {
  name: string;
  position: string;
  message: string;
  img?: string;
}

export const reviews = [
  {
    name: "Jane Smith",
    position: "UI/UX Designer",
    message:
      "Seamlessly blends Next.js, React, and TypeScript to create dynamic web apps. Impressive attention to detail and clean coding practices.",
    img: "image_url_for_Jane_Smith",
  },
  {
    name: "John Doe",
    position: "Frontend Developer",
    message:
      "Translates design concepts into interactive interfaces. Valuable asset with commendable command over Next.js, React, and TypeScript.",
    img: "image_url_for_John_Doe",
  },
  {
    name: "Amanda Lee",
    position: "Senior Frontend Developer",
    message:
      "Harnesses Next.js, React, and TypeScript for user-centric web apps. Evident potential and commitment to frontend excellence.",
    img: "image_url_for_Amanda_Lee",
  },
  {
    name: "Mark Johnson",
    position: "Freelance Frontend Developer",
    message:
      "Remarkable mastery of Next.js, React, and TypeScript. Reflects deep understanding and keen eye for detail.",
    img: "image_url_for_Mark_Johnson",
  },
];

// export const projectImg = [{}];
