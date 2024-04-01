import { useState } from "react";

export default function InputBox() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 7,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p id="user-input">
          <label id="user-input">
            초기 투자액($)
            <input
              type="number"
              value={userInput.initialInvestment}
              onChange={(e) =>
                handleChange("initialInvestment", e.target.value)
              }
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
              onChange={(e) => handleChange("annualInvestment", e.target.value)}
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
              onChange={(e) => handleChange("expectedReturn", e.target.value)}
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
              onChange={(e) => handleChange("duration", e.target.value)}
              required
            />
          </label>
        </p>
      </div>
    </section>
  );
}
