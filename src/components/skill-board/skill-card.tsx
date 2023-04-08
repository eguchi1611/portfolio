import { Icon123 } from "@tabler/icons-react";
import { ReactNode } from "react";

export type Props = {
  icon: ReactNode;
  label: string;
};

export default function SkillCard({ icon, label }: Props) {
  return (
    <div className="group group flex cursor-pointer items-center py-3">
      <div className="mr-4">{icon}</div>
      <div className="text-neutral-700">{label}</div>
      <div className="ml-auto rounded p-1 text-xs text-neutral-500 transition-colors group-hover:bg-neutral-700 group-hover:text-neutral-100">
        詳細
      </div>
    </div>
  );
}
