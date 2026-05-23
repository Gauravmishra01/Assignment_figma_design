import React from "react";

export default function SummaryCard() {
  return (
    <section className="card summary-card">
      <h2 id="summary-title">Order Summary</h2>

      <div className="plan-panel">
        <div>
          <p className="plan-price">
            ₹4,999<span>/month</span>
          </p>
          <p className="plan-note">Includes 5,000 credits/mo.</p>
        </div>
        <div className="plan-meta">
          <span className="meta-label">SELECTED PLAN</span>
          <strong>Startup</strong>
        </div>
      </div>

      <button type="button" className="upgrade-button">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle
            cx="12"
            cy="12"
            r="9"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M12 10.5v5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="12" cy="7.8" r="1" fill="currentColor" />
        </svg>
        <span>Upgrade to Growth Plan</span>
      </button>
    </section>
  );
}
