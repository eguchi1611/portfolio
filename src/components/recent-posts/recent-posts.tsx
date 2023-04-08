import PostCard from "./post-card";
import { BlogPost } from "@/@types/blog-posts";

type Props = {
  blogPosts: BlogPost[];
};

export default function RecentPosts({ blogPosts }: Props) {
  return (
    <>
      <div className="text-lg text-neutral-700">最近の投稿</div>
      <div>
        {blogPosts.map((post) => (
          <div key={post.slug} className="border-t first:border-t-0">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </>
  );
}