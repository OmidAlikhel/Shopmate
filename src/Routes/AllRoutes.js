import { Routes, Route } from "react-router-dom";
import { Home, Cart } from "../Pages";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home title="Home" />}></Route>
        <Route path="/cart" element={<Cart title="Cart" />}></Route>
      </Routes>
    </div>
  );
};
