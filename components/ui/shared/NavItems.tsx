import { headerLinks } from "@/constants/data";
import Link from "next/link";

export default function NavItems() {
  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        return (
          <li className=" text-md font-medium hover:underline">
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}
