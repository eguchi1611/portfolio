import { StaticImageData } from "next/image";

export type WorkPost = {
  title: string;
  url: string;
  thumbnail: StaticImageData;
};
