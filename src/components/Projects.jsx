import React from 'react';

function Projects() {
  const projects = [
    { title: 'Portfolio Website', description: 'Using React and Tailwind CSS', link: 'https://agustrianto-portofolio.vercel.app' },
    { title: 'Web Videobelajar', description: 'Using React and Tailwind CSS', link: '#' },
    { title: 'E-Commerce Website', description: 'Using html, php, java', link: '#' },
{ title: 'Todo App', description: 'Using Tailwind CSS, Java', link: 'https://agustrianto-todo.vercel.app' }
  ];

  return (
    <section className="min-h-screen bg-gray-800 text-white p-4 text-center">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <div key={project.title} className="bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a href={project.link} className="text-yellow-500 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
