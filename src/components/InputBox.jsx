export default function InputBox({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p id="user-input">
          <label id="user-input">
            초기 투자액($)
            <input
              type="number"
              value={userInput.initialInvestment}
              onChange={(e) => onChange("initialInvestment", e.target.value)}
              required
            />
          </label>
        </p>
        <p id="user-input">
          <label id="user-input">
            연간 투자량($)
            <input
              type="number"
              value={userInput.annualInvestment}
              onChange={(e) => onChange("annualInvestment", e.target.value)}
              required
            />
          </label>
        </p>
      </div>
      <div className="input-group">
        <p id="user-input">
          <label id="user-input">
            예상 기대 수익($)
            <input
              type="number"
              value={userInput.expectedReturn}
              onChange={(e) => onChange("expectedReturn", e.target.value)}
              required
            />
          </label>
        </p>
        <p id="user-input">
          <label id="user-input">
            투자 기간
            <input
              type="number"
              value={userInput.duration}
              onChange={(e) => onChange("duration", e.target.value)}
              required
            />
          </label>
        </p>
      </div>
    </section>
  );
}
