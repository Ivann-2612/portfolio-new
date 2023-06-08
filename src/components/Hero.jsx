"use client";
import { useTheme } from "@nextui-org/react";

const Hero = () => {
  const { isDark } = useTheme();
  return (
    <div className="relative flex items-center justify-center hdr hero-div">
      <svg
        className="absolute left-0 top-0 right-99 z-[-1]"
        viewBox="0 0 800 800"
      >
        <defs>
          <filter
            id="bbblurry-filter"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur
              stdDeviation="73"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              edgeMode="none"
              result="blur"
            ></feGaussianBlur>
          </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
          <ellipse
            rx="127.5"
            ry="184.5"
            cx="58.48854527148316"
            cy="363.1451261127883"
            fill="hsla(286, 59%, 10%, 1.00)"
          ></ellipse>
        </g>
      </svg>
      <div
        className={`container text-center text-white ${
          isDark ? "hero-title" : "hero-title-light"
        }`}
      >
        <div className="text-center hero-div-title p-8">
          <h1 className="md:text-6xl font-bold mb-4 hero-text">
            <span>Hi, my name is</span>
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span
              className={`${
                isDark ? "animated-gradient " : "animated-gradient-light"
              }`}
            >
              Ivan Nikolic.
            </span>{" "}
          </h2>
        </div>

        <p
          className={`text-left text-xl md:text-2xl mb-8 mt-4 ${
            isDark ? "hero-span" : "hero-span-light"
          }`}
        >
          I am a frontend developer with expertise in ReactJS. I am passionate
          about building high-quality, responsive, and user-friendly web
          applications.
        </p>
        <p
          className={`text-left text-xl md:text-2xl mb-8 mt-4 ${
            isDark ? "hero-span" : "hero-span-light"
          }`}
        >
          I have a strong understanding of web development principles and I am
          always seeking to learn and grow my skills.
        </p>
        <p
          className={`text-left text-xl md:text-2xl mb-8 mt-4 ${
            isDark ? "hero-span" : "hero-span-light"
          }`}
        >
          My experience in the field includes working on a range of projects,
          from small-scale websites to complex web applications. I am proficient
          in HTML, CSS, JavaScript, and ReactJS, and have a solid understanding
          of web development best practices, including accessibility,
          performance, and SEO.
        </p>
        <p
          className={`text-left text-xl md:text-2xl mb-8 mt-4 ${
            isDark ? "hero-span" : "hero-span-light"
          }`}
        >
          I take pride in my work and strive to deliver projects that meet the
          highest standards of quality and functionality. I am a strong
          communicator and work well in a team environment, collaborating with
          designers, developers, and project managers to deliver successful
          projects on time and within budget.
        </p>
      </div>
    </div>
  );
};

export default Hero;
