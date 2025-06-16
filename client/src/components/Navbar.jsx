import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center backdrop-blur-sm bg-black/50  p-4 sticky top-0 left-0">
        <Link to="/" className="text-white text-2xl font-bold">
          MyApp
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/?cat=arts" className="text-white hover:text-gray-300">
              Arts
            </Link>
          </li>
          <li>
            <Link to="/?cat=science" className="text-white hover:text-gray-300">
              Science
            </Link>
          </li>
          <li>
            <Link
              to="/?cat=technology"
              className="text-white hover:text-gray-300"
            >
              Technology
            </Link>
          </li>
          <li>
            <Link to="/?cat=cinema" className="text-white hover:text-gray-300">
              Cinema
            </Link>
          </li>
          <li>
            <Link to="/?cat=design" className="text-white hover:text-gray-300">
              Design
            </Link>
          </li>
          <li>
            <Link to="/?cat=food" className="text-white hover:text-gray-300">
              Food
            </Link>
          </li>
          <span className="text-white hover:text-gray-300 font-thin">
            Kelvin
          </span>

          <span className="text-white hover:text-gray-300 font-thin">
            {" "}
            Logout
          </span>
          <li>
            <Link
              to="/write"
              className="text-white hover:text-black  border-blue-500 hover:bg-blue-500 p-2 rounded-lg border-2 px-2 transform duration-300 "
            >
              Write
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
