export default function App() {
  return (
    <div className="background">
      <BillHeader />
      <BillAmount />
      <TipRating />
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
      <input type="number" />
    </div>
  );
}

function TipRating() {
  return (
    <div className="tip-rating">
      <p className="tip-text">How much do you like our service</p>
      <select>
        <option>Good service 😀</option>
        <option>Average service 🙂</option>
        <option>Excellent service 😋</option>
        <option>World Class service 😍</option>
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
