"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "manfess",
    path: "/manfess",
  },
  {
    name: "project",
    path: "/project",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="absoulte flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
