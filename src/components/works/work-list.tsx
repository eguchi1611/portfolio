import Heading from "../elements/Heading";
import WorkCard from "./work-card";
import { properties } from "@/lib/properties";

export default function WorkList() {
  return (
    <div>
      <Heading level={2}>WORKS</Heading>
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
