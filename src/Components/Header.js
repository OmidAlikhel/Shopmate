import React from "react";
import Logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <header className="bg-white border-b max-w-7xl mx-auto h-20">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center">
              <img className="h-12 w-auto" src={Logo} alt="" />
              <p className="text-xl  ml-2">Shoping Cart</p>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            ></button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            <NavLink to="/" className="text-lg   leading-6 text-gray-900">
              Home
            </NavLink>
            <NavLink to="/cart" className="text-lg  leading-6 text-gray-900">
              Cart
            </NavLink>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/cart"
              className="text-lg font-semibold leading-6 text-gray-900"
            >
              Cart:2 <span aria-hidden="true"></span>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};
