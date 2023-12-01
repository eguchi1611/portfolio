import { getPostBySlug, getPostSlugs } from "@/lib/blogPost";
import Markdown from "react-markdown";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { content, meta } = getPostBySlug(params.slug);
  return (
    <div>
      <div className="py-8 text-center">
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
          {meta.title}
        </h1>
        <div>{meta.createdAt}</div>
      </div>
      <div className="prose prose-slate max-w-none dark:prose-invert">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
}

export const dynamicParams = false;

export function generateStaticParams() {
  const postSlugs = getPostSlugs();

  return postSlugs.map((slug) => ({ slug }));
}
