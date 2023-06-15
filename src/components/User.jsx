import React from "react";

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className="flex items-center">
      <img
        className="w-10 h-10 rounded-full"
        src={photoURL}
        alt={displayName}
      />
      <span className="hidden md:block ml-2">{displayName}</span>
    </div>
  );
}
