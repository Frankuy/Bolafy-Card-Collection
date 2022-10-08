import { useRouter } from "next/router";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  const router = useRouter();

  return (
    <header className="px-6 py-4 backdrop-blur-sm bg-opacity-100 flex items-center justify-between sticky top-0 z-50">
      <Logo />
      <Nav
        text="Your Collection"
        href="/collection"
        active={router.pathname == "/collection"}
      />
    </header>
  );
};

export default Header;
