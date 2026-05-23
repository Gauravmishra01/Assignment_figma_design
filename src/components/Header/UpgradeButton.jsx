import React from "react";

export default function UpgradeButton() {
  return (
    <button type="button" className="header-chip header-chip--upgrade">
      <UpgradeIcon />
      <span>Upgrade</span>
    </button>
  );
}

function UpgradeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 4.3 17 8.9 12 18.9 7 8.9 12 4.3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinejoin="round"
      />
      <path
        d="M12 4.3 12 18.9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path
        d="M8.3 6.6 6.7 5M15.7 6.6 17.3 5M7.8 11 5.8 11.9M16.2 11 18.2 11.9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinecap="round"
      />
      <path
        d="M9.1 8.7 12 12.1 14.9 8.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
