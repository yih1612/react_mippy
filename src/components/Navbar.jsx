import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsShop } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { login, logout, onUserStateChange } from "../api/firebase";
import User from "./User";
import Button from "./ui/Button";

export default function Header() {
  const [user, setUser] = useState();
  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  return (
    <header className="flex justify-between border-b border-gray-300 p-2 pb-2 mb-2">
      <Link to="/" className="flex items-center text-4xl text-brand ">
        <BsShop />
        <div className=" ml-1">Mippy</div>
      </Link>
      <nav className=" flex items-center gap-4 font-medium">
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
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
