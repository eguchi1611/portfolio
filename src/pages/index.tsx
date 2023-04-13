import { BlogPost } from "@/@types/blog-posts";
import SocialCard from "@/components/media-card/social-card-parent";
import RecentPosts from "@/components/recent-posts/recent-posts-parent";
import SiteDescription from "@/components/site-description";
import SiteTitle from "@/components/site-title";
import SkillBoard from "@/components/skill-sheet/skill-sheet-parent";
import Works from "@/components/works/works";
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
      <div className="mt-8 px-4 md:w-80">
        <SiteTitle />
        <div className="mt-2">
          <SiteDescription />
        </div>
        <div className="mt-2">
          <SocialCard />
        </div>
        <div className="mt-2">
          <Works />
        </div>
      </div>
      <div className="mt-8 flex-1 px-4">
        <RecentPosts blogPosts={blogPosts} />
        <div className="mt-8">
          <SkillBoard />
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
