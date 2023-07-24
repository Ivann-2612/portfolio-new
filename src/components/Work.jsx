"use client";
import { useTheme } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const projects = [
  {
    id: 1,
    title: "Finbet.rs",
    image: "/finbet1.png",
    desc: "We are a first class IT services provider for online gaming and sports betting industry.",
    skills: ["React ", ",", "Directus CMS"],
    link: "https://www.finbet.rs/",
  },
  {
    id: 2,
    title: "Gromada.games",
    image: "/gromada.png",
    desc: "Our creative studio grew around a strong tech core with more than two decades of b2b experience in the gaming industry. ",
    skills: ["React ", ",", "Directus CMS"],
    link: "https://gromada.games",
  },
  {
    id: 3,
    title: "Fingenuity.com",
    image: "/fin.png",
    desc: "Fingenuity is a group of companies with one common aim: to do extraordinary things with data. ",
    skills: ["HTML", ",", "CSS", ",", "NextJS", ",", "Directus CMS"],
    link: "https://fingenuity-test.fincoreltd.rs",
  },
  {
    id: 4,
    title: "Fincore.com",
    image: "/fincore.png",
    desc: "Fincore is a group of companies with one common aim: to do extraordinary things with data. ",
    skills: ["HTML", ",", "CSS", ",", "React", ",", "Directus CMS"],
    link: "https://www.fincore.com",
  },

  {
    id: 5,
    title: "Fingaming.com",
    image: "/fingaming.png",
    desc: "We are experts in online gaming. We have been providing extraordinary software and service to the gaming industry for 20 years. ",
    skills: ["HTML", ",", "CSS", ",", "React", ",", "Directus CMS"],
    link: "https://www.fingaming.com",
  },
  {
    id: 6,
    title: "Magicians Piksi and Zeka",
    image: "/piksi.png",
    desc: "The best magicians in the country",
    skills: ["HTML", ",", "CSS", ",", "NextJS"],
    link: "https://piksizeka.netlify.app",
  },
  {
    id: 7,
    title: "Splav Luz -Reka Sava",
    image: "/splav.png",
    desc: "Splav Luz -Reka Sava",
    skills: ["HTML", ",", "CSS", ",", "NextJS"],
    link: "https://splav.netlify.app/",
  }
];
const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
];
const Work = () => {
  const { isDark } = useTheme();
  return (
    <div id="work" className="bg-transparent text-white py-16">
      <div>
        <article class={`${isDark ? "card-bord" : "card-bord-light"}`}>
          <h2 className="text-3xl font-bold text-center ">My projects</h2>
          <span class="span-bord top"></span>
          <span class="span-bord right"></span>
          <span class="span-bord bottom"></span>
          <span class="span-bord left"></span>
        </article>

        <div style={{ margin: "auto" }} className="container">
          <Slide
            responsive={responsiveSettings}
            arrows={false}
            autoplay={true}
            transitionDuration={400}
            transition={`fade`}
            duration={5000}
            infinite={true}
            indicators={true}
            pauseOnHover={false}
            canSwipe={true}
          >
            {projects.map((project) => (
              <div
                style={{
                  objectFit: "cover",
                  width: "100%",
                  paddingInline: "20px",
                }}
                key={project.id}
                className="flex flex-col shadow-lg overflow-hidden card-div"
              >
                <div className="flex-shrink-0">
                  <Image
                    className="slider-imager"
                    src={project?.image}
                    alt={project.title}
                    width="400"
                    height="300"
                  />
                </div>
                <div className="flex-1 bg-transparent p-6 flex flex-col justify-between pw-bg">
                  <div className="flex-1">
                    <Link href={project.link}>
                      <div className="block mt-2 flex h-full flex-col justify-between">
                        <div>
                          <p className="text-xl font-semibold list-color">
                            {project.title}
                          </p>
                          <p className="mt-3 text-base">{project.desc}</p>
                        </div>
                        <div>
                          <p
                            style={{
                              fontSize: "15px",
                            }}
                            className="mt-6 p-2 text-base skill-bg but-hov"
                          >
                            {project.skills}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Work;
