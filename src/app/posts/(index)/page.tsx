import { getPostBySlug, getPostSlugs } from "@/lib/blogPost";
import Link from "next/link";

export default function BlogPage() {
  const posts = getPostSlugs().map((slug) => getPostBySlug(slug));
  return (
    <div className="">
      {posts.map((post) => (
        <Link key={post.slug} href={"/posts/" + post.slug} className="">
          {post.meta.title}
        </Link>
      ))}
    </div>
  );
}
