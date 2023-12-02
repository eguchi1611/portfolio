"use client";

import {
  IconGraph,
  IconHome,
  IconPencil,
  IconTable,
} from "@tabler/icons-react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const options = [
  { label: "Home", href: "/", Icon: IconHome },
  { label: "Works", href: "/works", Icon: IconTable },
  { label: "Blog", href: "/posts", Icon: IconPencil },
  { label: "About", href: "/about", Icon: IconGraph },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-48 space-y-2 pt-8">
      <Image
        alt="eguchi.cc"
        src="/logo.svg"
        width={257.28}
        height={56.704}
        className="w-full"
        priority
      />
      <div className="divide-y">
        {options.map(({ label, href, Icon }) => (
          <Link
            key={label}
            href={href}
            className="flex items-center p-3 hover:text-teal-500"
          >
            <Icon
              className={clsx("mr-2", {
                "text-teal-500":
                  href !== "/" ? pathname.startsWith(href) : pathname === "/",
              })}
            />
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
