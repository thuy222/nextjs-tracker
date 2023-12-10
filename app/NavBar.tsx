"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-50 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link, index) => {
          return (
            <Link
              className={classnames({
                "hover:text-zinc-800 transition-colors": true,
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
              })}
              href={link.href}
              key={index}
            >
              {link.label}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
