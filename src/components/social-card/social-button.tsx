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
    <a className="group flex py-3 even:bg-neutral-50" href={href}>
      <div className="mr-4 group-hover:animate-spin">{icon}</div>
      <div className="font-bold text-neutral-700">{label}</div>
    </a>
  );
}
