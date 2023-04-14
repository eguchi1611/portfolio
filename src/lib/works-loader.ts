import * as fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const worksDirectory = join(process.cwd(), "_works");

export const getAllSlugs = () => {
  return fs.readdirSync(worksDirectory);
};

export const getPostBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(worksDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { data, content };
};
