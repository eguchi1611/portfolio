import SkillCard, { Props as SkillCardProps } from "./skill-card";
import Image from "next/image";

const skills: SkillCardProps[] = [
  {
    icon: (
      <Image
        alt="javascript icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        width={24}
        height={24}
      />
    ),
    label: "JavaScript",
    level: 5,
    tags: ["Node.js", "TypeScript", "Electron"],
  },
  {
    icon: (
      <Image
        alt="react icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        width={24}
        height={24}
      />
    ),
    label: "React",
    level: 5,
    tags: ["Next.js", "Vite"],
  },
  {
    icon: (
      <Image
        alt="HTML icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        width={24}
        height={24}
      />
    ),
    label: "HTML",
    level: 5,
    tags: [],
  },
  {
    icon: (
      <Image
        alt="css icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        width={24}
        height={24}
      />
    ),
    label: "CSS Frameworks",
    level: 5,
    tags: ["SCSS", "Bootstrap", "Bulma"],
  },
  {
    icon: (
      <Image
        alt="css icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        width={24}
        height={24}
      />
    ),
    label: "React UI Frameworks",
    level: 5,
    tags: ["Tailwind CSS", "Chakra UI", "Material UI"],
  },
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
    level: 4.5,
    tags: ["Spigot", "Swing", "Eclipse"],
  },
  {
    icon: (
      <Image
        alt="csharp icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
        width={24}
        height={24}
      />
    ),
    label: "C#",
    level: 2,
    tags: ["WPF"],
  },
  {
    icon: (
      <Image
        alt="ruby icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg"
        width={24}
        height={24}
      />
    ),
    label: "Ruby",
    level: 2,
    tags: [],
  },
  {
    icon: (
      <Image
        alt="ruby icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
        width={24}
        height={24}
      />
    ),
    label: "C",
    level: 1,
    tags: [],
  },
  {
    icon: (
      <Image
        alt="firebase icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
        width={24}
        height={24}
      />
    ),
    label: "Firebase",
    level: 4.5,
    tags: ["Authentication", "Cloud Database", "Cloud Functions"],
  },
  {
    icon: (
      <Image
        alt="amazon web services icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
        width={24}
        height={24}
      />
    ),
    label: "Amazon Web Services",
    level: 2.5,
    tags: ["Amplify", "Lightsail"],
  },
  {
    icon: (
      <Image
        alt="database icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        width={24}
        height={24}
      />
    ),
    label: "Database",
    level: 2.5,
    tags: ["MySQL", "PostgreSQL", "GraphQL"],
  },
  {
    icon: (
      <Image
        alt="git icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        width={24}
        height={24}
      />
    ),
    label: "Git",
    level: 3.5,
    tags: ["GitHub"],
  },
  {
    icon: (
      <Image
        alt="git icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
        width={24}
        height={24}
      />
    ),
    label: "Linux",
    level: 3,
    tags: ["Ubuntu"],
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
