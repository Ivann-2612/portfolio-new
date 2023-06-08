"use client";
import { useTheme } from "@nextui-org/react";
import SocialIcons from "./SocialIcons";

const About = () => {
  const { isDark } = useTheme();
  return (
    <div
      id="about"
      style={{ margin: "auto" }}
      className="relative  flex items-center justify-center about-main-div"
    >
      <div className="container text-white px-6 md:px-12 about-div">
        <article class={`${isDark ? "card-bord" : "card-bord-light"}`}>
          <h2 className="text-3xl font-bold text-center ">About me</h2>
          <span class="span-bord top"></span>
          <span class="span-bord right"></span>
          <span class="span-bord bottom"></span>
          <span class="span-bord left"></span>
        </article>

        <div className="z-10 w-full  items-center justify-between  text-lg lg:flex">
          <div
            className={`bg-transparent rounded-lg shadow-lg px-5 py-6 sm:px-6 my-10 w-full  mx-auto about-section   mt-0 ${
              isDark ? "blur-background2" : "blur-background2-light"
            }`}
          >
            <div className="space-y-6">
              <p className="text-white">
                I started as a self-taught web developer and continued learning
                JS and React at IT Bootcamp. I have a strong will to progress
                and learn new technologies My interests are innovative design
                and optimum user experience.
              </p>
              <p className="text-white">
                I am a motivated and dedicated individual with a passion for web
                development. With a strong foundation as a self-taught web
                developer, I further honed my skills in JavaScript and React at
                IT Bootcamp. I have a relentless drive to progress and stay
                updated with the latest technologies. My interests lie in
                creating innovative designs and delivering optimal user
                experiences.
              </p>
              <h3 className="text-2xl font-semibold text-white">Skills:</h3>
              <div className="flex flex-wrap gap-y-5 justify-between items-end about-icons">
                <ul className="list-disc pl-5 list-color">
                  <li>HTML / CSS </li>
                  <li>StrapiJS / Directus CMS</li>
                  <li>Tailwind CSS / Bootstrap</li>
                  <li>JavaScript / TypeScript</li>
                  <li>React / Next.js</li>
                </ul>
                {/*<button className="bg-transparent border hover:bg-white hover:text-black font-bold py-2 px-4 rounded hover:border-none">
                  <Link href="/CV_Ivan-Nikolic.pdf" target="_blank">
                    Resume
                  </Link>
  </button>*/}
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
