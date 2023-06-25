import { React, useState } from "react";

import { Link, useLocation } from "react-router-dom";
import Darks from "./Darks";



const Navbar = () => {

  let location = useLocation();


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="container-fluid nav_bg" >
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="flex items-center justify-between p-4 bg-white">
              {/* Logo */}
              <div className="  font-bold text-xl text-purple-800" >sherTec</div>

              {/* Navigation Links */}
              <ul className="hidden md:flex space-x-4  ">
                <li>
                  <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
                </li>
                <li>
                  <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/about">About</Link>
                </li>
                <li>
                  <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/services">Services</Link>
                </li>
                <li>
                  <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/contact">Contact</Link>
                </li>
                <li>
                  <Link><Darks /></Link>
                </li>
              </ul>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden  "
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>

              {/* Mobile Menu */}
              <div className={`md:hidden bg-white ${isMenuOpen ? '' : 'hidden'}`}>
                {/* Mobile Navigation Links */}
                <ul className="flex flex-col space-y-4 p-4 ">
                  <li>
                    <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
                  </li>
                  <li>
                    <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/about">About</Link>
                  </li>
                  <li>
                    <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/services">Services</Link>
                  </li>
                  <li>
                    <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link><Darks /></Link>
                  </li>
                </ul>
              </div>
            </nav>


          </div>
        </div>


      </div>

    </>

  )
}
export default Navbar;