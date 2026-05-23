import React from "react";

export default function CouponInput() {
  return (
    <div className="coupon-input-row">
      <input
        type="text"
        placeholder="Enter coupon code"
        aria-label="Coupon code"
      />
      <button type="button" className="small-link-button coupon-input-apply">
        Apply
      </button>
    </div>
  );
}
