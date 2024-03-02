import Links from "./Links";
import "./text.css";
import { FaGithub } from "react-icons/fa";
import { PiNotepad } from "react-icons/pi";
import { GrDocumentDownload } from "react-icons/gr";

const Text = () => {
  return (
    <div className="flex flex-col z-10">
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

      <div className="flex gap-10">
        <Links link="https://github.com/teoMarinov" text="GitHub">
          <FaGithub size={26} className="w-10" />
        </Links>
        <Links link="" text="About me">
          <PiNotepad size={30} className="w-10" />
        </Links>
        <Links link="" text="Download my CV">
        <GrDocumentDownload size={26} className="w-10" />
        </Links>
      </div>
    </div>
  );
};

export default Text;
