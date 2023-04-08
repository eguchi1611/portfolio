import SocialButton, { Props as SocialButtonProps } from "./social-button";
import {
  IconBrandGithubFilled,
  IconBrandTwitterFilled,
} from "@tabler/icons-react";

const socials: SocialButtonProps[] = [
  {
    icon: <IconBrandTwitterFilled className="text-[#1DA1F2]" />,
    label: "Twitter",
    href: "https://twitter.com/kk79it",
  },
  {
    icon: <IconBrandGithubFilled className="text-[#24292f]" />,
    label: "GitHub",
    href: "https://github.com/kk79it",
  },
  { icon: <IconZenn />, label: "Zenn", href: "https://zenn.dev/kk79it" },
];

export default function SocialCard() {
  return (
    <div>
      {socials.map((social) => (
        <div
          key={social.href}
          className="border-t border-neutral-200 first:border-t-0"
        >
          <SocialButton
            href={social.href}
            icon={social.icon}
            label={social.label}
          />
        </div>
      ))}
    </div>
  );
}

function IconZenn() {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 88.3 88.3"
      xmlSpace="preserve"
      width={24}
      height={24}
    >
      <g fill="#3EA8FF">
        <path
          d="M3.9,83.3h17c0.9,0,1.7-0.5,2.2-1.2L69.9,5.2c0.6-1-0.1-2.2-1.3-2.2H52.5c-0.8,0-1.5,0.4-1.9,1.1L3.1,81.9
		C2.8,82.5,3.2,83.3,3.9,83.3z"
        />
        <path
          d="M62.5,82.1l22.1-35.5c0.7-1.1-0.1-2.5-1.4-2.5h-16c-0.6,0-1.2,0.3-1.5,0.8L43,81.2c-0.6,0.9,0.1,2.1,1.2,2.1
		h16.3C61.3,83.3,62.1,82.9,62.5,82.1z"
        />
      </g>
    </svg>
  );
}
