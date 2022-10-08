import Link from "next/link";

interface NavProps {
  href: string;
  text: string;
  active: boolean;
}

const Nav = ({ href, text, active }: NavProps) => {
  return (
    <Link href={href}>
      <a
        className={`${
          active ? "text-white" : "text-gray-400"
        } transition-all font-bold hover:text-gray-100`}
      >
        {text}
      </a>
    </Link>
  );
};

export default Nav;
