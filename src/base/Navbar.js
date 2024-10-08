import React, { useState } from 'react';
import Login from '../auth/Login';

const Navbar = () => {
  // Simulate user authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Add any additional logout logic here
  };

  return (
    <div>
      <div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li><a>Menu</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">MealDash</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Menu</a></li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* Conditional Rendering */}
          {isLoggedIn ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://via.placeholder.com/150" alt="Profile" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li><a>Profile</a></li>
                <li><a onClick={handleLogout}>Logout</a></li>
              </ul>
            </div>
          ) : (
            <>
              <button
                className="btn"
                onClick={() => document.getElementById('my_modal_3').showModal()}
              >
                Login
              </button>
              <Login />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
