import WorkCard from "./work-card";
import { works } from "@/properties/works";

export default function WorkList() {
  return (
    <div>
      <div className="text-lg font-bold tracking-wider text-neutral-700">
        WORKS
      </div>
      <div className="mt-2">
        {works.map((work) => (
          <div key={work.slug} className="mt-4 first:mt-0">
            <WorkCard {...work} />
          </div>
        ))}
      </div>
    </div>
  );
}
