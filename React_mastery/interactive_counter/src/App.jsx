import React, { useState } from "react";
import Counter from "./components/Counter";
import StepInput from "./components/StepInput";
import CounterControl from "./components/CounterControl";

const App = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => {
    setCount((prev) => Math.min(prev + step, 100));
  };

  const handleDecrement = () => {
    setCount((prev) => Math.max(prev - step, 0));
  };

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  const handleReset = () => {
    setCount(0);
  };

  const isIncrementDisabled = count >= 100;
  const isdecrementDisabled = count < 1;

  return (
    <div>
      <StepInput step={step} onStepChange={handleStepChange} />
      <Counter value={count} />
      <CounterControl
        increment={handleIncrement}
        decrement={handleDecrement}
        reset={handleReset}
        incrementDisabled={isIncrementDisabled}
        decrementDisabled={isdecrementDisabled}
      />
    </div>
  );
};

export default App;
