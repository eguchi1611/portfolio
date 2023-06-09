import { WorkPost } from "@/@types/work-post";
import { IconFile } from "@tabler/icons-react";
import Image from "next/image";

type Props = WorkPost;

export default function WorkCard({ thumbnail, title, url }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      className="group block overflow-hidden rounded-lg border"
    >
      <div className="flex border-b p-3">
        <IconFile className="mr-4" />
        <div className="w-0 flex-1 truncate text-neutral-700 group-hover:underline">
          {title}
        </div>
      </div>
      <Image alt="thumbnail" src={thumbnail} width={1600} height={900} />
    </a>
  );
}
