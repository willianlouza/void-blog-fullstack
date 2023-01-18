import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import ThemeButton from "../button/theme";
import Navbar from "../navbar";
import HamburgerMenu from "../button/hamburger";
import Link from "next/link";
import { AuthContext } from "@/contexts/auth-context";

interface IProps {
  children?: React.ReactNode;
}
export default function AuthenticatedLayout(props: IProps) {
  const { children } = props;
  const { user, isAuthenticated } = useContext(AuthContext);
 
  if (!user) return null;

  return (
    <>
      <Navbar className="relative">
        <HamburgerMenu />
        <Link href="/" className="m-auto">
          <Image src="/images/logo-white.png" alt="" width={72} height={72} />
        </Link>

        <div className="flex place-items-center">
          <ThemeButton className="-translate-x-4" />
          <Link href="/profile">
            <div className="rounded-full overflow-hidden w-10 h-10">
              <Image
                className="w-full h-full object-cover"
                src={user.photo}
                alt="picture"
                width={72}
                height={72}
              />
            </div>
          </Link>
        </div>
      </Navbar>
      <>{children}</>
    </>
  );
}
