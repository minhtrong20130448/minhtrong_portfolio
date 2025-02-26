"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope,
  faPhone,
  faBirthdayCake,
  faUser,
  faGraduationCap,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const skills = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "Redux",
];

export default function AboutMe() {
  return (
    <section className="py-12">
      <div className="max-w-screen-xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg min">
        {/* Avatar + Name + Social Icons */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/avatar.jpg"
            alt="Avatar"
            className="w-32 h-32 rounded-full shadow-lg object-cover"
          />
          <h2 className="text-2xl font-bold mt-4">Minh Trong</h2>
          <p className="text-gray-600">Frontend Developer | Tech Enthusiast</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/minhtrong20130448"
              target="_blank"
              className="text-gray-700 hover:text-black text-xl"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/nguy%E1%BB%85n-minh-tr%E1%BB%8Dng-892966265/"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 text-xl"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.facebook.com/trong.nguyenminh.3150/"
              target="_blank"
              className="text-blue-400 hover:text-blue-600 text-xl"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>

        {/* Personal Info */}
        <div className="mt-8 grid lg:grid-cols-3 gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faUser} className="text-gray-500" />
            <span>
              <strong>Full Name:</strong> Nguyen Minh Trong
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBirthdayCake} className="text-gray-500" />
            <span>
              <strong>Birthday:</strong> 28/06/2002
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} className="text-gray-500" />
            <span>
              <strong>Phone:</strong> +84 336 961 200
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-500" />
            <span>
              <strong>Email:</strong> minhtrongvtctp@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500" />
            <span>
              <strong>Address:</strong> Thu Duc, Ho Chi Minh City
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faGraduationCap} className="text-gray-500" />
            <span>
              <strong>University:</strong> Nong Lam University (Graduated)
            </span>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold">Skills</h3>
          <div className="flex flex-wrap gap-3 mt-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
