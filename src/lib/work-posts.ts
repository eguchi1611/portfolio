import { WorkPost } from "@/@types/work-post";
import * as fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const worksDirectory = join(process.cwd(), "_works");

export const getAllSlugs = () => {
  const slugs = fs.readdirSync(worksDirectory);
  const realSlugs = slugs.map((slug) => slug.replace(/\.md$/, ""));
  return realSlugs;
};

export const getPostBySlug = (slug: string): WorkPost => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(worksDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { content, metadata: data, slug: realSlug };
};

export const getAllPosts = (): WorkPost[] => {
  const slugs = getAllSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug));
  return posts;
};
