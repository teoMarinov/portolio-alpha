import clsx from "clsx";

interface SidebarElementProps {
  children: React.ReactNode;
  text: string;
  selected: boolean;
}

const SidebarElement: React.FC<SidebarElementProps> = ({
  children,
  text,
  selected,
}) => {
  return (
    <span
    id="icon-container"
      className={clsx(
        `
      py-2 
      px-2 
      rounded-xl 
      flex 
      items-center
      transition-all
      overflow-hidden
      cursor-pointer
    `,
        selected && "bg-opacity-20 bg-white",
        selected || "hover:bg-opacity-10 hover:bg-white"
      )}
    >
      <div>{children}</div>
      {/* <p className="pl-2 text-xl">
        {text}
      </p> */}
    </span>
  );
};

export default SidebarElement;
