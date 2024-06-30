
import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Results from "./components/Results/Results.jsx";
import UserInput from "./components/UserInput/UserInput.jsx";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 120,
    expectedReturn: 60,
    duration: 10,
  });

  const inputIsValid= userInput.duration >=1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInputs) => {
      return {
        ...prevInputs,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
    <Header/>
    <UserInput handleChange={handleChange} userInput={userInput}/>

    {!inputIsValid && <p className="center">Please enter a valid duration (at least 1 year)</p>}

    {inputIsValid && <Results input={userInput}/>}
    </>
  )
}

export default App
