import { getPostBySlug, getPostSlugs } from "@/lib/blogPost";
import Image from "next/image";
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
      {meta.thumbnail && (
        <div className="relative aspect-[4/3] overflow-hidden rounded">
          <Image alt="" src={meta.thumbnail} sizes="100vw" fill />
        </div>
      )}
      <div className="prose prose-slate mt-4 max-w-none dark:prose-invert">
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
