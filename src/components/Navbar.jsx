import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-900 text-white sticky top-0 z-50">
      <div className="text-2xl font-bold">Agus<span className="text-yellow-500">.</span></div>
      <ul className="flex gap-6">
        <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
        <li><Link to="/about" className="hover:text-yellow-500">About</Link></li>
        <li><Link to="/skills" className="hover:text-yellow-500">Skills</Link></li>
        <li><Link to="/projects" className="hover:text-yellow-500">Projects</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-500">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
