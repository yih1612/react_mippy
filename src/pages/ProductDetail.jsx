import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";

export default function ProductDetail() {
  const {
    state: { product },
  } = useLocation();
  const { title, category, description, image, price, options } = product;
  return (
    <section className="mx-10">
      <span className="block p-4 text-gray-400 ">{category}</span>
      <div className=" flex gap-7">
        <img className="w-7/12" src={image} alt={title} />
        <div className="w-5/12">
          <h2 className="mb-3 text-3xl font-bold">{title}</h2>
          <h3 className="pb-3 border-b-2  border-gray-300 text-2xl font-semibold">{`₩${price}`}</h3>
          <p className="my-3">{description}</p>
          <div className="my-5">
            <label htmlFor="size-select">옵션: </label>
            <select id="size-select">
              {options.map((item) => (
                <option>{item}</option>
              ))}
            </select>
          </div>
          <Button text={"장바구니에 추가"} />
        </div>
      </div>
    </section>
  );
}
