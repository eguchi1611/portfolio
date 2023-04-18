import WorkCard from "./work-card";
import propertiesJson from "@/properties.json";

export default function WorkList() {
  return (
    <div>
      <div className="text-lg font-bold tracking-wider text-neutral-700">
        WORKS
      </div>
      <div className="mt-2">
        {propertiesJson.works.map((work) => (
          <div key={work.url} className="mt-4 first:mt-0">
            <WorkCard {...work} />
          </div>
        ))}
      </div>
    </div>
  );
}
