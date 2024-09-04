import Link from "next/link";
import { Button } from "./ui/button";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            YIPz <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop navbar */}
        <div className="hidden xl:flex items-center gap-8 ">
          <Navbar />
          <Link href="https://wa.me/6282280589373" passHref>
            <Button
              className="rounded-full hover:bg-accent hover:text-black"
              // target="_blank" // Membuka link di tab baru
            >
              Hire me!
            </Button>
          </Link>
        </div>

        {/* mobile navbar */}
        <nav className="xl:hidden">
          <MobileNav />
        </nav>
      </div>
    </header>
  );
};

export default Header;
