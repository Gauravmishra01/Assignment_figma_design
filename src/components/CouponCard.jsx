import React from "react";

export default function CouponCard({ code, description, selected = false }) {
  return (
    <button
      type="button"
      className={`coupon-card ${selected ? "coupon-card--selected" : ""}`}
      aria-pressed={selected}
    >
      <span className="coupon-card__copy">
        <strong>{code}</strong>
        <span>{description}</span>
      </span>
      <span className={`coupon-card__radio ${selected ? "is-selected" : ""}`} />
    </button>
  );
}
