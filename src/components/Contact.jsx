import React from 'react';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';
import profileImg from '../assets/profil.jpg';

function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6 text-white">
      <h2 className="text-4xl font-bold mb-8">
        Contact <span className="text-green-400">Me</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10 bg-gray-800 p-8 rounded-2xl shadow-lg">
        <img 
          src={profileImg} 
          alt="Profile" 
          className="w-50 h-50 rounded-full border-4 border-green-400 object-cover"
        />

        <div className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg shadow">
            <Mail className="text-green-400" size={24} />
            <a href="mailto:agustriantoitb@gmail.com" className="text-gray-300 hover:text-green-400 transition">
              agustriantoitb@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg shadow">
            <Linkedin className="text-green-400" size={24} />
            <a href="https://www.linkedin.com/in/agus-trianto-354b472aa/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition">
              linkedin.com/in/agus-trianto-354b472aa/
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg shadow">
            <Github className="text-green-400" size={24} />
            <a href="https://github.com/agustriian" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition">
              github.com/agustriian
            </a>
          </div>

          {/* Resume */}
          <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg shadow">
            <FileText className="text-green-400" size={24} />
            <a href="https://docs.google.com/document/d/1HFJhkFmiHhQE19VfAEdaRyqj4KZGmyaU/edit?usp=sharing&ouid=115347487588584919459&rtpof=true&sd=true" download className="text-gray-300 hover:text-green-400 transition">
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
