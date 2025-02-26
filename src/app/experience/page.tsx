"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const clientProjects = [
  {
    year: "10/2024 - 3/2025",
    client: "Educhain",
    role: "Frontend Developer",
    description:
      "Developed a modern web application using Next.js and Tailwind CSS.",
    logo: "/educhain_logo.png",
  },
];

const personalProjects = [
  {
    title: "Movie Watching Website",
    description:
      "Developed a movie streaming website that allows users to browse and watch movies.",
    tech: ["Next.js", "Tailwind CSS", "Redux"],
    image: "/phimplus_home.png",
  },
  {
    title: "Portfolio Website",
    description:
      "Developed a personal portfolio website to showcase my skills, work experience, and projects.",
    tech: ["Next.js", "Tailwind CSS"],
    image: "/portforio.png",
  },
];

export default function WorkExperience() {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setInView(true), 100); // Delay 100ms để chờ viewport ổn định
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        {/* Client Work Experience */}
        <h2 className="text-3xl font-bold text-center mb-8">Work Experience</h2>
        <div className="relative border-l-4 border-gray-300 pl-6">
          {clientProjects.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false }}
              className="mb-8 opacity-0 will-change-transform transition-opacity duration-500"
            >
              <div className="flex items-center gap-4">
                <img
                  src={exp.logo}
                  alt={exp.client}
                  className="w-12 h-12 rounded-full shadow-lg"
                />
                <div>
                  <h3 className="text-xl font-semibold">
                    {exp.client} - {exp.role}
                  </h3>
                  <p className="text-gray-500">{exp.year}</p>
                </div>
              </div>
              <p className="mt-2 text-gray-700">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Personal Projects */}
        <h2 className="text-3xl font-bold text-center mt-12 mb-8">
          Personal Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personalProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-4 opacity-0 will-change-transform transition-opacity duration-500"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
