import { BiSun, BiMoon } from "react-icons/bi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface IProps{
  className?: string;
}
export default function ThemeButton(props:IProps) {
  const {className} = props;
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (!mounted) setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <button className={className} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <BiSun className="w-8 h-8"/> : <BiMoon className="w-8 h-8"/>}
    </button>
  );
}
