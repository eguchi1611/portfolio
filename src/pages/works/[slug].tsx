import { WorkPostMetadata } from "@/@types/work-post";
import { markdownToHtml } from "@/lib/markdown-to-html";
import { getAllSlugs, getPostBySlug } from "@/lib/work-posts";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

type Props = {
  metadata: Partial<WorkPostMetadata>;
  html: string;
};

type Params = {
  slug: string;
};

export default function WorkPage({ metadata, html }: Props) {
  return (
    <div className="mx-auto max-w-3xl pt-4">
      <Link
        href="/"
        className="m-1 rounded p-3 text-sm text-neutral-700 hover:underline"
      >
        ホームに戻る
      </Link>
      <div
        className="prose prose-neutral prose-teal mt-4 px-4"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const { content, metadata } = getPostBySlug(params?.slug || "");
  const html = await markdownToHtml(content);
  return {
    props: { metadata, html },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const slugs = getAllSlugs();
  const realSlugs = slugs.map((slug) => slug.replace(/\.md$/, ""));

  return {
    paths: realSlugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};
