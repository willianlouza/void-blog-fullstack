import React from "react";

interface IProps {
  type?: "button" | "reset" | "submit";
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}
export default function ButtonPrimary(props: IProps) {
  const { type = "button", onClick, className, children } = props;
  return (
    <button
      type={type}
      className={`${className} font-medium border bg-black dark:bg-white text-white dark:text-black py-2 px-6 rounded-md hover:bg-transparent dark:hover:bg-transparent hover:text-black dark:hover:text-white border-black dark:border-white transition-all duration-150`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
