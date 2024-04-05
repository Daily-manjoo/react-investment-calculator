import { useState } from "react";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 7,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, //문자열 값을 숫자열로 반환할 것을 강제
      };
    });
  }

  return (
    <>
      <Header />
      <InputBox userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">기간을 1년 이상으로 입력해주세요.</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
