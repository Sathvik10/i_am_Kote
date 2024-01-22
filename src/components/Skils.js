



const Skill = ({skill}) => {

    const {name, proficiency, max = 10} = skill;
    const percentage = Math.round((proficiency / max) * 100);
  
    return (
      <div className="flex flex-col">
        <span className="ml-2 text-sm font-medium">{name}</span>
        <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
          <div className="h-full rounded-full bg-orange-400" style={{width: `${percentage}%`}} />
        </div>
      </div>
    );
  };

const SkillGroup = ({skillGroup}) => {
    const {type, skill} = skillGroup;
    return (
      <div className="flex flex-col">
        <span className="text-center text-lg font-bold">{type}</span>
        <div className="flex flex-col gap-y-2">
          {skill.map((skill, index) => (
            <Skill key={`${skill.name}-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    );
  };

const Skills = ({ title, skills, id}) => {

    return (

        <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4" id={id}>
            <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-max">
                <h2 className="text-xl font-bold uppercase text-neutral-800">{title}</h2>
                <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
            </div>
            </div>
            <div className="col-span-1 flex flex-col md:col-span-3">
                <div className="flex flex-col">
                    <span className="text-center text-lg font-bold">{}</span>
                    <div className="flex flex-col gap-y-2">

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {skills.map((skillgroup, index) => (
                            <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;