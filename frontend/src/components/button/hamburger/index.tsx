import { useState } from "react";
import Menu from "../../menu";

interface IProps {
  className?: string;
}
export default function HamburgerMenu(props: IProps) {
  const { className } = props;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <button
        onClick={handleClick}
        className={`${className} w-8 h-6 flex flex-col place-content-between`}
      >
        <span
          className={`bg-white w-full h-0.5 origin-top-right ${
            open ? "-rotate-45 -translate-x-1" : ""
          } transition-all duration-200`}
        ></span>
        <span
          className={`bg-white w-full h-0.5 ${
            open ? "scale-x-0" : ""
          } transition-all duration-200`}
        ></span>
        <span
          className={`bg-white w-full h-0.5 origin-bottom-right ${
            open ? "rotate-45 -translate-x-1" : ""
          } transition-all duration-200`}
        ></span>
      </button>
      <Menu  isOpen={open}/>
    </>
  );
}
