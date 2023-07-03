import React from "react";
import { BsCart3 } from "react-icons/bs";
import useCart from "../hooks/useCart";

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();

  return (
    <div className="relative">
      <BsCart3 className="text-2xl" />
      {products && (
        <p className="absolute -top-1 -right-2 w-5 h-5 bg-brand rounded-full text-sm text-center text-white font-semibold ">
          {products.length}
        </p>
      )}
    </div>
  );
}
