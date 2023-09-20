import React from "react";
import { Link } from "react-router-dom";

export const CartCard = ({ cartItem }) => {
  const { name, price, image } = cartItem;
  return (
    <div>
      <div className="flex justify-between items-center my-8 max-w-7xl max-h-32 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
        <Link to={`/`}>
          <img
            className="rounded-t-lg p-3 max-w-sm max-h-28"
            src={image}
            alt="headphone"
          />
        </Link>
        <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-700 dark:text-white  ">
          {name}
        </h5>
        <span class="ml-3 mb-4 text-lg font-bold text-gray-600 dark:text-white">
          ${price}
        </span>
        <Link
          to="#"
          class=" text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-4 py-2 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Remove
        </Link>
      </div>
    </div>
  );
};
