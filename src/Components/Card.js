import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ product }) => {
  const { name, price, image } = product;
  return (
    <div className="flex justify-start flex-wrap">
      <div className="my-8 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
        <Link to={`/`}>
          <img className="rounded-t-lg p-3" src={image} alt={image} />
        </Link>
        <div className="p-5">
          <Link to={`/movie/$`}>
            <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </Link>
        </div>
        <div class="flex items-center justify-between">
          <span class="ml-3 mb-4 text-lg font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <Link
            to="#"
            class="mr-3 mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
};
