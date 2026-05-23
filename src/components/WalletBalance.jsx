import React from "react";

export default function WalletBalance() {
  return (
    <div className="wallet-balance-row">
      <div className="wallet-balance-copy">
        <WalletIcon />
        <div>
          <strong>Wallet Balance</strong>
          <p>₹500.00 available</p>
        </div>
      </div>
      <button type="button" className="wallet-apply-button">
        Apply
      </button>
    </div>
  );
}

function WalletIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4.5 7.5h12.6a2.4 2.4 0 0 1 2.4 2.4v6.6a2.4 2.4 0 0 1-2.4 2.4H7a4 4 0 0 1-4-4V9.9a2.4 2.4 0 0 1 1.5-2.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 11.5h3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="17.8" cy="14.8" r="0.9" fill="currentColor" />
    </svg>
  );
}
