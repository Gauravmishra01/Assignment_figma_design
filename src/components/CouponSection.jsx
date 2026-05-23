import React from "react";
import CouponCard from "./CouponCard";
import CouponInput from "./CouponInput";
import WalletBalance from "./WalletBalance";

export default function CouponSection() {
  return (
    <div className="summary-section summary-section--coupon">
      <WalletBalance />

      <details className="coupon-details" open>
        <summary>
          <TagIcon />
          <span>Apply Coupon</span>
          <ChevronDownIcon />
        </summary>

        <CouponInput />

        <div className="coupon-list">
          <CouponCard
            code="WELCOME20"
            description="20% off on your first month"
            selected
          />
          <CouponCard code="ANNUAL50" description="50% off on annual plans" />
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
          <div>
            <span>Tax (18% GST)</span>
            <strong>₹2,159.28</strong>
          </div>
        </div>
      </details>
    </div>
  );
}

function TagIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4.5 10.8 10.8 4.5H20.2v9.4L13 21.1 4.5 12.6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
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
  );
}
