import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer",
    location: "SoftRadix Technologies Pvt Ltd",
    description: `• <b>E-commerce Portal Development:</b> Led the front-end development for an e-commerce portal, enabling clients to sell custom apparel.<br />
      • <b>Travel Website Development:</b> Developed a travel website named “Company for Nice Travel” using Next.js, Google Maps, Redux Toolkit, and Firebase. Implemented a real-time chat feature using the Firebase database.<br />
      • <b>3D Shirt Customization Project:</b> Worked on a project that allows users to customize costumes via a 3D model. Utilized React-three-fiber and Zustand for the development of this project.<br />
      • <b>Client Interaction:</b> Managed client relationships and handled projects independently, ensuring client satisfaction and project success.`,
    icon: React.createElement(FaReact),
    date: "May 2022 - May 2024",
  },
  {
    title: "Front-End Developer",
    location: "Snowflakes Software Private Limited",
    description: `• <b>Interactive Dashboard Development:</b> Designed and developed an interactive dashboard for a financial services company, utilizing React.js and D3.js for data visualization. Implemented responsive design principles to ensure usability across various devices. <br />
    • <b>E-commerce Website Revamp:</b> Led the front-end revamp of an existing e-commerce website, improving the site's performance and user engagement. Integrated payment gateways, enhanced security features, and implemented few more functionalities.`,
    icon: React.createElement(CgWorkAlt),
    date: "April 2021 - April 2022",
  },
  {
    title: "Bachelor of Computer Applications",
    location: "JMIT",
    description:
      "• After one year of college, I chose to drop out and pursue my passion for web development independently. Through dedicated self-study using Youtube and Udemy courses, I secured a position as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2019 - June 2020",
  },
] as const;

export const projectsData = [
  {
    title: "3D Shirt Configurator",
    description:
      "This project allows users to customize costumes via a 3D model. Utilized React-three-fiber and Zustand for the development of this project.",
    tags: ["React", "Three.js", "SCSS", "Zustand", "Framer"],
    imageUrl: "/project1.png",
    link: "https://3d-shirt-configurator.netlify.app/",
  },
  {
    title: "IPhone Landing Page",
    description:
      "This project featuring an interactive 3D model of an iPhone with smooth animations powered by Three.js and GSAP",
    tags: ["React", "Three.js", "GSAP", "Webgi", "Framer"],
    imageUrl: "/project3.png",
    link: "https://3d-iphone-landing-page.netlify.app/",
  },
  {
    title: "Ai Image Generator",
    description:
      "Transform text into stunning images with this React.js-powered AI Image Generator, fueled by OpenAI's DALL·E 3",
    tags: ["React", "Open AI", "SCSS", "Framer"],
    imageUrl: "/project2.png",
    link: "https://openai-gallary.netlify.app/",
  },
] as const;

export const skillsData = [
  "React.js",
  "Next.js",
  "Three.js",
  "TypeScript",
  "JavaScript",
  "SCSS",
  "Tailwind CSS",
  "Redux",
  "Framer Motion",
] as const;
