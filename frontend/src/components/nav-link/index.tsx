import Link from "next/link";

interface IProps {
  href: string;
  text: string;
  className?:string;
}
export default function NavLink(props: IProps) {
  const { href, text, className="" } = props;

  return <Link href={href} className={`${className} font-serif after:block after:h-0.5 after:w-full after:scale-x-0 after:bg-white hover:after:scale-x-100 after:transition-transform after:duration-200`}>{text}</Link>;
}
