import React from "react";

export default function BillingForm({ fields }) {
  return (
    <form className="billing-form">
      {fields.map((field) => (
        <label
          key={field.label}
          className={`field ${field.select ? "field--select" : ""}`}
        >
          <span className="field-label">
            {field.label}
            {field.optional ? (
              <span className="field-optional">(Optional)</span>
            ) : null}
          </span>
          <span className="field-control">
            <input
              type="text"
              placeholder={field.placeholder}
              aria-label={field.label}
            />
            {field.select ? <ChevronDownIcon /> : null}
          </span>
        </label>
      ))}
    </form>
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
