import React from 'react';

const TechStack = () => {
  return (
    <div className="border border-gray-300 p-0.5 rounded-3xl">
      <div className="bg-gray-200 p-3 rounded-[1.4rem]">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-bold">My Tech stack</h2>
          <div className="flex flex-col gap-1 overflow-hidden">
            <div className="bg-white p-2 rounded-md">NextJs</div>
            <div className="bg-white p-2 rounded-md">React</div>
            <div className="bg-white p-2 rounded-md">NextJs</div>
            <div className="bg-white p-2 rounded-md">React</div>
            <div className="bg-white p-2 rounded-md">NextJs</div>
            <div className="bg-white p-2 rounded-md">React</div>
          </div>
          <div className="flex flex-col gap-1 overflow-hidden">
            <div className="bg-white p-2 rounded-md">NextJs</div>
            <div className="bg-white p-2 rounded-md">React</div>
            <div className="bg-white p-2 rounded-md">NextJs</div>
            <div className="bg-white p-2 rounded-md">React</div>
            <div className="bg-white p-2 rounded-md">NextJs</div>
            <div className="bg-white p-2 rounded-md">React</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
