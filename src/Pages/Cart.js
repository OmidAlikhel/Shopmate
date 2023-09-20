import React from "react";
import { CartCard } from "../Components/CartCard";
import { useTitle } from "../hooks/useTitle";

export const Cart = ({ title }) => {
  const cartItems = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 149,
      image: "/assets/images/1001.png",
    },
    {
      id: 2,
      name: "boAt Rockerz 450",
      price: 49,
      image: "/assets/images/1002.png",
    },
  ];

  useTitle(`${title}`);
  return (
    <main>
      <h2 className="my-12 mx-auto font-bold text-center text-2xl">
        Cart Items :2
      </h2>
      <section className="max-w-7xl mx-auto"></section>
      {cartItems.map((cartItem) => (
        <CartCard key={cartItem.id} cartItem={cartItem} />
      ))}
    </main>
  );
};
