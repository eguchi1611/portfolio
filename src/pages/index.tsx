import { BlogPost } from "@/@types/blog-post";
import { WorkPost } from "@/@types/work-post";
import RecentPosts from "@/components/recent-posts/recent-posts";
import SiteDescription from "@/components/site-description";
import SiteTitle from "@/components/site-title";
import SkillSheet from "@/components/skill-sheet/skill-sheet";
import SocialMedia from "@/components/social-media/social-media";
import Works from "@/components/works/works";
import { getBlogPosts } from "@/lib/blog-posts";
import { getProperties } from "@/lib/properties";
import { getAllPosts } from "@/lib/work-posts";
import { GetStaticProps } from "next";
import Head from "next/head";

type Props = {
  blogPosts: BlogPost[];
  description: string;
  works: WorkPost[];
};

export default function IndexPage({ blogPosts, description, works }: Props) {
  return (
    <div className="mx-auto max-w-3xl md:flex md:pt-8">
      <Head>
        <title>Keita ITO</title>
        <meta
          name="description"
          content="Keita ITOのポートフォリオです。趣味でプログラミングをしています。"
        />
      </Head>
      <div className="px-4 md:w-80">
        <div className="mt-4">
          <SiteTitle />
        </div>
        <div className="mt-2">
          <SiteDescription description={description} />
        </div>
        <div className="mt-2">
          <SocialMedia />
        </div>
        <div className="mt-4">
          <Works works={works} />
        </div>
      </div>
      <div className="flex-1 px-4">
        <div className="mt-4">
          <RecentPosts blogPosts={blogPosts} />
        </div>
        <div className="mt-4">
          <SkillSheet />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getBlogPosts();

  const { description } = getProperties();

  const workPosts = getAllPosts();

  return {
    props: {
      blogPosts: posts.articles,
      description: description,
      works: workPosts,
    },
    revalidate: 10,
  };
};
