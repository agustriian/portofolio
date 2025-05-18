import React from 'react';

function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Tailwind CSS', 'Node.js', 'Express', 'C++', 'Phyton'];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4 text-center">
      <h2 className="text-4xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map(skill => (
          <span key={skill} className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
