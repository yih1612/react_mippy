import React from "react";
import { BsCart3 } from "react-icons/bs";
import { getCart } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery(["cart"], () => getCart(uid));
  return (
    <div className="relative">
      <BsCart3 className="text-3xl" />
      {products && (
        <p className="absolute -top-1 -right-2 w-5 h-5 bg-brand rounded-full text-sm text-center text-white font-semibold ">
          {products.length}
        </p>
      )}
    </div>
  );
}
