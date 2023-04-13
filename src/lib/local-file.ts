import * as fs from "fs";
import matter from "gray-matter";

export const getMarkdownText = async (path: string) => {
  const text = await getText(path);
  const { data, content } = matter(text);

  return { data, content };
};

export const getText = async (path: string) => {
  const fileContents = fs.readFileSync(path, "utf8");
  return fileContents;
};
