import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo.svg";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className=" wrapper flex items-center  justify-between">
        <Link href={"/"} className=" w-36 flex items-center gap-3">
          <Image
            src={logo}
            alt="Biznez.lk Event Platform"
            width={30}
            height={30}
          />
          <span>
            <h1 className=" font-serif italic text-xl font-bold">Events</h1>
          </span>
        </Link>

        <SignedIn>
          <nav className=" md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>
        <div className=" flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="" size={"lg"}>
              <Link href="/sign-in">Log In</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}
