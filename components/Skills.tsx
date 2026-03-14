import React from 'react';

interface SkillsData {
  skills: string[];
}

interface SkillsProps {
  data: SkillsData;
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h2>
        
        {data.skills && data.skills.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-4">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <span className="text-slate-200">{skill}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-500">Skills to be added soon.</p>
        )}
      </div>
    </section>
  );
};

export default Skills;