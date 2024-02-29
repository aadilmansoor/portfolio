"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Promptopia",
    description:
      "Developed Promptopia, a Next.js 13 web app for AI prompt discovery and sharing. Features include server-side rendering, file-based routing, and Vercel deployment. Integrated user authentication for secure interactions.",
    image: "/images/projects/promptopia.png",
    gitUrl: "https://github.com/aadilmansoor/promptopia",
    previewUrl: "https://promptopia-nu-tawny.vercel.app/",
  },
  {
    id: 2,
    title: "Snapgram - Social Media Application",
    description:
      "Built a social media application similar to Instagram using React, Tailwind CSS, and Appwrite. Implemented features like robust authentication, post exploration with like and save, detailed post views, user profile management, and post creation with drag-and-drop file upload.",
    image: "/images/projects/snapgram.png",
    gitUrl: "https://github.com/aadilmansoor/snapgram",
    previewUrl: "https://snapgram-nine-blush.vercel.app/",
  },
  {
    id: 3,
    title: "AI Article Summarizer",
    description:
      "Developed an AI article summarizer using React, Redux Toolkit, and the OpenAI GPT model. Features include URL input, dynamic summary generation, and clipboard functionality for streamlined user experience.",
    image: "/images/projects/summarizer.png",
    gitUrl: "https://github.com/aadilmansoor/AI-Article-Summarizer",
    previewUrl: "https://astounding-melba-0e2cb4.netlify.app/",
  },
  {
    id: 4,
    title: "Taste Trail",
    description:
      "Created a React project featuring a curated list of New York City restaurants. Utilized JSON data for essential details like reviews, operating hours, and addresses. Users can easily explore dining options with streamlined access to key information. Demonstrates proficiency in React and data integration for user-centric applications.",
    image: "/images/projects/tastetrail.png",
    gitUrl: "https://github.com/aadilmansoor/Taste-Trail",
    previewUrl: "https://taste-trail-kappa.vercel.app/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="pt-[80px]">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <ul
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
      >
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
