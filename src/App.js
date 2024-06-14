import { useState } from "react";

export default function App() {
  return (
    <div className="background">
      <BillHeader />
      <BillAmount />
      <TipRating />
      <TotalAmount />
      <Reset />
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

function BillAmount() {
  return (
    <div className="amount-paid">
      <p className="amount-text">Bill amount</p>
      <input type="text" />
    </div>
  );
}

function TipRating() {
  const [rating, setRating] = useState(1);

  return (
    <div className="tip-rating">
      <RatingChild>
        <p className="tip-text">How much do you like our service</p>
        <select value={rating} onRating={setRating}>
          <option value="good">Good service 😀</option>
          <option value="average">Average service 🙂</option>
          <option value="excellent">Excellent service 😋</option>
          <option value="worldclass">World Class service 😍</option>
        </select>
      </RatingChild>
    </div>
  );
}

function RatingChild({ rating, children, onRating }) {
  return (
    <div>
      <p className="tip-text">{children}</p>
      <select value={rating} onClick={(e) => onRating(e.target.value)}>
        <option value="good">{children}</option>
        <option value="average">{children}</option>
        <option value="excellent">{children}</option>
        <option value="worldclass">{children}</option>
      </select>
    </div>
  );
}

function TotalAmount() {
  return (
    <div className="total-bill">
      <h5>Your total cost will be: </h5>
      <p>
        Amount paid <b>$500</b> Bill amount <b>$400</b>{" "}
      </p>
      <p>
        Tip amount <b>$100</b> Tip per person <b>$50</b>
      </p>
    </div>
  );
}

function Reset() {
  return (
    <div className="btn">
      <button>Reset</button>
    </div>
  );
}
