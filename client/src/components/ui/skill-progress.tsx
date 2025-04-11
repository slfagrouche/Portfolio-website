import { Skill } from "@/lib/constants";

interface SkillProgressProps {
  skill: Skill;
}

const SkillProgress = ({ skill }: SkillProgressProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-2">
        <span className="text-neutral-800 dark:text-neutral-200 font-medium">{skill.name}</span>
        <span className="text-primary dark:text-primary text-sm font-medium">{skill.level}</span>
      </div>
      <div className="h-2 bg-secondary/80 dark:bg-secondary/50 rounded-full overflow-hidden shadow-inner">
        <div 
          className="h-full bg-primary dark:bg-primary rounded-full relative"
          style={{ width: `${skill.percentage}%` }}
        >
          <div className="absolute inset-0 bg-white/20 dark:bg-white/10 opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillProgress;
