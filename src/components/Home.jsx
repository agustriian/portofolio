import React from 'react';
import profileImg from '../assets/profil.jpg';

function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4 text-center relative">
      <div className="relative mb-6">
        {/* Lingkaran Kuning di Belakang */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-yellow-500 w-56 h-56 rounded-full -z-10"></div>
        </div>
        {/* Foto Profil */}
        <img 
          src={profileImg} 
          alt="Profile" 
          className="w-70 h-70 object-cover rounded-full shadow-lg border-6 border-white" 
        />
      </div>
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Agus Trianto</h1>
      <p className="text-lg text-gray-400 mb-6">a passionate full stack developer, with a specialization in frontend</p>
      <a href="/projects" className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-full hover:bg-yellow-600 transition">
        View My Work
      </a>
    </section>
  );
}

export default Home;
