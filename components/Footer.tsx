import React from 'react';

interface FooterData {
  name: string;
}

interface FooterProps {
  data: FooterData;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-slate-400 mb-4 md:mb-0">
            &copy; {currentYear} {data.name}. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <span className="text-slate-500 text-sm">
              Built with Next.js & Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;