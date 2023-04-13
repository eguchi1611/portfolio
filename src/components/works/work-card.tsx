import { IconFile } from "@tabler/icons-react";

type Props = {
  title: string;
};

export default function WorkCard({ title }: Props) {
  return (
    <div className="group flex cursor-pointer p-3">
      <IconFile className="mr-4" />
      <div className="text-neutral-700 group-hover:underline">{title}</div>
    </div>
  );
}
