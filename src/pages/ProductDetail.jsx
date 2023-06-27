import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import { useAuthContext } from "../context/AuthContext";
import { addOrUpdateToCart } from "../api/firebase";

export default function ProductDetail() {
  const { uid } = useAuthContext();
  const {
    state: {
      product: { id, title, category, description, image, price, options },
    },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateToCart(uid, product);
  };
  return (
    <>
      <p className="mx-12 mt-4 text-gray-600 font-semibold ">{category}</p>
      <section className="flex flex-col md:flex-row p-4 gap-7">
        <img className="w-full px-4 basis-7/12" src={image} alt={title} />
        <div className="w-full basis-5/12 flex flex-col">
          <h2 className="py-2 text-3xl font-bold">{title}</h2>
          <h3 className="py-2 border-b-2  border-gray-300 text-2xl font-semibold">{`₩${price}`}</h3>
          <p className="py-4 text-lg">{description}</p>
          <div className="flex items-center">
            <label className="text-brand font-bold" htmlFor="select">
              옵션:{" "}
            </label>
            <select
              id="select"
              className="p-2 m-4 flex-1 border-2 border-gray-300 outline-none"
              onChange={handleSelect}
              value={selected}
            >
              {options &&
                options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
            </select>
          </div>
          <Button text={"장바구니에 추가"} onClick={handleClick} />
        </div>
      </section>
    </>
  );
}
