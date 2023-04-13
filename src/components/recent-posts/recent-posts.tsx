import RecentPostCard from "./recent-post-card";
import { BlogPost } from "@/@types/blog-posts";

type Props = {
  blogPosts: BlogPost[];
};

export default function RecentPosts({ blogPosts }: Props) {
  return (
    <div>
      <div className="text-lg font-bold tracking-wider text-neutral-700">
        RECENT POSTS
      </div>
      <div>
        {blogPosts.slice(0, 3).map((post) => (
          <div key={post.slug} className="border-t first:border-t-0">
            <RecentPostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
