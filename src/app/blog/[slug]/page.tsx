import { getPostBySlug, getPostSlugs } from "@/lib/blogPost";
import Markdown from "react-markdown";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { content, meta } = getPostBySlug(params.slug);
  return (
    <div className="prose prose-slate max-w-none">
      <Markdown>{content}</Markdown>
    </div>
  );
}

export const dynamicParams = false;

export function generateStaticParams() {
  const postSlugs = getPostSlugs();

  return postSlugs.map((slug) => ({ slug }));
}
