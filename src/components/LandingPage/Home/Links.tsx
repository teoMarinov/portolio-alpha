interface LinksProps {
  children: React.ReactNode;
  text: string;
  link?: string;
  onClick?: () => void;
}

const Links = ({ children, text, link, onClick = () => {} }: LinksProps) => {
  return (
    <span className="  flex items-center">
      {children}
      <a
        className="underline hover:text-sky-700 text-2xl"
        onClick={(e) => {
          onClick();
          e.stopPropagation();
        }}
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        {text}
      </a>
    </span>
  );
};

export default Links;
