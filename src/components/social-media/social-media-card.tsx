import { PropsWithChildren, ReactNode } from "react";

export type Props = {
  label: string;
  icon: ReactNode;
  href: string;
};

export default function SocialButton({
  label,
  icon,
  href,
}: PropsWithChildren<Props>) {
  return (
    <a className="group flex p-3" href={href} target="_blank">
      <div className="mr-4">{icon}</div>
      <div className="font-bold text-neutral-700 transition-[letter-spacing] group-hover:underline">
        {label}
      </div>
    </a>
  );
}
