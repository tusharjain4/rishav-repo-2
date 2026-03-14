import React from 'react';

interface ContactInfo {
  email: string;
}

interface ContactData {
  contact: ContactInfo;
}

interface ContactProps {
  data: ContactData;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        
        <div className="max-w-xl mx-auto text-center">
          <p className="text-slate-400 mb-8">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
          
          <a
            href={`mailto:${data.contact.email}`}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {data.contact.email}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;