import { skills } from "./data-skills";
import SkillCard from "./skill-card";

export default function SkillSheet() {
  return (
    <div>
      <div className="text-lg font-bold tracking-wider text-neutral-700">
        SKILL
      </div>
      <div>
        {skills.map((skill) => (
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
