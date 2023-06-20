import React, { useState } from "react";
import Button from "../components/ui/Button";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    console.log(e);
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      {file && <img src={URL.createObjectURL(file)} alit="local file" />}
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          value={product.title ?? ""}
          placeholder="제품명"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={product.price ?? ""}
          placeholder="가격"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          value={product.category ?? ""}
          placeholder="카테고리"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={product.description ?? ""}
          placeholder="제품 설명"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="options"
          value={product.options ?? ""}
          placeholder="옵션들(콤마(,)로 구분)"
          required
          onChange={handleChange}
        />
        <Button text={"제품 등록하기"} />
      </form>
      {/* <span className="flex justify-center m-4 text-2xl font-semibold">
        새로운 제품 등록
      </span>
      <form className="flex flex-col gap-2">
        <Input type="file" accept="image/*" name="file" required onCha/>
        <Input type="text" placeholder="제품명" />
        <Input type="number" placeholder="가격" />
        <Input type="text" placeholder="카테고리" />
        <Input type="text" placeholder="제품설명" />
        <Input type="text" placeholder="옵션들(콤마(,)로 구분)" />
        <button className="p-3 bg-brand text-white text-lg">
          제품 등록하기
        </button>
      </form> */}
    </section>
  );
}
