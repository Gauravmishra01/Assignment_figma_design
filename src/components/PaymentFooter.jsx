import React from "react";

export default function PaymentFooter() {
  return (
    <div className="payment-footer">
      <div className="total-due">
        <span>Total due today</span>
        <strong>16,078.64</strong>
      </div>

      <button type="button" className="action-button action-button--primary">
        Proceed to Payment
      </button>
    </div>
  );
}
