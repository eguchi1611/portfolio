import { BlogPost } from "@/@types/blog-posts";
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
        width={20}
        height={200}
        className="mr-2"
      />
      <div className="group-hover:underline">{post.title}</div>
    </a>
  );
}
