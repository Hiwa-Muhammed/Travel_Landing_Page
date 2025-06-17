import { NAV_LINKS } from "@/constants/constants.index";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/home">
        <Image src="/nira_travel_logo.jpg" alt="Nira Travel Logo" width={100} height={100} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex ">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <MobileNav />
    </nav>
  );
};

export default Navbar;
