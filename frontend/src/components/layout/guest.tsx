import Image from "next/image";
import React from "react";
import HamburgerMenu from "../button/hamburger";
import ThemeButton from "../button/theme";
import Navbar from "../navbar";

interface IProps {
  children?: React.ReactNode;
}
export default function GuestLayout(props: IProps) {
  const { children } = props;
  return (
    <>
      <Navbar>
        <Image
          className="m-auto"
          src="/images/logo-white.png"
          alt=""
          width={72}
          height={72}
        />
        <ThemeButton />
      </Navbar>
      <>{children}</>
    </>
  );
}
