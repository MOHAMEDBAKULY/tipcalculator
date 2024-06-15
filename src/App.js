import { useState } from "react";

export default function App() {
  return (
    <div className="background">
      <Calculator />
    </div>
  );
}

function Calculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillHeader />
      <BillAmount bill={bill} onSetBill={setBill} />
      <TipRating percentage={percentage1} onSelect={setPercentage1}>
        How do you rate our services: Person 1
      </TipRating>
      <TipRating percentage={percentage2} onSelect={setPercentage2}>
        How do you rate our servuces: Person 2
      </TipRating>

      {bill > 0 && (
        <>
          <TotalAmount bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillHeader() {
  return (
    <div className="header">
      <img src="./images/bill.avif" alt="Spliting the bill" />
      <p className="desc">Tip Calculator</p>
    </div>
  );
}

function BillAmount({ bill, onSetBill }) {
  return (
    <div className="amount-paid">
      <p className="amount-text">Bill amount</p>
      <input
        type="text"
        placeholder="Enter bill amount"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function TipRating({ children, percentage, onSelect }) {
  return (
    <div className="tip-rating">
      <p className="tip-text">{children}</p>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Good service 😀 (0%)</option>
        <option value="5">Average service 🙂 (5%)</option>
        <option value="10">Excellent service 😋 (10%)</option>
        <option value="20">World Class service 😍 (20%)</option>
      </select>
    </div>
  );
}

function TotalAmount({ bill, tip }) {
  return (
    <div className="total-bill">
      <h5>Your total cost will be: </h5>
      <p>
        Amount paid <b> KES{bill + tip}</b> Bill amount <b>KES{bill} </b>
      </p>
      <p>
        Tip amount <b> KES{tip} </b> Tip per person <b> KES{tip / 2} </b>
      </p>
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <div className="btn">
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
