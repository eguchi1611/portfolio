import SkillCard, { Props as SkillCardProps } from "./skill-card";
import Image from "next/image";

const skills: SkillCardProps[] = [
  {
    icon: (
      <Image
        alt="java icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        width={24}
        height={24}
      />
    ),
    label: "Java",
    level: 5,
    tags: ["Spigot", "Swing"],
  },
  {
    icon: (
      <Image
        alt="nodejs icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        width={24}
        height={24}
      />
    ),
    label: "JavaScript",
    level: 2.5,
    tags: ["TypeScript", "React", "Node.js"],
  },
];

export default function SkillBoard() {
  return (
    <>
      <div className="text-lg text-neutral-700">スキル</div>
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
    </>
  );
}
