import WorkCard from "./work-card";
import { properties } from "@/lib/properties";

export default function WorkList() {
  return (
    <div>
      <div className="text-lg font-bold tracking-wider text-neutral-700">
        WORKS
      </div>
      <div className="mt-2 grid gap-4 sm:grid-cols-2 md:grid-cols-1">
        {properties.works.map((work) => (
          <div key={work.url}>
            <WorkCard {...work} />
          </div>
        ))}
      </div>
    </div>
  );
}
