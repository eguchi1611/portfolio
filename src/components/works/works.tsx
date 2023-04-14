import WorkCard from "./work-card";
import { WorkPost } from "@/@types/work-post";

type Props = {
  works: WorkPost[];
};

export default function Works({ works }: Props) {
  return (
    <div>
      <div className="text-lg font-bold tracking-wider text-neutral-700">
        WORKS
      </div>
      <div>
        {works.map((work) => (
          <div key={work.slug} className="border-t first:border-t-0">
            <WorkCard {...work} />
          </div>
        ))}
      </div>
    </div>
  );
}
