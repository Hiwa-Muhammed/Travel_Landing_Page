import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-2 border-red-500 flex-between max-container padding-container relative z-30 py-5">
      <Link href="/home">
        <Image src="hilink-logo.svg" alt="logo" width={74} height={29} />

        <ul className="hidden h-full gap-12 lg:flex "></ul>
      </Link>
    </nav>
  );
};

export default Navbar;
