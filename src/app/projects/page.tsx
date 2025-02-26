"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const personalProjects = [
  {
    title: "Library CMS (Next.js)",
    link: "https://educhain.vn/en",
    description:
      "Developed a Library CMS for Educhain, enabling efficient management of library book collections. The system provides an intuitive interface, allowing users to easily manage and interact with data.",
    images: [
      "/educhain_login.png",
      "/educhain_dashboard.png",
      "/educhain_booklist.png",
      "/educhain_booktab.png",
      "/educhain_filter.png",
      "/educhain_profile.png",
    ],
  },
  {
    title: "Movie Watching Website (Next.js)",
    link: "https://phimplus.vercel.app",
    description:
      "Developed a movie streaming website that allows users to browse and watch movies. The platform provides a smooth and engaging user experience with an intuitive interface and responsive design.",
    images: [
      "/phimplus_home.png",
      "/phimplus_search.png",
      "/phimplus_detail.png",
      "/phimplus_play.png",
      "/phimplus_play2.png",
    ],
  },
];

const ProjectPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto relative my-20">
      <section className="py-10">
        <div className="mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            My personalProjects{" "}
          </h2>
          <div className="space-y-12 select-none ">
            {personalProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: false }}
                className="bg-gray-100 shadow-lg rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-semibold hover:underline mb-4 block"
                >
                  View Project
                </a>

                {/* Swiper Slider */}
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  className="rounded-lg overflow-hidden"
                >
                  {project.images.map((image, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <img
                        src={image}
                        alt={`Project ${index + 1}`}
                        className="w-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
