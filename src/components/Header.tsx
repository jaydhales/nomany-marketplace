import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import { FC } from "react";

const Header = () => {
  return (
    <div className="bg-white">
      <header className="flex items-center justify-between px-5 py-2  screen">
        <Link href="/">
          <Image src="/assets/logo.png" alt="Logo" width="173" height="54" />
        </Link>

        <SearchBar />
        <nav className="flex gap-4">
          {[
            ["profile", "Profile"],
            ["message", "Message"],
            ["orders", "Orders"],
            ["cart", "My Cart"],
          ].map(([path, title]) => (
            <NavLink path={path} title={title} key={path} />
          ))}
        </nav>
      </header>
    </div>
  );
};

interface Nav {
  path: string;
  title: string;
}

export const NavLink: FC<Nav> = ({ path, title }) => (
  <Link
    href={path}
    className="flex flex-col justify-between text-center text-xs text-gray-500"
  >
    <Image
      src={`/assets/icons/${path}.png`}
      alt="icon"
      width={20}
      height={20}
      className="mx-auto mb-1.5"
    />
    <p>{title}</p>
  </Link>
);

export default Header;
