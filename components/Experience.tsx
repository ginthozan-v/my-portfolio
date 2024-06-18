import React from 'react';
import gsap from 'gsap';

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

import { experience } from '@/constants/data';
gsap.registerPlugin(ScrollTrigger);

const Experience = ({ handleOpenModel }: any) => {
  // useGSAP(() => {
  //   gsap.to('.g_exp', {
  //     y: 3,
  //     opacity: 1,
  //     ease: "power2.in",
  //     scrollTrigger: {
  //       trigger: '.g_exp',
  //       toggleActions: 'restart reverse',
  //       start: 'top 100%',
  //     },
  //   });
  // }, []);

  return (
    <section className="min-h-screen max-w-4xl mx-auto w-full py-10">
      <h3 className="uppercase tracking-[10px] text-gray-400 font-thin">
        Experience
      </h3>
      <div className="mt-10 w-full">
        {experience.toReversed().map((exp) => (
          <div
            key={exp.id}
            className="grid md:grid-cols-3 align-top md:gap-20 py-10 border-b border-gray-300 g_exp opacity-1"
          >
            <div className="uppercase tracking-widest text-gray-400 text-sm flex flex-col gap-1">
              <span>{exp.years}</span>
              <span className="text-xs"> {exp.location}</span>
            </div>
            <div className="text-gray-500 text-sm col-span-2 mt-2 md:mt-0">
              <h3 className="text-base uppercase">{exp.company}</h3>
              <p className="uppercase">{exp.role}</p>
              <div className="text-xs text-gray-400 normal-case flex flex-wrap gap-1 font-thin mt-1">
                {exp.techs?.length > 0 && <span>TECH STACK:</span>}

                {exp.techs?.map((tech, i) => (
                  <span key={i}>
                    {tech} {exp.techs.length - 1 !== i && '•'}
                  </span>
                ))}
              </div>

              <p className="mt-3 font-thin">{exp.description}</p>
              <ul className=" list-disc list-inside mt-2 font-thin">
                {exp.responsibilities?.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
              {exp.projects.length > 0 && (
                <button
                  className="mt-4 uppercase font-semibold group"
                  onClick={() => handleOpenModel(exp.projects)}
                >
                  <span>Projects</span>
                  <span className="block max-w-0 group-hover:max-w-[50%] transition-all duration-500 h-0.5 bg-gray-900" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
