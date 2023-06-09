"use client";
import { useTheme } from "@nextui-org/react";

const experiences = [
  {
    id: 1,
    role: "Frontend developer",
    company: "Finbet ",
    date: "Nov 2021 - Current",
    description:
      "The company was founded in 2013 and built around a core team of internationally proven gaming systems experts, Finbet has grown to over 200 staff members to become a first-class IT service provider to the sports betting industry.The company I work for is the first class IT services provider for online gaming and sports betting industry.  ",
  },
  {
    id: 2,
    role: "Jr. Frontend Developer",
    company: "IT Bootcamp",
    date: "Jan 2021 - Oct 2021",
    description:
      "As a forward-thinking company we’re always looking to add new talents to our accomplished multi-disciplinary teams of Analysts, Support Specialists, Programmers, Testers, Support and Service . Our mission is to open opportunities for social progress to motivated individulas and increase productivity.",
  },
];

const TimelineItem = ({ experience, side }) => {
  const { isDark } = useTheme();
  return (
    <div
      className={`relative w-full my-6 ${
        side === "right" ? "md:ml-auto" : "md:mr-auto"
      } md:w-2/5 ${side === "right" ? "timeline-bg1" : "timeline-bg2"}`}
    >
      <div
        className={`bg-transparent bg-transparent  p-6 ${
          isDark ? "experience-div" : "experience-div-light"
        }`}
      >
        <h3 className="text-xl font-semibold mb-2">{experience.role}</h3>
        <h4
          className={`mb-4 ${isDark ? "skill-bg-1" : "skill-bg-1-light"}`}
          style={{ width: "auto" }}
        >
          {experience.company}
        </h4>
        <h5
          className={`text-purple-200  mb-2 ${
            isDark ? "list-color" : "list-color-light"
          }`}
        >
          {experience.date}
        </h5>
        <h6 className={`${isDark ? "text-white" : "text-black"}`}>
          {experience.description}
        </h6>
      </div>
    </div>
  );
};

const Experience = () => {
  const { isDark } = useTheme();
  return (
    <div
      id="experience"
      className={`h-auto text-white py-12 bg-transparent ${
        isDark ? "experience" : "experience-light"
      }`}
    >
      <article class={`${isDark ? "card-bord" : "card-bord-light"}`}>
        <h2 className="text-3xl font-bold text-center experience-title">
          Experience
        </h2>
        <span class="span-bord top"></span>
        <span class="span-bord right"></span>
        <span class="span-bord bottom"></span>
        <span class="span-bord left"></span>
      </article>
      <div className="container mx-auto px-6">
        <div className="relative w-full">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full"></div>
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              side={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
