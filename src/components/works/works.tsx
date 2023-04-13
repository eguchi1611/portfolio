import WorkCard from "./work-card";
import { ComponentProps } from "react";

const works: Array<ComponentProps<typeof WorkCard>> = [
  {
    title: "Test Work 1",
  },
  {
    title: "Test Work 2",
  },
  {
    title: "Test Work 3",
  },
];

export default function Works() {
  return (
    <div>
      <div className="text-lg font-bold tracking-wider text-neutral-700">
        WORKS
      </div>
      <div>
        {works.map((work) => (
          <div key={work.title} className="border-t first:border-t-0">
            <WorkCard {...work} />
          </div>
        ))}
      </div>
    </div>
  );
}
