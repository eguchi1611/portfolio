import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export default function Heading({ level, children }: PropsWithChildren<Props>) {
  return (
    <div
      className={clsx({
        "text-lg font-bold tracking-wider text-neutral-700": level === 2,
      })}
    >
      {children}
    </div>
  );
}
