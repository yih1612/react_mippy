import React from "react";
import { Link } from "react-router-dom";
import { BsShop } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { login } from "../api/firebase";

export default function Header() {
  return (
    <header className="flex justify-between border-b border-gray-300 p-2 pb-2 mb-2">
      <Link to="/" className="flex items-center text-4xl text-brand ">
        <BsShop />
        <div className=" ml-1">Mippy</div>
      </Link>
      <nav className=" flex items-center gap-4 font-medium">
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/products/new" className="text-2xl">
          <HiOutlinePencilAlt />
        </Link>
        <button onClick={login}>Login</button>
      </nav>
    </header>
  );
}
