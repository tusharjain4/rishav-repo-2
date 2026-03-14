import React from 'react';
import Image from 'next/image';

interface HeroData {
  name: string;
  role: string;
  tagline: string;
  heroImageUrl: string;
}

interface HeroProps {
  data: HeroData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-600/10 blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {data.name}
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">{data.role}</h2>
            <p className="text-lg text-slate-400 max-w-2xl">{data.tagline}</p>
          </div>
          
          {data.heroImageUrl && (
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-cyan-500 to-purple-500 p-1">
                <Image
                  src={data.heroImageUrl}
                  alt={data.name}
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;