import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/constants/constants.index";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/menu.svg"
          alt="menu"
          height={32}
          width={32}
          className="inline-block cursor-pointer lg:hidden"
        />
      </SheetTrigger>
      <SheetContent side="left" className="bg-white overflow-y-auto ">
        <SheetTitle>
          <Link href="/home">
            <Image src="hilink-logo.svg" alt="logo" width={74} height={29} />
          </Link>
        </SheetTitle>
        <nav className="flex flex-col h-full max-container items-start mt-12 justify-between p-2 ">
          <ul className="flex flex-col gap-12">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-18 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <div className="flexCenter mt-2 flex w-full">
            <Button
              type="button"
              title="Login"
              icon="/user.svg"
              variant="btn_dark_green"
              full
            />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
