import { IoIosHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdOutlineMessage } from "react-icons/md";
import SidebarElement from "./SidebarElement";
const Sidebar = () => {
  return (
    <div
      className="
        w-24 h-full 
      bg-purple-600 
        hover:w-60 
        transition-all
        flex 
        flex-col 
        justify-center 
        items-center 
        text-white"
        id="div-to-hover"
    >
      <div className="gap-y-12 flex flex-col">
        <SidebarElement selected={true} text="Home">
          <IoIosHome size={44} />
        </SidebarElement>

        <SidebarElement selected={false} text="About me">
          <CgProfile size={44} />
        </SidebarElement>

        <SidebarElement selected={false} text="Languages">
          <FaCode size={44} />
        </SidebarElement>

        <SidebarElement selected={false} text="Projects">
          <GrProjects size={44} />
        </SidebarElement>

        <SidebarElement selected={false} text="Contact">
          <MdOutlineMessage size={48} />
        </SidebarElement>
      </div>
    </div>
  );
};

export default Sidebar;
