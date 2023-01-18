import { AuthContext } from "@/contexts/auth-context";
import { useContext } from "react";

interface IProps {
  text?: string;
  className?:string;
}
export default function ButtonLogout(props: IProps) {
  const { text = "Sair", className="" } = props;
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };
  return (
    <button
      onClick={handleLogout}
      className={`${className} font-serif text-red-400 w-full after:block after:h-0.5 after:w-full after:scale-x-0 after:bg-red-400 hover:after:scale-x-100 after:transition-transform after:duration-200`}
    >
      {text}
    </button>
  );
}
