import { WorkPost } from "@/@types/work-post";
import { IconFile } from "@tabler/icons-react";
import Link from "next/link";

type Props = WorkPost;

export default function WorkCard({ metadata, slug }: Props) {
  return (
    <Link href={`/works/${slug}`} className="group flex cursor-pointer p-3">
      <IconFile className="mr-4" />
      <div className="text-neutral-700 group-hover:underline">
        {metadata.title}
      </div>
    </Link>
  );
}
