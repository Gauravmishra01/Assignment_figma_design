import React from "react";

export default function MenuButton() {
  return (
    <button
      type="button"
      className="header-icon-button header-menu"
      aria-label="Open menu"
    >
      <MenuIcon />
    </button>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 8h12M6 12h12M6 16h12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  );
}
