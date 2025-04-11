import { Skill } from "@/lib/constants";

interface SkillProgressProps {
  skill: Skill;
}

const SkillProgress = ({ skill }: SkillProgressProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-1">
        <span className="text-neutral-700 dark:text-neutral-300">{skill.name}</span>
        <span className="text-neutral-500 dark:text-neutral-400 text-sm">{skill.level}</span>
      </div>
      <div className="h-1 bg-neutral-200 dark:bg-neutral-700 rounded-sm overflow-hidden">
        <div 
          className="h-full bg-primary rounded-sm" 
          style={{ width: `${skill.percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillProgress;
