import { BlogPost } from "@/@types/blog-post";
import axios from "axios";

type APIResponse = {
  articles: BlogPost[];
};

export async function getBlogPosts(): Promise<APIResponse> {
  const ZENN_USER_NAME = process.env.ZENN_USER_NAME;

  if (!ZENN_USER_NAME) {
    throw ".env require ZENN_USER_NAME";
  }

  try {
    const url = `https://zenn.dev/api/articles?username=${ZENN_USER_NAME}&order=latest`;
    let response = await axios.get<APIResponse>(url);
    return response.data;
  } catch (error) {
    console.error("記事情報を取得できません");
    return { articles: [] };
  }
}
