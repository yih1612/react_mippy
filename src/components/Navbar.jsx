import React from "react";
import { Link } from "react-router-dom";
import { BsShop, BsCart3 } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";
import User from "./User";
import Button from "./ui/Button";
import { useAuthContext } from "../context/AuthContext";

export default function Header() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className="flex justify-between border-b border-gray-300 p-2 pb-2">
      <Link to="/" className="flex items-center text-4xl text-brand ">
        <BsShop />
        <div className=" ml-1">Mippy</div>
      </Link>
      <nav className=" flex items-center gap-4 font-medium">
        <Link to="/products">Products</Link>
        {user && (
          <Link to="/carts">
            <BsCart3 className="text-3xl " />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to="/products/new" className="text-2xl">
            <HiOutlinePencilAlt />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text={"login"} onClick={login} />}
        {user && <Button text={"logout"} onClick={logout} />}
      </nav>
    </header>
  );
}
