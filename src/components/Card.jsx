"use client";
import { useTheme } from "@nextui-org/react";
import SocialIcons from "./SocialIcons";
import { ContactForm } from "./ContactForm";
import Link from "next/link";

const Card = () => {
  const { isDark } = useTheme();
  return (
    <>
      {/*<h2 className="text-2xl font-bold mb-2 text-center">
        Check out my socials below!
  </h2>*/}
      <div
        id="card"
        className={`container bg-transparent  p-8 shadow-lg text-white w-full  mx-auto mt-8 ${
          isDark ? "cc-bg" : "cc-bg-light"
        } blur-background my-blur`}
      >
        <div className="flex flex-wrap justify-between items-center card-item-div">
          <div className="flex flex-wrap flex-col justify-between items-center">
            <h2 className="text-2xl font-bold mb-2">Ivan Nikolic</h2>
            <p className="text-sm mb-4">Frontend Developer</p>
            <button className="skill-bg  text-white px-4 py-2 rounded shadow hover:bg-gray-100 hover:text-black transition-colors duration-200">
              <Link href="/CV_Ivan-Nikolic.pdf" target="_blank">
                Resume
              </Link>
            </button>
          </div>
          <SocialIcons />
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default Card;
