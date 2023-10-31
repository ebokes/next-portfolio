import { Icon, IconProps } from "@chakra-ui/react";
import { CgBrowser, CgPerformance } from "react-icons/cg";
import { IoIosApps } from "react-icons/io";
import { MdOutlineDevices } from "react-icons/md";
import { RiCodeView } from "react-icons/ri";
import { TbWorldSearch } from "react-icons/tb";
import { BsPersonFill } from "react-icons/bs";
import { MdAlternateEmail, MdOutlineEmail } from "react-icons/md";
import { IconType } from "react-icons";

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
  "Postman & Swagger",
  "Figma",
];

export interface ProjectDataProps {
  id?: string;
  img?: string[] | undefined;
  title?: string;
  intro?: string;
  details?: string;
  features?: string[];
  category?: string;
  stack?: string[];
  code?: string;
  live?: string;
}

export const allProjectsData = [
  {
    id: "chatter",
    img: [
      "/images/chatter1.webp",
      "/images/chatter2.webp",
      "/images/chatter3.webp",
    ],
    title: "Chatter Web App",
    intro:
      "Chatter is a haven for text-based content enthusiasts, offering a multi-functional platform where authors and readers can create and access their own content.",
    details:
      "Chatter is a haven for text-based content enthusiasts, offering a multi-functional platform where authors and readers can create and access their own content.",
    features: [
      "The app includes a landing page, feed, bookmarks, login page, a sign-up page etc.",
      " User authentication is handled using Firebase Authentication",
      "Posts, likes and comments are handled by firestore database",
      "Media files are handled by firebase storage.",
    ],
    category: "NEXTJS",
    stack: ["Nextjs", "Chakra UI", "React-Icons", "Firebase"],
    code: "https://github.com/ebokes/chatter-blog",
    live: "https://chatter-blog-opal.vercel.app/",
  },
  {
    id: "chitchat",
    img: [
      "/images/chitchat0.webp",
      "/images/chitchat1.webp",
      "/images/chitchat2.webp",
      "/images/chitchat3.webp",
    ],
    title: "ChitChat Social Media Web App",
    intro:
      "ChitChat is a social media web app that helps you can stay connected with the people who matter to you the most as well as meet new people.",
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
    id: "the-nail-boutique",
    img: [
      "/images/nailboutique1.webp",
      "/images/nailboutique2.webp",
      "/images/nailboutique3.webp",
    ],
    title: "Nail Boutique",
    intro:
      "Nail Boutique is a beauty brand that offers nail, hair and skin care services to her clients.",
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
    id: "github-profile-react",
    img: [
      "/images/rgithub1.webp",
      "/images/rgithub2.webp",
      "/images/rgithub3.webp",
    ],
    title: "Github Profile React",
    intro:
      "This is a reactjs application that allows users to search for and view GitHub profiles.",
    details:
      "This is a reactjs application that allows users to search for and view GitHub profiles. The application fetches user data from the GitHub API and displays it in a responsive UI.",
    features: [
      "Built using react.js, a popular JavaScript framework for building user interfaces",
      "Integrates with the GitHub API to fetch user data and display it in a user-friendly way",
    ],
    category: "REACTJS",
    stack: ["Vue", "TailwindCSS", "React-Icons"],
    code: "https://github.com/ebokes/gihub-profile-react",
    live: "https://gihub-profile-vue.vercel.app/",
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
    id: "surtfweb",
    img: [
      "/images/surftweb1.webp",
      "/images/surftweb2.webp",
      "/images/surftweb3.webp",
      "/images/surftweb4.webp",
    ],
    title: "Surftweb",
    intro:
      "Surftweb is a simple multiple page website that is a front for a web development company that renders digital products & services to small, medium and large scale businesses.",
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
      "This is a simple react application where users can view as well as search for crypto currencies, view their prices, volume and their market cap.",
    details:
      "This is a simple react application where users can view as well as search for crypto currencies, view their prices, volume and their market cap.",
    features: [
      "Responsive and user-friendly design that works across different devices and screen sizes",
      "Light and dark mode functionality",
    ],
    category: "NEXTJS",
    stack: ["React", "Styled-Components", "MUI"],
    code: "https://github.com/ebokes/crypto_app",
    live: "https://deft-gelato-c67e98.netlify.app/",
  },
  {
    id: "quizbee",
    img: ["/images/quizbee.webp"],
    title: "Quizbee",
    intro:
      "This is a simple react quiz app application that presents users with questions that they are to supply answers to. They are scored based on the correct answers.",
    details:
      "This is a simple react quiz app application that presents users with questions that they are to supply answers to. They are scored based on the correct answers.",
    features: [
      "Responsive and user-friendly design that works across different devices and screen sizes",
    ],
    category: "REACTJS",
    stack: ["React", "Styled-Components", "MUI"],
    code: "https://github.com/ebokes/quiz_bee",
    live: "https://ebokes.github.io/quiz_bee/",
  },
];
export const projectsData = [
  {
    id: "chatter",
    img: [
      "/images/chatter1.webp",
      "/images/chatter2.webp",
      "/images/chatter3.webp",
    ],
    title: "Chatter Web App",
    intro:
      "Chatter is a haven for text-based content enthusiasts, offering a multi-functional platform where authors and readers can create and access their own content.",
    details:
      "Chatter is a haven for text-based content enthusiasts, offering a multi-functional platform where authors and readers can create and access their own content.",
    features: [
      "The app includes a landing page, feed, bookmarks, login page, a sign-up page etc.",
      " User authentication is handled using Firebase Authentication",
      "Posts, likes and comments are handled by firestore database",
      "Media files are handled by firebase storage.",
    ],
    category: "NEXTJS",
    stack: ["Nextjs", "Chakra UI", "React-Icons", "Firebase"],
    code: "https://github.com/ebokes/chatter-blog",
    live: "https://chatter-blog-opal.vercel.app/",
  },
  {
    id: "chitchat",
    img: [
      "/images/chitchat0.webp",
      "/images/chitchat1.webp",
      "/images/chitchat2.webp",
      "/images/chitchat3.webp",
    ],
    title: "ChitChat Social Media Web App",
    intro:
      "ChitChat is a social media web app that helps you can stay connected with the people who matter to you the most as well as meet new people.",
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
    id: "the-nail-boutique",
    img: [
      "/images/nailboutique1.webp",
      "/images/nailboutique2.webp",
      "/images/nailboutique3.webp",
    ],
    title: "Nail Boutique",
    intro:
      "Nail Boutique is a beauty brand that offers nail, hair and skin care services to her clients.",
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
    id: "github-profile-react",
    img: [
      "/images/rgithub1.webp",
      "/images/rgithub2.webp",
      "/images/rgithub3.webp",
    ],
    title: "Github Profile React",
    intro:
      "This is a reactjs application that allows users to search for and view GitHub profiles.",
    details:
      "This is a reactjs application that allows users to search for and view GitHub profiles. The application fetches user data from the GitHub API and displays it in a responsive UI.",
    features: [
      "Built using react.js, a popular JavaScript framework for building user interfaces",
      "Integrates with the GitHub API to fetch user data and display it in a user-friendly way",
    ],
    category: "REACTJS",
    stack: ["Vue", "TailwindCSS", "React-Icons"],
    code: "https://github.com/ebokes/gihub-profile-react",
    live: "https://gihub-profile-vue.vercel.app/",
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
    id: "surtfweb",
    img: [
      "/images/surftweb1.webp",
      "/images/surftweb2.webp",
      "/images/surftweb3.webp",
      "/images/surftweb4.webp",
    ],
    title: "Surftweb",
    intro:
      "Surftweb is a simple multiple page website that is a front for a web development company that renders digital products & services to small, medium and large scale businesses.",
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
    src: "next",
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
  {
    src: "react-query",
    caption: "React Query",
  },
];

export interface ReviewProps {
  name?: string;
  position?: string;
  message?: string;
  img?: string;
}

export const reviews = [
  {
    name: "Ifeanyi Okonkwo",
    position: "Senior Frontend Developer",
    message:
      "I've had the privilege of working with Chibuokem. His commitment to delivering pixel-perfect designs and seamless user experiences is exceptional. Chibuokem is a true asset to any team.",
    img: "/images/ifeanyi.webp",
  },
  {
    name: "Thompson Osagie",
    position: "Backend Developer",
    message:
      "Chibuokem and I have partnered on multiple projects, and I'm consistently impressed with his frontend skills. His ability to bring designs to life is remarkable. ",
    img: "/images/thompson.webp",
  },
  {
    name: "Amina Bello",
    position: "UI/UX Designer",
    message:
      "Chibuokem is an outstanding frontend developer. His coding skills are top-notch, he has a keen eye for design and pays great attention to detail. Collaborating with Chibuokem is always a pleasure.",
    img: "/images/amina.webp",
  },
  {
    name: "Emelder Okafor",
    position: "Frontend Developer",
    message:
      "I've had the pleasure of working with Chibuokem for over 2 years, his excellent skills, and commitment to quality makes him a valuable asset. He's a top-notch team player with strong problem-solving abilities.",
    img: "images/meldy.jpeg",
  },
];

interface InputProps {
  placeholder: string;
  icon: IconType;
  inputName: string;
  type: string;
}

export const input: InputProps[] = [
  { placeholder: "Name", icon: BsPersonFill, inputName: "name", type: "input" },
  {
    placeholder: "Email",
    icon: MdAlternateEmail,
    inputName: "email",
    type: "input",
  },
  {
    placeholder: "Message",
    icon: MdOutlineEmail,
    inputName: "message",
    type: "textarea", // Use "textarea" in lowercase
  },
];

export const parentVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const cardsVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
