import React from "react";

export default function Button({ text, onClick, disabled }) {
  return (
    <button
      className="bg-brand py-1 px-2 text-white rounded-sm hover:brightness-110"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
