import React from "react";

export default function UserAvatar() {
  return (
    <button
      type="button"
      className="header-icon-button header-avatar"
      aria-label="User profile"
    >
      <UserIcon />
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
