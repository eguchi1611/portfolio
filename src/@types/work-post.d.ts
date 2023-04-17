import { StaticImageData } from "next/image";

export type WorkPost = {
  title: string;
  slug: string;
  thumbnail: StaticImageData;
};
