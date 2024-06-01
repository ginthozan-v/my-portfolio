import { experience } from '@/constants/data';
import React from 'react';

const Experience = () => {
  return (
    <section className="min-h-screen max-w-4xl mx-auto w-full py-10">
      <h3 className="uppercase tracking-[10px] text-gray-400 font-thin">
        Experience
      </h3>
      <div className="mt-10 w-full">
        {experience.toReversed().map((exp) => (
          <div
            key={exp.id}
            className="flex align-top justify-between py-10 border-b border-gray-300"
          >
            <span className="uppercase tracking-widest text-gray-400 text-sm">
              {exp.years}
            </span>
            <div>
              <h3 className="text-gray-500 uppercase text-right">{exp.company}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
