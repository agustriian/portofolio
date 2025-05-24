import React from 'react';
import portoImg from '../assets/porto.png';
import todoImg from '../assets/todo.png';
import videobelajarImg from '../assets/videobelajar.png'; // pastikan file ini ada

function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Using React and Tailwind CSS',
      link: 'https://agustrianto-portofolio.vercel.app',
      img: portoImg
    },
    {
      title: 'Web Videobelajar',
      description: 'Using React and Tailwind CSS',
      link: 'https://portovideobelajar0.vercel.app',
      img: videobelajarImg
    },
    {
      title: 'Todo App',
      description: 'Using Tailwind CSS, Java',
      link: 'https://agustrianto-todo.vercel.app',
      img: todoImg
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white p-8 text-center">
      <h2 className="text-4xl font-bold mb-10">My Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-yellow-400/50 transition duration-300 transform hover:-translate-y-1">
            <img src={project.img} alt={project.title} className="rounded-lg mb-4 w-full h-48 object-cover" />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
