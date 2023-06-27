import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  product,
  product: { id, image, title, category, price },
}) {
  const navigate = useNavigate();
  return (
    <li
      className="rounded-lg shadow-lg overflow-hidden cursor-pointer  transition-all hover:scale-105 ease-in"
      onClick={() => {
        navigate(`/products/${id}`, {
          state: { product },
        });
      }}
    >
      <img className="w-full" src={image} alt={title} />
      <div className="flex justify-between mt-2 px-2">
        <h3 className="truncate">{title}</h3>
        <p>{`₩${price}`}</p>
      </div>
      <p className="mb-2 px-2 text-gray-600">{category}</p>
    </li>
  );
}
