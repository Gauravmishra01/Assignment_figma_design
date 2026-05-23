import "./App.css";
import BillingActions from "./components/BillingActions";
import BillingForm from "./components/BillingForm";
import CouponSection from "./components/CouponSection";
import Header from "./components/Header/Header";
import OrderSummary from "./components/OrderSummary";
import PaymentFooter from "./components/PaymentFooter";

const billingFields = [
  { label: "Company Name", placeholder: "abhyaan" },
  { label: "Email", placeholder: "abhyaan.pandey@eastbreak.com" },
  { label: "GST Number", placeholder: "GST Number", optional: true },
  { label: "PAN Number", placeholder: "PAN Number", optional: true },
  { label: "Premise/House no.", placeholder: "Premise/House no." },
  { label: "Street", placeholder: "Street" },
  { label: "State", placeholder: "Select state", select: true },
  { label: "City", placeholder: "Select city", select: true },
  { label: "Country", placeholder: "India" },
  { label: "Pin Code", placeholder: "Pin Code" },
];

function App() {
  return (
    <main className="app-shell">
      <div className="app-frame">
        <Header />

        <div className="page-topbar">
          <button
            type="button"
            className="back-link"
            aria-label="Back to plans"
          >
            <ChevronLeftIcon />
            <span>Back to plans</span>
          </button>
        </div>

        <div className="content-grid">
          <section
            className="card billing-card"
            aria-labelledby="billing-title"
          >
            <header className="section-header">
              <h1 id="billing-title">Review your details</h1>
              <h2>Billing Information</h2>
            </header>

            <BillingForm fields={billingFields} />

            <BillingActions />
          </section>

          <aside className="summary-column" aria-labelledby="summary-title">
            <section className="card summary-card">
              <OrderSummary />
              <CouponSection />
              <PaymentFooter />
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}

function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14.5 6 9 12l5.5 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
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

export default App;
