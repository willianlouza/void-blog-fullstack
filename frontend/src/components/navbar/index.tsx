import React from "react";
interface IProps{
  className?:string;
  children?:React.ReactNode;
}
export default function Navbar(props:IProps) {
  const{className = "", children} = props;
  return (
    <div className={`z-30 fixed top-0 left-0 w-full p-4 bg-black shadow-md shadow-[#0005] text-white font-serif flex place-items-center`}>
     {children}
    </div>
  );
}
