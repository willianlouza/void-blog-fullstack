import React, { forwardRef, Ref } from "react";
import ButtonLogout from "../button/logout";
import NavLink from "../nav-link";

interface IProps {
  isOpen: boolean;
}

const Menu: React.ForwardRefRenderFunction<HTMLDivElement, IProps> = (
  props: IProps,
  ref: Ref<HTMLDivElement>
) => {
  const { isOpen } = props;
  return (
    <div
      ref={ref}
      className={`absolute overflow-hidden left-0 top-full z-10 w-48 bg-black/50  backdrop-blur-sm h-screen transition-all duration-200 ease-in-out ${
        isOpen ? "w-48" : "w-0"
      }`}
    >
      <nav className="p-4 leading-loose text-xl text-center block min-w-fit">
        <ul>
          <li>
            <NavLink href="/" text="Início" />
          </li>
          <li>
            <NavLink href="/post/write" text="Escrever" />
          </li>
          <li>
            <NavLink href="/dashboard" text="Meus Posts" />
          </li>
          <li>
            <NavLink href="/profile" text="Perfil" />
          </li>
          <li>
            <ButtonLogout />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default forwardRef(Menu);
