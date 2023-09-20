import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const [hidden, setHidden] = useState(true);
  const activeClass =
    "text-base block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";

  const inActiveClass =
    "text-base block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  return (
    <div className="">
      <header className="bg-white border-b-2 max-w-7xl mx-auto h-18 ">
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mb-1 mx-auto p-4">
            <Link to="/" className="flex items-center">
              <img src={Logo} className="h-8 mr-3" alt=" Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                ShopMate
              </span>
            </Link>
            <div
              className="flex md:order-2 "
              onClick={() => setHidden(!hidden)}
            >
              <Link to="/cart" type="button" className="text-gray-800">
                Cart : 2
              </Link>
              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`${
                hidden ? "hidden" : ""
              } items-center justify-between  w-full md:flex md:w-auto md:order-1 md:my-1 `}
              id="navbar-cta"
            >
              <ul className="flex flex-col font-medium p-4 md:cursor-pointer  md:p-0 my-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? activeClass : inActiveClass
                    }
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                      isActive ? activeClass : inActiveClass
                    }
                  >
                    Cart
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
