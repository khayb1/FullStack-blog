import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="bg-black/50  p-4">
        <nav className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold">MyApp</div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">
                Arts
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300">
                Science
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-300">
                Technology
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-300">
                Cinema
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-300">
                Design
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-300">
                Food
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-gray-300 font-thin"
              >
                Kelvin
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-red-500 font-bold hover:text-gray-300"
              >
                Logout
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-gray-300 border-blue-500 hover:bg-blue-500 p-2 rounded-lg border-2 px-2"
              >
                Write
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
