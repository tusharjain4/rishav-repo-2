import React from 'react';

interface AboutData {
  about: string;
  experience: number;
  currentRole: string;
  highlights: string[];
}

interface AboutProps {
  data: AboutData;
}

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <section id="about" className="py-20 bg-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">{data.about}</p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {data.experience}+
                </div>
                <div className="text-slate-400 mt-2">Years Experience</div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-xl font-semibold text-white">{data.currentRole}</div>
                <div className="text-slate-400 mt-2">Current Role</div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Highlights</h3>
            <ul className="space-y-4">
              {data.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></span>
                  <span className="text-slate-300">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;