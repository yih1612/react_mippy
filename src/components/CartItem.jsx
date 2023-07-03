import React from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import useCart from "../hooks/useCart";

const ICON_CLASS =
  "mx-1 transition-all cursor-pointer hover:text-point hover:scale-105";

export default function CartItem({
  product,
  product: { id, image, title, option, quantity, price },
}) {
  const { addOrUpdateItem, removeItem } = useCart();

  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };
  const handlePlus = () =>
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });

  const handleDelete = () => removeItem.mutate(id);

  return (
    <li className="flex justify-between my-2 items-center">
      <img className="w-24 md:w-48 rounded-lg" src={image} alt={title} />
      <div className="flex-1 flex justify-between ml-4">
        <div className="basis-3/5">
          <p className="text-lg">{title}</p>
          <p className="text-xl font-bold text-point">{option}</p>
          <p>₩{price}</p>
        </div>
        <div className="flex items-center text-2xl">
          <AiOutlineMinusSquare className={ICON_CLASS} onClick={handleMinus} />
          <span>{quantity}</span>
          <AiOutlinePlusSquare className={ICON_CLASS} onClick={handlePlus} />
          <RiDeleteBin5Fill className={ICON_CLASS} onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}
