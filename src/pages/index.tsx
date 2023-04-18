import { BlogPost } from "@/@types/blog-post";
import RecentPostList from "@/components/recent-post-list/recent-post-list";
import SiteDescription from "@/components/site-description";
import SiteTitle from "@/components/site-title";
import SkillList from "@/components/skills/skill-list";
import SocialMediaList from "@/components/sns-list/social-media-list";
import WorkList from "@/components/work-list/work-list";
import { getBlogPosts } from "@/lib/blog-posts";
import { GetStaticProps } from "next";
import Head from "next/head";

type Props = {
  blogPosts: BlogPost[];
};

export default function IndexPage({ blogPosts }: Props) {
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
          <SiteDescription />
        </div>
        <div className="mt-2">
          <SocialMediaList />
        </div>
        <div className="mt-4">
          <WorkList />
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

  return {
    props: {
      blogPosts: posts.articles,
    },
    revalidate: 10,
  };
};
