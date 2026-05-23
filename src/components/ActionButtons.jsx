import React from "react";

export default function ActionButtons() {
  return (
    <div className="action-row">
      <button type="button" className="action-button action-button--cancel">
        Cancel
      </button>
      <button type="button" className="action-button action-button--secondary">
        Save Details
      </button>
      <button type="button" className="action-button action-button--primary">
        Proceed to Payment
      </button>
    </div>
  );
}
