import { join } from "path";
import * as fs from "fs";
import matter from "gray-matter";
import { format } from "date-fns";

const postsDirectory = join(process.cwd(), "posts");

export function getPostBySlug(slug: string) {
  const fullPath = join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const meta: Metadata = {
    title: data.title || "No title",
    date: data.date ? format(new Date(data.date), "M月d日") : "No date",
  };

  return { content, meta, slug };
}

type Metadata = {
  title: string;
  date: string;
};

export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .map((filename) => filename.replace(/\.md$/, ""));
}
