import { BlogPost } from "@/@types/blog-posts";
import { IconClock, IconHeart } from "@tabler/icons-react";
import { format } from "date-fns";
import Image from "next/image";

type Props = {
  post: BlogPost;
};

export default function PostCard({ post }: Props) {
  return (
    <a href="#" className="group flex items-center py-4">
      <Image
        alt="zenn logo"
        src="/zenn/logo-only.svg"
        width={24}
        height={24}
        className="mr-2"
      />
      <div>
        <div className="text-neutral-700 group-hover:underline">
          {post.title}
        </div>
        <div className="flex items-center text-neutral-500">
          <IconClock size={16} className="mr-1" />
          <div className="mr-2 text-sm">
            {format(new Date(post.published_at), "yyyy/MM/dd")}
          </div>
          <IconHeart size={16} className="mr-1" />
          <div className="text-sm">{post.liked_count}</div>
        </div>
      </div>
    </a>
  );
}
