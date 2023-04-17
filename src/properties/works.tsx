import ImagePortfolio from "./works-image/portfolio.png";
import ImageSchoolFestival from "./works-image/school-festival.png";
import { WorkPost } from "@/@types/work-post";

export const works: WorkPost[] = [
  {
    slug: "school-festival",
    title: "文化祭ウェブサイト",
    thumbnail: ImageSchoolFestival,
  },
  {
    slug: "portfolio",
    title: "ポートフォリオ",
    thumbnail: ImagePortfolio,
  },
];
