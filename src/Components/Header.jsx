import React from "react";
import image from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-2 md:px-4">
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-56 space-y-2"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/allapps">Apps</Link>
            </li>

            <li>
              <a>Installation</a>
            </li>

            <li>
              <Link
                to="https://github.com/jahid3741"
                target="_blank"
                className="
                  flex items-center justify-center gap-2
                  bg-gradient-to-r from-[#632EE3] to-[#9F62F2]
                  text-white px-4 py-2 rounded-lg w-full
                "
              >
                <FaGithub className="text-lg" />
                <span>Contribute</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Logo → Home */}
        <Link to="/" className="flex items-center gap-2">
          <img className="h-10 w-10" src={image} alt="logo" />
          <span className="text-xl font-semibold">HERO.IO</span>
        </Link>
      </div>

      {/* ---------- CENTER (Desktop only) ---------- */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allapps">Apps</Link>
          </li>
          <li>
            <a>Installation</a>
          </li>
        </ul>
      </div>

      {/* ---------- RIGHT ---------- */}
      <div className="navbar-end hidden md:flex">
        <Link
          to="https://github.com/jahid3741"
          target="_blank"
          className="
            inline-flex items-center gap-2
            bg-gradient-to-r from-[#632EE3] to-[#9F62F2]
            text-white px-5 py-2 rounded-lg
            transition-transform duration-300 hover:scale-105
          "
        >
          <FaGithub className="text-xl" />
          <span className="font-medium">Contribute</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
