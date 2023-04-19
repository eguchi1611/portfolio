import SkillCard from "./skill-card";
import { properties } from "@/lib/properties";

export default function SkillList() {
  return (
    <div>
      <div className="text-lg font-bold tracking-wider text-neutral-700">
        SKILL
      </div>
      <div>
        {properties.skills.map((skill) => (
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
