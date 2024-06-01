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
            <div className="uppercase tracking-widest text-gray-400 text-sm flex flex-col gap-1">
              <span>{exp.years}</span>
              <span className="text-xs"> {exp.location}</span>
            </div>
            <div>
              <div className="text-gray-500 text-sm uppercase text-right">
                <h3 className="text-base">{exp.company}</h3>
                <p>{exp.role}</p>
                <div className="text-xs text-gray-400 normal-case flex flex-wrap w-80 justify-end">
                  {exp.techs?.length > 0 &&
                    <span>TECH:{' '}</span>
                  }
                 
                  {exp.techs?.map((tech, i) => (
                    <span key={i}>
                      {' '}
                      {tech} {exp.techs.length - 1 !== i && '•'}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
