import Heading from "../elements/Heading";
import RecentPostCard from "./recent-post-card";
import { BlogPost } from "@/@types/blog-post";

type Props = {
  blogPosts: BlogPost[];
};

export default function RecentPostList({ blogPosts }: Props) {
  return (
    <div>
      <Heading level={2}>RECENT POSTS</Heading>
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
