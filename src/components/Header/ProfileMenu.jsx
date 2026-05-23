import React from "react";

export default function ProfileMenu() {
  return (
    <button
      type="button"
      className="profile-menu"
      aria-label="User profile menu"
    >
      <span className="profile-menu__avatar" aria-hidden="true">
        <UserIcon />
      </span>
      <span className="profile-menu__menu" aria-hidden="true">
        <MenuIcon />
      </span>
    </button>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="9" r="3.1" fill="currentColor" opacity="0.95" />
      <path
        d="M6.5 18c1.3-2.4 3.6-3.7 5.5-3.7S16.7 15.6 18 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
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
