import {
  IconArticle,
  IconGraph,
  IconHome,
  IconTable,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const options = [
  { label: "Home", href: "/", Icon: IconHome },
  { label: "Works", href: "/works", Icon: IconTable },
  { label: "Blog", href: "/posts", Icon: IconArticle },
  { label: "About", href: "/about", Icon: IconGraph },
];

export default function Sidebar() {
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
          <Link key={label} href={href} className="flex items-center p-3">
            <Icon className="mr-2" />
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
