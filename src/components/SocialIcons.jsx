import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://github.com/ivann-2612"
        target="_blank"
        rel="noreferrer"
        className="hover:text-gray-200  list-color"
      >
        <FaGithub size={44} />
      </a>
      <a
        href="https://dribbble.com/ivan2612"
        target="_blank"
        rel="noreferrer"
        className="hover:text-gray-200  list-color"
      >
        <FaDribbble size={44} />
      </a>
      <a
        href="https://www.linkedin.com/in/ivan-nikolic-750881186/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-gray-200  list-color"
      >
        <FaLinkedin size={44} />
      </a>
    </div>
  );
};

export default SocialIcons;
