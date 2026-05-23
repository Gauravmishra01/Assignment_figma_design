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
        d="M12 4.2 17.2 9.1 12 19 6.8 9.1 12 4.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 4.2V19"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path
        d="M8.5 6.7 6.9 5.1M15.5 6.7l1.6-1.6M7.7 11.1 5.8 12M16.3 11.1l2 .9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M9.3 8.6 12 11.6 14.7 8.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
