import React from "react";

export default function SearchBar() {
  return (
    <label className="header-search" aria-label="Search influencers">
      <input
        type="search"
        placeholder="Find influencers to collaborate with"
        aria-label="Find influencers to collaborate with"
      />
      <SearchIcon />
    </label>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="11"
        cy="11"
        r="6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m16 16 4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
