import Image from "next/image";
import { PropsWithChildren, ReactNode } from "react";

type Props = {
  label: string;
  icon: string;
  href: string;
};

export default function SocialMediaCard({
  label,
  icon,
  href,
}: PropsWithChildren<Props>) {
  return (
    <a className="group flex p-3" href={href} target="_blank">
      <div className="mr-4">
        <Image
          alt={label.toLowerCase() + " icon"}
          src={icon}
          width={24}
          height={24}
        />
      </div>
      <div className="font-bold text-neutral-700 transition-[letter-spacing] group-hover:underline">
        {label}
      </div>
    </a>
  );
}
