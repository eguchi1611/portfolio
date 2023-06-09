import {
  IconStar,
  IconStarFilled,
  IconStarHalfFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  icon: string;
  label: string;
  level: number;
  tags: string[];
};

export default function SkillCard({ icon, label, level, tags }: Props) {
  return (
    <div className="flex items-center p-3">
      <div className="mr-4 min-w-max">
        <Image
          alt={label.toLowerCase() + " icon"}
          src={icon}
          width={24}
          height={24}
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center">
          <div className="text-neutral-700">{label}</div>
          <div className="ml-auto flex text-yellow-300">
            {[...Array(Math.floor(level))].map((_value, index) => (
              <IconStarFilled key={index} size={20} />
            ))}
            {!Number.isInteger(level) ? <IconStarHalfFilled size={20} /> : null}
            {[...Array(Math.floor(5 - level))].map((_value, index) => (
              <IconStar key={index} size={20} />
            ))}
          </div>
        </div>
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded bg-neutral-200 px-2 py-1 text-xs text-neutral-700"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
