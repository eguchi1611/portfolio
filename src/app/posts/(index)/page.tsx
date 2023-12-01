import { getPostBySlug, getPostSlugs } from "@/lib/blogPost";

export default function BlogPage() {
  const posts = getPostSlugs().map((slug) => getPostBySlug(slug));
  return (
    <div>
      {posts.map((post) => (
        <div key={post.slug}>{post.meta.title}</div>
      ))}
    </div>
  );
}
