import React from "react";

export default function CreateCampaignButton() {
  return (
    <button type="button" className="header-chip header-chip--campaign">
      <PlusIcon />
      <span>Create Campaign</span>
    </button>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 5.5v13M5.5 12h13"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
