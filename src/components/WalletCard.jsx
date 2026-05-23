import React from "react";

export default function WalletCard() {
  return (
    <section className="card wallet-card">
      <div className="wallet-row">
        <div className="wallet-title">
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
          <div>
            <strong>Wallet Balance</strong>
            <p>₹500.00 available</p>
          </div>
        </div>
        <button type="button" className="small-link-button">
          Apply
        </button>
      </div>

      <details className="coupon-details" open>
        <summary>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M4.5 10.8 10.8 4.5H20.2v9.4L13 21.1 4.5 12.6Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <circle cx="14.8" cy="8.1" r="1.2" fill="currentColor" />
          </svg>
          <span>Apply Coupon</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="m7 10 5 5 5-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </summary>

        <div className="coupon-input-row">
          <input
            type="text"
            placeholder="Enter coupon code"
            aria-label="Coupon code"
          />
          <button type="button" className="small-link-button">
            Apply
          </button>
        </div>

        <div className="selected-coupon">
          <div className="selected-coupon__left">
            <div className="coupon-pill">WELCOM30</div>
            <p>Flat 30% off on annual billing</p>
          </div>
          <div className="selected-coupon__radio" aria-hidden="true" />
        </div>

        <div className="summary-lines">
          <div>
            <span>Subtotal</span>
            <strong>₹14,999.00</strong>
          </div>
          <div>
            <span>Discount</span>
            <strong>-₹1,079.64</strong>
          </div>
        </div>

        <div className="total-due">
          <span>Total Due Today</span>
          <strong>16,078.64</strong>
        </div>
      </details>
    </section>
  );
}
