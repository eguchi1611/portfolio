import { BlogPost } from "@/@types/blog-post";
import { WorkPost } from "@/@types/work-post";
import RecentPostList from "@/components/recent-post-list/recent-post-list";
import SiteDescription from "@/components/site-description";
import SiteTitle from "@/components/site-title";
import SkillList from "@/components/skill-list/skill-list";
import SocialMediaList from "@/components/social-media-list/social-media-list";
import WorkList from "@/components/work-list/work-list";
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
          <SocialMediaList />
        </div>
        <div className="mt-4">
          <WorkList works={works} />
        </div>
      </div>
      <div className="flex-1 px-4">
        <div className="mt-4">
          <RecentPostList blogPosts={blogPosts} />
        </div>
        <div className="mt-4">
          <SkillList />
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
