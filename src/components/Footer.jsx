"use client";
import { useTheme } from "@nextui-org/react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";
import Logo from "/public/logos.png";
import Image from "next/image";

const Footer = () => {
  const { isDark } = useTheme();
  return (
    <footer
      className={`text-white py-6 mt-40 ${
        isDark ? "footer-b" : "footer-b-light"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="md:flex md:justify-between md:items-center">
          <div className="text-2xl font-semibold mb-6 md:mb-0 footer-logo">
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                width={52}
                height={52}
                className="logo_img"
              />
            </Link>
          </div>
          <div className="md:mb-0 md:flex md:space-x-12">
            <div
              style={{ paddingTop: "20px" }}
              className="flex flex-col justify-center items-center space-x-6 footer-main-div"
            >
              <Link
                className="mx-0 footer-icon"
                href="https://www.linkedin.com/in/ivan-nikolic-750881186/"
                target="_blank"
              >
                <FaLinkedin size={36} />
              </Link>
              <Link
                href="https://github.com/ivann-2612"
                className="mx-0 footer-icon"
                target="_blank"
                style={{ margin: "auto" }}
              >
                <FaGithub size={36} />
              </Link>
              <Link
                href="https://dribbble.com/ivan2612"
                className="mx-0 footer-icon"
                target="_blank"
                style={{ margin: "auto" }}
              >
                <FaDribbble size={36} />
              </Link>
            </div>
            <ul className="footer-list">
              <li>
                <a
                  href="#about"
                  className="text-lg font-medium hover:text-gray-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-lg font-medium hover:text-gray-300"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="text-lg font-medium hover:text-gray-300"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#card"
                  className="text-lg font-medium hover:text-gray-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
