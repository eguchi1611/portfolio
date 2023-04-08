import { BlogPost } from "@/@types/blog-posts";
import Profile from "@/components/profile";
import RecentPosts from "@/components/recent-posts/recent-posts";
import SkillBoard from "@/components/skill-board/skill-board";
import { getBlogPosts } from "@/lib/blog-posts";
import { GetStaticProps } from "next";

type Props = {
  blogPosts: BlogPost[];
};

export default function IndexPage({ blogPosts }: Props) {
  return (
    <div className="mx-auto max-w-3xl md:flex md:pt-8">
      <div className="mt-8 px-4 md:w-80">
        <Profile />
      </div>
      <div className="flex-1 px-4">
        <div className="mt-8">
          <RecentPosts blogPosts={blogPosts} />
        </div>
        <div className="mt-4">
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
  };
};
