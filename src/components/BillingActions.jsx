import React from "react";

export default function BillingActions() {
  return (
    <div className="billing-actions" aria-label="Billing actions">
      <button type="button" className="action-button action-button--cancel">
        Cancel
      </button>
      <button type="button" className="action-button action-button--secondary">
        Save Details
      </button>
    </div>
  );
}
