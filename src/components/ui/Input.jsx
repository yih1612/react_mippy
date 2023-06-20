import React from "react";

export default function Input({ type, placeholder }) {
  return (
    <input
      className=" p-3 border"
      type={type}
      placeholder={placeholder}
      onChange={(e) => {
        console.log(e);
      }}
    />
  );
}
