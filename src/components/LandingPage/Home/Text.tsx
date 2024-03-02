import "./text.css";
import { FaGithub } from "react-icons/fa";
const Text = () => {
  return (
    <div className="flex flex-col">
      <svg viewBox="30 50 720 350">
        <text
          x="50%"
          y="50%"
          dx="-2.82em"
          dy=".32em"
          text-anchor="middle"
          className="text-body"
        >
          Hello,
        </text>
        <text
          x="50%"
          y="50%"
          dx=".4em"
          dy="1.2em"
          text-anchor="middle"
          className="text-body"
        >
          I'm Teodor Marinov,
        </text>
        <text
          x="50%"
          y="50%"
          dx="-0.27em"
          dy="2.0em"
          text-anchor="middle"
          className="text-body"
        >
          Junior Developer!
        </text>
        <text
          x="50%"
          y="50%"
          dx="2em"
          dy=".32em"
          text-anchor="middle"
          className="text-body"
        ></text>
      </svg>

      <span className=" text-white  flex items-center">
        <FaGithub size={18} className="w-6" />
        <a
          className="underline hover:text-sky-700"
          onClick={(e) => e.stopPropagation()}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/teoMarinov"
        >
          GitHub
        </a>
      </span>
    </div>
  );
};

export default Text;
