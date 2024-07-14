"use client";

import { usePathname } from "next/navigation";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "../navigation-menu";
import Link from "next/link";

type Props = {
  path: string;
  text: string;
};

export const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname();
  return (
    <NavigationMenuItem>
      <Link href={path} legacyBehavior passHref>
        <NavigationMenuLink
          className={`${navigationMenuTriggerStyle()} ${
            pathName == path ? "bg-accent" : ""
          }`}
        >
          {text}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

export default ActiveLink;
