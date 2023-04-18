import SkillCard from "./skill-card";
import propertiesJson from "@/properties.json";

export default function SkillList() {
  return (
    <div>
      <div className="text-lg font-bold tracking-wider text-neutral-700">
        SKILL
      </div>
      <div>
        {propertiesJson.skills.map((skill) => (
          <div key={skill.label} className="border-t first:border-t-0">
            <SkillCard
              icon={skill.icon}
              label={skill.label}
              level={skill.level}
              tags={skill.tags}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
