import { markdownToHtml } from "@/lib/markdown-to-html";
import { getAllSlugs, getPostBySlug } from "@/lib/works-loader";
import { IconHome } from "@tabler/icons-react";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

type Props = {
  html: string;
  data: Record<string, any>;
};

type Params = {
  slug: string;
};

export default function WorkPage({ data, html }: Props) {
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
  const { content, data } = getPostBySlug(params?.slug || "");
  const html = await markdownToHtml(content);
  return {
    props: { data, html },
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
